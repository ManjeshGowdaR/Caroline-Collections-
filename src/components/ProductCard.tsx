import { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useCart } from '../context/CartContext';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    });
    setIsQuickViewOpen(false);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <>
      <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#7CB69D]/20 card-hover-green">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.tags.slice(0, 2).map((tag) => (
              <Badge 
                key={tag} 
                className={`text-xs font-medium ${
                  tag === 'Bestseller' ? 'bg-[#C9A86A] text-[#1E3D31]' :
                  tag === 'New Arrival' ? 'bg-[#2D5A4A] text-white' :
                  tag === 'Sale' ? 'bg-red-500 text-white' :
                  'bg-[#7CB69D] text-[#1E3D31]'
                }`}
              >
                {tag}
              </Badge>
            ))}
            {discount && (
              <Badge className="bg-red-500 text-white text-xs font-medium">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:bg-[#7CB69D]/10"
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${isWishlisted ? 'fill-[#2D5A4A] text-[#2D5A4A]' : 'text-gray-600'}`} 
            />
          </button>

          {/* Quick Actions Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#1E3D31]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
              <Button
                onClick={() => setIsQuickViewOpen(true)}
                variant="secondary"
                className="flex-1 bg-white/90 hover:bg-white text-[#2D5A4A] text-sm"
              >
                <Eye className="h-4 w-4 mr-2" />
                Quick View
              </Button>
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-[#2D5A4A] hover:bg-[#1E3D31] text-white text-sm"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs text-[#7CB69D] uppercase tracking-wide mb-1">
            {product.category === 'saree' ? 'Saree' : 'Kurti'}
          </p>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-1 group-hover:text-[#2D5A4A] transition-colors">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-3.5 w-3.5 fill-[#C9A86A] text-[#C9A86A]" />
            <span className="text-sm text-gray-600">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-[#2D5A4A]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Dialog */}
      <Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="aspect-square bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-6 flex flex-col">
              <DialogHeader>
                <p className="text-sm text-[#7CB69D] uppercase tracking-wide mb-1">
                  {product.category === 'saree' ? 'Saree' : 'Kurti'}
                </p>
                <DialogTitle className="text-2xl font-semibold text-gray-900">
                  {product.name}
                </DialogTitle>
              </DialogHeader>

              <div className="flex items-center gap-2 my-3">
                <Star className="h-4 w-4 fill-[#C9A86A] text-[#C9A86A]" />
                <span className="text-gray-600">{product.rating}</span>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold text-[#2D5A4A]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <Badge className="bg-red-500 text-white">
                      -{discount}% OFF
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {product.description}
              </p>

              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div className="mb-4">
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Size: {selectedSize}
                  </Label>
                  <RadioGroup 
                    value={selectedSize} 
                    onValueChange={setSelectedSize}
                    className="flex flex-wrap gap-2"
                  >
                    {product.sizes.map((size) => (
                      <div key={size}>
                        <RadioGroupItem
                          value={size}
                          id={`size-${size}`}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={`size-${size}`}
                          className="px-4 py-2 border rounded-md cursor-pointer peer-data-[state=checked]:bg-[#2D5A4A] peer-data-[state=checked]:text-white peer-data-[state=checked]:border-[#2D5A4A] hover:border-[#2D5A4A] transition-colors text-sm"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Color Selection */}
              {product.colors.length > 1 && (
                <div className="mb-4">
                  <Label className="text-sm font-medium text-gray-700 mb-2 block">
                    Color: {selectedColor}
                  </Label>
                  <RadioGroup 
                    value={selectedColor} 
                    onValueChange={setSelectedColor}
                    className="flex flex-wrap gap-2"
                  >
                    {product.colors.map((color) => (
                      <div key={color}>
                        <RadioGroupItem
                          value={color}
                          id={`color-${color}`}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={`color-${color}`}
                          className="px-4 py-2 border rounded-md cursor-pointer peer-data-[state=checked]:bg-[#2D5A4A] peer-data-[state=checked]:text-white peer-data-[state=checked]:border-[#2D5A4A] hover:border-[#2D5A4A] transition-colors text-sm"
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              {/* Material & Occasion */}
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Material:</span> {product.material}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Occasion:</span> {product.occasion.join(', ')}
                </p>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                className="w-full bg-[#2D5A4A] hover:bg-[#1E3D31] text-white py-6 text-lg font-medium mt-auto"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
