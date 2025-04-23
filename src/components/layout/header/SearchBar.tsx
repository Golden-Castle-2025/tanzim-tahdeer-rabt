
import React from 'react';
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="بحث..."
        className="border rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-gov-blue w-full"
      />
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
    </div>
  );
};

export default SearchBar;
