import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Filter, Search, Grid, List, ChevronDown, X } from "lucide-react";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Extract unique categories
  const categories = [...new Set(products.map(p => p.category))];

  // Apply filters
  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (search) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [search, sortBy, priceRange, selectedCategories]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSortBy("featured");
    setPriceRange([0, 100]);
    setSelectedCategories([]);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 bg-clip-text text-transparent font-serif italic text-center">
          Discover Our Handmade Collection
        </h1>
        <p className="text-purple-600 text-center mt-2">
          {filteredProducts.length} unique handmade items found
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar - Mobile */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium"
        >
          <Filter className="w-5 h-5" />
          {showFilters ? "Hide Filters" : "Show Filters"}
          <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </button>

        {/* Filters Sidebar - Desktop */}
        <div className={`lg:block ${showFilters ? "block" : "hidden"} lg:w-1/4`}>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-purple-900">Filters</h2>
              <button
                onClick={clearFilters}
                className="text-sm text-purple-600 hover:text-purple-800 flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-700 mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-purple-600 mt-1">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-700 mb-2">Categories</label>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded border-purple-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-purple-700">{category}</span>
                    <span className="ml-auto text-sm text-purple-500">
                      ({products.filter(p => p.category === category).length})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Active Filters */}
            {selectedCategories.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-purple-700 mb-2">Active Filters</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map(category => (
                    <span
                      key={category}
                      className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                    >
                      {category}
                      <button
                        onClick={() => toggleCategory(category)}
                        className="hover:text-purple-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Controls */}
          <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-purple-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-purple-700">
                Showing <span className="font-bold">{filteredProducts.length}</span> products
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <span className="text-purple-700">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-purple-200 rounded-lg px-3 py-2 text-purple-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-purple-100 text-purple-700" : "text-purple-400"}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg ${viewMode === "list" ? "bg-purple-100 text-purple-700" : "text-purple-400"}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-purple-100">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">No products found</h3>
              <p className="text-purple-600 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={clearFilters}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
              {filteredProducts.map(product => (
                viewMode === "grid" ? (
                  <ProductCard key={product.id} product={product} />
                ) : (
                  <div key={product.id} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-48 h-48 rounded-xl overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-purple-900">{product.title}</h3>
                          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            ${product.price}
                          </span>
                        </div>
                        <p className="text-purple-700 mb-4">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                              {product.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <span className="text-amber-500">★</span>
                              <span className="text-purple-700">{product.rating}</span>
                              <span className="text-purple-400">({product.reviewCount})</span>
                            </div>
                          </div>
                          <Link
                            to={`/product/${product.id}`}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center mt-8">
              <nav className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50">
                  ←
                </button>
                {[1, 2, 3].map(page => (
                  <button
                    key={page}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg ${page === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'border border-purple-200 text-purple-700 hover:bg-purple-50'}`}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-purple-200 text-purple-700 hover:bg-purple-50">
                  →
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;