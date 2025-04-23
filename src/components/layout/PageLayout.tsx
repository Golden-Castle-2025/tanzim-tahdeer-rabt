
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow bg-white shadow-md border-t border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
