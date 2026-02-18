import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] pt-24 pb-16">
      {/* Hero */}
      <section className="bg-[#2D5A4A] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-[#7CB69D] max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for any queries, feedback, or just to say hello!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-[#7CB69D]/10">
              <div className="w-14 h-14 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-[#2D5A4A]" />
              </div>
              <h3 className="font-semibold text-[#1E3D31] mb-2">Phone</h3>
              <p className="text-[#7CB69D] text-sm">
                <a href="tel:+919876543210" className="hover:text-[#2D5A4A]">
                  +91 98765 43210
                </a>
              </p>
              <p className="text-[#7CB69D]/70 text-xs mt-1">Mon-Sat, 10am-7pm</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-[#7CB69D]/10">
              <div className="w-14 h-14 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-[#2D5A4A]" />
              </div>
              <h3 className="font-semibold text-[#1E3D31] mb-2">Email</h3>
              <p className="text-[#7CB69D] text-sm">
                <a href="mailto:hello@carolinecollections.com" className="hover:text-[#2D5A4A]">
                  hello@carolinecollections.com
                </a>
              </p>
              <p className="text-[#7CB69D]/70 text-xs mt-1">We reply within 24 hours</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-[#7CB69D]/10">
              <div className="w-14 h-14 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-[#2D5A4A]" />
              </div>
              <h3 className="font-semibold text-[#1E3D31] mb-2">Visit Us</h3>
              <p className="text-[#7CB69D] text-sm">
                123 Fashion Street<br />
                Koramangala, Bangalore
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-[#7CB69D]/10">
              <div className="w-14 h-14 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-[#2D5A4A]" />
              </div>
              <h3 className="font-semibold text-[#1E3D31] mb-2">Working Hours</h3>
              <p className="text-[#7CB69D] text-sm">
                Mon - Sat: 10am - 7pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[#7CB69D]/10">
              <h2 className="text-2xl font-serif font-bold text-[#1E3D31] mb-2">
                Send us a Message
              </h2>
              <p className="text-[#7CB69D] mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-[#2D5A4A]">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#2D5A4A]">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-[#2D5A4A]">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-[#2D5A4A]">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="How can we help?"
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#2D5A4A]">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your query..."
                    className="mt-2 min-h-[150px] border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#2D5A4A] hover:bg-[#1E3D31] text-white py-6"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-[#7CB69D]/10 rounded-xl h-[400px] flex items-center justify-center border border-[#7CB69D]/20">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-[#2D5A4A] mx-auto mb-4" />
                  <p className="text-[#1E3D31] font-medium">Caroline Collections Store</p>
                  <p className="text-[#7CB69D] text-sm">123 Fashion Street, Koramangala</p>
                  <p className="text-[#7CB69D] text-sm">Bangalore, Karnataka 560034</p>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-[#7CB69D]/10">
                <h3 className="text-xl font-semibold text-[#1E3D31] mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#2D5A4A] mb-1">
                      What is your return policy?
                    </h4>
                    <p className="text-[#7CB69D] text-sm">
                      We offer a 7-day return policy for all unworn items with original tags.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2D5A4A] mb-1">
                      How long does shipping take?
                    </h4>
                    <p className="text-[#7CB69D] text-sm">
                      Standard delivery takes 3-5 business days. Express delivery available.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2D5A4A] mb-1">
                      Do you offer cash on delivery?
                    </h4>
                    <p className="text-[#7CB69D] text-sm">
                      Yes, COD is available for orders up to Rs.20,000.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <div className="w-20 h-20 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-[#2D5A4A]" />
            </div>
            <DialogTitle className="text-2xl font-semibold text-[#1E3D31]">
              Message Sent!
            </DialogTitle>
          </DialogHeader>
          
          <p className="text-[#7CB69D] py-4">
            Thank you for reaching out. We've received your message and will get back to you within 24 hours.
          </p>

          <Button 
            onClick={() => setIsSubmitted(false)}
            className="w-full bg-[#2D5A4A] hover:bg-[#1E3D31] text-white"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
