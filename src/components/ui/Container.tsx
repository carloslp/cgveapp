import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;