'use client';

import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Script from "next/script";
import Link from "next/link";
import { 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageSquare, 
  FileText,
  ArrowRight,
  Shield,
  Zap,
  Award,
  Clock,
  Wifi,
  Bell,
  Monitor
} from "lucide-react";

// Product data
const product = {
  name: "SF6 Room Monitor",
  model: "SF6-RM-5000",
  description: "24/7 continuous monitoring system for SF6 gas leakage, oxygen concentration, and environmental conditions. Features real-time alerts and remote monitoring capabilities for maximum safety.",
  shortDescription: "Advanced SF6 room monitoring system with 24/7 detection, oxygen monitoring, and real-time alerts.",
  price: "Contact for Quote",
  availability: "In Stock",
  minOrder: "1 Unit",
  deliveryTime: "10-20 Days",
  warranty: "3 Years",
  certification: ["CE", "ISO 9001", "IEC 60480", "ATEX"],
  images: [
    { src: "/pics/products/sf6-room-monitor-1.jpg", alt: "SF6 Room Monitor Main Unit" },
    { src: "/pics/products/sf6-room-monitor-2.jpg", alt: "SF6 Room Monitor Display" },
    { src: "/pics/products/sf6-room-monitor-3.jpg", alt: "SF6 Room Monitor Sensors" },
  ],
  features: [
    "24/7 continuous monitoring",
    "SF6 gas leakage detection (0-1000 ppm)",
    "Oxygen concentration monitoring (0-30%)",
    "Temperature and humidity sensing",
    "Real-time data display and logging",
    "Multi-level alarm system",
    "Remote monitoring via WiFi/Ethernet",
    "SMS and email alert notifications"
  ],
  specifications: [
    { label: "SF6 Detection Range", value: "0-1000 ppm" },
    { label: "SF6 Resolution", value: "1 ppm" },
    { label: "Oxygen Range", value: "0-30% VOL" },
    { label: "Oxygen Accuracy", value: "±0.7% VOL" },
    { label: "Temperature Range", value: "-20°C to +60°C" },
    { label: "Humidity Range", value: "0-100% RH" },
    { label: "Display", value: "7 inch touchscreen LCD" },
    { label: "Data Logging", value: "Built-in 2GB storage" },
    { label: "Communication", value: "WiFi, Ethernet, RS485, 4-20mA" },
    { label: "Alarm Output", value: "Relay contacts, Sound, Light" },
    { label: "Power Supply", value: "AC 110-240V or DC 24V" },
    { label: "Backup Battery", value: "4 hours continuous" },
    { label: "Installation", value: "Wall-mounted or panel" },
    { label: "Protection Class", value: "IP65" },
  ],
  applications: [
    "High voltage substations",
    "GIS switchgear rooms",
    "Circuit breaker rooms",
    "Transformer stations",
    "Underground power facilities",
    "Industrial control rooms"
  ]
};

const relatedProductPool = [
  { name: "SF6 Leak Detector", slug: "sf6-leak-detector", image: "/pics/products/sf6-leak-detector.jpg" },
  { name: "SF6 Gas Analyzer", slug: "sf6-gas-analyzer", image: "/pics/products/sf6-analyzer.jpg" },
  { name: "SF6 Filling Cart", slug: "sf6-gas-filling-cart", image: "/pics/products/sf6-filling-cart.jpg" },
  { name: "SF6 Gas Filling Kit", slug: "sf6-gas-filling-kit", image: "/pics/products/sf6-gas-filling-kit.jpg" },
  { name: "SF6 Gas Fittings", slug: "sf6-gas-fittings", image: "/pics/products/sf6-gas-fittings.jpg" },
  { name: "SF6 Regeneration System", slug: "sf6-regeneration-system", image: "/pics/products/sf6-regeneration-system.jpg" },
  { name: "SF6 Service Carts", slug: "sf6-service-carts", image: "/pics/products/sf6-service-carts.jpg" },
  { name: "Mobile SF6 Vacuum Pump Unit", slug: "mobile-sf6-vacuum-pump-unit", image: "/pics/products/mobile-sf6-vacuum-pump-unit.jpg" },
];

function getRandomRelatedProducts(currentSlug: string, count: number) {
  const candidates = relatedProductPool.filter((item) => item.slug !== currentSlug);

  for (let i = candidates.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[randomIndex]] = [candidates[randomIndex], candidates[i]];
  }

  return candidates.slice(0, count);
}

