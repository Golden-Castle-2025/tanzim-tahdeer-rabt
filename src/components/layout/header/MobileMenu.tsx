
import React from 'react';
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { MainMenuItem } from "./types";
import SearchBar from "./SearchBar";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileMenuProps {
  isOpen: boolean;
  activeDropdown: string | null;
  mainMenuItems: MainMenuItem[];
  toggleMenu: () => void;
  toggleDropdown: (dropdown: string) => void;
}

const MobileMenu = ({
  isOpen,
  activeDropdown,
  mainMenuItems,
  toggleMenu,
  toggleDropdown
}: MobileMenuProps) => {
  const isMobile = useIsMobile();

  if (!isMobile && !isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black bg-opacity-80 z-50 md:hidden",
        isOpen ? "block" : "hidden"
      )}
      onClick={(e) => {
        // Close menu when clicking outside
        if (e.target === e.currentTarget) {
          toggleMenu();
        }
      }}
    >
      <div className={cn(
        "fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center p-4 border-b bg-gov-blue text-white">
          <button onClick={toggleMenu} className="text-white">
            <X size={24} />
          </button>
          <div className="font-bold">القائمة</div>
        </div>
        <div className="overflow-y-auto h-full pb-20">
          <ul className="py-2">
            {mainMenuItems.map((item, index) => (
              <li key={index} className="border-b">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full text-right py-3 px-4 flex justify-between items-center text-gov-darkgray bg-white"
                    >
                      {item.name}
                      <ChevronDown size={16} className={cn("transition-transform", activeDropdown === item.name ? "rotate-180" : "")} />
                    </button>
                    <div className={cn("bg-gray-50 transition-all duration-300 border-t",
                      activeDropdown === item.name ? "max-h-96" : "max-h-0 overflow-hidden"
                    )}>
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.path}
                          className="block px-6 py-3 text-sm text-gov-darkgray hover:bg-gov-blue hover:text-white text-right border-t border-gray-100"
                          onClick={toggleMenu}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-3 px-4 text-gov-darkgray text-right bg-white hover:bg-gov-blue hover:text-white"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="p-4 bg-gray-50">
              <SearchBar />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
