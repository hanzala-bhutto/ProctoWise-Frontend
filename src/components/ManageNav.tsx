'use client'
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import MobileNav from "./MobileNav";
import { ArrowRight, Underline } from "lucide-react";
import { useState } from "react";
import { useAppSelector } from "@/redux/store";

const Navbar = () => {
  const eventID = useAppSelector((state)=>state.tasks.eventID);
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName:any) => {
      setActiveButton(buttonName);
    };

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-white/75 backdrop-blur-lg transition-all p-6">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-start border-b border-zinc-200">
          <MobileNav />

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href={`/organizer/manageEvent/${eventID}/tasks`}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={() => handleButtonClick('tasks')}
              style={{ borderBottom: activeButton === 'tasks' && '4px solid blue' }}
            >
              Tasks
            </Link>

            <Link
              href={`/organizer/manageEvent/${eventID}/participants`}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={() => handleButtonClick('participants')}
              style={{ borderBottom: activeButton === 'participants' && '4px solid blue' }}
            >
              Participants
            </Link>

            <Link
              href={`/organizer/manageEvent/${eventID}/judges`}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={() => handleButtonClick('judges')}
              style={{ borderBottom: activeButton === 'judges' && '4px solid blue' }}
            >
              Judges
            </Link>

            <Link
              href={`/organizer/manageEvent/${eventID}/additionalFeatures`}
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
              onClick={() => handleButtonClick('addition')}
              style={{ borderBottom: activeButton === 'addition' && '4px solid blue' }}
            >
              Additional Features
            </Link>

          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
