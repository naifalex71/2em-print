export interface ContactInfo {
  ceo1: {
    name: string;
    phone: string;
  };
  ceo2: {
    name: string;
    phone: string;
  };
  social: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}