"use client";
import {
  ChevronLeft,
  Pilcrow,
  LayoutDashboard,
  Joystick,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";

import Link from "next/link";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Overview");

  const Menus = [
    {
      title: "Overview",
      icon: <LayoutDashboard />,
      gap: false,
      href: "/judge",
    },
    {
      title: "Events Assignment",
      icon: <Joystick />,
      gap: false,
      href: "/judge/eventsassignment",
    },
    {
      title: "Test Plag Detection",
      icon: <Joystick />,
      gap: false,
      href: "/judge/testPlag",
    },

    {
      title: "Profile",
      icon: <UserIcon />,
      gap: true,
      href: "#",
    },

    {
      title: "Logout",
      icon: <LogOutIcon />,
      gap: false,
      href: "/judge/login",
    },
  ];

  const handleMenuClick = (title: string) => {
    setSelectedMenu(title);
    console.log(title);
    // You can add additional logic here if needed
  };

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-blue-900 text-white h-full p-5 pt-8 relative duration-300 `}
      >
        <ChevronLeft
          className={`absolute bg-black cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-1 rounded-full  ${!open && "rotate-180"}`}
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
                selectedMenu === Menu.title && "bg-black"
              } `}
            >
              <Link
                href={Menu.href}
                className="flex items-center gap-x-4"
                onClick={() => handleMenuClick(Menu.title)}
              >
                {Menu.icon}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
