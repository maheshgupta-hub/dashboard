import React, { useState } from 'react';
import { ShoppingCart, Phone, Mail, MapPin, Instagram, Facebook, Clock, Star, X, Plus, Minus, Menu } from 'lucide-react';

export default function ChaatCorner() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('whatsapp');
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const menuItems = [
    // Chaat Items
    { id: 1, name: 'Pani Puri', price: 40, category: 'Chaat', description: 'Crispy hollow puris with spicy tangy water', image: '🫓', popular: true, spicy: 3 },
    { id: 2, name: 'Bhelpuri', price: 50, category: 'Chaat', description: 'Puffed rice with vegetables and chutneys', image: '🥗', popular: true, spicy: 2 },
    { id: 3, name: 'Sevpuri', price: 60, category: 'Chaat', description: 'Crispy puris topped with sev and chutneys', image: '🥘', popular: true, spicy: 2 },
    { id: 4, name: 'Ragda Puri', price: 70, category: 'Chaat', description: 'Puris with white peas curry and chutneys', image: '🫔', popular: false, spicy: 2 },
    { id: 5, name: 'Dahi Puri', price: 70, category: 'Chaat', description: 'Puris filled with yogurt and sweet chutneys', image: '🥙', popular: true, spicy: 1 },
    { id: 6, name: 'Dahi Papdi Chaat', price: 80, category: 'Chaat', description: 'Crispy papdis with yogurt, potatoes and chutneys', image: '🍜', popular: false, spicy: 1 },
    { id: 7, name: 'Ragda Pattice', price: 80, category: 'Chaat', description: 'Potato patties with white peas curry', image: '🥟', popular: true, spicy: 2 },
    { id: 8, name: 'Cheese Sevpuri', price: 80, category: 'Chaat', description: 'Sevpuri loaded with cheese', image: '🧀', popular: false, spicy: 2 },
    { id: 9, name: 'Cheese Bhelpuri', price: 70, category: 'Chaat', description: 'Bhelpuri topped with cheese', image: '🧀', popular: false, spicy: 2 },
    
    // Sandwiches - Basic
    { id: 10, name: 'Bread Butter', price: 20, category: 'Sandwiches', description: 'Simple bread with butter', image: '🍞', popular: false, spicy: 0 },
    { id: 11, name: 'Bread Butter Toast', price: 30, category: 'Sandwiches', description: 'Toasted bread with butter', image: '🍞', popular: false, spicy: 0 },
    { id: 12, name: 'Bread Butter Cheese Toast', price: 40, category: 'Sandwiches', description: 'Toasted bread with butter and cheese', image: '🥪', popular: false, spicy: 0 },
    { id: 13, name: 'Bread Butter Chutney Toast', price: 35, category: 'Sandwiches', description: 'Toasted bread with butter and green chutney', image: '🥪', popular: false, spicy: 1 },
    { id: 14, name: 'Bread Butter Chutney Cheese Toast', price: 45, category: 'Sandwiches', description: 'Toast with butter, chutney and cheese', image: '🥪', popular: false, spicy: 1 },
    { id: 15, name: 'Jam Toast', price: 35, category: 'Sandwiches', description: 'Sweet jam toast', image: '🍓', popular: false, spicy: 0 },
    { id: 16, name: 'Jam Cheese Toast', price: 45, category: 'Sandwiches', description: 'Jam toast with cheese', image: '🍓', popular: false, spicy: 0 },
    { id: 17, name: 'Chocolate Toast', price: 40, category: 'Sandwiches', description: 'Sweet chocolate spread toast', image: '🍫', popular: false, spicy: 0 },
    
    // Sandwiches - Veg & Masala
    { id: 18, name: 'Veg Sandwich', price: 50, category: 'Sandwiches', description: 'Fresh vegetables sandwich', image: '🥪', popular: true, spicy: 1 },
    { id: 19, name: 'Veg Toast', price: 60, category: 'Sandwiches', description: 'Grilled veg toast', image: '🥪', popular: true, spicy: 1 },
    { id: 20, name: 'Masala Toast', price: 65, category: 'Sandwiches', description: 'Spicy masala grilled toast', image: '🥪', popular: false, spicy: 2 },
    { id: 21, name: 'Veg Cheese Toast', price: 70, category: 'Sandwiches', description: 'Veg toast with melted cheese', image: '🥪', popular: true, spicy: 1 },
    { id: 22, name: 'Masala Cheese Toast', price: 75, category: 'Sandwiches', description: 'Spicy masala with cheese', image: '🥪', popular: false, spicy: 2 },
    { id: 23, name: 'Veg Schezwan Toast', price: 70, category: 'Sandwiches', description: 'Veg toast with schezwan sauce', image: '🥪', popular: false, spicy: 3 },
    { id: 24, name: 'Masala Schezwan Toast', price: 75, category: 'Sandwiches', description: 'Masala with schezwan kick', image: '🥪', popular: false, spicy: 3 },
    { id: 25, name: 'Veg Mayo Toast', price: 65, category: 'Sandwiches', description: 'Veg toast with creamy mayo', image: '🥪', popular: false, spicy: 1 },
    { id: 26, name: 'Masala Mayo Toast', price: 70, category: 'Sandwiches', description: 'Masala with mayo', image: '🥪', popular: false, spicy: 2 },
    { id: 27, name: 'Veg Mayo Schezwan Cheese Toast', price: 85, category: 'Sandwiches', description: 'Loaded veg toast with all toppings', image: '🥪', popular: false, spicy: 2 },
    { id: 28, name: 'Masala Mayo Schezwan Cheese Toast', price: 90, category: 'Sandwiches', description: 'Ultimate masala loaded toast', image: '🥪', popular: false, spicy: 3 },
    
    // Special Items
    { id: 29, name: 'Cheese Chilli', price: 100, category: 'Special Items', description: 'Indo-Chinese cheese chilli', image: '🌶️', popular: true, spicy: 3 },
    { id: 30, name: 'Viru Special', price: 120, category: 'Special Items', description: 'Our signature special creation', image: '⭐', popular: true, spicy: 2 },
    { id: 31, name: 'Babu Special', price: 120, category: 'Special Items', description: 'Chef\'s special delight', image: '⭐', popular: true, spicy: 2 },
    { id: 32, name: 'Sevpuri Toast', price: 80, category: 'Special Items', description: 'Fusion sevpuri on toast', image: '🥘', popular: false, spicy: 2 },
    { id: 33, name: 'Sevpuri Cheese Toast', price: 90, category: 'Special Items', description: 'Sevpuri toast with cheese', image: '🥘', popular: false, spicy: 2 },
    
    // Mini Grill
    { id: 34, name: 'Mini Veg Grill', price: 50, category: 'Mini Grill', description: 'Small grilled veg sandwich', image: '🥪', popular: false, spicy: 1 },
    { id: 35, name: 'Mini Masala Grill', price: 55, category: 'Mini Grill', description: 'Mini grilled masala sandwich', image: '🥪', popular: false, spicy: 2 },
    { id: 36, name: 'Mini Veg Schezwan Grill', price: 60, category: 'Mini Grill', description: 'Mini grill with schezwan', image: '🥪', popular: false, spicy: 3 },
    { id: 37, name: 'Mini Masala Schezwan Grill', price: 65, category: 'Mini Grill', description: 'Mini masala schezwan grill', image: '🥪', popular: false, spicy: 3 },
    { id: 38, name: 'Mini Veg Mayo Grill', price: 55, category: 'Mini Grill', description: 'Mini grill with mayo', image: '🥪', popular: false, spicy: 1 },
    { id: 39, name: 'Mini Masala Mayo Grill', price: 60, category: 'Mini Grill', description: 'Mini masala mayo grill', image: '🥪', popular: false, spicy: 2 },
    { id: 40, name: 'Mini Veg Cheese Grill', price: 60, category: 'Mini Grill', description: 'Mini grill with cheese', image: '🥪', popular: false, spicy: 1 },
    { id: 41, name: 'Mini Masala Cheese Grill', price: 65, category: 'Mini Grill', description: 'Mini masala cheese grill', image: '🥪', popular: false, spicy: 2 },
    { id: 42, name: 'Mini Veg Mayo Schezwan Cheese Grill', price: 75, category: 'Mini Grill', description: 'Loaded mini grill with everything', image: '🥪', popular: false, spicy: 2 },
    { id: 43, name: 'Mini Masala Mayo Schezwan Cheese Grill', price: 80, category: 'Mini Grill', description: 'Ultimate mini loaded grill', image: '🥪', popular: false, spicy: 3 }
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === 'whatsapp') {
      const orderText = cart.map(item => `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`).join('%0A');
      const total = (getTotalPrice() * 1.05).toFixed(2);
      const message = `Hello! I want to place an order:%0A%0A${orderText}%0A%0ATotal: ₹${total}`;
      window.open(`https://wa.me/919987747909?text=${message}`, '_blank');
    } else if (paymentMethod === 'upi') {
      const total = (getTotalPrice() * 1.05).toFixed(2);
      const upiUrl = `upi://pay?pa=9987747909@ptaxis&pn=VIRUZZ SNACKS&am=${total}&cu=INR&tn=Order Payment`;
      window.location.href = upiUrl;
    }
    setShowPaymentModal(false);
  };

  const handleRatingSubmit = () => {
    const message = `Rating: ${rating}/5 stars%0AFeedback: ${feedback}`;
    window.open(`https://wa.me/919987747909?text=${message}`, '_blank');
    setShowRatingModal(false);
    setRating(0);
    setFeedback('');
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
      {/* Decorative Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white sticky top-0 z-40 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="text-4xl animate-bounce">🍛</div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-wide">VIRUZZ SNACKS</h1>
                <p className="text-xs md:text-sm text-yellow-100">Authentic Indian Street Food</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {['home', 'menu', 'about', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-yellow-300 transition-colors ${activeSection === section ? 'text-yellow-300 font-semibold' : ''}`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative bg-white text-red-600 p-2 rounded-full hover:bg-yellow-100 transition-all shadow-lg transform hover:scale-110"
              >
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden bg-white text-red-600 p-2 rounded-full shadow-lg"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

                      {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-2 space-y-2 animate-fadeIn">
              {['home', 'menu', 'about', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-red-700 rounded transition-colors"
                >
                  {section}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-8xl animate-float">🌶️</div>
          <div className="absolute top-40 right-20 text-7xl animate-float-delayed">🥘</div>
          <div className="absolute bottom-20 left-20 text-9xl animate-float">🍛</div>
          <div className="absolute bottom-40 right-10 text-6xl animate-float-delayed">🥪</div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              Taste of Mumbai Streets
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Authentic Indian street food made fresh daily with traditional recipes and the finest ingredients
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white bg-opacity-90 rounded-full px-6 py-3 shadow-xl flex items-center space-x-2">
                <Star className="text-yellow-500 fill-yellow-500" size={20} />
                <span className="font-semibold text-gray-800">4.8/5 Rating</span>
              </div>
              <div className="bg-white bg-opacity-90 rounded-full px-6 py-3 shadow-xl flex items-center space-x-2">
                <Clock className="text-green-600" size={20} />
                <span className="font-semibold text-gray-800">Fresh Daily</span>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-110 transition-all"
            >
              Order Now 🛒
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, #ff6b6b 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">Our Menu</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Handcrafted with love, served with a smile. All our items are made fresh to order!
          </p>

          {/* Popular Items */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center">
              <Star className="fill-orange-600 mr-2" size={24} />
              Customer Favorites
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.filter(item => item.popular).map(item => (
                <MenuCard key={item.id} item={item} addToCart={addToCart} />
              ))}
            </div>
          </div>

          {/* Chaat Section */}
          <div className="mb-16 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 rounded-3xl p-8 shadow-2xl border-4 border-orange-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-700 mb-2">🥘 Chaat Specials</h3>
              <p className="text-gray-700 font-medium">Traditional Mumbai street style chaat</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.filter(item => item.category === 'Chaat').map(item => (
                <MenuCard key={item.id} item={item} addToCart={addToCart} />
              ))}
            </div>
          </div>

          {/* Sandwiches Section */}
          <div className="mb-16 bg-gradient-to-br from-red-100 via-pink-100 to-orange-100 rounded-3xl p-8 shadow-2xl border-4 border-red-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-red-700 mb-2">🥪 Sandwiches & Toast</h3>
              <p className="text-gray-700 font-medium">Grilled to perfection with fresh ingredients</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.filter(item => item.category === 'Sandwiches').map(item => (
                <MenuCard key={item.id} item={item} addToCart={addToCart} />
              ))}
            </div>
          </div>

          {/* Special Items Section */}
          <div className="mb-16 bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 rounded-3xl p-8 shadow-2xl border-4 border-purple-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">⭐ Special Items</h3>
              <p className="text-gray-700 font-medium">Our signature creations you can't miss</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.filter(item => item.category === 'Special Items').map(item => (
                <MenuCard key={item.id} item={item} addToCart={addToCart} />
              ))}
            </div>
          </div>

          {/* Mini Grill Section */}
          <div className="mb-16 bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100 rounded-3xl p-8 shadow-2xl border-4 border-green-300">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">🔥 Mini Grill</h3>
              <p className="text-gray-700 font-medium">Perfect size, maximum flavor</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.filter(item => item.category === 'Mini Grill').map(item => (
                <MenuCard key={item.id} item={item} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rating & Feedback Section */}
      <section className="py-16 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-purple-300">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">⭐</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Rate Your Experience</h2>
              <p className="text-gray-600 text-lg">We value your feedback! Help us serve you better</p>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transform hover:scale-125 transition-all"
                  >
                    <Star
                      size={48}
                      className={star <= rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {rating > 0 && (
              <div className="text-center mb-6 animate-fadeIn">
                <p className="text-2xl font-bold text-purple-600">
                  {rating === 5 ? '🎉 Excellent!' : rating === 4 ? '😊 Great!' : rating === 3 ? '👍 Good!' : rating === 2 ? '😐 Okay' : '😔 We can do better!'}
                </p>
              </div>
            )}

            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your experience with us..."
              className="w-full p-4 border-2 border-purple-300 rounded-xl mb-6 focus:outline-none focus:border-purple-500 resize-none"
              rows="4"
            />

            <button
              onClick={handleRatingSubmit}
              disabled={rating === 0}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                rating === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl transform hover:scale-105'
              }`}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">About Us</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🍛</div>
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Story</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Welcome to VIRUZZ SNACKS! We bring the authentic taste of Mumbai's bustling streets right to your plate. Our journey began with a passion for traditional Indian street food and a commitment to quality that never compromises.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Every dish is prepared using time-honored recipes passed down through generations, combined with the freshest ingredients sourced daily. From the tangy pani puri to the crispy sev puri, each bite tells a story of India's rich culinary heritage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl mb-2">🏆</div>
                  <h4 className="font-bold text-orange-600 mb-2">Quality First</h4>
                  <p className="text-sm text-gray-600">Premium ingredients, authentic taste</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl mb-2">👨‍🍳</div>
                  <h4 className="font-bold text-orange-600 mb-2">Expert Chefs</h4>
                  <p className="text-sm text-gray-600">Traditional recipes, modern hygiene</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl mb-2">❤️</div>
                  <h4 className="font-bold text-orange-600 mb-2">Made with Love</h4>
                  <p className="text-sm text-gray-600">Every dish crafted with care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Address */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-orange-600 mb-4">
                <MapPin size={32} className="mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">Visit Us</h3>
              <p className="text-gray-700 text-center text-sm">
                <a href="https://www.google.com/maps/place/Viru+Snacks+Bar/@19.1009769,72.8506605,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c84b6bd67e0f:0xa7817a5053e368d3!8m2!3d19.1009769!4d72.8532354!16s%2Fg%2F11g7_dzy2x?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D">Shop No.3, Prashal Cooperative Housing Society, Society, Sant Janabai Rd, Nav Prabhat Society, Navpada, Vile Parle East,Mumbai, Maharashtra 400057<br />
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-orange-600 mb-4">
                <Phone size={32} className="mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">Call Us</h3>
              <p className="text-gray-700 text-center">
                <a href="tel:+919876543210" className="hover:text-orange-600 transition-colors">
                  +91 9833329558 <br />
                  +91 9137479203
                </a>
              </p>
              <p className="text-gray-700 text-center text-sm mt-2">
                Mon-Sun: 11 AM - 11 PM
              </p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-orange-600 mb-4">
                <Mail size={32} className="mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">Email Us</h3>
              <p className="text-gray-700 text-center">
                <a href="mailto:maheshvmgupta@gmail.com" className="hover:text-orange-600 transition-colors break-all">
                  maheshvmgupta@gmail.com
                </a>
              </p>
              <p className="text-gray-700 text-center text-sm mt-2">
                We reply within 24 hours
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-orange-600 mb-4">
                <Instagram size={32} className="mx-auto" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">Follow Us</h3>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://instagram.com/viruzzsnacks" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition-colors">
                  <Instagram size={28} />
                </a>
                <a href="https://facebook.com/viruzzsnacks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Facebook size={28} />
                </a>
              </div>
              <p className="text-gray-700 text-center text-sm mt-2">
                @viruzzsnacks
              </p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="max-w-2xl mx-auto mt-12 bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
              <Clock className="mr-2" size={28} />
              Opening Hours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <p className="font-semibold text-lg">Monday - Friday</p>
                <p className="text-orange-100">11:00 AM - 10:00 PM</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">Saturday - Sunday</p>
                <p className="text-orange-100">11:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-4xl mb-4">🌶️</div>
            <h3 className="text-2xl font-bold mb-2">VIRUZ SNACKS</h3>
            <p className="text-gray-400 mb-6">Bringing Mumbai streets to your plate</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://instagram.com/viruzzsnacks" className="hover:text-orange-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/viruzzsnacks" className="hover:text-orange-400 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 VIRUZZ SNACKS™. All rights reserved. | Made with ❤️ in Mumbai
              </p>
              <p className="text-gray-500 text-xs mt-2">
                VIRUZZ SNACKS™ is a registered trademark
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsCartOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Your Order</h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-500">Your cart is empty</p>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      scrollToSection('menu');
                    }}
                    className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <p className="text-orange-600 font-semibold">₹{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="bg-gray-200 p-1 rounded hover:bg-gray-300"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="bg-orange-600 text-white p-1 rounded hover:bg-orange-700"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-semibold">₹{getTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">GST (5%):</span>
                      <span className="font-semibold">₹{(getTotalPrice() * 0.05).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xl font-bold text-orange-600">
                      <span>Total:</span>
                      <span>₹{(getTotalPrice() * 1.05).toFixed(2)}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowPaymentModal(true)}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                  >
                    Proceed to Checkout 🛒
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Choose your payment method in next step
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Payment Method Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Choose Payment Method</h3>
              <p className="text-gray-600 text-sm">Select how you want to pay</p>
            </div>

            <div className="space-y-4 mb-6">
              {/* WhatsApp Order Option */}
              <button
                onClick={() => setPaymentMethod('whatsapp')}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'whatsapp'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">📱</div>
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-gray-800">WhatsApp Order</h4>
                    <p className="text-sm text-gray-600">Confirm order on WhatsApp</p>
                  </div>
                  {paymentMethod === 'whatsapp' && (
                    <div className="text-green-500">✓</div>
                  )}
                </div>
              </button>

              {/* UPI Payment Option */}
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'upi'
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">💳</div>
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-gray-800">UPI Payment</h4>
                    <p className="text-sm text-gray-600">Pay instantly via UPI</p>
                  </div>
                  {paymentMethod === 'upi' && (
                    <div className="text-purple-500">✓</div>
                  )}
                </div>
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">₹{getTotalPrice()}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">GST (5%):</span>
                <span className="font-semibold">₹{(getTotalPrice() * 0.05).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-orange-600 pt-2 border-t">
                <span>Total:</span>
                <span>₹{(getTotalPrice() * 1.05).toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePlaceOrder}
                className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                {paymentMethod === 'whatsapp' ? 'Send to WhatsApp' : 'Pay Now'}
              </button>
            </div>

            {paymentMethod === 'upi' && (
              <p className="text-center text-xs text-gray-500 mt-3">
                You'll be redirected to your UPI app
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function MenuCard({ item, addToCart }) {
  const spicyLevel = '🌶️'.repeat(item.spicy);
  
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border-3 border-orange-200 hover:border-orange-400">
      <div className="p-6 bg-gradient-to-br from-white to-orange-50">
        <div className="flex justify-between items-start mb-3">
          <div className="text-5xl">{item.image}</div>
          {item.popular && (
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center">
              <Star size={12} className="fill-white mr-1" />
              Popular
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
          <span className="text-sm">{spicyLevel}</span>
        </div>
        <button
          onClick={() => addToCart(item)}
          className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-bold hover:shadow-xl transition-all flex items-center justify-center space-x-2 transform hover:scale-105"
        >
          <ShoppingCart size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}