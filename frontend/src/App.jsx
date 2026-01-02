import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Categories from './pages/Categories'
import Artists from './pages/Artists'
import Checkout from './pages/Checkout'
import PaymentSuccess from './pages/PaymentSuccess'
import './index.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-amber-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
            </Routes>
          </main>
          
          {/* Footer - UPDATED */}
          <footer className="mt-12 pt-8 pb-6 border-t border-purple-200 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-amber-500 p-1">
                    <img 
                      src="https://res.cloudinary.com/dphier2de/image/upload/v1766091227/ChatGPT_Image_Dec_15_2025_11_05_54_PM_bclvf2.png"
                      alt="SoulCraftHaven Logo"
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 bg-clip-text text-transparent font-['Playfair_Display'] italic">
                      SoulCraftHaven
                    </h3>
                    <p className="text-purple-600 text-sm mt-1">Premium Artisan Marketplace</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8">
                  <div>
                    <h4 className="font-bold text-purple-900 mb-3">Explore</h4>
                    <div className="space-y-2 text-purple-600">
                      <div><a href="/shop" className="hover:text-purple-800 hover:font-medium transition-colors">Shop</a></div>
                      <div><a href="/categories" className="hover:text-purple-800 hover:font-medium transition-colors">Categories</a></div>
                      <div><a href="/artists" className="hover:text-purple-800 hover:font-medium transition-colors">Artists</a></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-purple-900 mb-3">Support</h4>
                    <div className="space-y-2 text-purple-600">
                      <div><a href="#" className="hover:text-purple-800 hover:font-medium transition-colors">Contact Us</a></div>
                      <div><a href="#" className="hover:text-purple-800 hover:font-medium transition-colors">FAQ</a></div>
                      <div><a href="#" className="hover:text-purple-800 hover:font-medium transition-colors">Shipping Policy</a></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-purple-900 mb-3">Legal</h4>
                    <div className="space-y-2 text-purple-600">
                      <div><a href="#" className="hover:text-purple-800 hover:font-medium transition-colors">Privacy Policy</a></div>
                      <div><a href="#" className="hover:text-purple-800 hover:font-medium transition-colors">Terms of Service</a></div>
                      <div><a href="#" className="hover:text-purple-800 hover:font-medium transition-colors">Cookie Policy</a></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-purple-100 text-center">
                <p className="text-purple-700 font-medium">
                  © Copyright Shaman Dhungel 2025. All rights reserved.
                </p>
                <p className="text-purple-500 text-sm mt-2">
                  Handcrafted excellence delivered worldwide
                </p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App