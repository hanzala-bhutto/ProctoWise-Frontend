"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Folders,
  Settings,
  User,
  Calendar,
  Search,
  Folder,
  Pilcrow,
} from "lucide-react"; // Import Lucide React icons
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon: <User />, gap: false },
    { title: "Inbox", icon: <Calendar />, gap: false },
    { title: "Accounts", icon: <User />, gap: true },
    { title: "Schedule", icon: <Calendar />, gap: false },
    { title: "Search", icon: <Search />, gap: false },
    { title: "Analytics", icon: <Calendar />, gap: false },
    { title: "Files", icon: <Folder />, gap: true },
    { title: "Setting", icon: <Settings />, gap: false },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-blue-900 text-white h-screen p-5 pt-8 relative duration-300`}
      >
        <ChevronLeft
          className={`absolute bg-black cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Pilcrow
            className={`cursor-pointer duration-500 ${
              !open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            ProctoWise
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
