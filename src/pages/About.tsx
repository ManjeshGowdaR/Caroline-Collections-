import { Heart, Award, Users, Leaf } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero */}
      <section className="relative bg-[#2D5A4A] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-[#7CB69D] max-w-2xl mx-auto">
            Crafting elegance, one thread at a time. Discover the journey of Caroline Collections.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/saree-5.jpg"
                alt="Our Craft"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1E3D31] mb-6">
                A Legacy of Elegance
              </h2>
              <p className="text-[#7CB69D] mb-4 leading-relaxed">
                Caroline Collections was born from a simple belief: every woman deserves to feel 
                elegant and confident in her ethnic wear. Founded in 2020 in the heart of 
                Bangalore, we set out to curate the finest collection of sarees and kurtis 
                that celebrate the rich heritage of Indian craftsmanship.
              </p>
              <p className="text-[#7CB69D] mb-4 leading-relaxed">
                Our journey began with a small team of passionate individuals who shared a 
                common vision - to bring authentic, high-quality ethnic wear to modern Indian 
                women. Today, we work directly with weavers and artisans across India, 
                ensuring that every piece in our collection tells a story of tradition, 
                skill, and artistry.
              </p>
              <p className="text-[#7CB69D] leading-relaxed">
                From the looms of Varanasi to the embroidery studios of Lucknow, we source 
                our products from the most skilled craftspeople, preserving age-old techniques 
                while embracing contemporary designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#1E3D31] mb-4">
              Our Values
            </h2>
            <p className="text-[#7CB69D] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-[#7CB69D]/10">
              <div className="w-16 h-16 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-[#2D5A4A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3D31] mb-3">Passion</h3>
              <p className="text-[#7CB69D]">
                We pour our heart into every collection, ensuring each piece meets our 
                high standards of quality and beauty.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-[#7CB69D]/10">
              <div className="w-16 h-16 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-[#2D5A4A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3D31] mb-3">Quality</h3>
              <p className="text-[#7CB69D]">
                Every product is carefully inspected to ensure it meets our premium 
                quality standards before reaching you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-[#7CB69D]/10">
              <div className="w-16 h-16 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#2D5A4A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3D31] mb-3">Community</h3>
              <p className="text-[#7CB69D]">
                We support local artisans and weavers, helping preserve traditional 
                crafts and livelihoods.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-[#7CB69D]/10">
              <div className="w-16 h-16 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-[#2D5A4A]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3D31] mb-3">Sustainability</h3>
              <p className="text-[#7CB69D]">
                We are committed to eco-friendly practices and sustainable sourcing 
                of materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#2D5A4A] mb-2">50K+</p>
              <p className="text-[#7CB69D]">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#2D5A4A] mb-2">500+</p>
              <p className="text-[#7CB69D]">Products</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#2D5A4A] mb-2">100+</p>
              <p className="text-[#7CB69D]">Artisan Partners</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#2D5A4A] mb-2">25+</p>
              <p className="text-[#7CB69D]">Cities Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#F8F6F1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#1E3D31] mb-4">
              Meet Our Team
            </h2>
            <p className="text-[#7CB69D] max-w-2xl mx-auto">
              The passionate individuals behind Caroline Collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center p-6 border border-[#7CB69D]/10">
              <div className="w-32 h-32 bg-[#7CB69D]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-serif text-[#2D5A4A]">C</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3D31]">Caroline D'Souza</h3>
              <p className="text-[#C9A86A] mb-3">Founder & CEO</p>
              <p className="text-[#7CB69D] text-sm">
                With a passion for Indian textiles and 15 years of experience in fashion retail.
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center p-6 border border-[#7CB69D]/10">
              <div className="w-32 h-32 bg-[#7CB69D]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-serif text-[#2D5A4A]">R</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3D31]">Rahul Mehta</h3>
              <p className="text-[#C9A86A] mb-3">Creative Director</p>
              <p className="text-[#7CB69D] text-sm">
                Bringing contemporary design sensibilities to traditional Indian wear.
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm text-center p-6 border border-[#7CB69D]/10">
              <div className="w-32 h-32 bg-[#7CB69D]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-serif text-[#2D5A4A]">P</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3D31]">Priya Sharma</h3>
              <p className="text-[#C9A86A] mb-3">Head of Operations</p>
              <p className="text-[#7CB69D] text-sm">
                Ensuring smooth operations and exceptional customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
