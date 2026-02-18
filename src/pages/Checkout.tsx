import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Check, Shield, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useCart } from '../context/CartContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'shipping' | 'payment' | 'success'>('shipping');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const shippingCost = totalPrice > 5000 ? 0 : 199;
  const total = totalPrice + shippingCost;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    const newOrderId = 'CC' + Date.now().toString().slice(-8);
    setOrderId(newOrderId);
    setIsOrderPlaced(true);
    clearCart();
  };

  const handleCloseSuccess = () => {
    navigate('/');
  };

  if (items.length === 0 && !isOrderPlaced) {
    return (
      <div className="min-h-screen bg-[#F8F6F1] pt-24 pb-16">
        <div className="container mx-auto px-4 text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="h-10 w-10 text-[#7CB69D]" />
            </div>
            <h2 className="text-2xl font-semibold text-[#1E3D31] mb-4">
              Your cart is empty
            </h2>
            <p className="text-[#7CB69D] mb-8">
              Add some products to your cart before proceeding to checkout
            </p>
            <Link to="/shop">
              <Button className="bg-[#2D5A4A] hover:bg-[#1E3D31] text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F1] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#7CB69D] mb-6">
          <Link to="/" className="hover:text-[#2D5A4A]">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#2D5A4A]">Shop</Link>
          <span>/</span>
          <span className="text-[#2D5A4A]">Checkout</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => step === 'payment' ? setStep('shipping') : navigate(-1)}
            className="p-2 hover:bg-[#7CB69D]/10 rounded-full transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-[#2D5A4A]" />
          </button>
          <h1 className="text-3xl font-serif font-bold text-[#1E3D31]">Checkout</h1>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-4 mb-10 max-w-2xl">
          <div className={`flex items-center gap-2 ${step === 'shipping' ? 'text-[#2D5A4A]' : 'text-[#7CB69D]'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'shipping' ? 'bg-[#2D5A4A] text-white' : 'bg-[#7CB69D]/20 text-[#2D5A4A]'}`}>
              <MapPin className="h-4 w-4" />
            </div>
            <span className="font-medium hidden sm:inline">Shipping</span>
          </div>
          <div className="flex-1 h-1 bg-[#7CB69D]/20 rounded">
            <div className={`h-full bg-[#2D5A4A] rounded transition-all ${step === 'payment' || step === 'success' ? 'w-full' : 'w-0'}`} />
          </div>
          <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-[#2D5A4A]' : 'text-[#7CB69D]'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 'payment' ? 'bg-[#2D5A4A] text-white' : 'bg-[#7CB69D]/20 text-[#2D5A4A]'}`}>
              <CreditCard className="h-4 w-4" />
            </div>
            <span className="font-medium hidden sm:inline">Payment</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 'shipping' ? (
              <form onSubmit={handleShippingSubmit} className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-[#7CB69D]/10">
                <h2 className="text-xl font-semibold text-[#1E3D31] mb-6">
                  Shipping Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-[#2D5A4A]">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#2D5A4A]">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#2D5A4A]">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[#2D5A4A]">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address" className="text-[#2D5A4A]">Address *</Label>
                    <Input
                      id="address"
                      required
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                      placeholder="123, Main Street, Apartment 4B"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-[#2D5A4A]">City *</Label>
                    <Input
                      id="city"
                      required
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                      placeholder="Bangalore"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-[#2D5A4A]">State *</Label>
                    <Input
                      id="state"
                      required
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                      placeholder="Karnataka"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode" className="text-[#2D5A4A]">PIN Code *</Label>
                    <Input
                      id="pincode"
                      required
                      value={shippingInfo.pincode}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                      placeholder="560001"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full mt-8 bg-[#2D5A4A] hover:bg-[#1E3D31] text-white py-6"
                >
                  Continue to Payment
                </Button>
              </form>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-[#7CB69D]/10">
                <h2 className="text-xl font-semibold text-[#1E3D31] mb-6">
                  Payment Method
                </h2>

                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-[#2D5A4A] bg-[#2D5A4A]/5' : 'border-[#7CB69D]/20'}`}>
                    <RadioGroupItem value="card" id="card" className="border-[#7CB69D] text-[#2D5A4A]" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-[#2D5A4A]" />
                        <span className="font-medium text-[#1E3D31]">Credit/Debit Card</span>
                      </div>
                      <p className="text-sm text-[#7CB69D] mt-1 ml-8">
                        Visa, Mastercard, RuPay
                      </p>
                    </div>
                  </label>

                  <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${paymentMethod === 'upi' ? 'border-[#2D5A4A] bg-[#2D5A4A]/5' : 'border-[#7CB69D]/20'}`}>
                    <RadioGroupItem value="upi" id="upi" className="border-[#7CB69D] text-[#2D5A4A]" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-[#2D5A4A]" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        <span className="font-medium text-[#1E3D31]">UPI</span>
                      </div>
                      <p className="text-sm text-[#7CB69D] mt-1 ml-8">
                        Google Pay, PhonePe, Paytm
                      </p>
                    </div>
                  </label>

                  <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-[#2D5A4A] bg-[#2D5A4A]/5' : 'border-[#7CB69D]/20'}`}>
                    <RadioGroupItem value="cod" id="cod" className="border-[#7CB69D] text-[#2D5A4A]" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Truck className="h-5 w-5 text-[#2D5A4A]" />
                        <span className="font-medium text-[#1E3D31]">Cash on Delivery</span>
                      </div>
                      <p className="text-sm text-[#7CB69D] mt-1 ml-8">
                        Pay when you receive
                      </p>
                    </div>
                  </label>
                </RadioGroup>

                {paymentMethod === 'card' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label className="text-[#2D5A4A]">Card Number</Label>
                      <Input 
                        placeholder="1234 5678 9012 3456" 
                        className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-[#2D5A4A]">Expiry Date</Label>
                        <Input placeholder="MM/YY" className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]" />
                      </div>
                      <div>
                        <Label className="text-[#2D5A4A]">CVV</Label>
                        <Input placeholder="123" className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]" type="password" maxLength={3} />
                      </div>
                    </div>
                    <div>
                      <Label className="text-[#2D5A4A]">Cardholder Name</Label>
                      <Input placeholder="Name on card" className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]" />
                    </div>
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="mt-6">
                    <Label className="text-[#2D5A4A]">UPI ID</Label>
                    <Input 
                      placeholder="yourname@upi" 
                      className="mt-2 border-[#7CB69D]/30 focus:border-[#2D5A4A] focus:ring-[#2D5A4A]"
                    />
                  </div>
                )}

                <div className="flex items-center gap-4 mt-8">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setStep('shipping')}
                    className="flex-1 border-[#7CB69D] text-[#2D5A4A]"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 bg-[#2D5A4A] hover:bg-[#1E3D31] text-white py-6"
                  >
                    Place Order
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24 border border-[#7CB69D]/10">
              <h3 className="text-lg font-semibold text-[#1E3D31] mb-4">
                Order Summary
              </h3>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-[#1E3D31] line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-[#7CB69D]">
                        {item.color} / {item.size}
                      </p>
                      <p className="text-xs text-[#7CB69D]">
                        Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-medium text-[#2D5A4A]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4 bg-[#7CB69D]/20" />

              {/* Totals */}
              <div className="space-y-3">
                <div className="flex justify-between text-[#7CB69D]">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-[#7CB69D]">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between text-[#7CB69D]">
                  <span>Tax (GST)</span>
                  <span>Included</span>
                </div>
                <Separator className="bg-[#7CB69D]/20" />
                <div className="flex justify-between text-lg font-semibold text-[#1E3D31]">
                  <span>Total</span>
                  <span className="text-[#2D5A4A]">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-2 mt-6 p-3 bg-[#7CB69D]/10 rounded-lg">
                <Shield className="h-5 w-5 text-[#2D5A4A]" />
                <span className="text-sm text-[#2D5A4A]">
                  Secure checkout guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={isOrderPlaced} onOpenChange={handleCloseSuccess}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <div className="w-20 h-20 bg-[#7CB69D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-10 w-10 text-[#2D5A4A]" />
            </div>
            <DialogTitle className="text-2xl font-semibold text-[#1E3D31]">
              Order Placed Successfully!
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-4">
            <p className="text-[#7CB69D] mb-2">
              Thank you for shopping with Caroline Collections
            </p>
            <p className="text-lg font-medium text-[#2D5A4A]">
              Order ID: {orderId}
            </p>
            <p className="text-sm text-[#7CB69D] mt-2">
              A confirmation email has been sent to {shippingInfo.email}
            </p>
          </div>

          <div className="bg-[#F8F6F1] rounded-lg p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-[#7CB69D]">Order Total:</span>
              <span className="font-semibold text-[#1E3D31]">{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7CB69D]">Payment Method:</span>
              <span className="font-medium text-[#1E3D31]">
                {paymentMethod === 'card' ? 'Credit/Debit Card' : 
                 paymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery'}
              </span>
            </div>
          </div>

          <Button 
            onClick={handleCloseSuccess}
            className="w-full bg-[#2D5A4A] hover:bg-[#1E3D31] text-white"
          >
            Continue Shopping
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
