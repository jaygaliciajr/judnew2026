import type { SiteContent } from "@/types";

export const siteContent: SiteContent = {
  name: "judygaliciajr.com",
  tagline: "Your Web Service Partner",
  description:
    "Website development, mobile apps, design, and digital support for growing businesses in the Philippines, with practical execution for clients locally and abroad since 2012.",
  location: "Philippines",
  email: "hello@judygaliciajr.com",
  phone: "+63 995 429 6829",
  ctas: {
    primary: "Request a Quote",
    secondary: "View Projects"
  },
  navItems: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/process", label: "Process" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" }
  ]
};
