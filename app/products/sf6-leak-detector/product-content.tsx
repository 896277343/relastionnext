'use client';

import { siteConfig } from "@/site.config";
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
  name: "SF6 Leak Detector",
  model: "SF6-LD-3000",
  description: "High-precision infrared SF6 leak detection system with built-in air pump, ppm-level accuracy, and 10-year sensor lifespan. Ideal for power substations and industrial applications.",
  shortDescription: "Professional SF6 gas leak detector with infrared principle, ppm precision, and 10-year sensor life.",
  price: "Contact for Quote",
  availability: "In Stock",
  minOrder: "1 Unit",
  deliveryTime: "7-15 Days",
  warranty: "2 Years",
  certification: ["CE", "ISO 9001", "IEC 60480"],
  images: [
    { src: "/pics/products/sf6-leak-detector-1.jpg", alt: "SF6 Leak Detector Front View" },
    { src: "/pics/products/sf6-leak-detector-2.jpg", alt: "SF6 Leak Detector Side View" },
    { src: "/pics/products/sf6-leak-detector-3.jpg", alt: "SF6 Leak Detector Display" },
  ],
  features: [
    "Infrared principle for accurate detection",
    "Built-in air pump for efficient sampling",
    "ppm precision for sensitive leak detection",
    "Stable and durable design",
    "10 years of sensor life",
    "Portable and lightweight",
    "Real-time concentration display",
    "Audio and visual alarms"
  ],
  specifications: [
    { label: "Detection Principle", value: "Infrared (NDIR)" },
    { label: "Detection Range", value: "0-1000 ppm" },
    { label: "Resolution", value: "0.1 ppm" },
    { label: "Accuracy", value: "±2% FS" },
    { label: "Response Time", value: "< 10 seconds" },
    { label: "Sampling Method", value: "Built-in pump" },
    { label: "Flow Rate", value: "0.5 L/min" },
    { label: "Display", value: "4.3 inch LCD touchscreen" },
    { label: "Battery Life", value: "8 hours continuous" },
    { label: "Weight", value: "2.5 kg" },
    { label: "Dimensions", value: "280 × 180 × 120 mm" },
    { label: "Operating Temp", value: "-10°C to +50°C" },
    { label: "Storage Temp", value: "-20°C to +60°C" },
    { label: "Humidity", value: "0-95% RH (non-condensing)" },
  ],
  applications: [
    "Power substations",
    "High voltage switchgear",
    "GIS (Gas Insulated Switchgear)",
    "Circuit breakers",
    "Transformers",
    "Industrial gas handling"
  ],
  relatedProducts: [
    { name: "SF6 Room Monitor", slug: "sf6-room-monitor", image: "/pics/products/sf6-room-monitor.jpg" },
    { name: "SF6 Gas Analyzer", slug: "sf6-gas-analyzer", image: "/pics/products/sf6-analyzer.jpg" },
    { name: "SF6 Filling Cart", slug: "sf6-filling-cart", image: "/pics/products/sf6-filling-cart.jpg" },
  ]
};

export default function ProductContent() {
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
            "name": "SF6 Relations"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "SF6 Relations"
          },
          "offers": {
            "@type": "Offer",
            "url": `${siteConfig.site_domain}/products/sf6-leak-detector`,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": "SF6 Relations"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "156"
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
                "item": `${siteConfig.site_domain}/products/sf6-leak-detector`
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
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.images[0].src} 
                  alt={product.images[0].alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x600?text=SF6+Leak+Detector";
                  }}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <img 
                      src={img.src} 
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/200x200?text=View+${index + 1}`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2" variant="secondary">{product.model}</Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
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
                      The {product.name} is a state-of-the-art gas detection device designed specifically 
                      for SF6 (Sulfur Hexafluoride) leak detection in electrical equipment. Utilizing advanced 
                      infrared technology, this detector provides accurate and reliable measurements with 
                      ppm-level precision.
                    </p>
                    <p>
                      Equipped with a built-in air pump, the device ensures efficient sampling and rapid 
                      response times. The high-quality sensor offers an exceptional 10-year lifespan, 
                      reducing maintenance costs and ensuring long-term reliability.
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
                    <input type="hidden" name="from_company" value="SF6 Relations" />
                    <input type="hidden" name="referer" value={`${siteConfig.site_domain}/products/sf6-leak-detector`} />
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
                      <span>+86 123 4567 8910</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span>info@sf6relations.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span>Mon-Fri: 9:00-18:00</span>
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
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={related.image} 
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x225?text=${encodeURIComponent(related.name)}`;
                      }}
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
