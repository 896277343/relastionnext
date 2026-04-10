import { Metadata } from "next";
import { siteConfig } from "@/site.config";
import ProductContent from "./product-content";

const product = {
  name: "SF6 Room Monitor",
  model: "SF6-RM-5000",
  description: "24/7 continuous monitoring system for SF6 gas leakage, oxygen concentration, and environmental conditions. Features real-time alerts and remote monitoring capabilities for maximum safety.",
  shortDescription: "Advanced SF6 room monitoring system with 24/7 detection, oxygen monitoring, and real-time alerts.",
};

export const metadata: Metadata = {
  title: `${product.name} | SF6 Gas Room Monitoring System | ${siteConfig.site_name}`,
  description: product.description,
  keywords: [
    "SF6 room monitor",
    "SF6 gas monitoring",
    "oxygen concentration monitor",
    "gas leak detection system",
    "environmental monitoring",
    "24/7 gas detection",
    product.model,
    siteConfig.brand.legalName
  ],
  alternates: {
    canonical: `${siteConfig.site_domain}/products/sf6-room-monitor`,
  },
  openGraph: {
    title: `${product.name} - 24/7 SF6 Room Monitoring`,
    description: product.description,
    type: "website",
    url: `${siteConfig.site_domain}/products/sf6-room-monitor`,
    images: [
      {
        url: `${siteConfig.site_domain}/images/products/sf6-room-monitor-og.jpg`,
        width: 1200,
        height: 630,
        alt: product.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${product.name} | SF6 Room Monitoring`,
    description: product.shortDescription,
    images: [`${siteConfig.site_domain}/images/products/sf6-room-monitor-og.jpg`],
  },
};

export default function ProductPage() {
  return <ProductContent />;
}
