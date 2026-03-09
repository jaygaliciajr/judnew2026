export type CalculatorCurrency = {
  code: string;
  label: string;
  locale: string;
  rateFromPhp: number;
};

export type CalculatorScope = {
  id: string;
  label: string;
  description: string;
  multiplier: number;
};

export type CalculatorAddon = {
  id: string;
  label: string;
  description: string;
  pricePhp: number;
};

export type CalculatorService = {
  slug: string;
  quoteKey: string;
  title: string;
  shortLabel: string;
  summary: string;
  baseRangePhp: [number, number];
  scopes: CalculatorScope[];
  addons: CalculatorAddon[];
};

export type CalculatorAdjustment = {
  id: string;
  label: string;
  description: string;
  multiplier: number;
};

export const calculatorCurrencies: CalculatorCurrency[] = [
  { code: "PHP", label: "Philippine Peso", locale: "en-PH", rateFromPhp: 1 },
  { code: "USD", label: "US Dollar", locale: "en-US", rateFromPhp: 0.018 },
  { code: "AUD", label: "Australian Dollar", locale: "en-AU", rateFromPhp: 0.028 },
  { code: "CAD", label: "Canadian Dollar", locale: "en-CA", rateFromPhp: 0.024 },
  { code: "SGD", label: "Singapore Dollar", locale: "en-SG", rateFromPhp: 0.024 },
  { code: "JPY", label: "Japanese Yen", locale: "ja-JP", rateFromPhp: 2.67 },
  { code: "ILS", label: "Israeli New Shekel", locale: "he-IL", rateFromPhp: 0.067 },
  { code: "MYR", label: "Malaysian Ringgit", locale: "ms-MY", rateFromPhp: 0.085 }
];

export const calculatorTimelineOptions: CalculatorAdjustment[] = [
  {
    id: "planned",
    label: "Planned pace",
    description: "Comfortable pace with room for coordination and review.",
    multiplier: 0
  },
  {
    id: "this-month",
    label: "This month",
    description: "A faster start with a tighter production schedule.",
    multiplier: 0.08
  },
  {
    id: "priority",
    label: "Priority schedule",
    description: "Higher attention and tighter delivery windows.",
    multiplier: 0.16
  }
];

export const calculatorSupportOptions: CalculatorAdjustment[] = [
  {
    id: "build-only",
    label: "Build only",
    description: "Project scope focused on the core deliverable.",
    multiplier: 0
  },
  {
    id: "launch-help",
    label: "Build + launch help",
    description: "Includes launch coordination, rollout, and final checks.",
    multiplier: 0.06
  },
  {
    id: "ongoing-support",
    label: "Build + ongoing support",
    description: "Adds post-launch refinements and support continuity.",
    multiplier: 0.12
  }
];

