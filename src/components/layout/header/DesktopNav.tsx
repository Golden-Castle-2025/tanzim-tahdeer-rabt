
import React from 'react';
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { MainMenuItem } from "./types";

interface DesktopNavProps {
  mainMenuItems: MainMenuItem[];
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
}

const DesktopNav = ({ mainMenuItems, activeDropdown, toggleDropdown }: DesktopNavProps) => {
  return (
    <nav className="bg-white border-b-2 border-gov-blue shadow-md hidden md:block">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center space-x-2 space-x-reverse">
          {mainMenuItems.map((item, index) => (
            <li key={index} className="relative group">
              {item.children ? (
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="text-gov-blue py-4 px-4 flex items-center hover:bg-gov-blue hover:text-white transition-colors font-medium"
                  >
                    {item.name}
                    <ChevronDown size={16} className="mr-1 mt-1" />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="absolute top-full right-0 w-48 bg-white shadow-lg z-10 border border-gray-200">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.path}
                          className="block px-4 py-3 text-sm text-gov-darkgray hover:bg-gov-blue hover:text-white transition-colors text-right border-b border-gray-100 last:border-b-0"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="text-gov-blue py-4 px-4 block hover:bg-gov-blue hover:text-white transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNav;
