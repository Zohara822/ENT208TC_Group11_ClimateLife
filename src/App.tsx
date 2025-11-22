import { useState } from 'react';
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: '/A.png', title: 'Real-Time Environmental Data + IoT Synchronization' },
    { image: '/B.png', title: 'Smart Outfit, Plant and Environmental Tips' },
    { image: '/C.png', title: 'IoT Device Compatibility' },
    { image: '/D.png', title: 'Community Sharing and Topics' },
    { image: '/E.png', title: 'AI Assistant Support' }
  ];

  const content = {
    en: {
      title: 'ClimateLife',
      tagline: 'Your climate & lifestyle companion',
      description: 'Discover how to create an intelligent, energy-efficient, and eco-friendly living environment. ClimateLife provides comprehensive guides on smart home systems, including device control, network management, scene mode settings, and voice/remote operations.',
      features: [
        'Real-Time Environmental Data + IoT Synchronization',
        'Smart Outfit, Plant and Environmental Tips',
        'IoT Device Compatibility',
        'Community Sharing and Topics'
      ],
      cta: 'Visit Website',
      feedback: 'User Feedback',
      gallery: 'Feature Gallery',
      followUs: 'Follow Us'
    },
    zh: {
      title: 'ClimateLife',
      tagline: '您的气候与生活伴侣',
      description: '探索如何打造智能、节能、环保的居住环境。ClimateLife 提供全面的智能家居系统指南，包括设备控制、联网管理、情景模式设置以及语音/远程操作等功能。',
      features: [
        '实时环境数据 + 物联网同步',
        '智能穿衣、植物和环境建议',
        '物联网设备兼容性',
        '社区分享和话题讨论'
      ],
      cta: '访问网站',
      feedback: '用户反馈',
      gallery: '功能展示',
      followUs: '关注我们'
    }
  };

  const currentContent = content[language];

  const disclaimerContent = {
    en: [
      'This app is an Alpha version',
      'Developed by XJTLU students',
      'Non-commercial project for education & research'
    ],
    zh: [
      '本应用为 Alpha 测试版本',
      '由西交利物浦大学学生开发',
      '本应用为非商业项目，仅供教学与实验使用'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 relative flex flex-col">
      <div className="absolute top-6 right-6 z-20 flex gap-4">
        <button
          onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-teal-100"
        >
          <Globe className="w-4 h-4 text-teal-600" />
          <span className="text-sm font-medium text-gray-700">{language === 'en' ? '中文' : 'EN'}</span>
        </button>

        <a
          href="https://v.wjx.cn/vm/ed4tJ8G.aspx#"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-teal-600 text-sm font-medium"
        >
          {currentContent.feedback}
        </a>
      </div>

      <div className="container mx-auto px-6 py-12 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <img
                src="/a copy.jpg"
                alt="ClimateLife Logo"
                className="w-16 h-16 rounded-2xl shadow-lg object-cover"
              />
              <h1 className="text-5xl font-bold text-gray-800">
                {currentContent.title}
              </h1>
            </div>

            <p className="text-2xl text-teal-600 font-semibold">
              {currentContent.tagline}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              {currentContent.description}
            </p>

            <div className="space-y-3">
              {currentContent.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://climatelife-smart-li-4cx3.bolt.host"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-teal-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-teal-600 text-lg font-semibold"
            >
              {currentContent.cta}
            </a>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Smart Home Living Room"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{language === 'en' ? 'Temperature' : '温度'}</p>
                  <p className="text-2xl font-bold text-gray-800">22°C</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">{language === 'en' ? 'Energy Saved' : '节能'}</p>
                  <p className="text-lg font-bold text-gray-800">35%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 border-t border-teal-200/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {currentContent.gallery}
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-auto"
              />
            </div>

            <div className="text-center mt-4">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-teal-500 w-8'
                          : 'bg-teal-200 hover:bg-teal-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-teal-200/50 bg-white/50 backdrop-blur-sm py-12">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <div>
              <h3 className="text-center text-lg font-semibold text-gray-800 mb-6">
                {currentContent.followUs}
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://v.douyin.com/feyzfnWNtiw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
                >
                  {language === 'en' ? 'TikTok' : '抖音'}
                </a>
                <a
                  href="http://xhslink.com/o/9QegcFUiOnv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
                >
                  {language === 'en' ? 'Little Red Book' : '小红书'}
                </a>
                <a
                  href="https://www.bilibili.com/video/BV1yiUjBkEGv/?share_source=copy_web&vd_source=d899eb94f058c9dc1a97f677cde18624"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
                >
                  Bilibili
                </a>
              </div>
            </div>

            <div className="border-t border-teal-200/30 pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
                {disclaimerContent[language].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-lg">⚠️</span>
                    <span>{item}</span>
                    {index < disclaimerContent[language].length - 1 && (
                      <span className="hidden sm:inline text-gray-400 ml-2">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
