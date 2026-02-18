import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, CreditCard, Truck, RotateCcw, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1E3D31] text-white">
      {/* Features Bar */}
      <div className="border-b border-[#2D5A4A]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="h-8 w-8 text-[#C9A86A]" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-[#7CB69D]">On orders above Rs.5,000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-8 w-8 text-[#C9A86A]" />
              <div>
                <p className="font-medium">Easy Returns</p>
                <p className="text-sm text-[#7CB69D]">7-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-[#C9A86A]" />
              <div>
                <p className="font-medium">Secure Payment</p>
                <p className="text-sm text-[#7CB69D]">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-8 w-8 text-[#C9A86A]" />
              <div>
                <p className="font-medium">COD Available</p>
                <p className="text-sm text-[#7CB69D]">Cash on delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 
              className="text-3xl font-serif font-bold mb-4"
              style={{
                color: '#7CB69D',
                textShadow: '-1px -1px 0 #C9A86A, 1px -1px 0 #C9A86A, -1px 1px 0 #C9A86A, 1px 1px 0 #C9A86A',
              }}
            >
              Caroline<span style={{ color: '#C9A86A' }}>.</span>
            </h2>
            <p className="text-[#7CB69D] mb-6 leading-relaxed">
              Discover the finest collection of handpicked sarees and designer kurtis. 
              Elevate your ethnic wardrobe with Caroline Collections.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#2D5A4A] rounded-full flex items-center justify-center hover:bg-[#C9A86A] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2D5A4A] rounded-full flex items-center justify-center hover:bg-[#C9A86A] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#2D5A4A] rounded-full flex items-center justify-center hover:bg-[#C9A86A] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C9A86A]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="/shop?saree" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">Sarees</Link>
              </li>
              <li>
                <Link to="/shop?kurti" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">Kurtis</Link>
              </li>
              <li>
                <Link to="/about" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C9A86A]">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="#" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">Shipping Info</a>
              </li>
              <li>
                <a href="#" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">Returns & Exchanges</a>
              </li>
              <li>
                <a href="#" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">Size Guide</a>
              </li>
              <li>
                <a href="#" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C9A86A]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#C9A86A] mt-0.5" />
                <span className="text-[#7CB69D]">
                  123 Fashion Street, Koramangala<br />
                  Bangalore, Karnataka 560034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#C9A86A]" />
                <a href="tel:+919876543210" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#C9A86A]" />
                <a href="mailto:hello@carolinecollections.com" className="text-[#7CB69D] hover:text-[#C9A86A] transition-colors">
                  hello@carolinecollections.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2D5A4A]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#7CB69D] text-sm text-center md:text-left">
              © 2026 Caroline Collections. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#7CB69D] hover:text-[#C9A86A] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#7CB69D] hover:text-[#C9A86A] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-[#7CB69D] hover:text-[#C9A86A] text-sm transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
