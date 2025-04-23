import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'lucide-react';
import DesktopNav from "./header/DesktopNav";
import MobileMenu from "./header/MobileMenu";
import SearchBar from "./header/SearchBar";
import ProfileMenu from "./header/ProfileMenu";
import { MainMenuItem } from "./header/types";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const mainMenuItems: MainMenuItem[] = [
    {
      name: "الرئيسية",
      path: "/",
    },
    {
      name: "عن المجلس",
      path: "/about",
      children: [
        {
          name: "نبذة عن المجلس",
          path: "/about",
        },
        {
          name: "الهيكل التنظيمي",
          path: "/about/structure",
        },
        {
          name: "الرؤية والرسالة",
          path: "/about/vision",
        },
        {
          name: "الاستراتيجية",
          path: "/about/strategy",
        },
      ],
    },
    {
      name: "الخدمات",
      path: "/services",
      children: [
        {
          name: "خدمات المجلس",
          path: "/services",
        },
        {
          name: "خدمات القطاع الخاص",
          path: "/services/private-sector",
        },
        {
          name: "الدعم الفني",
          path: "/services/technical-support",
        },
        {
          name: "الاستشارات",
          path: "/services/consultations",
        },
        {
          name: "المشاكل والمقترحات",
          path: "/services/complaints",
        },
      ],
    },
    {
      name: "المشاريع",
      path: "/projects",
    },
    {
      name: "الأخبار",
      path: "/news",
    },
    {
      name: "التقرير السنوي",
      path: "/annual-report",
    },
    {
      name: "اتصل بنا",
      path: "/contact",
    },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="bg-gov-blue text-white font-bold rounded-lg px-3 py-2 text-lg">IPSDC</div>
        </Link>

        <div className="flex items-center gap-4">
          <SearchBar />
          <ProfileMenu />
          <button onClick={toggleMenu} className="md:hidden text-gov-blue focus:outline-none">
            <Menu size={24} />
          </button>
        </div>
      </div>

      <DesktopNav
        mainMenuItems={mainMenuItems}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
      />

      <MobileMenu
        isOpen={isMenuOpen}
        activeDropdown={activeDropdown}
        mainMenuItems={mainMenuItems}
        toggleMenu={toggleMenu}
        toggleDropdown={toggleDropdown}
      />
    </header>
  );
};

export default Header;
