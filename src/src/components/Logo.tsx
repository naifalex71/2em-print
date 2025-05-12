import React from 'react';
import logoImage from '../assets/Asset 5@2x.png';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 mb-2">
        <img 
          src={logoImage} 
          alt="2em print logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-center">
        <div className="text-sm text-neutral-600">Advertising & Printing</div>
      </div>
    </div>
  );
};

export default Logo;