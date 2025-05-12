import React from 'react';
import Logo from './Logo';
import { Instagram, Facebook, BookText as TikTok } from 'lucide-react';
import { ContactInfo } from '../types';

interface FooterProps {
  contactInfo: ContactInfo;
}

const Footer: React.FC<FooterProps> = ({ contactInfo }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={`https://instagram.com/${contactInfo.social.instagram}`}
              className="p-2 bg-neutral-800 rounded-full hover:bg-primary-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href={`https://facebook.com/${contactInfo.social.facebook}`}
              className="p-2 bg-neutral-800 rounded-full hover:bg-primary-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href={`https://tiktok.com/@${contactInfo.social.tiktok}`}
              className="p-2 bg-neutral-800 rounded-full hover:bg-primary-500 transition-colors"
              aria-label="TikTok"
            >
              <TikTok size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-neutral-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400">
          <p>© {currentYear} 2em print. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-400 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-primary-400 transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;