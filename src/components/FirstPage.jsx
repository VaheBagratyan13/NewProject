import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-200 via-pink-200 to-orange-200">
      {/* Playful Background Shapes - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Colorful Circles - Smaller on mobile */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-24 md:w-32 sm:h-24 md:h-32 bg-yellow-400 rounded-full opacity-60 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-4 sm:right-20 w-12 h-12 sm:w-20 md:w-24 sm:h-20 md:h-24 bg-pink-400 rounded-full opacity-60 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 sm:w-32 md:w-40 sm:h-32 md:h-40 bg-orange-400 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-14 h-14 sm:w-20 md:w-28 sm:h-20 md:h-28 bg-green-400 rounded-full opacity-60 animate-bounce hidden sm:block" style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-18 h-18 sm:w-28 md:w-36 sm:h-28 md:h-36 bg-blue-400 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}></div>
        
        {/* Stars - Responsive sizes */}
        <div className="absolute top-32 right-1/4 text-2xl sm:text-3xl md:text-4xl opacity-70 animate-pulse">⭐</div>
        <div className="absolute bottom-40 left-1/3 text-3xl sm:text-4xl md:text-5xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute top-1/3 left-1/2 text-xl sm:text-2xl md:text-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}>🌟</div>
        <div className="absolute bottom-1/3 right-1/5 text-2xl sm:text-3xl md:text-4xl opacity-70 animate-pulse hidden sm:block" style={{ animationDelay: '1.5s' }}>⭐</div>
      </div>

      {/* Hero Section - Mobile optimized */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent block sm:inline">
              
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent block sm:inline">
              Նախադպրոցականների ֆինանսական դաստիարակություն
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8 max-w-2xl mx-auto font-semibold px-4">
            🎨 Այստեղ կարող եք տեսնել մեր աշխատանքները🎉
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <button onClick={() => navigate('/img-page')} className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl active:scale-95 sm:transform sm:hover:-translate-y-1 transition-all duration-200 sm:hover:scale-105 touch-manipulation">
              📸 Ֆոտո Հաշվետվություն
            </button>
            <button onClick={() => navigate('/timing-dask')} className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl active:scale-95 sm:transform sm:hover:-translate-y-1 transition-all duration-200 sm:hover:scale-105 touch-manipulation">
              📅 Միջոցառումների ժամանակացույց
            </button>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile optimized */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <div className="w-full  sm:w-auto sm:flex-1 max-w-md sm:max-w-none bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 sm:transform sm:hover:scale-105 active:scale-95 border-4 border-pink-400">
            <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-2xl sm:text-3xl">
              🎯
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Նպատակ</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">Նախադպրոցականների մոտ ձևավորել տարիքին համապատասխան ֆինանսական մտածողություն</p>
          </div>

          <div className="w-full sm:w-auto sm:flex-1 max-w-md sm:max-w-none bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 sm:transform sm:hover:scale-105 active:scale-95 border-4 border-green-400">
            <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-2xl sm:text-3xl">
              🏆
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Կարողուկանություն</h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">1․ Լեզվական և հաղորդակցական</p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">2․ Ճանաչողական և մոտիվացիոն</p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">3․ Տնտեսական</p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">4․ Մաթեմատիկական և տեխնիկական</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstPage;