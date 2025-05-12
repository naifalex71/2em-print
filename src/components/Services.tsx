import React from 'react';
import { Printer, FileText, Image, Package, Smartphone, Award } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'طباعة رقمية',
    description: 'طباعة عالية الجودة بأحدث التقنيات الرقمية لمختلف المواد الإعلانية والتسويقية',
    icon: 'printer'
  },
  {
    id: 2,
    title: 'المطبوعات التجارية',
    description: 'بطاقات العمل، الأوراق الرسمية، المغلفات، والفواتير بتصاميم احترافية',
    icon: 'fileText'
  },
  {
    id: 3,
    title: 'طباعة اللوحات والبنرات',
    description: 'لوحات إعلانية خارجية وداخلية بمختلف المقاسات والخامات عالية الجودة',
    icon: 'image'
  },
  {
    id: 4,
    title: 'التغليف والهدايا',
    description: 'تصميم وإنتاج عبوات التغليف المخصصة والهدايا الدعائية بطباعة فاخرة',
    icon: 'package'
  },
  {
    id: 5,
    title: 'تطبيقات الهوية البصرية',
    description: 'تطبيق هويتك البصرية على مختلف المطبوعات بدقة واحترافية عالية',
    icon: 'smartphone'
  },
  {
    id: 6,
    title: 'طباعة وإنتاج الكتب',
    description: 'خدمات متكاملة لطباعة وإنتاج الكتب والمجلات بمختلف أنواع التجليد',
    icon: 'award'
  }
];

const getIcon = (iconName: string, size: number = 24) => {
  switch (iconName) {
    case 'printer':
      return <Printer size={size} />;
    case 'fileText':
      return <FileText size={size} />;
    case 'image':
      return <Image size={size} />;
    case 'package':
      return <Package size={size} />;
    case 'smartphone':
      return <Smartphone size={size} />;
    case 'award':
      return <Award size={size} />;
    default:
      return <Printer size={size} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">خدماتنا</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من خدمات الطباعة عالية الجودة لتلبية احتياجاتك التجارية والشخصية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="card group"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
            >
              <div className="p-4 mb-4 inline-flex items-center justify-center rounded-full bg-primary-100 text-primary-500 group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                {getIcon(service.icon, 28)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;