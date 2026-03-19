// Next.js Imports
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import type { Metadata } from "next";

// Icons
import { ChevronRight, CheckCircle, ArrowRight, Shield, Zap, RefreshCw, BarChart3, Globe, Clock, Phone, Mail } from "lucide-react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "SF6 Gas Equipment Products | SF6 Relations",
  description: "High-quality SF6 gas equipment including leak detectors, room monitors, analyzers, filling carts, handling systems, and regeneration systems for various industrial applications.",
  keywords: ["SF6 gas equipment", "SF6 leak detector", "SF6 room monitor", "SF6 analyzer", "SF6 filling cart", "SF6 handling", "SF6 regeneration", "SF6 gas solutions"],
  alternates: {
    canonical: `${siteConfig.site_domain}/products`,
  },
  openGraph: {
    type: "website",
    title: "SF6 Gas Equipment Products | SF6 Relations",
    description: "High-quality SF6 gas equipment including leak detectors, room monitors, analyzers, filling carts, handling systems, and regeneration systems for various industrial applications.",
    images: [{
      url: "/opengraph-image.jpeg",
      width: 1200,
      height: 630,
      alt: "SF6 Gas Equipment Products",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SF6 Gas Equipment Products | SF6 Relations",
    description: "High-quality SF6 gas equipment including leak detectors, room monitors, analyzers, filling carts, handling systems, and regeneration systems for various industrial applications.",
    images: ["/twitter-image.jpeg"],
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <Script id="product-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "SF6 Gas Equipment Products",
          "description": "High-quality SF6 gas equipment including leak detectors, room monitors, analyzers, filling carts, handling systems, and regeneration systems for various industrial applications.",
          "url": "https://www.sf6relations.com/products",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sf6relations.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://www.sf6relations.com/products"
              }
            ]
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": "SF6 Leak Detector",
                  "description": "Infrared Principle Portable SF6 Leakage Detection, Built-in Air Pump, ppm Precision, Stability and Durability, 10 Years of Sensor Life",
                  "url": "https://www.sf6relations.com/products#sf6-leak-detector",
                  "brand": {
                    "@type": "Organization",
                    "name": "SF6 Relations"
                  },
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "USD"
                  },
                  "productID": "SF6-LEAK-001",
                  "category": "SF6 Gas Detection Equipment",
                  "image": "https://www.sf6relations.com/images/sf6-leak-detector.jpg",
                  "review": {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4.9",
                      "bestRating": "5"
                    },
                    "reviewCount": "120"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "SF6 Room Monitor",
                  "description": "7 * 24-hour full-day detection of SF6 gas leakage and detection of oxygen concentration and environmental temperature and humidity.",
                  "url": "https://www.sf6relations.com/products#sf6-room-monitor",
                  "brand": {
                    "@type": "Organization",
                    "name": "SF6 Relations"
                  },
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "USD"
                  },
                  "productID": "SF6-MONITOR-001",
                  "category": "SF6 Gas Monitoring Equipment",
                  "image": "https://www.sf6relations.com/images/sf6-room-monitor.jpg",
                  "review": {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4.8",
                      "bestRating": "5"
                    },
                    "reviewCount": "95"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Product",
                  "name": "SF6 Analysis",
                  "description": "Portable SF6 gas quality comprehensive analysis to detect sulfur hexafluoride purity, humidity and decomposition products SO2 CO H2S",
                  "url": "https://www.sf6relations.com/products#sf6-analysis",
                  "brand": {
                    "@type": "Organization",
                    "name": "SF6 Relations"
                  },
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "USD"
                  },
                  "productID": "SF6-ANALYSIS-001",
                  "category": "SF6 Gas Analysis Equipment",
                  "image": "https://www.sf6relations.com/images/sf6-analysis.jpg",
                  "review": {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4.9",
                      "bestRating": "5"
                    },
                    "reviewCount": "88"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Product",
                  "name": "SF6 Filling Cart",
                  "description": "For evacuation of air and refilling of gas compartments from SF6 gas bottles",
                  "url": "https://www.sf6relations.com/products#sf6-filling-cart",
                  "brand": {
                    "@type": "Organization",
                    "name": "SF6 Relations"
                  },
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "USD"
                  },
                  "productID": "SF6-FILL-001",
                  "category": "SF6 Gas Handling Equipment",
                  "image": "https://www.sf6relations.com/images/sf6-filling-cart.jpg",
                  "review": {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4.7",
                      "bestRating": "5"
                    },
                    "reviewCount": "76"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Product",
                  "name": "SF6 Handling",
                  "description": "For recovery and filter SF6 gas from gas compartment",
                  "url": "https://www.sf6relations.com/products#sf6-handling",
                  "brand": {
                    "@type": "Organization",
                    "name": "SF6 Relations"
                  },
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "USD"
                  },
                  "productID": "SF6-HANDLING-001",
                  "category": "SF6 Gas Handling Equipment",
                  "image": "https://www.sf6relations.com/images/sf6-handling.jpg",
                  "review": {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4.8",
                      "bestRating": "5"
                    },
                    "reviewCount": "65"
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 6,
                "item": {
                  "@type": "Product",
                  "name": "SF6 Regeneration",
                  "description": "SF6 regeneration system, after regeneration treatment meeting IEC60480 specification.",
                  "url": "https://www.sf6relations.com/products#sf6-regeneration",
                  "brand": {
                    "@type": "Organization",
                    "name": "SF6 Relations"
                  },
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "priceCurrency": "USD"
                  },
                  "productID": "SF6-REGEN-001",
                  "category": "SF6 Gas Regeneration Equipment",
                  "image": "https://www.sf6relations.com/images/sf6-regeneration.jpg",
                  "review": {
                    "@type": "Review",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4.9",
                      "bestRating": "5"
                    },
                    "reviewCount": "58"
                  }
                }
              }
            ]
          }
        })}
      </Script>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-8 text-white/80">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white/80 hover:text-white">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">SF6 Gas Equipment Products</h1>
            <p className="text-xl mb-8 opacity-90">
              High-quality SF6 gas equipment solutions for industrial applications. Our products are designed to meet the highest standards of performance, reliability, and safety.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6">
                Request a Quote
              </Button>
              <Button className="bg-transparent border border-white hover:bg-white/10 text-lg px-8 py-6">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our SF6 Gas Equipment</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our SF6 gas equipment is designed and manufactured to the highest standards, ensuring reliable performance and long service life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Shield size={32} />}
              title="Safety First"
              description="All our equipment meets international safety standards and regulations"
            />
            <FeatureCard 
              icon={<Zap size={32} />}
              title="High Performance"
              description="Precision engineering for accurate and reliable results"
            />
            <FeatureCard 
              icon={<RefreshCw size={32} />}
              title="Sustainable"
              description="Eco-friendly designs that minimize SF6 gas emissions"
            />
            <FeatureCard 
              icon={<Clock size={32} />}
              title="Long Lifespan"
              description="Durable construction for extended service life"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of SF6 gas equipment for various industrial applications
            </p>
          </div>
          
          <div className="space-y-24">
            <ProductCard 
              id="sf6-leak-detector"
              title="SF6 Leak Detector"
              description="Infrared Principle Portable SF6 Leakage Detection, Built-in Air Pump, ppm Precision, Stability and Durability, 10 Years of Sensor Life"
              features={[
                "Infrared principle for accurate detection",
                "Built-in air pump for efficient sampling",
                "ppm precision for sensitive leaks",
                "Stable and durable design",
                "10 years of sensor life"
              ]}
              image="https://www.sf6relations.com/images/sf6-leak-detector.jpg"
            />
            
            <ProductCard 
              id="sf6-room-monitor"
              title="SF6 Room Monitor"
              description="7 * 24-hour full-day detection of SF6 gas leakage and detection of oxygen concentration and environmental temperature and humidity."
              features={[
                "24/7 continuous monitoring",
                "SF6 gas leakage detection",
                "Oxygen concentration monitoring",
                "Temperature and humidity sensing",
                "Alarm system for safety"
              ]}
              image="https://www.sf6relations.com/images/sf6-room-monitor.jpg"
              reverse
            />
            
            <ProductCard 
              id="sf6-analysis"
              title="SF6 Analysis"
              description="Portable SF6 gas quality comprehensive analysis to detect sulfur hexafluoride purity, humidity and decomposition products SO2 CO H2S"
              features={[
                "Comprehensive gas quality analysis",
                "Detects SF6 purity",
                "Measures humidity levels",
                "Identifies decomposition products (SO2, CO, H2S)",
                "Portable and easy to use"
              ]}
              image="https://www.sf6relations.com/images/sf6-analysis.jpg"
            />
            
            <ProductCard 
              id="sf6-filling-cart"
              title="SF6 Filling Cart"
              description="For evacuation of air and refilling of gas compartments from SF6 gas bottles"
              features={[
                "Efficient air evacuation",
                "Precise SF6 gas refilling",
                "Compatible with standard SF6 bottles",
                "Mobile design for easy maneuverability",
                "Safety features for operator protection"
              ]}
              image="https://www.sf6relations.com/images/sf6-filling-cart.jpg"
              reverse
            />
            
            <ProductCard 
              id="sf6-handling"
              title="SF6 Handling"
              description="For recovery and filter SF6 gas from gas compartment"
              features={[
                "Efficient SF6 gas recovery",
                "Built-in filtration system",
                "High recovery rate",
                "Compact and portable design",
                "Easy to operate"
              ]}
              image="https://www.sf6relations.com/images/sf6-handling.jpg"
            />
            
            <ProductCard 
              id="sf6-regeneration"
              title="SF6 Regeneration"
              description="SF6 regeneration system, after regeneration treatment meeting IEC60480 specification."
              features={[
                "Meets IEC60480 specification",
                "High-quality regeneration process",
                "Removes impurities and moisture",
                "Extends SF6 gas life",
                "Reduces environmental impact"
              ]}
              image="https://www.sf6relations.com/images/sf6-regeneration.jpg"
              reverse
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Improve Your SF6 Gas Management?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to learn more about our SF6 gas equipment and how we can help you optimize your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-blue-800 hover:bg-blue-50 text-lg px-8 py-6">
                Get a Free Quote
              </Button>
              <Button className="bg-transparent border border-white hover:bg-white/10 text-lg px-8 py-6">
                Speak with an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Have questions about our products? Our team of experts is ready to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form method="POST" action="//inquiry.sf6sf6.com/updata_ppc.php" className="space-y-4">
                <input type="hidden" name="from_company" value="SF6 Relations" />
                <input type="hidden" name="referer" value="https://www.sf6relations.com/products" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium text-gray-700">Message</label>
                  <textarea 
                    name="content"
                    id="content"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    placeholder="Submit your requirement."
                    required
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe size={24} className="text-blue-800" />
                    <span>{siteConfig.site_domain}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={24} className="text-blue-800" />
                    <span>+86 123 4567 8910</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={24} className="text-blue-800" />
                    <span>info@sf6relations.com</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Why Choose SF6 Relations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>25 years of experience in SF6 gas solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>High-quality products with international certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Expert technical support and after-sales service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Competitive pricing and flexible payment options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
                    <span>Fast delivery and worldwide shipping</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-blue-800 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ 
  id, 
  title, 
  description, 
  features, 
  image, 
  reverse = false 
}: { 
  id: string; 
  title: string; 
  description: string; 
  features: string[]; 
  image: string; 
  reverse?: boolean 
}) => {
  return (
    <div id={id} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
      <div className="lg:w-1/2">
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="lg:w-1/2 space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-3 text-blue-800">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle size={20} className="text-green-600 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Button className="bg-blue-800 hover:bg-blue-700 text-white">
            Learn More
          </Button>
          <Button className="bg-transparent border border-blue-800 text-blue-800 hover:bg-blue-50">
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );
};