export const calculatorServices: CalculatorService[] = [
  {
    slug: "website-development-design",
    quoteKey: "website",
    title: "Website Development & Design",
    shortLabel: "Website",
    summary: "For business websites, redesigns, landing pages, and premium launch-ready builds.",
    baseRangePhp: [45000, 160000],
    scopes: [
      {
        id: "starter",
        label: "Starter presence",
        description: "Lean brochure-style site with a clear structure and credible presentation.",
        multiplier: 1
      },
      {
        id: "growth",
        label: "Growth-ready build",
        description: "More pages, stronger messaging structure, polished UI, and conversion focus.",
        multiplier: 1.55
      },
      {
        id: "premium",
        label: "Premium flagship site",
        description: "Larger custom website with more advanced structure, interactions, and business polish.",
        multiplier: 2.2
      }
    ],
    addons: [
      {
        id: "copy-structure",
        label: "Content structure help",
        description: "Page-by-page structure and conversion-aware content guidance.",
        pricePhp: 12000
      },
      {
        id: "booking-flow",
        label: "Inquiry or booking flow",
        description: "Custom lead flow, request form, or booking interaction.",
        pricePhp: 18000
      }
    ]
  },
  {
    slug: "domain-registration",
    quoteKey: "domain-hosting",
    title: "Domain Registration",
    shortLabel: "Domain",
    summary: "For domain setup, transfers, DNS fixes, SSL setup, and ownership cleanup.",
    baseRangePhp: [3500, 18000],
    scopes: [
      {
        id: "basic",
        label: "Basic setup",
        description: "Single domain registration or simple connection help.",
        multiplier: 1
      },
      {
        id: "transfer",
        label: "Transfer + cleanup",
        description: "Transfer coordination, DNS work, SSL, and setup checks.",
        multiplier: 1.45
      },
      {
        id: "business-rollout",
        label: "Business rollout",
        description: "Multi-part setup involving redirects, records, SSL, and launch coordination.",
        multiplier: 1.9
      }
    ],
    addons: [
      {
        id: "business-email",
        label: "Business email setup",
        description: "Professional mailbox setup tied to the domain.",
        pricePhp: 4000
      }
    ]
  },
  {
    slug: "web-hosting",
    quoteKey: "domain-hosting",
    title: "Web Hosting",
    shortLabel: "Hosting",
    summary: "For hosting setup, site migration, email setup, and practical technical support.",
    baseRangePhp: [5000, 26000],
    scopes: [
      {
        id: "single-site",
        label: "Single-site setup",
        description: "Hosting guidance and setup for one clean business site.",
        multiplier: 1
      },
      {
        id: "migration",
        label: "Migration + fixes",
        description: "Move an existing site, fix setup issues, and stabilize access.",
        multiplier: 1.5
      },
      {
        id: "managed",
        label: "Managed business setup",
        description: "Broader hosting, email, access, and launch coordination support.",
        multiplier: 2
      }
    ],
    addons: [
      {
        id: "speed-pass",
        label: "Performance pass",
        description: "Basic hosting-side cleanup for site speed and efficiency.",
        pricePhp: 6000
      }
    ]
  },
  {
    slug: "mobile-app-development",
    quoteKey: "mobile-app",
    title: "Mobile App Development",
    shortLabel: "Mobile App",
    summary: "For Android, iOS, or cross-platform mobile apps with business or customer-facing use cases.",
    baseRangePhp: [85000, 320000],
    scopes: [
      {
        id: "mvp",
        label: "Lean MVP",
        description: "Focused app with the core screens and a clear launch scope.",
        multiplier: 1
      },
      {
        id: "business-app",
        label: "Business app",
        description: "More screens, richer flow, and more polished customer experience.",
        multiplier: 1.6
      },
      {
        id: "platform-scale",
        label: "Platform-scale app",
        description: "Broader build with stronger UX depth, integrations, and rollout needs.",
        multiplier: 2.3
      }
    ],
    addons: [
      {
        id: "admin-panel",
        label: "Admin dashboard",
        description: "Light admin panel or internal control view for managing app data.",
        pricePhp: 30000
      },
      {
        id: "store-launch",
        label: "App store launch support",
        description: "Submission guidance, assets, and launch assistance.",
        pricePhp: 15000
      }
    ]
  },
  {
    slug: "seo-support",
    quoteKey: "seo",
    title: "Search Engine Optimization",
    shortLabel: "SEO",
    summary: "For search visibility, metadata, structure cleanup, and keyword alignment.",
    baseRangePhp: [12000, 60000],
    scopes: [
      {
        id: "foundation",
        label: "SEO foundation",
        description: "Metadata, structure, and basic search-readiness improvements.",
        multiplier: 1
      },
      {
        id: "growth",
        label: "SEO growth pass",
        description: "Broader page targeting, improvements, and content alignment.",
        multiplier: 1.55
      },
      {
        id: "campaign",
        label: "SEO campaign layer",
        description: "Wider support for multiple pages, targeting, and structured rollout.",
        multiplier: 2.1
      }
    ],
    addons: [
      {
        id: "keyword-map",
        label: "Keyword map",
        description: "Priority keyword map across service pages and search intent groups.",
        pricePhp: 8000
      }
    ]
  },
  {
    slug: "visual-design",
    quoteKey: "branding-video",
    title: "Branding / Visual Design",
    shortLabel: "Branding",
    summary: "For logo support, social visuals, banners, and cleaner brand presentation.",
    baseRangePhp: [10000, 55000],
    scopes: [
      {
        id: "brand-refresh",
        label: "Brand refresh",
        description: "Sharper logo support and a cleaner visual system.",
        multiplier: 1
      },
      {
        id: "campaign-pack",
        label: "Campaign pack",
        description: "Graphics set for launches, ads, banners, or promo content.",
        multiplier: 1.45
      },
      {
        id: "brand-system",
        label: "Brand system",
        description: "Broader set of assets with stronger consistency and direction.",
        multiplier: 1.9
      }
    ],
    addons: [
      {
        id: "social-kit",
        label: "Social kit",
        description: "Reusable social templates and branded post assets.",
        pricePhp: 9000
      }
    ]
  },
  {
    slug: "video-editing",
    quoteKey: "branding-video",
    title: "Video Editing",
    shortLabel: "Video",
    summary: "For promo edits, social content, brand storytelling, and cleaner video polish.",
    baseRangePhp: [8000, 40000],
    scopes: [
      {
        id: "short-form",
        label: "Short-form edits",
        description: "Lean video editing for reels, promos, or short campaign content.",
        multiplier: 1
      },
      {
        id: "campaign-cut",
        label: "Campaign cut",
        description: "Polished multi-scene edits with cleaner pacing and messaging.",
        multiplier: 1.45
      },
      {
        id: "brand-story",
        label: "Brand story package",
        description: "More substantial storytelling edit with stronger visual shaping.",
        multiplier: 1.9
      }
    ],
    addons: [
      {
        id: "caption-pack",
        label: "Caption + subtitle pack",
        description: "Subtitles and text overlays for stronger viewing clarity.",
        pricePhp: 5000
      }
    ]
  },
  {
    slug: "website-support-maintenance",
    quoteKey: "maintenance",
    title: "Website Maintenance / Support",
    shortLabel: "Maintenance",
    summary: "For fixes, updates, improvements, and dependable post-launch support.",
    baseRangePhp: [6000, 38000],
    scopes: [
      {
        id: "light-support",
        label: "Light support",
        description: "Basic fixes, updates, and practical maintenance tasks.",
        multiplier: 1
      },
      {
        id: "steady-support",
        label: "Steady support",
        description: "Regular updates and more involved improvement work.",
        multiplier: 1.45
      },
      {
        id: "priority-support",
        label: "Priority support",
        description: "More responsive maintenance with stronger continuity and care.",
        multiplier: 1.9
      }
    ],
    addons: [
      {
        id: "monthly-report",
        label: "Monthly support report",
        description: "Simple reporting and update visibility for ongoing support.",
        pricePhp: 4000
      }
    ]
  }
];
