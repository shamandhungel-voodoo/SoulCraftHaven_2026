import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Heart,
  ShoppingBag,
  Instagram,
  Facebook,
  Globe,
  Award,
  Users,
  Calendar,
} from "lucide-react";

const Artists = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showAllArtists, setShowAllArtists] = useState(false);

  const artists = [
    {
      id: 1,
      name: "Emma Johnson",
      bio: "Contemporary ceramic artist specializing in minimalist pottery and organic forms. Each piece is hand-thrown and glazed with natural pigments.",
      location: "Portland, Oregon",
      rating: 4.9,
      reviewCount: 128,
      followers: "2.4k",
      joined: "2018",
      category: "Ceramics & Pottery",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      products: 24,
      social: {
        instagram: "emma_johnson_ceramics",
        facebook: "emma.johnson.art",
        website: "emmajohnsonceramics.com",
      },
    },
    {
      id: 2,
      name: "James Wilson",
      bio: "Woodworking artisan creating modern furniture from sustainable hardwoods. Combines traditional joinery with contemporary design.",
      location: "Vancouver, Canada",
      rating: 4.8,
      reviewCount: 96,
      followers: "1.8k",
      joined: "2019",
      category: "Woodworking",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      products: 18,
      social: {
        instagram: "jameswilson_woodworks",
        facebook: "james.wilson.wood",
        website: "jameswilsonwoodworks.com",
      },
    },
    {
      id: 3,
      name: "Sophia Chen",
      bio: "Textile designer weaving sustainable fabrics using organic cotton and natural dyes. Specializes in geometric patterns and modern tapestries.",
      location: "San Francisco, California",
      rating: 5.0,
      reviewCount: 204,
      followers: "3.2k",
      joined: "2017",
      category: "Textiles & Weaving",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      products: 32,
      social: {
        instagram: "sophiachen_textiles",
        facebook: "sophia.chen.weaves",
        website: "sophiachentextiles.com",
      },
    },
    {
      id: 4,
      name: "Marcus Rodriguez",
      bio: "Jewelry designer crafting modern pieces with recycled silver and ethically sourced gemstones. Focuses on minimalist contemporary designs.",
      location: "Barcelona, Spain",
      rating: 4.7,
      reviewCount: 87,
      followers: "1.5k",
      joined: "2020",
      category: "Jewelry Making",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      products: 16,
      social: {
        instagram: "marcusrodriguez_jewelry",
        facebook: "marcus.rodriguez.silver",
        website: "marcusrodriguezjewelry.com",
      },
    },
    {
      id: 5,
      name: "Olivia Parker",
      bio: "Paper artist creating handmade journals and stationery using traditional bookbinding techniques and recycled materials.",
      location: "London, UK",
      rating: 4.6,
      reviewCount: 73,
      followers: "1.2k",
      joined: "2021",
      category: "Paper Crafts",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
      products: 12,
      social: {
        instagram: "oliviaparker_papercrafts",
        facebook: "olivia.parker.paper",
        website: "oliviaparkerpaper.com",
      },
    },
    {
      id: 6,
      name: "David Kim",
      bio: "Leather craftsman producing durable bags and accessories using vegetable-tanned leather. Emphasizes functionality and timeless design.",
      location: "Seoul, South Korea",
      rating: 4.8,
      reviewCount: 115,
      followers: "2.1k",
      joined: "2019",
      category: "Leatherwork",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      products: 28,
      social: {
        instagram: "davidkim_leather",
        facebook: "david.kim.crafts",
        website: "davidkimleather.com",
      },
    },
    {
      id: 7,
      name: "Isabella Rossi",
      bio: "Glass artist specializing in hand-blown glassware and decorative pieces. Uses traditional Venetian techniques with modern aesthetics.",
      location: "Venice, Italy",
      rating: 4.9,
      reviewCount: 142,
      followers: "2.7k",
      joined: "2018",
      category: "Glass Art",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      products: 35,
      social: {
        instagram: "isabellarossi_glass",
        facebook: "isabella.rossi.art",
        website: "isabellarossiglass.com",
      },
    },
    {
      id: 8,
      name: "Alexandre Dubois",
      bio: "Metal sculptor creating contemporary art pieces and functional items from reclaimed steel and copper.",
      location: "Paris, France",
      rating: 4.7,
      reviewCount: 89,
      followers: "1.6k",
      joined: "2020",
      category: "Metalwork",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      products: 21,
      social: {
        instagram: "alexandredubois_metal",
        facebook: "alexandre.dubois.metal",
        website: "alexandreduboismetal.com",
      },
    },
  ];

  const featuredArtists = artists.filter((a) => a.featured);
  const allArtists = showAllArtists ? artists : featuredArtists;

  const artistProducts = [
    {
      id: 1,
      name: "Handmade Clay Vase",
      price: 25,
      image: "/images/1.jpg",
      artistId: 1,
    },
    {
      id: 2,
      name: "Wooden Serving Tray",
      price: 30,
      image: "/images/3.jpg",
      artistId: 2,
    },
    {
      id: 3,
      name: "Woven Cotton Blanket",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      artistId: 3,
    },
    {
      id: 4,
      name: "Silver Beaded Necklace",
      price: 28,
      image: "/images/8.jpg",
      artistId: 4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-amber-600 bg-clip-text text-transparent font-serif italic mb-4">
          Meet Our Artisans
        </h1>
        <p className="text-purple-600 text-lg max-w-3xl mx-auto">
          Each piece in our collection is created by talented artisans from
          around the world who pour their heart and soul into their craft. Get
          to know the faces behind the handmade treasures.
        </p>
      </div>

      {/* Featured Artists */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-purple-900">
            Featured Artisans
          </h2>
          <button
            onClick={() => setShowAllArtists(!showAllArtists)}
            className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-2"
          >
            {showAllArtists ? "Show Less" : "View All Artists"}
            <span className="text-xl">{showAllArtists ? "↑" : "↓"}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allArtists.map((artist) => (
            <div
              key={artist.id}
              onClick={() =>
                setSelectedArtist(
                  artist.id === selectedArtist ? null : artist.id
                )
              }
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                selectedArtist === artist.id
                  ? "border-purple-400"
                  : "border-purple-100"
              }`}
            >
              {/* Artist Header */}
              <div className="relative">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-64 object-cover"
                />
                {artist.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    {artist.name}
                  </h3>
                  <p className="text-purple-100 text-sm">{artist.category}</p>
                </div>
              </div>

              {/* Artist Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="ml-1 font-medium">{artist.rating}</span>
                      <span className="text-purple-400 text-sm ml-1">
                        ({artist.reviewCount})
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-pink-500" />
                      <span className="text-purple-600 text-sm">
                        {artist.followers}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600">
                    <ShoppingBag className="w-4 h-4" />
                    <span className="text-sm">{artist.products}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-purple-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{artist.location}</span>
                </div>

                <p className="text-purple-700 text-sm line-clamp-2 mb-4">
                  {artist.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 mb-4">
                  <a
                    href={`https://instagram.com/${artist.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-pink-600"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://facebook.com/${artist.social.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-blue-600"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://${artist.social.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </div>

                <Link
                  to={`/shop?artist=${artist.id}`}
                  className="block w-full text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Artist Details */}
      {selectedArtist && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-12 border border-purple-200">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <img
                  src={artists.find((a) => a.id === selectedArtist)?.image}
                  alt={artists.find((a) => a.id === selectedArtist)?.name}
                  className="w-48 h-48 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-xl"
                />
                <h2 className="text-2xl font-bold text-purple-900 text-center mb-2">
                  {artists.find((a) => a.id === selectedArtist)?.name}
                </h2>
                <p className="text-purple-600 text-center mb-6">
                  {artists.find((a) => a.id === selectedArtist)?.category}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <Award className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900">
                      {artists.find((a) => a.id === selectedArtist)?.rating}
                    </div>
                    <div className="text-sm text-purple-600">Rating</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <Users className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900">
                      {artists.find((a) => a.id === selectedArtist)?.followers}
                    </div>
                    <div className="text-sm text-purple-600">Followers</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-purple-700">
                    <MapPin className="w-5 h-5" />
                    <span>
                      {artists.find((a) => a.id === selectedArtist)?.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-purple-700">
                    <Calendar className="w-5 h-5" />
                    <span>
                      Member since{" "}
                      {artists.find((a) => a.id === selectedArtist)?.joined}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                About the Artist
              </h3>
              <p className="text-purple-700 mb-6 text-lg leading-relaxed">
                {artists.find((a) => a.id === selectedArtist)?.bio}
              </p>

              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Featured Works
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {artistProducts
                  .filter((p) => p.artistId === selectedArtist)
                  .map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-purple-900 mb-1 line-clamp-1">
                          {product.name}
                        </h4>
                        <div className="text-lg font-bold text-purple-700">
                          ${product.price}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              <div className="mt-8">
                <Link
                  to={`/shop?artist=${selectedArtist}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <ShoppingBag className="w-5 h-5" />
                  View All Products by This Artist
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Artist Spotlight */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-8">
          Artist Spotlight
        </h2>
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5" />
                <span className="font-medium">Artist of the Month</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Sophia Chen</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Sophia has been revolutionizing sustainable textile design for
                over 10 years. Each of her weaves combines traditional
                techniques with contemporary aesthetics, creating pieces that
                are both beautiful and environmentally conscious.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold">32</div>
                  <div className="text-sm text-purple-100">Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5.0</div>
                  <div className="text-sm text-purple-100">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">204</div>
                  <div className="text-sm text-purple-100">Reviews</div>
                </div>
              </div>
              <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors duration-300">
                Explore Sophia's Collection
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop"
                alt="Sophia Chen at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Become an Artist CTA */}
      <div className="text-center bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">
          Are You an Artist?
        </h2>
        <p className="text-purple-600 mb-6 max-w-2xl mx-auto">
          Join our global community of talented artisans and share your craft
          with the world. We provide a platform that celebrates handmade
          creations and connects you with appreciative customers worldwide.
        </p>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
          Apply to Become an Artist
        </button>
      </div>
    </div>
  );
};

export default Artists;
