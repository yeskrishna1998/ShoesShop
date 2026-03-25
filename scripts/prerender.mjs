import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  buildCanonicalUrl,
  defaultSeo,
  getSeoForPath,
} from "../src/seo/pageSeo.js";

const routes = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/contact",
  "/booking",
  "/login",
  "/register",
  "/forgot-password",
  "/admin-login",
];

const distDir = path.resolve("dist");
const ssrDir = path.resolve(".ssr");
const serverEntryUrl = pathToFileURL(path.join(ssrDir, "entry-server.js")).href;
const { render } = await import(serverEntryUrl);
const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const replaceTag = (html, pattern, replacement) =>
  pattern.test(html) ? html.replace(pattern, replacement) : `${html}${replacement}`;

const replaceMetaName = (html, name, content) =>
  replaceTag(
    html,
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]*>`, "i"),
    `<meta name="${name}" content="${escapeHtml(content)}" />`
  );

const replaceMetaProperty = (html, property, content) =>
  replaceTag(
    html,
    new RegExp(`<meta[^>]+property=["']${property}["'][^>]*>`, "i"),
    `<meta property="${property}" content="${escapeHtml(content)}" />`
  );

const replaceLink = (html, rel, href, extra = "") =>
  replaceTag(
    html,
    new RegExp(`<link[^>]+rel=["']${rel}["'][^>]*>`, "i"),
    `<link rel="${rel}" href="${escapeHtml(href)}"${extra} />`
  );

const buildJsonLd = (seo) =>
  JSON.stringify(seo.schema?.length ? seo.schema : defaultSeo.schema).replaceAll(
    "<",
    "\\u003c"
  );

for (const route of routes) {
  const appHtml = render(route);
  const seo = {
    ...defaultSeo,
    ...getSeoForPath(route),
  };
  const canonicalUrl = buildCanonicalUrl(route);

  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = replaceLink(html, "canonical", canonicalUrl);
  html = replaceTag(
    html,
    /<link[^>]+rel=["']alternate["'][^>]+hreflang=["']en-IN["'][^>]*>/i,
    `<link rel="alternate" hreflang="en-IN" href="${escapeHtml(canonicalUrl)}" />`
  );
  html = replaceTag(
    html,
    /<link[^>]+rel=["']alternate["'][^>]+hreflang=["']x-default["'][^>]*>/i,
    `<link rel="alternate" hreflang="x-default" href="${escapeHtml(canonicalUrl)}" />`
  );

  html = replaceMetaName(html, "description", seo.description);
  html = replaceMetaName(html, "keywords", seo.keywords.join(", "));
  html = replaceMetaName(html, "robots", seo.robots);
  html = replaceMetaName(html, "googlebot", seo.googlebot);
  html = replaceMetaName(html, "twitter:card", "summary_large_image");
  html = replaceMetaName(html, "twitter:title", seo.title);
  html = replaceMetaName(html, "twitter:description", seo.description);
  html = replaceMetaName(html, "twitter:image", seo.image);

  html = replaceMetaProperty(html, "og:type", "website");
  html = replaceMetaProperty(html, "og:url", canonicalUrl);
  html = replaceMetaProperty(html, "og:title", seo.title);
  html = replaceMetaProperty(html, "og:description", seo.description);
  html = replaceMetaProperty(html, "og:image", seo.image);
  html = replaceMetaProperty(html, "og:site_name", "Zcoated");

  html = replaceTag(
    html,
    /<script id=["']seo-json-ld["'] type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i,
    `<script id="seo-json-ld" type="application/ld+json">${buildJsonLd(seo)}</script>`
  );

  const outputPath =
    route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route.slice(1), "index.html");

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html, "utf8");
}

await fs.rm(ssrDir, { recursive: true, force: true });
