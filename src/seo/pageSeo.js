const SITE_URL = "https://zcoated.com";
const DEFAULT_IMAGE = `${SITE_URL}/zcoated.png`;
const BRAND_NAME = "Zcoated";
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
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE,
      contactType: "customer service",
      email: BUSINESS_EMAIL,
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
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
    "Zcoated is a premium shoe cleaning, repair, restoration and protection service with free pickup and delivery in Gurgaon.",
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  address: BUSINESS_ADDRESS,
  priceRange: "INR",
  areaServed: ["Gurgaon", "Gurugram"],
  openingHours: "Mo-Su 10:00-20:00",
  sameAs: [SITE_URL],
};

const defaultSeo = {
  title: "Zcoated | Premium Shoe Cleaning, Repair & Restoration in Gurgaon",
  description:
    "Official Zcoated website for premium shoe cleaning, sneaker restoration, shoe repair and protection coating with free pickup and delivery in Gurgaon.",
  keywords: [
    ...BRAND_ALIASES,
    "Zcoated Gurgaon",
    "Zcoated shoe care",
    "premium shoe care",
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
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
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
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Why choose Zcoated for premium shoe care in Gurgaon?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Zcoated offers premium shoe cleaning, sneaker restoration, repair support, and pickup and delivery for Gurgaon customers.",
            },
          },
          {
            "@type": "Question",
            name: "Does Zcoated provide sneaker cleaning in Gurgaon?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Zcoated provides sneaker cleaning, deep cleaning, stain reduction, and restoration support in Gurgaon.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book shoe pickup and delivery with Zcoated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Customers can contact Zcoated to arrange pickup and delivery for shoe cleaning and repair services in Gurgaon.",
            },
          },
        ],
      },
    ],
  },
  "/about": {
    title: "About Zcoated | Premium Shoe Care Brand in Gurgaon",
    description:
      "Learn about Zcoated, the Gurgaon-based premium shoe care brand for sneaker cleaning, restoration, repair and protection services.",
    keywords: [
      ...BRAND_ALIASES,
      "about Zcoated",
      "shoe care brand Gurgaon",
      "premium shoe care brand Gurgaon",
    ],
    image: DEFAULT_IMAGE,
    robots: defaultSeo.robots,
    googlebot: defaultSeo.googlebot,
  },
  "/services": {
    title: "Shoe Cleaning & Repair Services | Zcoated Gurgaon",
    description:
      "Explore Zcoated services including shoe cleaning, sneaker restoration, sole repair, polishing and protection coating in Gurgaon.",
    keywords: [
      ...BRAND_ALIASES,
      "shoe cleaning services Gurgaon",
      "shoe repair services Gurgaon",
      "bag cleaning Gurgaon",
      "sneaker restoration Gurgaon",
      "premium shoe cleaning Gurgaon",
    ],
    image: DEFAULT_IMAGE,
    robots: defaultSeo.robots,
    googlebot: defaultSeo.googlebot,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Zcoated services",
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
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Premium shoe cleaning and repair services",
        provider: {
          "@id": `${SITE_URL}/#localbusiness`,
        },
        areaServed: ["Gurgaon", "Gurugram"],
      },
    ],
  },
  "/pricing": {
    title: "Pricing | Zcoated Shoe Cleaning & Repair",
    description:
      "Check Zcoated pricing for shoe cleaning, sneaker restoration, repair and premium shoe care services.",
    keywords: [
      ...BRAND_ALIASES,
      "shoe cleaning price Gurgaon",
      "shoe repair price Gurgaon",
      "sneaker cleaning price Gurgaon",
      "premium shoe care price Gurgaon",
    ],
    image: DEFAULT_IMAGE,
    robots: defaultSeo.robots,
    googlebot: defaultSeo.googlebot,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Zcoated pricing",
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
    title: "Contact Zcoated | Shoe Care Pickup in Gurgaon",
    description:
      "Contact Zcoated for shoe cleaning, restoration, repair and pickup support in Gurgaon.",
    keywords: [
      ...BRAND_ALIASES,
      "contact Zcoated",
      "shoe pickup Gurgaon",
      "Zcoated phone number",
      "Zcoated Gurgaon contact",
    ],
    image: DEFAULT_IMAGE,
    robots: defaultSeo.robots,
    googlebot: defaultSeo.googlebot,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Zcoated",
        url: `${SITE_URL}/contact`,
      },
    ],
  },
  "/booking": {
    title: "Book Shoe Pickup | Zcoated Gurgaon",
    description:
      "Book a free pickup with Zcoated for shoe cleaning, sneaker restoration and repair services in Gurgaon.",
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
    title: "Login | Zcoated",
    description: "Login to your Zcoated account.",
    keywords: [...BRAND_ALIASES, "Zcoated login"],
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow, noarchive",
    googlebot: "noindex, nofollow, noarchive",
  },
  "/register": {
    title: "Create Account | Zcoated",
    description: "Create your Zcoated account for bookings and order updates.",
    keywords: [...BRAND_ALIASES, "Zcoated register"],
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow, noarchive",
    googlebot: "noindex, nofollow, noarchive",
  },
  "/forgot-password": {
    title: "Forgot Password | Zcoated",
    description: "Reset your Zcoated account password.",
    keywords: [...BRAND_ALIASES, "Zcoated forgot password"],
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow, noarchive",
    googlebot: "noindex, nofollow, noarchive",
  },
  "/admin-login": {
    title: "Admin Login | Zcoated",
    description: "Admin login for Zcoated.",
    keywords: ["Zcoated admin login"],
    image: DEFAULT_IMAGE,
    robots: "noindex, nofollow, noarchive",
    googlebot: "noindex, nofollow, noarchive",
  },
};

export const getSeoForPath = (pathname) => {
  if (pathname.startsWith("/admin")) {
    return {
      title: "Admin Dashboard | Zcoated",
      description: "Private administration area for Zcoated.",
      keywords: ["Zcoated admin"],
      image: DEFAULT_IMAGE,
      robots: "noindex, nofollow, noarchive",
      googlebot: "noindex, nofollow, noarchive",
    };
  }

  return (
    pageSeo[pathname] || {
      title: "Page Not Found | Zcoated",
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
