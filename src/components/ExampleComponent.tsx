import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ExampleComponent: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ExampleComponent must be used within a ThemeProvider');
  }

  const { toggleDarkMode } = themeContext;

  return (
    <div className='container mx-auto p-4 bg-white dark:bg-black text-black dark:text-white'>
      <h1 className='text-2xl font-bold'>Hello, Dark Mode!</h1>
      <p className='mt-2'>This text adapts to the current theme.</p>
      <button
        onClick={toggleDarkMode}
        className='mt-4 px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded'
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default ExampleComponent;
