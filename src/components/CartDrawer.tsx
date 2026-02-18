import { Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-white border-l border-[#7CB69D]/20">
        <SheetHeader className="space-y-2.5 pb-4">
          <SheetTitle className="flex items-center gap-2 text-xl font-semibold text-[#2D5A4A]">
            <ShoppingBag className="h-5 w-5" />
            Shopping Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
            <ShoppingBag className="h-16 w-16 text-[#7CB69D]" />
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <Button 
              onClick={() => setIsCartOpen(false)}
              className="bg-[#2D5A4A] hover:bg-[#1E3D31] text-white"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 h-[calc(100vh-280px)]">
              <div className="space-y-4 pr-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-[#F8F6F1] rounded-lg border border-[#7CB69D]/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                      <p className="text-sm text-gray-500">Color: {item.color}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full border border-[#7CB69D] hover:bg-[#7CB69D]/10 transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center rounded-full border border-[#7CB69D] hover:bg-[#7CB69D]/10 transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="font-semibold text-[#2D5A4A]">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors self-start"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-[#7CB69D]/20">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{totalPrice > 5000 ? 'Free' : 'Rs.199'}</span>
                </div>
                <Separator className="bg-[#7CB69D]/20" />
                <div className="flex justify-between text-lg font-semibold text-[#2D5A4A]">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice > 5000 ? totalPrice : totalPrice + 199)}</span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-[#2D5A4A] hover:bg-[#1E3D31] text-white py-6 text-lg font-medium"
              >
                Proceed to Checkout
              </Button>
              <p className="text-center text-xs text-[#7CB69D] mt-2">
                Free shipping on orders above Rs.5,000
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
