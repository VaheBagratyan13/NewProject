import { useNavigate } from 'react-router-dom';

// Import all images from the aboutImg folder using Vite's import.meta.glob
const imageModules = import.meta.glob('./aboutImg/*.jpg', { eager: true });
const images = Object.values(imageModules).map((module) => module.default);

const AboutPage = () => {
  const navigate = useNavigate();
  
  // Team members data - matching images to names
  const about = [
    {
      name: 'Մերի Հարությունյան',
      role: 'Մեթոդիստ',
      image: images.find(img => img.includes('meri')) || images[0],
      description: 'Ծրագրի հեղինակ, համակարգող և իրականացնող'
    },
    {
      name: 'Անուշ Հակոբյան',
      role: 'Դաստիարակ',
      image: images.find(img => img.includes('anush')) || images[1],
      description: 'Ավագ խմբի դաստիարակ՝ ակտիվորեն մասնակցել է ծրագրի իրականացմանը՝ կազմակերպելով ուսումնախաղային պարապմունքներ'
    },
    {
      name: 'Լիա Ղազարյան',
      role: 'Երաժշտության դաստիարակ',
      image: images.find(img => img.includes('lia')) || images[2],
      description: 'Ապահովել է ծրագրի թեմատիկ երաժշտական ձևավորումը'
    },
    {
      name: 'Մարիամ Առաքելյան',
      role: 'Դաստիարակ',
      image: images.find(img => img.includes('mariam')) || images[3],
      description: 'Միջին խմբի դաստիարակ՝ ակտիվորեն մասնակցել է ծրագրի իրականացմանը՝ կազմակերպելով ուսումնախաղային պարապմունքներ'
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
              👥 Մեր մասին
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 font-semibold px-4 mb-4 sm:mb-6">
            🎨 Ծանոթացեք մեր թիմին և նրանց փորձառությանը! 🌟
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-xl active:scale-95 transition-all duration-200 touch-manipulation"
          >
            ← Վերադարձ
          </button>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {about.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-pink-400 relative overflow-hidden"
            >
              {/* Decorative gradient background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-400 opacity-20 rounded-full -mr-20 -mt-20"></div>
              
              <div className="relative z-10">
                {/* Profile Image */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-400 to-orange-400 rounded-full p-1 sm:p-1.5 shadow-lg">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<span class="text-4xl sm:text-5xl md:text-6xl flex items-center justify-center h-full">👨‍🏫</span>';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h2>
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-md">
                    {item.role}
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gradient-to-br from-yellow-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-yellow-200">
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>

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

      {/* Team Features Section */}
     

      {/* Additional Info Section */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border-4 border-blue-400">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              💼 Մեր առաքելությունը
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
              Մենք նվիրված ենք երեխաների կրթությանը և զարգացմանը: Մեր թիմը օգտագործում է նորարարական մեթոդներ և փորձառություն՝ ապահովելու, որ յուրաքանչյուր երեխա ստանա լավագույն կրթությունը:
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="bg-white/80 rounded-xl px-4 py-2 sm:px-6 sm:py-3 shadow-md">
                <span className="text-2xl sm:text-3xl">🎯</span>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">Նպատակասլաց</p>
              </div>
              <div className="bg-white/80 rounded-xl px-4 py-2 sm:px-6 sm:py-3 shadow-md">
                <span className="text-2xl sm:text-3xl">🤝</span>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">Համագործակցություն</p>
              </div>
              <div className="bg-white/80 rounded-xl px-4 py-2 sm:px-6 sm:py-3 shadow-md">
                <span className="text-2xl sm:text-3xl">🚀</span>
                <p className="text-sm sm:text-base font-semibold text-gray-800 mt-1">Առաջընթաց</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
