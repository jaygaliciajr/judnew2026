import type { MetadataRoute } from "next";

import { services } from "@/content/services";
import { SITE_URL } from "@/lib/constants";

const routes = ["/", "/about", "/services", "/portfolio", "/process", "/faq", "/contact", "/request-quote", "/calculator"];
const serviceRoutes = services.map((service) => `/services/${service.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
