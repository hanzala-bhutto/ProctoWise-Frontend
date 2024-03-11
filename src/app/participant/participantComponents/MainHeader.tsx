'use client';

import { useAppSelector } from "@/redux/store";
import { Bell, User } from "lucide-react"; // Import Lucide-React icons
import { usePathname } from 'next/navigation';
import { useState } from 'react';


const MainHeader: React.FC = ({ events=[], setFilteredEvents=()=>{} }) => {

  const pathname = usePathname()
  const showSearchBar = pathname.includes('/viewregisteredevents') || pathname.includes('/joinevent');
  // console.log(pathname,showSearchBar);
  const [searchQuery, setSearchQuery] = useState('');

  const participant = useAppSelector((state) => state?.auth?.user);

  const handleSearch = (query:string) => {
    // console.log(query);
    const filteredEvents = events.filter((event:any) =>
      event.name.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filteredEvents);
    setSearchQuery(query);
  };

  return (
    <header className="flex items-center h-20 px-6 sm:px-10 bg-white rounded-lg">
      <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
        <span className="sr-only">Menu</span>
        <span className="h-6 w-6">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </span>
      </button>
      <div className="relative w-full max-w-md sm:-ml-2">
        {/* Lucide-React search icon */}
        <span className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        {showSearchBar
        ?
        <input
          type="text"
          role="search"
          placeholder="Quick Search"
          className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
          value={searchQuery} onChange={(e) => handleSearch(e.target.value)}
        />
        :
        <input
        type="text"
        role="search"
        placeholder="Quick Search"
        className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
        disabled
        />
        }

      </div>
      <div className="flex flex-shrink-0 items-center ml-auto">
        <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
          <span className="sr-only">User Menu</span>
          <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
            <span className="font-semibold">{participant ? participant.name : "Unknown"}</span>
            <span className="text-sm text-gray-600">{participant ? participant.email : "Unknown@gmail.com"}</span>
          </div>
          <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
            {/* <Image
              src="https://bytewebster.com/img/logo.png"
              alt="user profile photo"
              className="object-cover"
              width={48}
              height={48}
            /> */}
          </span>
          {/* Lucide-React user icon */}
          <span className="h-6 w-6 text-gray-300 hidden sm:block">
            <User />
          </span>
        </button>
        <div className="border-l pl-3 ml-3 space-x-1">
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Notifications</span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
            {/* Lucide-React bell icon */}
            <span className="h-6 w-6">
              <Bell />
            </span>
          </button>
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            {/* Lucide-React logout icon */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
