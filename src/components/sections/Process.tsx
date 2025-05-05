import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { ClipboardList, Lightbulb, Code, LineChart, CheckCircle, Zap } from 'lucide-react';

type ProcessStepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, stepNumber }) => {
  const { t } = useTranslation();
  return (
    <div className="relative flex items-start md:items-center space-x-4 md:space-x-8">
      <div className="hidden md:block absolute top-0 left-12 bottom-0 w-0.5 bg-blue-200 -z-10">
        {stepNumber !== 6 && <div className="h-full"></div>}
      </div>
      <div className="flex-shrink-0 z-10">
        <div className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-blue-100 text-blue-700 rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white">
          {icon}
        </div>
        <div className="mt-2 text-center font-bold text-blue-700 md:text-lg">
          {t('process.step')} {stepNumber}
        </div>
      </div>
      <div className="flex-1 pb-12 md:pb-16">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <ClipboardList size={32} />,
      title: t('process.steps.discovery.title'),
      description: t('process.steps.discovery.description'),
    },
    {
      icon: <Lightbulb size={32} />,
      title: t('process.steps.planning.title'),
      description: t('process.steps.planning.description'),
    },
    {
      icon: <Code size={32} />,
      title: t('process.steps.development.title'),
      description: t('process.steps.development.description'),
    },
    {
      icon: <CheckCircle size={32} />,
      title: t('process.steps.testing.title'),
      description: t('process.steps.testing.description'),
    },
    {
      icon: <Zap size={32} />,
      title: t('process.steps.deployment.title'),
      description: t('process.steps.deployment.description'),
    },
    {
      icon: <LineChart size={32} />,
      title: t('process.steps.support.title'),
      description: t('process.steps.support.description'),
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title={t('process.title')}
          subtitle={t('process.subtitle')}
        />
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={index + 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;