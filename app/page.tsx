// Next.js Imports
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Script from "next/script";

// Icons
import { ChevronRight, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SF6 Relations",
          "url": "https://www.sf6relations.com",
          "logo": "https://www.sf6relations.com/logo.svg",
          "description": "SF6 Gas Solution - Full Lifecycle of SF6 Gas Solution",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "300000+ square meters industrial park",
            "addressCountry": "China"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+86 123 4567 8910",
              "contactType": "customer service"
            },
            {
              "@type": "ContactPoint",
              "email": "info@sf6relations.com",
              "contactType": "customer service"
            }
          ],
          "sameAs": [
            "https://www.linkedin.com/company/sf6relations",
            "https://twitter.com/sf6relations",
            "https://facebook.com/sf6relations"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SF6 Gas Equipment",
            "itemListElement": [
              {
                "@type": "Product",
                "name": "SF6 Leak Detector",
                "description": "Infrared Principle Portable SF6 Leakage Detection, Built-in Air Pump, ppm Precision, Stability and Durability, 10 Years of Sensor Life",
                "url": "#products",
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
                "category": "SF6 Gas Detection Equipment"
              },
              {
                "@type": "Product",
                "name": "SF6 Room Monitor",
                "description": "7 * 24-hour full-day detection of SF6 gas leakage and detection of oxygen concentration and environmental temperature and humidity.",
                "url": "#products",
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
                "category": "SF6 Gas Monitoring Equipment"
              },
              {
                "@type": "Product",
                "name": "SF6 Analysis",
                "description": "Portable SF6 gas quality comprehensive analysis to detect sulfur hexafluoride purity, humidity and decomposition products SO2 CO H2S",
                "url": "#products",
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
                "category": "SF6 Gas Analysis Equipment"
              },
              {
                "@type": "Product",
                "name": "SF6 Filling Cart",
                "description": "For evacuation of air and refilling of gas compartments from SF6 gas bottles",
                "url": "#products",
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
                "category": "SF6 Gas Handling Equipment"
              },
              {
                "@type": "Product",
                "name": "SF6 Handling",
                "description": "For recovery and filter SF6 gas from gas compartment",
                "url": "#products",
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
                "category": "SF6 Gas Handling Equipment"
              },
              {
                "@type": "Product",
                "name": "SF6 Regeneration",
                "description": "SF6 regeneration system, after regeneration treatment meeting IEC60480 specification.",
                "url": "#products",
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
                "category": "SF6 Gas Regeneration Equipment"
              }
            ]
          }
        })}
      </Script>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                SF6 Gas Equipment Manufacturer
              </h1>
              <p className="text-xl mb-8">
                With 25 years of experience in sulfur hexafluoride gas solutions
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-blue-800 hover:bg-blue-50">
                  Get in touch
                </Button>
                <Button className="bg-transparent border border-white hover:bg-white/10">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Full Lifecycle of SF6 Gas Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span>SF6 Sensor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span>SF6 Regeneration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span>SF6 Gas Analyzer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span>SF6 Gas Detector</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span>SF6 Gas Handling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span>SF6 Gas Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-3xl font-bold text-blue-800 mb-2">300,000+</h3>
              <p className="text-gray-600">Square meters industrial park</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-3xl font-bold text-blue-800 mb-2">500+</h3>
              <p className="text-gray-600">Employees</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-3xl font-bold text-blue-800 mb-2">4 tons</h3>
              <p className="text-gray-600">Reuse of SF6 gas per year</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-3xl font-bold text-blue-800 mb-2">99.7+%</h3>
              <p className="text-gray-600">Recycling rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive SF6 gas equipment solutions for various applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              title="SF6 Leak Detector"
              description="Infrared Principle Portable SF6 Leakage Detection, Built-in Air Pump, ppm Precision, Stability and Durability, 10 Years of Sensor Life"
            />
            <ProductCard 
              title="SF6 Room Monitor"
              description="7 * 24-hour full-day detection of SF6 gas leakage and detection of oxygen concentration and environmental temperature and humidity."
            />
            <ProductCard 
              title="SF6 Analysis"
              description="Portable SF6 gas quality comprehensive analysis to detect sulfur hexafluoride purity, humidity and decomposition products SO2 CO H2S"
            />
            <ProductCard 
              title="SF6 Filling Cart"
              description="For evacuation of air and refilling of gas compartments from SF6 gas bottles"
            />
            <ProductCard 
              title="SF6 Handling"
              description="For recovery and filter SF6 gas from gas compartment"
            />
            <ProductCard 
              title="SF6 Regeneration"
              description="SF6 regeneration system, after regeneration treatment meeting IEC60480 specification."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Successful SF6 gas solutions for various industries and applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="SF6 Gas handling for Underground Substation"
              description="SF6 gas is increasingly used in confined Spaces. Underground substations use a lot of high-voltage equipment. SF6 Gas safety solutions."
            />
            <ProjectCard 
              title="SF6 use for Gas Insulated Switchgear Manufacturers"
              description="A large amount of SF6 gas is needed to test the equipment during the R&D and manufacturing process. We provide solutions for reusing SF6 gas for experiments."
            />
            <ProjectCard 
              title="Ultra-high voltage SF6 Handling equipment"
              description="We have rich experience in field service 750KV and 1000KV substation working experience, including Gas Insulated Lines."
            />
            <ProjectCard 
              title="SF6 Gas Handling and Regeneration base"
              description="SF6 handling base has a large recycling & regeneration & vacuum equipment. Efficient regeneration of SF6 and Achieving whole-life system management of SF6 gas."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With 25 years of experience in SF6 gas equipment manufacturing, we are experts in sulfur hexafluoride gas solutions. Our commitment to quality and innovation has made us a trusted partner for businesses worldwide.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide high-quality SF6 gas equipment and solutions that help our customers operate safely, efficiently, and sustainably. We are dedicated to reducing the environmental impact of SF6 gas through advanced recycling and regeneration technologies.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Quality</h4>
                  <p className="text-gray-600">We deliver products that meet the highest industry standards.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Innovation</h4>
                  <p className="text-gray-600">We continuously develop new technologies to improve SF6 gas management.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Sustainability</h4>
                  <p className="text-gray-600">We are committed to reducing the environmental impact of SF6 gas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Customer Service</h4>
                  <p className="text-gray-600">We provide exceptional support to our customers worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
              <p className="mb-8">
                Contact us for all your SF6 gas solution needs. Our experts are ready to help you find the right equipment and services for your specific requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={24} />
                  <span>300000+ square meters industrial park</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={24} />
                  <span>+86 123 4567 8910</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={24} />
                  <span>info@sf6relations.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={24} />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-lg text-gray-800">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-medium">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Message</label>
                    <textarea 
                      className="w-full px-4 py-2 border rounded-lg h-32"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Product Card Component
const ProductCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-3 text-blue-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="#" className="text-blue-800 font-medium flex items-center gap-2">
        Learn more <ChevronRight size={16} />
      </Link>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-3 text-blue-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="#" className="text-blue-800 font-medium flex items-center gap-2">
        View details <ChevronRight size={16} />
      </Link>
    </div>
  );
};