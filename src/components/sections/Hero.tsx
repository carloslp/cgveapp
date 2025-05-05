import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative pt-20 lg:pt-24 pb-16 lg:pb-24 min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 100%)',
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('hero.title')} <br />
              <span className="text-blue-600">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button text={t('hero.cta.primary')} href="#contact" size="lg" />
              <Button
                text={t('hero.cta.secondary')}
                href="#services"
                variant="outline"
                size="lg"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-slideInRight">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={t('hero.title')}
              className="rounded-lg shadow-xl w-full max-w-md object-cover"
              style={{ height: '400px' }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
          <a
            href="#services"
            className="animate-bounce text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowRight className="transform rotate-90" size={32} />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;