import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "website-development-design",
    title: "Website Development & Design",
    quoteKey: "website",
    seoTitle: "Website Development and Design Services",
    seoDescription:
      "Website development and design services for businesses that need a credible, responsive, and conversion-ready online presence.",
    heroDescription:
      "Website development and design for businesses that need a cleaner digital presence, clearer communication, and a stronger first impression online.",
    summary: "Websites built to present your business clearly and make your services easier to trust.",
    detail:
      "From planning to launch, the goal is a functional, responsive, and credible website that helps the business look more established online.",
    tags: ["Business Websites", "Responsive Build", "Launch Support"],
    deliverables: ["Page planning", "Responsive front-end build", "Content structure", "Launch support"],
    idealFor: ["New business websites", "Redesigns", "Service-based companies", "Organizations improving credibility"],
    outcomes: ["Stronger brand presentation", "Clearer service communication", "Better mobile experience", "More professional online presence"]
  },
  {
    slug: "domain-registration",
    title: "Domain Registration",
    quoteKey: "domain-hosting",
    seoTitle: "Domain Registration and Domain Setup Support",
    seoDescription:
      "Domain registration, domain transfer, DNS, and SSL setup support for businesses that need a proper online foundation.",
    heroDescription:
      "Domain registration and setup support for businesses that want a clean, professional online identity from the start.",
    summary: "Domain setup and transfer support that gives your business a cleaner online identity.",
    detail:
      "Support includes registration, transfer, DNS, and SSL-related setup so your website starts with the right foundation.",
    tags: ["Domain Setup", "DNS", "SSL"],
    deliverables: ["Domain registration help", "Transfer assistance", "DNS configuration", "SSL coordination"],
    idealFor: ["New business launches", "Brand/domain changes", "Businesses fixing old setups", "Owners needing technical help"],
    outcomes: ["Cleaner domain ownership", "Proper DNS setup", "Safer website access", "Better technical foundation"]
  },
  {
    slug: "web-hosting",
    title: "Web Hosting",
    quoteKey: "domain-hosting",
    seoTitle: "Web Hosting Setup and Hosting Support",
    seoDescription:
      "Web hosting setup and support for businesses that need stable website access, email setup, and manageable hosting.",
    heroDescription:
      "Web hosting support for businesses that want their website, email, and hosting environment set up properly and kept manageable.",
    summary: "Hosting guidance and setup so your website stays accessible, manageable, and ready to grow.",
    detail:
      "The focus is on practical hosting support that helps businesses keep their website, company email, and domain services running smoothly.",
    tags: ["Hosting Setup", "cPanel", "Site Access"],
    deliverables: ["Hosting setup", "Account access support", "Email configuration", "Technical cleanup"],
    idealFor: ["Businesses launching a site", "Owners managing hosting confusion", "Existing sites needing cleanup", "Teams needing dependable setup"],
    outcomes: ["Better uptime readiness", "Clean hosting access", "Smoother email/domain management", "Less technical friction"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    quoteKey: "mobile-app",
    seoTitle: "Mobile App Development for Android and iOS",
    seoDescription:
      "Mobile app development for Android and iOS for businesses that need service access, customer convenience, or digital product delivery on mobile.",
    heroDescription:
      "Mobile app development for businesses that want to offer services, systems, or customer experiences directly on Android and iOS devices.",
    summary: "Android and iOS app development for businesses that need mobile access to services, systems, or customer experiences.",
    detail:
      "Mobile app work is suited for businesses that want to extend services beyond the website and create more direct user access on phones and tablets.",
    tags: ["Android", "iOS", "App Build"],
    deliverables: ["Feature planning", "App interface build", "Cross-platform support", "Launch preparation"],
    idealFor: ["Service businesses", "Internal business systems", "Customer-facing apps", "Brands expanding beyond web"],
    outcomes: ["More direct mobile access", "Better customer convenience", "Broader digital reach", "Stronger mobile presence"]
  },
  {
    slug: "seo-support",
    title: "Search Engine Optimization",
    quoteKey: "seo",
    seoTitle: "SEO Support for Business Websites",
    seoDescription:
      "SEO support for business websites that need better visibility, cleaner structure, and stronger keyword alignment.",
    heroDescription:
      "SEO support for businesses that want to improve discoverability, strengthen page structure, and make their website easier to find in search.",
    summary: "SEO support that improves visibility and helps the right people find your business online.",
    detail:
      "The work focuses on search-ready structure, better keyword alignment, and cleaner technical foundations for discoverability.",
    tags: ["SEO Ready", "Keywords", "Visibility"],
    deliverables: ["On-page SEO review", "Keyword alignment", "Metadata optimization", "Technical SEO cleanup"],
    idealFor: ["Existing business websites", "New websites preparing for launch", "Businesses relying on search traffic", "Owners improving discoverability"],
    outcomes: ["Stronger search foundations", "Clearer page targeting", "Improved keyword relevance", "Better visibility readiness"]
  },
  {
    slug: "visual-design",
    title: "Branding / Visual Design",
    quoteKey: "branding-video",
    seoTitle: "Branding and Visual Design Services",
    seoDescription:
      "Branding and visual design services for businesses that need logos, banners, graphics, and more consistent brand presentation.",
    heroDescription:
      "Branding and visual design support for businesses that want to look more professional, more cohesive, and easier to trust across digital touchpoints.",
    summary: "Visual assets that help your brand look more professional and consistent across digital touchpoints.",
    detail:
      "Logos, graphics, banners, and supporting visuals are shaped to communicate your offer more clearly and strengthen brand credibility.",
    tags: ["Graphics", "Banners", "Logo Design"],
    deliverables: ["Logo support", "Brand graphics", "Digital banners", "Visual consistency assets"],
    idealFor: ["Businesses refreshing branding", "New brands", "Campaign support", "Service brands improving presentation"],
    outcomes: ["More consistent branding", "Stronger visual trust", "Cleaner promotional assets", "Better customer-facing presentation"]
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    quoteKey: "branding-video",
    seoTitle: "Video Editing for Business and Promotional Content",
    seoDescription:
      "Video editing support for brands and businesses that need promotional videos, content cleanup, or clearer visual storytelling.",
    heroDescription:
      "Video editing support for businesses that want cleaner promotional content, clearer storytelling, and more polished digital presentation.",
    summary: "Promotional and marketing-oriented video support for brands that need cleaner visual storytelling.",
    detail:
      "Video work is aimed at helping businesses present offers, stories, and brand messaging in a more concise and engaging format.",
    tags: ["Promo Content", "Brand Story", "Editing"],
    deliverables: ["Promotional edits", "Social-ready cuts", "Message refinement", "Visual cleanup"],
    idealFor: ["Promotional campaigns", "Social content", "Brand storytelling", "Businesses needing cleaner presentation"],
    outcomes: ["More polished content", "Clearer messaging", "Stronger promotional output", "Better audience engagement"]
  },
  {
    slug: "website-support-maintenance",
    title: "Website Maintenance / Support",
    quoteKey: "maintenance",
    seoTitle: "Website Maintenance and Ongoing Support",
    seoDescription:
      "Website maintenance and support for businesses that need updates, fixes, performance improvements, and dependable post-launch help.",
    heroDescription:
      "Website maintenance and support for businesses that need dependable help after launch, from fixes and updates to practical improvements over time.",
    summary: "Ongoing support for redesigns, updates, bug fixes, and practical post-launch website needs.",
    detail:
      "This is suited for businesses that need regular upkeep, small adjustments, or dependable support after the initial launch.",
    tags: ["Updates", "Bug Fixes", "Post-Launch Care"],
    deliverables: ["Content updates", "Technical fixes", "Design improvements", "Ongoing support"],
    idealFor: ["Live business websites", "Post-launch support needs", "Teams without in-house web support", "Businesses needing reliable upkeep"],
    outcomes: ["Healthier website upkeep", "Faster issue resolution", "More consistent updates", "Less post-launch stress"]
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
