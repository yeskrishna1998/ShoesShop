const SITE_URL = "https://zcoated.com";
const DEFAULT_IMAGE = `${SITE_URL}/zcoated.png`;
const BRAND_NAME = "Z Coated";
const BUSINESS_PHONE = "+91 8368385923";
const BUSINESS_EMAIL = "support.zcoated@gmail.com";
const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Gurgaon",
  addressRegion: "Haryana",
  postalCode: "122003",
  addressCountry: "IN",
};

const BRAND_ALIASES = [
  "Z Coated",
  "Zcoated",
  "ZCoated",
  "zcoated",
  "z coated",
  "Zcoted",
  "Z coated shoes",
];

const buildCanonicalUrl = (pathname) =>
  pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;

const baseOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: BRAND_NAME,
  alternateName: BRAND_ALIASES,
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  image: DEFAULT_IMAGE,
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
};

const baseLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: BRAND_NAME,
  alternateName: BRAND_ALIASES,
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  image: DEFAULT_IMAGE,
  description:
    "Z Coated is a premium shoe cleaning, repair, restoration and protection service with free pickup and delivery in Gurgaon.",
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  address: BUSINESS_ADDRESS,
  areaServed: ["Gurgaon", "Gurugram"],
  sameAs: [SITE_URL],
};

const defaultSeo = {
  title: "Z Coated | Premium Shoe Cleaning, Repair & Restoration in Gurgaon",
  description:
    "Official Z Coated website for premium shoe cleaning, sneaker restoration, shoe repair and protection coating with free pickup and delivery in Gurgaon.",
  keywords: [
    ...BRAND_ALIASES,
    "shoe cleaning Gurgaon",
    "shoe repair Gurgaon",
    "sneaker cleaning Gurgaon",
    "sneaker restoration Gurgaon",
    "premium shoe care Gurgaon",
    "shoe laundry Gurgaon",
  ],
  image: DEFAULT_IMAGE,
  robots: "index, follow, max-image-preview:large",
  googlebot: "index, follow, max-image-preview:large",
  schema: [
    baseOrganizationSchema,
    baseLocalBusinessSchema,
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: BRAND_NAME,
      alternateName: BRAND_ALIASES,
      url: SITE_URL,
    },
  ],
};

