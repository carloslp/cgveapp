import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-blue-700 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-blue-100 text-lg mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button text={t('cta.buttons.primary')} href="#contact" variant="secondary" size="lg" />
{/*             <Button text={t('cta.buttons.secondary')} href="#services" variant="outline" size="lg" /> */}
            <Button text={t('cta.buttons.secondary')} href="#services" variant="primary" size="lg" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
