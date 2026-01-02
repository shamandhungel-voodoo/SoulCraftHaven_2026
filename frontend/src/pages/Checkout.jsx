import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Lock, Shield, CreditCard, Truck, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardName, setCardName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [showPayPalPopup, setShowPayPalPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const totalAmount = getTotalPrice() + 5.99 + (getTotalPrice() * 0.08);

  const handleCardSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessPopup(true);
      clearCart();
    }, 2000);
  };

  const handlePayPalPayment = () => {
    setIsProcessing(true);
    setShowPayPalPopup(true);
    
    // Simulate PayPal processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessPopup(true);
      clearCart();
    }, 3000);
  };

  const handleSuccess = () => {
    setShowSuccessPopup(false);
    navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/cart" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Cart
      </Link>

      <h1 className="text-4xl font-bold text-purple-900 mb-2">Secure Checkout</h1>
      <p className="text-purple-600 mb-8">Complete your purchase with confidence</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Payment Details */}
        <div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 mb-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">Payment Method</h2>
            
            {/* Payment Method Selector */}
            <div className="space-y-4 mb-8">
              <label className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === "card" ? 'border-purple-500 bg-purple-50' : 'border-purple-100 hover:border-purple-300'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === "card" ? 'border-purple-500 bg-purple-500' : 'border-purple-300'}`}>
                      {paymentMethod === "card" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                      <span className="font-medium text-purple-900">Credit/Debit Card</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-5 bg-gray-800 rounded"></div>
                    <div className="w-8 h-5 bg-red-600 rounded"></div>
                    <div className="w-8 h-5 bg-blue-600 rounded"></div>
                  </div>
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="hidden"
                />
              </label>

              <label className={`block p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === "paypal" ? 'border-blue-500 bg-blue-50' : 'border-purple-100 hover:border-purple-300'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${paymentMethod === "paypal" ? 'border-blue-500 bg-blue-500' : 'border-purple-300'}`}>
                      {paymentMethod === "paypal" && <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 text-blue-600">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 5.327a.641.641 0 0 1-.633.54z"/>
                        </svg>
                      </div>
                      <span className="font-medium text-purple-900">PayPal</span>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">Quick & Secure</span>
                </div>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="hidden"
                />
              </label>
            </div>

            {/* Card Payment Form */}
            {paymentMethod === "card" && (
              <form onSubmit={handleCardSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                    <input
                      type="text"
                      placeholder="4242 4242 4242 4242"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim())}
                      maxLength={19}
                      className="w-full pl-12 pr-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      value={cardCVC}
                      onChange={(e) => setCardCVC(e.target.value.replace(/\D/g, ''))}
                      maxLength={3}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Billing Address */}
                <div className="pt-6 border-t border-purple-100">
                  <h3 className="text-lg font-bold text-purple-900 mb-4">Billing Address</h3>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Street Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Payment...
                    </span>
                  ) : (
                    `Pay $${totalAmount.toFixed(2)}`
                  )}
                </button>
              </form>
            )}

            {/* PayPal Payment Button */}
            {paymentMethod === "paypal" && (
              <div>
                <button
                  onClick={handlePayPalPayment}
                  disabled={isProcessing}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connecting to PayPal...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 5.327a.641.641 0 0 1-.633.54z"/>
                      </svg>
                      Pay with PayPal
                    </span>
                  )}
                </button>
                <p className="text-sm text-purple-500 mt-3 text-center">
                  You'll be redirected to PayPal to complete your payment securely
                </p>
              </div>
            )}
          </div>

          {/* Security Assurance */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="font-bold text-purple-900">Secure Payment Guarantee</h3>
            </div>
            <ul className="space-y-2 text-sm text-purple-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Your payment information is encrypted and secure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>We never store your credit card details</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>SSL secured checkout</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 mb-6">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-purple-900 line-clamp-1">{item.title}</h4>
                      <p className="text-sm text-purple-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-bold text-purple-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-purple-700">
                  <span>Subtotal</span>
                  <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-purple-700">
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    Shipping
                  </span>
                  <span className="font-medium">$5.99</span>
                </div>
                <div className="flex justify-between text-purple-700">
                  <span>Tax (8%)</span>
                  <span className="font-medium">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-purple-200 pt-3">
                  <div className="flex justify-between text-xl font-bold text-purple-900">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Secure Badge */}
              <div className="flex items-center justify-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                <Lock className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Secure SSL Encrypted Payment</span>
              </div>
            </div>

            {/* Need Help */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-purple-100 mb-4">Our support team is here to help with your order</p>
              <a href="mailto:support@soulcrafthaven.com" className="inline-block bg-white text-purple-700 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PayPal Popup Modal */}
      {showPayPalPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full animate-scaleIn">
            <div className="bg-blue-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.973.382-1.055.9l-1.12 5.327a.641.641 0 0 1-.633.54z"/>
                  </svg>
                  PayPal Secure Checkout
                </h3>
                <button onClick={() => setShowPayPalPopup(false)} className="text-white/80 hover:text-white">
                  ✕
                </button>
              </div>
              <p className="text-blue-100">You'll complete your purchase on PayPal's secure platform</p>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-purple-600 text-sm">PayPal Account</p>
                  <p className="font-medium">john.doe@example.com</p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">JD</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-1">Paying to</p>
                <p className="font-bold text-purple-900">SoulCraftHaven</p>
                <div className="flex justify-between mt-3">
                  <span className="text-gray-700">Amount</span>
                  <span className="text-xl font-bold text-purple-900">${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  Log In to PayPal
                </button>
                <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
                  Pay with Debit or Credit Card
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4" />
                  <span>PayPal keeps your financial information secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full animate-scaleIn">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-purple-900 mb-2">Payment Successful!</h3>
              <p className="text-purple-600 mb-6">
                Thank you for your order! Your payment of <span className="font-bold">${totalAmount.toFixed(2)}</span> has been processed successfully.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6">
                <p className="font-medium text-purple-900 mb-1">Order Confirmation</p>
                <p className="text-sm text-purple-600">We've sent a confirmation email with your order details</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleSuccess}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Continue Shopping
                </button>
                <button className="w-full py-3 border-2 border-purple-200 text-purple-700 rounded-xl font-medium hover:bg-purple-50 transition-colors">
                  View Order Details
                </button>
              </div>

              <p className="text-sm text-purple-400 mt-6">
                Your order will be processed and shipped within 1-2 business days
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add animation to CSS */}
      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Checkout;