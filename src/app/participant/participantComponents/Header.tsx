import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between border-2  bg-blue-900 rounded-md h-16 items-center w-full">
      <div className="pl-2 text-2xl text-white">Join Competition</div>
      <div className="flex w-full max-w-sm items-center space-x-2 mr-2">
        <Input type="search" placeholder="Search" />
        <Button>
          <Search />
        </Button>
      </div>
    </div>
  );
};

export default Header;
