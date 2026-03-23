import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  BRAND_NAME,
  DEFAULT_IMAGE,
  SITE_URL,
  buildCanonicalUrl,
  defaultSeo,
  getSeoForPath,
} from "../seo/pageSeo";

const ensureMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

const ensureLinkTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = {
      ...defaultSeo,
      ...getSeoForPath(location.pathname),
    };
    const canonicalUrl = buildCanonicalUrl(location.pathname);

    document.title = seo.title;

    ensureMetaTag('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });
    ensureMetaTag('meta[name="keywords"]', {
      name: "keywords",
      content: seo.keywords.join(", "),
    });
    ensureMetaTag('meta[name="robots"]', {
      name: "robots",
      content: seo.robots,
    });
    ensureMetaTag('meta[name="googlebot"]', {
      name: "googlebot",
      content: seo.googlebot,
    });
    ensureMetaTag('meta[name="author"]', {
      name: "author",
      content: BRAND_NAME,
    });
    ensureMetaTag('meta[name="application-name"]', {
      name: "application-name",
      content: BRAND_NAME,
    });
    ensureMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    ensureMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    ensureMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: seo.title,
    });
    ensureMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: seo.description,
    });
    ensureMetaTag('meta[property="og:image"]', {
      property: "og:image",
      content: seo.image || DEFAULT_IMAGE,
    });
    ensureMetaTag('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: BRAND_NAME,
    });
    ensureMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMetaTag('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: seo.title,
    });
    ensureMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: seo.description,
    });
    ensureMetaTag('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: seo.image || DEFAULT_IMAGE,
    });
    ensureLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });
    ensureLinkTag('link[rel="alternate"][hreflang="en-IN"]', {
      rel: "alternate",
      hreflang: "en-IN",
      href: canonicalUrl,
    });
    ensureLinkTag('link[rel="alternate"][hreflang="x-default"]', {
      rel: "alternate",
      hreflang: "x-default",
      href: canonicalUrl,
    });

    const existingScript = document.getElementById("seo-json-ld");
    if (existingScript) {
      existingScript.remove();
    }

    if (seo.schema?.length) {
      const script = document.createElement("script");
      script.id = "seo-json-ld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(seo.schema);
      document.head.appendChild(script);
    }
  }, [location.pathname]);

  return null;
};

export default SeoManager;
