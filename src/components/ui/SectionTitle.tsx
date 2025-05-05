import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]} max-w-3xl`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;