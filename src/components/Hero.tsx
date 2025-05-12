import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-10 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">2em</span> print
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-neutral-700 mb-8 leading-relaxed">
            متخصصون في جميع خدمات الطباعة
          </p>
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
            نقدم حلول طباعة مبتكرة وعالية الجودة لتلبية احتياجات عملك بأعلى معايير الاحترافية والدقة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-primary">
              استكشف خدماتنا
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg font-semibold border-2 border-primary-500 text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"
            >
              تواصل معنا
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-primary-500 hover:text-primary-600 transition-colors">
            <ArrowDownCircle size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;