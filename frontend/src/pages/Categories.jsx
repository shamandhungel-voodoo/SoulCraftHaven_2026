import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { Palette, Home, Coffee, Diamond, Shirt, Book, ShoppingBag, Heart, Globe, Award, Users, Flame } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Home Decor",
      icon: <Home className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      count: products.filter(p => p.category === "Home Decor").length,
      description: "Beautiful pieces to enhance your living space"
    },
    {
      name: "Kitchen & Dining",
      icon: <Coffee className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      count: products.filter(p => p.category === "Kitchen & Dining").length,
      description: "Handcrafted kitchenware and dining essentials"
    },
    {
      name: "Jewelry",
      icon: <Diamond className="w-8 h-8" />,
      color: "from-blue-500 to-teal-500",
      count: products.filter(p => p.category === "Jewelry").length,
      description: "Unique handmade jewelry pieces"
    },
    {
      name: "Fashion",
      icon: <Shirt className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      count: products.filter(p => p.category === "Fashion").length,
      description: "Artisanal clothing and accessories"
    },
    {
      name: "Art & Craft",
      icon: <Palette className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      count: products.filter(p => p.category === "Home Decor" || p.category === "Craft").length,
      description: "Original artwork and craft supplies"
    },
    {
      name: "Stationery",
      icon: <Book className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      count: products.filter(p => p.category === "Stationery").length,
      description: "Handmade paper goods and writing tools"
    },
    {
      name: "Wellness",
      icon: <Flame className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500",
      count: products.filter(p => p.category === "Home Fragrance").length,
      description: "Self-care and wellness products"
    },
    {
      name: "Baby & Kids",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-400 to-purple-400",
      count: products.filter(p => p.category === "Baby & Kids").length,
      description: "Handcrafted items for children"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategoryProducts = (categoryName) => {
    return products.filter(p => {
      if (categoryName === "Art & Craft") {
        return p.category === "Home Decor" || p.category === "Craft";
      }
      return p.category === categoryName;
    }).slice(0, 4);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 bg-clip-text text-transparent font-serif italic mb-4">
          Explore by Category
        </h1>
        <p className="text-purple-600 text-lg max-w-3xl mx-auto">
          Discover unique handmade crafts organized by category. Each piece tells a story of passion and creativity.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => setSelectedCategory(category.name === selectedCategory ? null : category.name)}
            className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-2 ${selectedCategory === category.name ? 'border-purple-400' : 'border-purple-100'}`}
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 mx-auto`}>
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-purple-900 text-center mb-2">{category.name}</h3>
            <p className="text-purple-600 text-center text-sm mb-4">{category.description}</p>
            <div className="text-center">
              <span className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                {category.count} items
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Category Details */}
      {selectedCategory && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-12 border border-purple-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-2">
                {selectedCategory} Collection
              </h2>
              <p className="text-purple-600">
                Explore our curated selection of handmade {selectedCategory.toLowerCase()} items
              </p>
            </div>
            <Link
              to={`/shop?category=${selectedCategory}`}
              className="mt-4 md:mt-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop All {selectedCategory}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getCategoryProducts(selectedCategory).map(product => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-purple-900 mb-1 line-clamp-1">{product.title}</h4>
                <p className="text-purple-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-700">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-500">★</span>
                    <span className="text-purple-700 text-sm">{product.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Featured Categories */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">Popular Categories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=400&fit=crop"
              alt="Home Decor"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Home Decor</h3>
                <p className="text-purple-100">Transform your space with unique pieces</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0c6e4d6d6c0?w=800&h=400&fit=crop"
              alt="Jewelry"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Handmade Jewelry</h3>
                <p className="text-pink-100">Wearable art that tells your story</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop"
              alt="Textiles"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Textiles & Fabrics</h3>
                <p className="text-amber-100">Woven with tradition and care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 rounded-3xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
          Request a custom handmade piece from our talented community of artisans. We'll connect you directly with creators who can bring your vision to life.
        </p>
        <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors duration-300">
          Request Custom Order
        </button>
      </div>
    </div>
  );
};

export default Categories;