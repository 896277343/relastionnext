import { Metadata } from "next";
import { siteConfig } from "@/site.config";
import ProductContent from "./product-content";

const product = {
  name: "SF6 Leak Detector",
  model: "SF6-LD-3000",
  description: "High-precision infrared SF6 leak detection system with built-in air pump, ppm-level accuracy, and 10-year sensor lifespan. Ideal for power substations and industrial applications.",
  shortDescription: "Professional SF6 gas leak detector with infrared principle, ppm precision, and 10-year sensor life.",
};

export const metadata: Metadata = {
  title: `${product.name} | SF6 Gas Leak Detection Equipment | ${siteConfig.site_name}`,
  description: product.description,
  keywords: [
    "SF6 leak detector",
    "SF6 gas detection",
    "infrared SF6 detector",
    "SF6 monitoring equipment",
    "gas leak detection system",
    "SF6 ppm detector",
    product.model,
    "SF6 Relations"
  ],
  alternates: {
    canonical: `${siteConfig.site_domain}/products/sf6-leak-detector`,
  },
  openGraph: {
    title: `${product.name} - Professional SF6 Leak Detection`,
    description: product.description,
    type: "website",
    url: `${siteConfig.site_domain}/products/sf6-leak-detector`,
    images: [
      {
        url: `${siteConfig.site_domain}/images/products/sf6-leak-detector-og.jpg`,
        width: 1200,
        height: 630,
        alt: product.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${product.name} | SF6 Leak Detection`,
    description: product.shortDescription,
    images: [`${siteConfig.site_domain}/images/products/sf6-leak-detector-og.jpg`],
  },
};

export default function ProductPage() {
  return <ProductContent />;
}