export default function ProductContent() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState(() =>
    relatedProductPool.filter((item) => item.slug !== "sf6-room-monitor").slice(0, 3)
  );
  const activeImage = product.images[activeImageIndex];

  useEffect(() => {
    setRelatedProducts(getRandomRelatedProducts("sf6-room-monitor", 3));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <Script id="product-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "image": product.images.map(img => `${siteConfig.site_domain}${img.src}`),
          "description": product.description,
          "sku": product.model,
          "brand": {
            "@type": "Brand",
            "name": siteConfig.brand.legalName
          },
          "manufacturer": {
            "@type": "Organization",
            "name": siteConfig.brand.legalName
          },
          "offers": {
            "@type": "Offer",
            "url": `${siteConfig.site_domain}/products/sf6-room-monitor`,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": siteConfig.brand.legalName
            }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteConfig.site_domain
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": `${siteConfig.site_domain}/products`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": product.name,
                "item": `${siteConfig.site_domain}/products/sf6-room-monitor`
              }
            ]
          }
        })}
      </Script>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section - Product Overview */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`View ${img.alt}`}
                    aria-pressed={activeImageIndex === index}
                    className={`relative aspect-square rounded-lg overflow-hidden border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500/30 focus:ring-offset-2 ${
                      activeImageIndex === index
                        ? "border-slate-700 shadow-[0_16px_32px_-22px_rgba(15,23,42,0.55)]"
                        : "border-stone-200 hover:border-slate-400 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 16vw, 33vw"
                      className="object-cover"
                    />
                    <span className="sr-only">
                      {activeImageIndex === index ? "Current selected image" : "Select this image"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <Badge className="mb-4" variant="secondary">
                  Model Name: {product.model}
                </Badge>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Meta */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y">
                <div>
                  <span className="text-sm text-gray-500">Availability</span>
                  <p className="font-semibold text-green-600">{product.availability}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Delivery Time</span>
                  <p className="font-semibold">{product.deliveryTime}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Warranty</span>
                  <p className="font-semibold">{product.warranty}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Min. Order</span>
                  <p className="font-semibold">{product.minOrder}</p>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                {product.certification.map((cert) => (
                  <Badge key={cert} variant="outline" className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {cert}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  asChild
                >
                  <a href="#inquiry">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="flex-1"
                  asChild
                >
                  <a href="#contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Product Description
                  </h2>
                  <div className="prose max-w-none text-gray-600 space-y-4">
                    <p>
                      The {product.name} is a comprehensive safety monitoring solution designed for 
                      continuous surveillance of SF6 gas concentrations and oxygen levels in enclosed 
                      spaces. This advanced system provides round-the-clock protection for personnel 
                      working in high-voltage facilities.
                    </p>
                    <p>
                      Featuring state-of-the-art sensor technology, the monitor detects even minute 
                      traces of SF6 gas while simultaneously monitoring oxygen concentration to prevent 
                      asphyxiation hazards. The integrated environmental sensors track temperature and 
                      humidity for complete atmospheric analysis.
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 mt-6">Key Benefits</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Specifications */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    Technical Specifications
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-200">
                        {product.specifications.map((spec, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="py-3 px-4 font-medium text-gray-900 w-1/3">
                              {spec.label}
                            </td>
                            <td className="py-3 px-4 text-gray-600">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Applications */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Applications
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.applications.map((app, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Inquiry Form */}
            <div className="space-y-6">
              <Card id="inquiry" className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Send Inquiry
                  </h3>
                  <form 
                    method="POST" 
                    action="//inquiry.sf6sf6.com/updata_ppc.php"
                    className="space-y-4"
                    suppressHydrationWarning
                  >
                    <input type="hidden" name="from_company" value={siteConfig.brand.legalName} />
                    <input type="hidden" name="referer" value={`${siteConfig.site_domain}/products/sf6-room-monitor`} />
                    <input type="hidden" name="product_name" value={product.name} />
                    <input type="hidden" name="product_model" value={product.model} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="content"
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </Button>
                  </form>

                  {/* Contact Info */}
                  <div id="contact" className="mt-6 pt-6 border-t space-y-3">
                    <h4 className="font-semibold text-gray-900">Contact Information</h4>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <span>{siteConfig.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span>{siteConfig.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span>{siteConfig.contact.hoursShort}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((related, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <Link
                  href={`/products/${related.slug}`}
                  className="block h-full"
                  aria-label={`View details for ${related.name}`}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gray-100 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {related.name}
                      </h3>
                      <div className="flex items-center text-blue-600 mt-2 text-sm">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Technical Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
