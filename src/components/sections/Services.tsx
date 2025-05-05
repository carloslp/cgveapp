import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Code, Smartphone, Globe, PencilRuler, Database, Cloud } from 'lucide-react';

type ServiceProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  const { t } = useTranslation();
  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <Button text={t('services.learnMore')} variant="outline" href="#contact" />
    </Card>
  );
};

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Code size={40} />,
      title: t('services.items.custom.title'),
      description: t('services.items.custom.description')
    },
    {
      icon: <Globe size={40} />,
      title: t('services.items.web.title'),
      description: t('services.items.web.description')
    },
    {
      icon: <Smartphone size={40} />,
      title: t('services.items.mobile.title'),
      description: t('services.items.mobile.description')
    },
    {
      icon: <PencilRuler size={40} />,
      title: t('services.items.design.title'),
      description: t('services.items.design.description')
    },
    {
      icon: <Database size={40} />,
      title: t('services.items.database.title'),
      description: t('services.items.database.description')
    },
    {
      icon: <Cloud size={40} />,
      title: t('services.items.cloud.title'),
      description: t('services.items.cloud.description')
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;