export const pageSeo = {
  "/": {
    ...defaultSeo,
    schema: [
      ...defaultSeo.schema,
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Shoe cleaning and restoration",
        provider: {
          "@id": `${SITE_URL}/#localbusiness`,
        },
        areaServed: ["Gurgaon", "Gurugram"],
      },
    ],
  },
  "/about": {
    title: "About Z Coated | Premium Shoe Care Brand in Gurgaon",
    description:
      "Learn about Z Coated, the Gurgaon-based premium shoe care brand for sneaker cleaning, restoration, repair and protection services.",
    keywords: [...BRAND_ALIASES, "about Z Coated", "shoe care brand Gurgaon"],
    image: DEFAULT_IMAGE,
    robots: defaultSeo.robots,
    googlebot: defaultSeo.googlebot,
  },
  "/services": {
    title: "Shoe Cleaning & Repair Services | Z Coated Gurgaon",
    description:
      "Explore Z Coated services including shoe cleaning, sneaker restoration, sole repair, polishing and protection coating in Gurgaon.",
    keywords: [
      ...BRAND_ALIASES,
      "shoe cleaning services Gurgaon",
      "shoe repair services Gurgaon",
      "bag cleaning Gurgaon",
      "sneaker restoration Gurgaon",
    ],
    image: DEFAULT_IMAGE,
    robots: defaultSeo.robots,
    googlebot: defaultSeo.googlebot,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Z Coated services",
        itemListElement: [
          "Shoe Cleaning",
          "Shoe Repair",
          "Bag Cleaning and Repair",
          "Sneaker Restoration",
        ].map((name, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
        })),
      },
    ],
  },
  "/pricing": {
    title: "Pricing | Z Coated Shoe Cleaning & Repair",
    description:
      "Check Z Coated pricing for shoe cleaning, sneaker restoration, repair and premium shoe care services.",
    keywords: [
      ...BRAND_ALIASES,
      "shoe cleaning price Gurgaon",
      "shoe repair price Gurgaon",
      "sneaker cleaning price Gurgaon",
    ],
    image: DEFAULT_IMAGE,
    robots: defaultSeo.robots,
    googlebot: defaultSeo.googlebot,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Z Coated pricing",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Basic Cleaning",
            price: "349",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name: "Deep Cleaning",
            price: "449",
            priceCurrency: "INR",
          },
          {
            "@type": "Offer",
            name: "Premium Sneaker Spa",
            price: "699",
            priceCurrency: "INR",
          },
        ],
      },
    ],
  },
  "/contact": {
    title: "Contact Z Coated | Shoe Care Pickup in Gurgaon",
    description:
      "Contact Z Coated for shoe cleaning, restoration, repair and pickup support in Gurgaon.",
    keywords: [...BRAND_ALIASES, "contact Z Coated", "shoe pickup Gurgaon"],
    image: DEFAULT_IMAGE,
    robots: defaultSeo.robots,
    googlebot: defaultSeo.googlebot,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Z Coated",
        url: `${SITE_URL}/contact`,
      },
    ],
  },
  "/booking": {
    title: "Book Shoe Pickup | Z Coated Gurgaon",
    description:
      "Book a free pickup with Z Coated for shoe cleaning, sneaker restoration and repair services in Gurgaon.",
    keywords: [
      ...BRAND_ALIASES,
      "book shoe cleaning Gurgaon",
      "shoe pickup booking Gurgaon",
      "shoe service booking Gurgaon",
    ],
    image: DEFAULT_IMAGE,
    robots: defaultSeo.robots,
    googlebot: defaultSeo.googlebot,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Shoe pickup booking",
        provider: {
          "@id": `${SITE_URL}/#localbusiness`,
        },
        areaServed: ["Gurgaon", "Gurugram"],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE_URL}/booking`,
        },
      },
    ],
  },
  "/login": {
    title: "Login | Z Coated",
    description: "Login to your Z Coated account.",
    keywords: [...BRAND_ALIASES, "Z Coated login"],
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow, noarchive",
    googlebot: "noindex, nofollow, noarchive",
  },
  "/register": {
    title: "Create Account | Z Coated",
    description: "Create your Z Coated account for bookings and order updates.",
    keywords: [...BRAND_ALIASES, "Z Coated register"],
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow, noarchive",
    googlebot: "noindex, nofollow, noarchive",
  },
  "/forgot-password": {
    title: "Forgot Password | Z Coated",
    description: "Reset your Z Coated account password.",
    keywords: [...BRAND_ALIASES, "Z Coated forgot password"],
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow, noarchive",
    googlebot: "noindex, nofollow, noarchive",
  },
  "/admin-login": {
    title: "Admin Login | Z Coated",
    description: "Admin login for Z Coated.",
    keywords: ["Z Coated admin login"],
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow, noarchive",
    googlebot: "noindex, nofollow, noarchive",
  },
};

export const getSeoForPath = (pathname) => {
  if (pathname.startsWith("/admin")) {
    return {
      title: "Admin Dashboard | Z Coated",
      description: "Private administration area for Z Coated.",
      keywords: ["Z Coated admin"],
      image: DEFAULT_IMAGE,
      robots: "noindex, nofollow, noarchive",
      googlebot: "noindex, nofollow, noarchive",
    };
  }

  return (
    pageSeo[pathname] || {
      title: "Page Not Found | Z Coated",
      description: "The page you requested could not be found.",
      keywords: [...BRAND_ALIASES, "page not found"],
      image: DEFAULT_IMAGE,
      robots: "noindex, nofollow",
      googlebot: "noindex, nofollow",
    }
  );
};

export {
  BRAND_NAME,
  DEFAULT_IMAGE,
  SITE_URL,
  buildCanonicalUrl,
  defaultSeo,
};
