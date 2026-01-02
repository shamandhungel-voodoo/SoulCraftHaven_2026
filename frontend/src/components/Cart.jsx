import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Home, Package, Truck } from "lucide-react";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (productId, change) => {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
      const newQuantity = item.quantity + change;
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="w-16 h-16 text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Your cart is empty</h2>
          <p className="text-purple-700 mb-8 max-w-md">
            Looks like you haven't added any handmade treasures to your cart yet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/shop"
              className="px-8 py-3 border-2 border-purple-300 text-purple-700 rounded-full font-medium hover:bg-purple-50 transition-colors duration-300 inline-flex items-center gap-2"
            >
              <Package className="w-5 h-5" />
              Browse Products
            </Link>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center border border-purple-100">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-purple-900 mb-2">Free Shipping</h3>
            <p className="text-purple-700 text-sm">On orders over $50</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center border border-purple-100">
            <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-purple-900 mb-2">Handmade Quality</h3>
            <p className="text-purple-700 text-sm">Each piece is unique</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center border border-purple-100">
            <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-purple-900 mb-2">Easy Returns</h3>
            <p className="text-purple-700 text-sm">30-day return policy</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">Your Shopping Cart</h1>
      <p className="text-purple-600 mb-8">{cartItems.length} items in your cart</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200"
            >
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Product Image */}
                <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-purple-900 truncate">
                      {item.title}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-purple-600 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-purple-700 mb-4 line-clamp-2 text-sm">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center hover:bg-purple-200 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        
                        <span className="text-lg font-medium text-purple-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center hover:bg-purple-200 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <span className="text-lg font-bold text-purple-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="text-sm text-purple-600">
                      ${item.price.toFixed(2)} each
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-b from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-purple-200 sticky top-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-purple-700">
                <span>Subtotal</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-purple-700">
                <span>Shipping</span>
                <span className="font-medium">$5.99</span>
              </div>
              
              <div className="flex justify-between text-purple-700">
                <span>Tax (8%)</span>
                <span className="font-medium">${(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="border-t border-purple-200 pt-4">
                <div className="flex justify-between text-xl font-bold text-purple-900">
                  <span>Total</span>
                  <span>
                    ${(getTotalPrice() + 5.99 + (getTotalPrice() * 0.08)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mb-4"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={clearCart}
              className="w-full py-3 border-2 border-purple-300 text-purple-700 rounded-xl font-medium hover:bg-purple-50 transition-colors duration-300"
            >
              Clear Cart
            </button>
            
            <div className="mt-6 pt-6 border-t border-purple-200">
              <h3 className="font-medium text-purple-900 mb-3">Secure Shopping</h3>
              <p className="text-sm text-purple-600">
                Your payment information is encrypted and secure. We never store your credit card details.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-purple-200">
              <h3 className="font-medium text-purple-900 mb-3">Need Help?</h3>
              <div className="space-y-2 text-sm text-purple-600">
                <p>Email: support@soulcrafthaven.com</p>
                <p>Phone: 1-800-SOULCRAFT</p>
                <p>Hours: Mon-Fri 9am-6pm EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Shopping Section */}
      <div className="mt-12 pt-8 border-t border-purple-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-purple-900 mb-2">Continue Shopping</h3>
            <p className="text-purple-600">Discover more handmade treasures</p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/shop"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Browse All Products
            </Link>
            <Link
              to="/categories"
              className="px-6 py-3 border-2 border-purple-300 text-purple-700 rounded-full font-medium hover:bg-purple-50 transition-colors duration-300"
            >
              View Categories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;