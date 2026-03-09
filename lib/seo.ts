import type { Metadata } from "next";

import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/constants";
import { siteContent } from "@/content/site";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: MetaInput): Metadata {
  const fullTitle = `${title} | ${siteContent.name}`;
  const url = new URL(path, SITE_URL).toString();

  return {
    title: fullTitle,
    description,
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteContent.name,
      images: [{ url: DEFAULT_OG_IMAGE }],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE]
    },
    alternates: {
      canonical: url
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
