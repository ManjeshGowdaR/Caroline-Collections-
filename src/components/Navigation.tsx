import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "../context/CartContext";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Sarees", path: "/shop?saree" },
    { name: "Kurtis", path: "/shop?kurti" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Top Bar */}
        <div
          className={`${
            isScrolled ? "hidden" : "block"
          } bg-[#2D5A4A] text-white py-2`}
        >
          <div className="container mx-auto px-4 text-center text-sm">
            Free shipping on orders above Rs.5,000 | Use code WELCOME10 for 10%
            off
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>

            {/* Logo - Light Elegant Green with Gold Border */}
            <Link to="/" className="flex items-center">
              <h1
                className="text-2xl lg:text-4xl font-serif font-bold px-4 py-1 rounded-lg"
                style={{
                  color: "#7CB69D",
                  textShadow:
                    "-1px -1px 0 #C9A86A, 1px -1px 0 #C9A86A, -1px 1px 0 #C9A86A, 1px 1px 0 #C9A86A, 0 0 10px rgba(201, 168, 106, 0.3)",
                }}
              >
                Caroline Collections
                <span style={{ color: "#C9A86A" }}>.</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#2D5A4A] ${
                    location.pathname === link.path
                      ? "text-[#2D5A4A]"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-[#7CB69D]/10 rounded-full transition-colors"
              >
                <Search className="h-5 w-5 text-gray-700" />
              </button>

              {/* Wishlist */}
              <button className="hidden sm:block p-2 hover:bg-[#7CB69D]/10 rounded-full transition-colors">
                <Heart className="h-5 w-5 text-gray-700" />
              </button>

              {/* Account */}
              <button className="hidden sm:block p-2 hover:bg-[#7CB69D]/10 rounded-full transition-colors">
                <User className="h-5 w-5 text-gray-700" />
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-[#7CB69D]/10 rounded-full transition-colors relative"
              >
                <ShoppingBag className="h-5 w-5 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#2D5A4A] text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="py-4 border-t border-gray-100 animate-in slide-in-from-top-2">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for sarees, kurtis, and more..."
                  className="pl-12 pr-4 py-6 text-lg border-2 border-[#2D5A4A]/20 focus:border-[#2D5A4A] rounded-full"
                  autoFocus
                />
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl animate-in slide-in-from-left">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2
                  className="text-2xl font-serif font-bold"
                  style={{
                    color: "#7CB69D",
                    textShadow:
                      "-1px -1px 0 #C9A86A, 1px -1px 0 #C9A86A, -1px 1px 0 #C9A86A, 1px 1px 0 #C9A86A",
                  }}
                >
                  Caroline<span style={{ color: "#C9A86A" }}>.</span>
                </h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-lg font-medium border-b border-gray-100 ${
                      location.pathname === link.path
                        ? "text-[#2D5A4A]"
                        : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                >
                  <User className="h-5 w-5" />
                  My Account
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                >
                  <Heart className="h-5 w-5" />
                  Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
