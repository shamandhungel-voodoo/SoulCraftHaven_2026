import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ShoppingBag, Menu, X, Sparkles, Flower, Heart, Sun, Icon } from "lucide-react";
import { peace } from "@lucide/lab";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: "☮️" },
    { name: "Shop", path: "/shop", icon: "🌸" },
    { name: "Categories", path: "/categories", icon: "🌻" },
    { name: "Artists", path: "/artists", icon: "✌️" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 shadow-xl sticky top-0 z-50 border-b-2 border-purple-200">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo Section - Optimized Size */}
          <Link to="/" className="flex items-center space-x-5 group relative">
            <div className="relative">
              {/* Logo Container - 30% smaller */}
              <div className="w-28 h-28 rounded-full flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-700 relative">
                {/* Background Blending Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200/30 via-pink-200/20 to-amber-200/30 blur-sm"></div>
                
                {/* Logo Image - Blended */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-purple-100/80 via-pink-100/70 to-amber-100/80 p-1.5 shadow-xl">
                  <img 
                    src="https://res.cloudinary.com/dphier2de/image/upload/v1766091227/ChatGPT_Image_Dec_15_2025_11_05_54_PM_bclvf2.png"
                    alt="SoulCraftHaven Logo"
                    className="w-full h-full rounded-full object-cover mix-blend-multiply saturate-125 contrast-125"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/96/8B5CF6/FFFFFF?text=SC";
                    }}
                  />
                </div>
                
                {/* Floating Decorations - Adjusted */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-yellow-300/60 flex items-center justify-center animate-bounce shadow-lg">
                  <Icon iconNode={peace} className="w-6 h-6 text-purple-800" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-pink-300/60 flex items-center justify-center animate-pulse shadow-lg">
                  <Flower className="w-6 h-6 text-pink-800" />
                </div>
              </div>
            </div>
            
            {/* Brand Name */}
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-800 via-pink-700 to-amber-700 bg-clip-text text-transparent font-['Caveat'] italic tracking-tight leading-tight">
                SoulCraftHaven
              </h1>
              <p className="text-sm text-purple-600/90 italic tracking-wider mt-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
                <span className="bg-gradient-to-r from-purple-600/80 to-pink-600/80 bg-clip-text text-transparent font-medium">
                  Artisan Peace & Love Marketplace
                </span>
                <Sun className="w-4 h-4 fill-amber-500 text-amber-500" />
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group/nav px-6 py-3"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl transform group-hover/nav:scale-110 group-hover/nav:rotate-12 transition-all duration-500">
                      {link.icon}
                    </span>
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-800 to-pink-700 bg-clip-text text-transparent group-hover/nav:from-pink-700 group-hover/nav:to-amber-600 transition-all duration-500">
                      {link.name}
                    </span>
                  </div>
                </div>
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 group-hover/nav:w-full transition-all duration-500 rounded-full"></div>
              </Link>
            ))}
          </div>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <Link to="/cart" className="relative group/cart">
              <div className="flex items-center gap-3 bg-gradient-to-br from-purple-100 to-pink-100 px-6 py-3 rounded-full border-2 border-purple-300/70 hover:border-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <div className="relative">
                  <ShoppingBag className="w-7 h-7 text-purple-800 group-hover/cart:text-pink-700 transition-colors duration-300" />
                  
                  {/* Cart Count Badge */}
                  {cartCount > 0 && (
                    <div className="absolute -top-3 -right-3">
                      <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-600 to-pink-700 flex items-center justify-center transform -rotate-12 group-hover/cart:rotate-12 transition-transform duration-500 shadow-lg animate-pulse">
                          <span className="text-white text-sm font-bold">
                            {cartCount}
                          </span>
                          <div className="absolute -top-1 -right-1">
                            <Flower className="w-4 h-4 text-yellow-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-purple-900 font-bold text-lg hidden md:block">
                  Cart
                </span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X className="w-7 h-7 text-purple-800" />
                ) : (
                  <Menu className="w-7 h-7 text-purple-800" />
                )}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon iconNode={peace} className="w-5 h-5 text-amber-600" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-8 pt-8 border-t-2 border-purple-200/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative group/mobile px-6 py-5 rounded-2xl transition-all duration-300 font-semibold text-center border-2 border-purple-200/70 hover:border-transparent shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-purple-50 hover:from-purple-100 hover:to-pink-100"
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className="text-4xl transform group-hover/mobile:scale-110 group-hover/mobile:rotate-12 transition-transform duration-500">
                      {link.icon}
                    </span>
                    <span className="text-xl text-purple-900 font-bold">
                      {link.name}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover/mobile:border-amber-300/70 transition-all duration-300"></div>
                </Link>
              ))}
            </div>
            {/* Peace sign divider */}
            <div className="flex justify-center mt-8 pt-8 border-t border-purple-200/30">
              <div className="flex items-center gap-4 text-purple-700/70">
                <Icon iconNode={peace} className="w-6 h-6" />
                <span className="text-lg italic font-medium">Spread Love & Good Vibes</span>
                <Flower className="w-6 h-6" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom decorative line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-70"></div>
    </nav>
  );
};

export default Navbar;