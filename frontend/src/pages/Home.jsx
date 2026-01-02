import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Search, Heart, Star, Palette, Globe, Shield } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="space-y-8">
      {/* Hero Section - SoulCraftHaven Theme */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-6">
            <Palette className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Welcome to <span className="font-serif italic">SoulCraftHaven</span>
          </h1>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Discover unique handmade crafts where every piece tells a story
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search handmade crafts, art, vintage items..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-purple-300 focus:border-pink-500 focus:outline-none shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-amber-900/10"></div>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSearch("")}
          className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
            search === "" 
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" 
            : "bg-purple-100 text-purple-800 hover:bg-purple-200"
          }`}
        >
          <span>🎨</span> All Crafts
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSearch(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              search === category 
              ? "bg-gradient-to-r from-pink-500 to-amber-500 text-white shadow-lg" 
              : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6 text-center">
          ✨ Handcrafted Treasures ✨
        </h2>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-purple-400" />
            </div>
            <p className="text-purple-700 text-lg">No crafts found. Try a different search!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Features Section - SoulCraftHaven Theme */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl text-center border border-purple-200 shadow-sm">
          <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-lg font-bold text-purple-900 mb-2">Handmade with Soul</h3>
          <p className="text-purple-700 text-sm">Every piece carries the artist's passion and story</p>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-amber-50 p-6 rounded-2xl text-center border border-pink-200 shadow-sm">
          <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-lg font-bold text-purple-900 mb-2">Global Artisans</h3>
          <p className="text-purple-700 text-sm">Support artists from diverse cultures and traditions</p>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl text-center border border-amber-200 shadow-sm">
          <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-lg font-bold text-purple-900 mb-2">Secure & Ethical</h3>
          <p className="text-purple-700 text-sm">Fair pricing and secure transactions</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">
          Ready to discover your next treasure?
        </h3>
        <p className="text-purple-700 mb-6">
          Browse our collection of unique handmade crafts
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Palette className="w-5 h-5" />
          Explore All Crafts
        </Link>
      </div>
    </div>
  );
}