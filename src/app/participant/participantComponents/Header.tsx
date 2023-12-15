import {
  RiMenu3Line,
  RiSearchLine,
  RiNotificationLine,
  RiLogoutBoxLine,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
interface Notification {
  id: number;
  text: string;
}

const notificationsData: Notification[] = [
  // Add your notification data objects here
  { id: 1, text: "Notification 1" },
];

const Header = () => {
  return (
    <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
      <Button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
        <span className="sr-only">Menu</span>
        <RiMenu3Line className="h-6 w-6" />
      </Button>
      <div className="relative w-full max-w-md sm:-ml-2">
        <RiSearchLine className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400" />
        <input
          type="text"
          role="search"
          placeholder="Quick Search"
          className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
        />
      </div>
      <div className="flex flex-shrink-0 items-center ml-auto">
        <Button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
          <span className="sr-only">User Menu</span>
          <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
            <span className="font-semibold">Byte Webster</span>
            <span className="text-sm text-gray-600">Computer Programmer</span>
          </div>
          <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
            <img
              src="https://bytewebster.com/img/logo.png"
              alt="user profile photo"
              className="h-full w-full object-cover"
            />
          </span>
          <RiNotificationLine className="hidden sm:block h-6 w-6 text-gray-300" />
        </Button>
        <div className="border-l pl-3 ml-3 space-x-1">
          {notificationsData.map((notification) => (
            <Button
              key={notification.id}
              className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
            >
              <span className="sr-only">Notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <RiNotificationLine className="h-6 w-6" />
            </Button>
          ))}
          <Button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Log out</span>
            <RiLogoutBoxLine className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
