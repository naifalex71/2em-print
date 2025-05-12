import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    'خبرة متخصصة في مجال الطباعة',
    'استخدام أحدث التقنيات والمعدات',
    'اهتمام بالتفاصيل والجودة العالية',
    'أسعار تنافسية وعروض مميزة',
    'التزام بمواعيد التسليم',
    'خدمة عملاء متميزة ومتابعة مستمرة'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="h-[400px] bg-gradient-primary rounded-2xl shadow-xl"></div>
          </div>
          
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">من نحن</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              تأسست شركة 2em print عام 2020 بهدف تقديم خدمات طباعة استثنائية بأعلى معايير الجودة. نسعى دائمًا لتلبية احتياجات عملائنا من خلال الاعتماد على أحدث التقنيات وفريق عمل متخصص.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              نحرص على تطوير خدماتنا باستمرار لمواكبة أحدث التطورات في عالم الطباعة، ونسعى دائمًا لإرضاء عملائنا وتحقيق تطلعاتهم.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-s-2">
                  <CheckCircle className="flex-shrink-0 mt-1 text-primary-500" size={20} />
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;