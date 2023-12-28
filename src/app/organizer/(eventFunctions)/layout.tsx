import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-64 flex-shrink-0 pr-4 overflow-hidden">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
};

export default RootLayout;