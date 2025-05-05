import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import './index.css';

// Add animation classes to CSS
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  .animate-fadeIn {
    animation: fadeIn 1s ease-out;
  }
  
  .animate-slideInRight {
    animation: slideInRight 1s ease-out;
  }
  
  .animate-slideInLeft {
    animation: slideInLeft 1s ease-out;
  }
`;

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    // Insert animation styles
    const styleElement = document.createElement('style');
    styleElement.innerHTML = animationStyles;
    document.head.appendChild(styleElement);
    
    // Update page title
    document.title = t('meta.title');
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [t]);
  
  return <Home />;
}

export default App;