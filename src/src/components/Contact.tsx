import React, { useState } from 'react';
import { Mail, Phone, Send, Instagram, Facebook, BookText as TikTok } from 'lucide-react';
import { ContactInfo } from '../types';

interface ContactProps {
  contactInfo: ContactInfo;
  onUpdateContactInfo: (newInfo: ContactInfo) => void;
}

const Contact: React.FC<ContactProps> = ({ contactInfo, onUpdateContactInfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(contactInfo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdateContactInfo(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(contactInfo);
    setIsEditing(false);
  };

  const handleChange = (section: 'ceo1' | 'ceo2' | 'social', field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-primary text-white">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            نحن هنا للإجابة على استفساراتك وتقديم المساعدة. لا تتردد في التواصل معنا عبر أي من وسائل الاتصال التالية
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">معلومات الاتصال</h3>
              
              {/* CEO 1 Information */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-primary-500 mb-2">CEO</h4>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={formData.ceo1.name}
                      onChange={(e) => handleChange('ceo1', 'name', e.target.value)}
                      className="input-field mb-2"
                    />
                    <input
                      type="text"
                      value={formData.ceo1.phone}
                      onChange={(e) => handleChange('ceo1', 'phone', e.target.value)}
                      className="input-field"
                    />
                  </>
                ) : (
                  <>
                    <p className="text-lg font-medium text-neutral-800">{contactInfo.ceo1.name}</p>
                    <p className="text-primary-500 flex items-center">
                      <Phone size={18} className="me-2" />
                      {contactInfo.ceo1.phone}
                    </p>
                  </>
                )}
              </div>

              {/* CEO 2 Information */}
              <div className="mb-6">
                <h4 className="text-xl font-bold text-primary-500 mb-2">CEO</h4>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={formData.ceo2.name}
                      onChange={(e) => handleChange('ceo2', 'name', e.target.value)}
                      className="input-field mb-2"
                    />
                    <input
                      type="text"
                      value={formData.ceo2.phone}
                      onChange={(e) => handleChange('ceo2', 'phone', e.target.value)}
                      className="input-field"
                    />
                  </>
                ) : (
                  <>
                    <p className="text-lg font-medium text-neutral-800">{contactInfo.ceo2.name}</p>
                    <p className="text-primary-500 flex items-center">
                      <Phone size={18} className="me-2" />
                      {contactInfo.ceo2.phone}
                    </p>
                  </>
                )}
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-primary-500 mb-2">تابعونا على</h4>
                <div className="flex space-x-4">
                  <a href={`https://instagram.com/${contactInfo.social.instagram}`} className="text-neutral-600 hover:text-primary-500">
                    <Instagram size={24} />
                  </a>
                  <a href={`https://facebook.com/${contactInfo.social.facebook}`} className="text-neutral-600 hover:text-primary-500">
                    <Facebook size={24} />
                  </a>
                  <a href={`https://tiktok.com/@${contactInfo.social.tiktok}`} className="text-neutral-600 hover:text-primary-500">
                    <TikTok size={24} />
                  </a>
                </div>
              </div>

              {isEditing ? (
                <div className="flex space-x-3">
                  <button onClick={handleSave} className="btn-primary">
                    حفظ
                  </button>
                  <button onClick={handleCancel} className="btn-secondary">
                    إلغاء
                  </button>
                </div>
              ) : (
                <button onClick={handleEdit} className="text-primary-500 font-medium">
                  تعديل معلومات الاتصال
                </button>
              )}
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">أرسل رسالة</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-600">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-600">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-600">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>إرسال الرسالة</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;