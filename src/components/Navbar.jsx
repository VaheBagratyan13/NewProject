import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 shadow-xl sticky top-0 z-50 border-b-4 border-pink-400">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center gap-1 sm:gap-2">
            <span className="text-xl sm:text-2xl md:text-3xl">🎈</span>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Իմ Ծրագիրը
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-6">
              <a
                href="/"
                className="text-gray-800 hover:text-pink-600 px-3 lg:px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:bg-white/50 hover:scale-110"
              >
                🏠 Գլխավոր
              </a>
              <a
                href="/about-page"
                className="text-gray-800 hover:text-purple-600 px-3 lg:px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:bg-white/50 hover:scale-110"
              >
                🎨 Մեր մասին
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-pink-600 focus:outline-none text-2xl p-2 transition-transform duration-200 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-2 border-pink-400 bg-white/90 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-4 space-y-2">
              <a
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-pink-600 px-4 py-3 rounded-full text-base font-bold transition-all duration-200 hover:bg-pink-100 active:bg-pink-200"
              >
                🏠 Գլխավոր
              </a>
              <a
                href="/about-page"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-purple-600 px-4 py-3 rounded-full text-base font-bold transition-all duration-200 hover:bg-purple-100 active:bg-purple-200"
              >
                🎨 Մեր մասին
              </a>
           
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

