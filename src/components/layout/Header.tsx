import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

const navLinks = [
  { name: 'header.nav.home', href: '#home' },
  { name: 'header.nav.services', href: '#services' },
  { name: 'header.nav.process', href: '#process' },
  { name: 'header.nav.about', href: '#about' },
  { name: 'header.nav.testimonials', href: '#testimonials' },
  { name: 'header.nav.contact', href: '#contact' },
];

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Code size={32} className="text-blue-700 mr-2" />
            <span className="text-xl font-bold text-gray-900">DevCraft</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {t(link.name)}
              </a>
            ))}
            <Button text={t('header.cta')} href="#contact" />
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white absolute top-full left-0 right-0 shadow-md">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 text-sm font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.name)}
                </a>
              ))}
              <Button text={t('header.cta')} href="#contact" onClick={() => setIsMenuOpen(false)} />
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
              >
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;