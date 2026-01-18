import { useNavigate } from 'react-router-dom';

const CooperationPage = () => {
  const navigate = useNavigate();

  // Partner organizations - you can add more or modify these
  const organizations = [
    {
      name: '«Հայէկոնոմբանկ» Հրազդանի մասնաճյուղ',
      type: 'Ֆինանսական հաստատություն',
      description: 'Մեր գործընկերները ֆինանսական կրթության ոլորտում',
      icon: '🏦',
      color: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-400'
    },
    {
      name: '«ՀայՓոստ» Հրազդանի մասնաճյուղ',
      type: 'Փոստային ծառայություն',
      description: 'Համագործակցություն փոստային ծառայությունների մասին կրթության ոլորտում',
      icon: '📮',
      color: 'from-red-400 to-red-600',
      borderColor: 'border-red-400'
    },
    {
      name: '«Հրազդան տուր»',
      type: 'Տուրիզմ',
      description: 'Ծանոթացում տուրիստական ծառայություններին և ֆինանսական պլանավորմանը',
      icon: '✈️',
      color: 'from-green-400 to-green-600',
      borderColor: 'border-green-400'
    },
    {
      name: '«Հրազդան սուպերմարկետ»',
      type: 'Առևտուր',
      description: 'Գործնական փորձ գնումների և վճարումների կատարման համար',
      icon: '🛒',
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-400'
    },
    {
        name: '«Develop Armenia»',
        type: 'Սոցիալ֊կրթական ՀԿ',
        description: 'Գործնական փորձ գնումների և վճարումների կատարման համար',
        icon: '♻️',
        color: 'from-yellow-400 to-yellow-600',
        borderColor: 'border-yellow-200'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-200 via-pink-200 to-orange-200">
      {/* Playful Background Elements */}
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
              🤝Համայնքային Համագործակցություններ
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold px-4 mb-4 sm:mb-6">
            🎨 Կազմակերպություններ, որոնց հետ մենք համագործակցել ենք 🌟
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-xl active:scale-95 transition-all duration-200 touch-manipulation"
          >
            ← Վերադարձ
          </button>
        </div>
      </section>

      {/* Organizations Grid */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {organizations.map((org, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 ${org.borderColor} relative overflow-hidden`}
            >
              {/* Decorative gradient background */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${org.color} opacity-20 rounded-full -mr-20 -mt-20`}></div>
              
              <div className="relative z-10">
                {/* Organization Icon */}
                <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4 sm:mb-6 bg-gradient-to-br ${org.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-4xl sm:text-5xl md:text-6xl">{org.icon}</span>
                </div>

                {/* Organization Name and Type */}
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {org.name}
                  </h2>
                  <div className={`inline-block bg-gradient-to-r ${org.color} text-white px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md`}>
                    {org.type}
                  </div>
                </div>

                {/* Description */}
                {/* <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-yellow-200">
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
                    {org.description}
                  </p>
                </div> */}

                {/* Decorative elements */}
                <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                  <span className="text-2xl sm:text-3xl animate-pulse">⭐</span>
                  <span className="text-2xl sm:text-3xl animate-pulse" style={{ animationDelay: '0.2s' }}>✨</span>
                  <span className="text-2xl sm:text-3xl animate-pulse" style={{ animationDelay: '0.4s' }}>🌟</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      {/* <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-4 border-blue-400">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              💼 Համագործակցության մասին
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
              Մենք համագործակցում ենք տարբեր կազմակերպությունների հետ՝ երեխաներին ֆինանսական կրթություն տրամադրելու նպատակով: Մեր գործընկերները մեզ օգնում են ստեղծել գործնական և ինտերակտիվ ուսուցման փորձ:
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CooperationPage;

