// src/pages/PaymentSuccess.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';

const PaymentSuccess = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-12 px-4">
      <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-white" />
      </div>
      
      <h1 className="text-4xl font-bold text-purple-900 mb-4">Order Confirmed!</h1>
      <p className="text-xl text-purple-600 mb-8 max-w-2xl mx-auto">
        Thank you for your purchase! Your order has been received and is being processed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-bold text-purple-900 mb-2">Order Processing</h3>
          <p className="text-sm text-purple-600">Your order is being prepared</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Truck className="w-6 h-6 text-pink-600" />
          </div>
          <h3 className="font-bold text-purple-900 mb-2">Shipping Soon</h3>
          <p className="text-sm text-purple-600">Will ship in 1-2 business days</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="font-bold text-purple-900 mb-2">Delivery</h3>
          <p className="text-sm text-purple-600">Expected in 3-7 business days</p>
        </div>
      </div>

      <div className="space-y-4 max-w-sm mx-auto">
        <Link
          to="/"
          className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
        >
          <Home className="w-5 h-5 inline mr-2" />
          Continue Shopping
        </Link>
        <Link
          to="/shop"
          className="block w-full py-3 border-2 border-purple-200 text-purple-700 rounded-xl font-medium hover:bg-purple-50 transition-colors"
        >
          Browse More Products
        </Link>
      </div>

      <p className="text-sm text-purple-400 mt-8">
        A confirmation email has been sent to your registered email address
      </p>
    </div>
  );
};

export default PaymentSuccess;