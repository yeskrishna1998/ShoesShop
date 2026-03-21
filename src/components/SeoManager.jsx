import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://zcoated.com";
const DEFAULT_IMAGE = `${SITE_URL}/zcoated.png`;
const BRAND_ALIASES = [
  "Z Coated",
  "Zcoated",
  "ZCoated",
  "zcoated",
  "z coated",
  "Zcoted",
  "Z coated shoes",
];

const pageSeo = {
  "/": {
    title: "Z Coated | Premium Shoe Cleaning, Repair & Restoration in Gurgaon",
    description:
      "Official Z Coated website for premium shoe cleaning, sneaker restoration, shoe repair and protection coating with free pickup and delivery in Gurgaon.",
    keywords: [
      ...BRAND_ALIASES,
      "shoe cleaning Gurgaon",
      "shoe repair Gurgaon",
      "sneaker cleaning",
      "sneaker restoration",
      "premium shoe care",
      "shoe laundry Gurgaon",
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Z Coated",
        alternateName: BRAND_ALIASES,
        url: SITE_URL,
        logo: DEFAULT_IMAGE,
        image: DEFAULT_IMAGE,
        email: "shoesrepair@gmail.com",
        telephone: "+91 6393072928",
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "Z Coated",
        alternateName: BRAND_ALIASES,
        url: SITE_URL,
        logo: DEFAULT_IMAGE,
        image: DEFAULT_IMAGE,
        description:
          "Z Coated is a premium shoe cleaning, repair, restoration and protection service with free pickup and delivery in Gurgaon.",
        email: "shoesrepair@gmail.com",
        telephone: "+91 6393072928",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gurgaon",
          addressRegion: "Haryana",
          addressCountry: "IN",
        },
        areaServed: ["Gurgaon", "Gurugram"],
        sameAs: [SITE_URL],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Z Coated",
        alternateName: BRAND_ALIASES,
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  },
  "/about": {
    title: "About Z Coated | Premium Shoe Care Brand in Gurgaon",
    description:
      "Learn about Z Coated, the Gurgaon-based premium shoe care brand for sneaker cleaning, restoration, repair and protection services.",
    keywords: [...BRAND_ALIASES, "about Z Coated", "shoe care brand Gurgaon"],
  },
  "/services": {
    title: "Shoe Cleaning & Repair Services | Z Coated Gurgaon",
    description:
      "Explore Z Coated services including shoe cleaning, sneaker restoration, sole repair, polishing and protection coating in Gurgaon.",
    keywords: [
      ...BRAND_ALIASES,
      "shoe cleaning services",
      "shoe repair services",
      "sneaker restoration Gurgaon",
    ],
  },
  "/pricing": {
    title: "Pricing | Z Coated Shoe Cleaning & Repair",
    description:
      "Check Z Coated pricing for shoe cleaning, sneaker restoration, repair and premium shoe care services.",
    keywords: [...BRAND_ALIASES, "shoe cleaning price", "shoe repair price"],
  },
  "/contact": {
    title: "Contact Z Coated | Shoe Care Pickup in Gurgaon",
    description:
      "Contact Z Coated for shoe cleaning, restoration, repair and pickup support in Gurgaon.",
    keywords: [...BRAND_ALIASES, "contact Z Coated", "shoe pickup Gurgaon"],
  },
  "/booking": {
    title: "Book Shoe Pickup | Z Coated Gurgaon",
    description:
      "Book a free pickup with Z Coated for shoe cleaning, sneaker restoration and repair services in Gurgaon.",
    keywords: [...BRAND_ALIASES, "book shoe cleaning", "shoe pickup booking"],
  },
};

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
    const seo = pageSeo[location.pathname] || pageSeo["/"];
    const canonicalUrl =
      location.pathname === "/" ? SITE_URL : `${SITE_URL}${location.pathname}`;

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
      content: "index, follow, max-image-preview:large",
    });
    ensureMetaTag('meta[name="googlebot"]', {
      name: "googlebot",
      content: "index, follow, max-image-preview:large",
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
      content: DEFAULT_IMAGE,
    });
    ensureMetaTag('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Z Coated",
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
      content: DEFAULT_IMAGE,
    });
    ensureLinkTag('link[rel="canonical"]', {
      rel: "canonical",
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
