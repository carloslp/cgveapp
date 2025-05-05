import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Award, Users, Clock, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

type StatProps = {
  value: string;
  label: string;
  icon: React.ReactNode;
};

const Stat: React.FC<StatProps> = ({ value, label, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="text-blue-600 mb-3">{icon}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600 text-center">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <Clock size={32} />,
      value: t('about.stats.experience.value'),
      label: t('about.stats.experience.label')
    },
    {
      icon: <CheckCircle2 size={32} />,
      value: t('about.stats.projects.value'),
      label: t('about.stats.projects.label')
    },
    {
      icon: <Users size={32} />,
      value: t('about.stats.developers.value'),
      label: t('about.stats.developers.label')
    },
    {
      icon: <Award size={32} />,
      value: t('about.stats.awards.value'),
      label: t('about.stats.awards.label')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              title={t('about.title')}
              subtitle={t('about.subtitle')}
              alignment="left"
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('about.description.part1')}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('about.description.part2')}
            </p>
            <Button text={t('about.cta')} href="#contact" size="lg" />
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Stat
                  key={index}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt={t('about.title')}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;