export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'saree' | 'kurti';
  image: string;
  images: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  tags: string[];
  material: string;
  occasion: string[];
}

export const products: Product[] = [
  // SAREES
  {
    id: 'saree-1',
    name: 'Red Banarasi Silk Saree',
    description: 'Exquisite handwoven Banarasi silk saree in rich red with intricate gold zari work. Features traditional motifs and a heavy border perfect for weddings and special occasions. Comes with matching blouse piece.',
    price: 15999,
    originalPrice: 18999,
    category: 'saree',
    image: '/images/saree-1.jpg',
    images: ['/images/saree-1.jpg'],
    sizes: ['Free Size'],
    colors: ['Red', 'Maroon'],
    inStock: true,
    rating: 4.9,
    reviews: 128,
    tags: ['Bestseller', 'Wedding', 'Silk'],
    material: 'Pure Banarasi Silk',
    occasion: ['Wedding', 'Festive', 'Reception']
  },
  {
    id: 'saree-2',
    name: 'Royal Blue Kanjeevaram Saree',
    description: 'Authentic Kanjeevaram silk saree in royal blue with golden peacock motifs and rich pallu. Handcrafted by master weavers with traditional temple border design.',
    price: 22499,
    category: 'saree',
    image: '/images/saree-2.jpg',
    images: ['/images/saree-2.jpg'],
    sizes: ['Free Size'],
    colors: ['Royal Blue', 'Navy'],
    inStock: true,
    rating: 5.0,
    reviews: 89,
    tags: ['Premium', 'Handwoven', 'Silk'],
    material: 'Pure Kanjeevaram Silk',
    occasion: ['Wedding', 'Temple', 'Traditional']
  },
  {
    id: 'saree-3',
    name: 'Emerald Green Silk Saree',
    description: 'Elegant emerald green silk saree with silver zari border and delicate floral patterns. Perfect blend of tradition and contemporary style for modern women.',
    price: 12999,
    originalPrice: 14999,
    category: 'saree',
    image: '/images/saree-3.jpg',
    images: ['/images/saree-3.jpg'],
    sizes: ['Free Size'],
    colors: ['Emerald Green', 'Forest Green'],
    inStock: true,
    rating: 4.8,
    reviews: 156,
    tags: ['New Arrival', 'Office Wear', 'Silk'],
    material: 'Pure Silk',
    occasion: ['Office', 'Casual', 'Party']
  },
  {
    id: 'saree-4',
    name: 'Blush Pink Organza Saree',
    description: 'Delicate blush pink organza saree with silver sequin work and intricate embroidery. Lightweight and perfect for summer weddings and daytime events.',
    price: 8999,
    category: 'saree',
    image: '/images/saree-4.jpg',
    images: ['/images/saree-4.jpg'],
    sizes: ['Free Size'],
    colors: ['Blush Pink', 'Peach'],
    inStock: true,
    rating: 4.7,
    reviews: 203,
    tags: ['Trending', 'Lightweight', 'Organza'],
    material: 'Pure Organza',
    occasion: ['Day Wedding', 'Brunch', 'Cocktail']
  },
  {
    id: 'saree-5',
    name: 'Maroon Temple Border Saree',
    description: 'Traditional maroon silk saree with authentic gold temple border and heavy zari work. A timeless piece for the quintessential Indian woman.',
    price: 18999,
    originalPrice: 21999,
    category: 'saree',
    image: '/images/saree-5.jpg',
    images: ['/images/saree-5.jpg'],
    sizes: ['Free Size'],
    colors: ['Maroon', 'Wine'],
    inStock: true,
    rating: 4.9,
    reviews: 112,
    tags: ['Traditional', 'Temple Border', 'Silk'],
    material: 'Pure Silk with Gold Zari',
    occasion: ['Wedding', 'Festive', 'Pooja']
  },
  {
    id: 'saree-6',
    name: 'Ivory Gold Tissue Saree',
    description: 'Elegant ivory and gold tissue silk saree with delicate gold border. Perfect for reception parties and elegant evening gatherings.',
    price: 11499,
    category: 'saree',
    image: '/images/saree-6.jpg',
    images: ['/images/saree-6.jpg'],
    sizes: ['Free Size'],
    colors: ['Ivory', 'Cream'],
    inStock: true,
    rating: 4.8,
    reviews: 167,
    tags: ['Elegant', 'Reception', 'Tissue Silk'],
    material: 'Tissue Silk',
    occasion: ['Reception', 'Evening Party', 'Formal']
  },

  // KURTIS
  {
    id: 'kurti-1',
    name: 'Mustard Mirror Work Anarkali',
    description: 'Stunning mustard yellow Anarkali kurti with intricate mirror work and gold embroidery. Floor-length design with matching dupatta for a royal look.',
    price: 7499,
    originalPrice: 8999,
    category: 'kurti',
    image: '/images/kurti-1.jpg',
    images: ['/images/kurti-1.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Mustard', 'Yellow'],
    inStock: true,
    rating: 4.8,
    reviews: 234,
    tags: ['Bestseller', 'Festive', 'Anarkali'],
    material: 'Georgette with Embroidery',
    occasion: ['Wedding', 'Festive', 'Sangeet']
  },
  {
    id: 'kurti-2',
    name: 'Coral Block Print Kurti',
    description: 'Beautiful coral peach straight cut kurti with delicate floral block print and gota patti work. Paired with white palazzo pants for a chic ethnic look.',
    price: 3499,
    category: 'kurti',
    image: '/images/kurti-2.jpg',
    images: ['/images/kurti-2.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Coral', 'Peach'],
    inStock: true,
    rating: 4.6,
    reviews: 189,
    tags: ['Casual', 'Office Wear', 'Cotton'],
    material: 'Cotton with Block Print',
    occasion: ['Office', 'Casual', 'Daily Wear']
  },
  {
    id: 'kurti-3',
    name: 'Royal Purple Zardozi Anarkali',
    description: 'Majestic floor-length Anarkali in royal purple silk with heavy zardozi embroidery and stone work. Perfect for weddings and grand celebrations.',
    price: 12499,
    originalPrice: 14999,
    category: 'kurti',
    image: '/images/kurti-3.jpg',
    images: ['/images/kurti-3.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Royal Purple', 'Violet'],
    inStock: true,
    rating: 4.9,
    reviews: 98,
    tags: ['Premium', 'Wedding', 'Zardozi'],
    material: 'Silk with Zardozi Work',
    occasion: ['Wedding', 'Reception', 'Grand Events']
  },
  {
    id: 'kurti-4',
    name: 'Teal Chikankari Short Kurti',
    description: 'Contemporary teal green short kurti with white chikankari embroidery. Perfect fusion wear when paired with jeans for a modern ethnic look.',
    price: 2499,
    category: 'kurti',
    image: '/images/kurti-4.jpg',
    images: ['/images/kurti-4.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Teal', 'Green'],
    inStock: true,
    rating: 4.5,
    reviews: 312,
    tags: ['Fusion', 'Casual', 'Chikankari'],
    material: 'Cotton with Chikankari',
    occasion: ['Casual', 'College', 'Outing']
  },
  {
    id: 'kurti-5',
    name: 'Indigo Ajrakh Print Kurti',
    description: 'Artisanal indigo blue cotton kurti with traditional Ajrakh hand block print and tassel details. Celebrating Indian craft heritage.',
    price: 4299,
    category: 'kurti',
    image: '/images/kurti-5.jpg',
    images: ['/images/kurti-5.jpg'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Indigo', 'Blue'],
    inStock: true,
    rating: 4.7,
    reviews: 145,
    tags: ['Handcrafted', 'Artisanal', 'Ajrakh'],
    material: 'Cotton with Ajrakh Print',
    occasion: ['Casual', 'Festive', 'Cultural']
  },
  {
    id: 'kurti-6',
    name: 'Wine Red Sequin Sharara Set',
    description: 'Glamorous wine red kurti with heavy sequin work and bead embroidery, paired with matching sharara pants and dupatta. Perfect for wedding festivities.',
    price: 9499,
    originalPrice: 11499,
    category: 'kurti',
    image: '/images/kurti-6.jpg',
    images: ['/images/kurti-6.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Wine Red', 'Maroon'],
    inStock: true,
    rating: 4.8,
    reviews: 178,
    tags: ['Party Wear', 'Sequin', 'Sharara'],
    material: 'Georgette with Sequin Work',
    occasion: ['Sangeet', 'Mehendi', 'Wedding']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: 'saree' | 'kurti'): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.tags.includes('Bestseller') || p.tags.includes('New Arrival')).slice(0, 8);
};
