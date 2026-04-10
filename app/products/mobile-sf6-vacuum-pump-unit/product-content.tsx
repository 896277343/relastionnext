'use client';

import { useState } from "react";
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
  Clock
} from "lucide-react";

// Product data
const product = {
  name: "Mobile SF6 Vacuum Pump Unit",
  model: "SF6-VP-4000",
  description: "High-performance mobile vacuum pump unit designed for SF6 gas evacuation and dehydration. Features powerful vacuum capacity and portable design for field operations.",
  shortDescription: "Mobile SF6 vacuum pump unit with high capacity and portable design for field maintenance.",
  price: "Contact for Quote",
  availability: "In Stock",
  minOrder: "1 Unit",
  deliveryTime: "10-20 Days",
  warranty: "2 Years",
  certification: ["CE", "ISO 9001", "IEC 60480"],
  images: [
    { src: "/pics/products/mobile-sf6-vacuum-pump-unit-1.jpg", alt: "Mobile SF6 Vacuum Pump Unit Main View" },
    { src: "/pics/products/mobile-sf6-vacuum-pump-unit-2.jpg", alt: "Mobile SF6 Vacuum Pump Unit Control Panel" },
    { src: "/pics/products/mobile-sf6-vacuum-pump-unit-3.jpg", alt: "Mobile SF6 Vacuum Pump Unit in Operation" },
  ],
  features: [
    "High vacuum capacity (40 m³/h)",
    "Ultimate vacuum ≤10 Pa",
    "Mobile design with wheels",
    "Digital vacuum gauge",
    "Automatic temperature control",
    "Low noise operation",
    "Energy efficient",
    "Overload protection"
  ],
  specifications: [
    { label: "Pump Capacity", value: "40 m³/h" },
    { label: "Ultimate Vacuum", value: "≤10 Pa" },
    { label: "Power Supply", value: "AC 380V/50Hz" },
    { label: "Motor Power", value: "4 kW" },
    { label: "Weight", value: "250 kg" },
    { label: "Dimensions", value: "1200 × 800 × 1000 mm" },
    { label: "Noise Level", value: "≤75 dB(A)" },
    { label: "Operating Temperature", value: "-10°C to +50°C" },
    { label: "Cooling System", value: "Air-cooled" },
    { label: "Oil Capacity", value: "5 L" },
    { label: "Hose Connections", value: "DN16, DN20" },
    { label: "Control System", value: "Digital display with remote control" },
  ],
  applications: [
    "Power substations",
    "GIS (Gas Insulated Switchgear)",
    "Circuit breakers",
    "Transformers",
    "High voltage switchgear",
    "Field maintenance"
  ],
  relatedProducts: [
    { name: "SF6 Leak Detector", slug: "sf6-leak-detector", image: "/pics/products/sf6-leak-detector.jpg" },
    { name: "SF6 Room Monitor", slug: "sf6-room-monitor", image: "/pics/products/sf6-room-monitor.jpg" },
    { name: "SF6 Gas Filling Kit", slug: "sf6-gas-filling-kit", image: "/pics/products/sf6-gas-filling-kit.jpg" },
  ]
};

export default function ProductContent() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = product.images[activeImageIndex];

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
            "url": `${siteConfig.site_domain}/products/mobile-sf6-vacuum-pump-unit`,
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
                "item": `${siteConfig.site_domain}/products/mobile-sf6-vacuum-pump-unit`
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
                      The {product.name} is a high-performance mobile vacuum pump unit designed specifically
                      for SF6 gas evacuation and dehydration in high-voltage equipment. This powerful
                      system provides efficient vacuuming capabilities for field maintenance operations.
                    </p>
                    <p>
                      With its robust construction and mobile design, this unit is ideal for on-site
                      maintenance of GIS, circuit breakers, and other SF6-insulated equipment. The
                      digital control system ensures precise operation and monitoring of the vacuum process.
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
                    <input type="hidden" name="referer" value={`${siteConfig.site_domain}/products/mobile-sf6-vacuum-pump-unit`} />
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
            {product.relatedProducts.map((related, index) => (
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
