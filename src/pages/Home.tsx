import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "../components/ProductCard";
import { products, getFeaturedProducts } from "../data/products";
import gsap from "gsap";

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".animate-in"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
      );
    }
  }, []);

  const featuredProducts = getFeaturedProducts();
  const sarees = products.filter((p) => p.category === "saree").slice(0, 4);
  const kurtis = products.filter((p) => p.category === "kurti").slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-banner.jpg"
            alt="Caroline Collections"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3D31]/90 via-[#2D5A4A]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <Badge className="animate-in mb-4 bg-[#C9A86A] text-[#1E3D31] font-medium px-4 py-1">
              New Collection 2026
            </Badge>
            <h1 className="animate-in text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              Discover the Art of
              <span className="text-[#C9A86A]"> Elegance</span>
            </h1>
            <p className="animate-in text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Explore our curated collection of exquisite sarees and designer
              kurtis. Handpicked for the modern Indian woman who values
              tradition.
            </p>
            <div className="animate-in flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button
                  size="lg"
                  className="bg-[#2D5A4A] hover:bg-[#1E3D31] text-white px-8 py-6 text-lg"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/shop?saree">
                <Button
                  size="lg"
                  variant="outline" //hover:bg-white
                  className="bg-[#f8f5ef] text-[#c6a75e]  hover:text-[#274e13] px-8 py-6 text-lg"
                >
                  View Sarees
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-[#2D5A4A]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Premium Quality
              </h3>
              <p className="text-sm text-[#7CB69D]">Handpicked fabrics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#2D5A4A]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Trending Styles
              </h3>
              <p className="text-sm text-[#7CB69D]">Latest designs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-[#2D5A4A]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">4.8+ Rating</h3>
              <p className="text-sm text-[#7CB69D]">Customer loved</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-[#2D5A4A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Fast Delivery
              </h3>
              <p className="text-sm text-[#7CB69D]">3-5 business days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#2D5A4A] text-white">Featured</Badge>
            <h2 className="text-4xl font-serif font-bold text-[#1E3D31] mb-4">
              Bestselling Collection
            </h2>
            <p className="text-[#7CB69D] max-w-2xl mx-auto">
              Our most loved pieces, handpicked by customers like you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/shop">
              <Button
                variant="outline"
                size="lg"
                className="border-[#2D5A4A] text-[#2D5A4A] hover:bg-[#2D5A4A] hover:text-white"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sarees */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/images/saree-1.jpg"
                alt="Sarees Collection"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3D31]/90 via-[#1E3D31]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#C9A86A] font-medium mb-2">
                  Traditional Elegance
                </p>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                  Exquisite Sarees
                </h3>
                <p className="text-gray-300 mb-6">
                  From Banarasi to Kanjeevaram, discover our premium saree
                  collection
                </p>
                <Link to="/shop?saree">
                  <Button className="bg-white text-[#2D5A4A] hover:bg-[#C9A86A] hover:text-[#1E3D31]">
                    Shop Sarees
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Kurtis */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/images/kurti-3.jpg"
                alt="Kurtis Collection"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3D31]/90 via-[#1E3D31]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#C9A86A] font-medium mb-2">
                  Contemporary Style
                </p>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                  Designer Kurtis
                </h3>
                <p className="text-gray-300 mb-6">
                  Fusion wear that blends tradition with modern fashion
                </p>
                <Link to="/shop?kurti">
                  <Button className="bg-white text-[#2D5A4A] hover:bg-[#C9A86A] hover:text-[#1E3D31]">
                    Shop Kurtis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sarees Section */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1E3D31] mb-2">
                Premium Sarees
              </h2>
              <p className="text-[#7CB69D]">
                Handwoven elegance for every occasion
              </p>
            </div>
            <Link
              to="/shop?saree"
              className="hidden sm:flex items-center text-[#2D5A4A] font-medium hover:text-[#C9A86A] transition-colors"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sarees.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Kurtis Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1E3D31] mb-2">
                Designer Kurtis
              </h2>
              <p className="text-[#7CB69D]">
                Comfort meets style in every stitch
              </p>
            </div>
            <Link
              to="/shop?kurti"
              className="hidden sm:flex items-center text-[#2D5A4A] font-medium hover:text-[#C9A86A] transition-colors"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kurtis.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#2D5A4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Join the Caroline Family
          </h2>
          <p className="text-[#7CB69D] max-w-xl mx-auto mb-8">
            Subscribe to receive exclusive offers, early access to new
            collections, and styling tips straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]"
            />
            <Button
              size="lg"
              className="bg-[#C9A86A] hover:bg-[#A88B4A] text-[#1E3D31] px-8 rounded-full font-semibold"
            >
              Subscribe
            </Button>
          </div>
          <p className="text-[#7CB69D] text-sm mt-4">
            Get 10% off on your first order
          </p>
        </div>
      </section>
    </div>
  );
}
