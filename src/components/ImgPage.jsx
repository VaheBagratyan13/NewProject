import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import all images from the images folder using Vite's import.meta.glob
const imageModules = import.meta.glob('./images/*.jpg', { eager: true });
const images = Object.values(imageModules).map((module) => module.default);

const ImgPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const navigate = useNavigate();

  // Handle image load
  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  // Navigate to previous image
  const goToPrevious = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      const prevIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1;
      setSelectedImageIndex(prevIndex);
    }
  };

  // Navigate to next image
  const goToNext = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      const nextIndex = selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0;
      setSelectedImageIndex(nextIndex);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (selectedImageIndex === null) return;
    
    if (e.key === 'Escape') {
      setSelectedImageIndex(null);
    } else if (e.key === 'ArrowLeft') {
      goToPrevious(e);
    } else if (e.key === 'ArrowRight') {
      goToNext(e);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-200 via-pink-200 to-orange-200">
      {/* Playful Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-24 md:w-32 sm:h-24 md:h-32 bg-yellow-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-4 sm:right-20 w-12 h-12 sm:w-20 md:w-24 sm:h-20 md:h-24 bg-pink-400 rounded-full opacity-40 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 sm:w-32 md:w-40 sm:h-32 md:h-40 bg-orange-400 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-18 h-18 sm:w-28 md:w-36 sm:h-28 md:h-36 bg-blue-400 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}></div>
      </div>

      {/* Header Section */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              📸 Photo Gallery
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold px-4 mb-4 sm:mb-6">
            🎨 Beautiful memories captured in colorful frames! 🌈
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-xl active:scale-95 transition-all duration-200 touch-manipulation"
          >
            ← Վերադարձ
          </button>
        </div>
      </section>

      {/* Image Gallery Grid - Fully Responsive */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 sm:transform sm:hover:scale-105 active:scale-95 cursor-pointer border-4 border-transparent hover:border-pink-400 touch-manipulation"
              onClick={() => setSelectedImageIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImageIndex(index);
                }
              }}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-yellow-100 to-pink-100 relative">
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={image}
                  alt={`Photo ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-500 sm:group-hover:scale-110 ${
                    loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
              
              {/* Overlay on Hover/Touch */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 sm:group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 sm:p-4 text-white">
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-2 right-2 text-xl sm:text-2xl md:text-3xl opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 transform rotate-12">
                ✨
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal/Fullscreen View */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="relative max-w-5xl max-h-[95vh] w-full flex items-center">
            {/* Close Button (X) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(null);
              }}
              className="absolute -top-10 sm:-top-12 right-0 sm:right-4 text-white text-3xl sm:text-4xl hover:text-pink-400 transition-colors duration-200 active:scale-95 p-2 touch-manipulation z-10 bg-black/50 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Previous Arrow (Left) */}
            {images.length > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 text-white text-3xl sm:text-4xl md:text-5xl hover:text-pink-400 transition-colors duration-200 active:scale-95 p-2 sm:p-3 touch-manipulation z-10 bg-black/50 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-black/70"
                aria-label="Previous image"
              >
                ←
              </button>
            )}

            {/* Image */}
            <img
              src={images[selectedImageIndex]}
              alt={`Photo ${selectedImageIndex + 1}`}
              className="w-full h-full object-contain rounded-lg shadow-2xl max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Arrow (Right) */}
            {images.length > 1 && (
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 text-white text-3xl sm:text-4xl md:text-5xl hover:text-pink-400 transition-colors duration-200 active:scale-95 p-2 sm:p-3 touch-manipulation z-10 bg-black/50 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center hover:bg-black/70"
                aria-label="Next image"
              >
                →
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm sm:text-base font-bold">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      {/* Custom Animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ImgPage;
