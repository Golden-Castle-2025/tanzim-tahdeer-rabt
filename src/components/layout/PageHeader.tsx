
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="bg-gov-blue border-b-4 border-gov-gold mb-8 shadow-lg">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="text-white text-opacity-90 mt-2">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
