import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import { ShoppingCart, ChevronLeft, Star, Truck, Shield } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-amber-900">Product not found</h2>
      <Link to="/" className="text-amber-600 hover:text-orange-600 mt-4 inline-block">
        Go back to products
      </Link>
    </div>
  );

  const handleAddToCart = () => {
    addToCart(product);
    alert(`Added ${product.title} to cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
        <ChevronLeft className="w-5 h-5 mr-1" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-amber-200">
          <div className="h-96 w-full bg-gray-100">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
                <span className="text-amber-700 text-lg">Handmade Craft</span>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="text-sm font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mt-3">
              {product.title}
            </h1>
            
            <div className="flex items-center mt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-amber-400' : 'fill-none'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-amber-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            ${product.price}
          </div>

          <p className="text-lg text-amber-800 leading-relaxed">
            {product.description}
          </p>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => (
                  <span key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                    {material}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Size</h3>
                <p className="text-amber-700">{product.size}</p>
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Origin</h3>
                <p className="text-amber-700">{product.origin}</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 mb-2">Quantity Available</h3>
              <p className="text-amber-700">{product.quantity} in stock</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-amber-600" />
              <div>
                <p className="font-medium text-amber-900">Free Shipping</p>
                <p className="text-sm text-amber-600">Over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-amber-600" />
              <div>
                <p className="font-medium text-amber-900">Secure Payment</p>
                <p className="text-sm text-amber-600">100% Protected</p>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <ShoppingCart className="w-6 h-6" />
            Add to Cart - ${product.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;