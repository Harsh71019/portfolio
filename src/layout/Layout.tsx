import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-white dark:bg-black text-black dark:text-white'>
      {children}
    </div>
  );
};

export default Layout;
