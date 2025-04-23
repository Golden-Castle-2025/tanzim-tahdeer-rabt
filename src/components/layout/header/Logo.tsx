
import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 space-x-reverse">
      <div className="w-16 h-16 bg-gov-blue rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-2xl">PSDC</span>
      </div>
      <div className="text-right">
        <h1 className="text-lg font-bold text-gov-blue">مجلس تطوير القطاع الخاص</h1>
        <p className="text-sm text-gov-darkgray">Private Sector Development Council</p>
      </div>
    </Link>
  );
};

export default Logo;
