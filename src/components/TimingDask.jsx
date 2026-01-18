import { useNavigate } from 'react-router-dom';

const TimingDask = () => {
  const navigate = useNavigate();

  const events = [
    {
      date: 'Հուլիսի 11',
      time: '16:00',
      title: 'Այց բանկ',
      description: 'երեխաներին ծանոթացնել բանկի գործունեությանը, փողի պահպանման անվտանգ եղանակներին, քարտային վճարման մոդելին և բանկոմատից օգտվելու հիմնական կանոններին։',
      icon: '🏦',
      color: 'from-blue-400 to-blue-600',
      borderColor: 'border-blue-400'
    },
    {
      date: 'Հուլիսի 17',
      time: '11:00',
      title: 'Այց «Հայփոստ»',
      description: 'ձևավորել պատկերացումներ ծառայությունների դիմաց վճարման, փոխանցումների, հերթագրման և պատասխանատու սպասարկման մասին։',
      icon: '📮',
      color: 'from-red-400 to-red-600',
      borderColor: 'border-red-400'
    },
    {
      date: 'Հուլիսի 24',
      time: '16:00',
      title: 'Այց տուրիստական կազմակերպություն',
      description: 'իմանալ ինչ է ճամփորդությունը, ինչպես ճամփորդել, ինչպես ձեռք բերել զեղչված տոմսեր, ինչպես օգտվել քարտեզից։',
      icon: '✈️',
      color: 'from-green-400 to-green-600',
      borderColor: 'border-green-400'
    },
    {
      date: 'Հուլիսի 29',
      time: '11:30',
      title: 'Այց սուպերմարկետ',
      description: 'գործնականում կիրառել գնում–վճարում–մանրի ստացում հմտությունները, տարբերել կարիքներն ու ցանկությունները, ձևավորել գումարը ճիշտ ծախսելու հմտություններ։',
      icon: '🛒',
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-400'
    }
  ];

  const learningPoints = [
    'Ինչ է փողը և ինչպես է այն շրջանառվում',
    'Ինչու է կարևոր խնայողություն կատարելը',
    'Ինչ է ծառայությունը և ինչու է դրա համար վճարվում',
    'Ինչպես կատարել գնում և ստանալ մանրը',
    'Ինչ է քարտային վճարումը և բանկոմատը'
  ];

  const discussionTopics = [
    'Ի՞նչ էինք գնում սուպերմարկետից և ինչու',
    'Ինչպե՞ս վճարեցինք և ինչպե՞ս ստացանք մանրը',
    'Ի՞նչ կընտրեիր հաջորդ անգամ՝ խնայե՞լ, թե՞ ծախսել'
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
              📅 Միջոցառումների ժամանակացույց
            </span>
          </h1>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl mb-6 sm:mb-8 border-4 border-pink-400">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              📌 «Իմ առաջին ֆինանսական ճանապարհը»
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Ծրագրի շրջանակում իրականացվող միջոցառումների մասին տեղեկատվություն ծնողների համար
            </p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:shadow-xl active:scale-95 transition-all duration-200 touch-manipulation"
          >
            ← Վերադարձ
          </button>
        </div>
      </section>

      {/* Events Schedule Section */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
          🗓️ Միջոցառումների ցուցակ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 ${event.borderColor} relative overflow-hidden`}
            >
              {/* Decorative gradient background */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.color} opacity-20 rounded-full -mr-16 -mt-16`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`text-4xl sm:text-5xl md:text-6xl bg-gradient-to-br ${event.color} p-3 sm:p-4 rounded-2xl shadow-lg`}>
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        📅 {event.date}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        ⏰ {event.time}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Նպատակ՝</span> {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Points Section */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border-4 border-green-400">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
            👶 Ի՞նչ կսովորի իմ երեխան
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {learningPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-green-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl sm:text-3xl">✨</span>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium flex-1">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion Topics Section */}
      <section className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border-4 border-purple-400">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-900">
            🏠 Տանը քննարկելու համար (ծնող–երեխա)
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {discussionTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-purple-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl md:text-4xl">💬</span>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium flex-1">
                    {topic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimingDask;
