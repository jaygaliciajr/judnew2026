import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BackToTop } from "@/components/ui/back-to-top";
import { siteContent } from "@/content/site";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/constants";
import { getProfessionalServiceSchema } from "@/lib/structured-data";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteContent.name} | Software Solutions, Websites, and Mobile Apps`,
    template: `%s | ${siteContent.name}`
  },
  description: siteContent.description,
  keywords: [
    "software solutions",
    "website development philippines",
    "mobile app development philippines",
    "web design philippines",
    "digital solutions",
    "seo services philippines",
    "website maintenance philippines",
    "android app development",
    "ios app development"
  ],
  icons: {
    icon: "/favicons/favicon-512.png",
    apple: "/favicons/favicon-512.png"
  },
  openGraph: {
    title: siteContent.name,
    description: siteContent.description,
    url: SITE_URL,
    siteName: siteContent.name,
    images: [{ url: DEFAULT_OG_IMAGE }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.name,
    description: siteContent.description,
    images: [DEFAULT_OG_IMAGE]
  },
  alternates: {
    canonical: SITE_URL
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var savedTheme = localStorage.getItem('theme');
                document.documentElement.dataset.theme = savedTheme === 'light' ? 'light' : 'dark';
              } catch (error) {
                document.documentElement.dataset.theme = 'dark';
              }
            })();
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getProfessionalServiceSchema()) }}
        />
        <div className="relative isolate min-h-screen overflow-x-clip">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
