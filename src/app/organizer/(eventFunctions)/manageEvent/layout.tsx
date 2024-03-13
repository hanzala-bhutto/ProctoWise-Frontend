import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import ManageNav from "@/components/ManageNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proctowise",
  description: "Streamlined And Customized Evaluation And Proctoring Service",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <ManageNav/>
      <div className="flex-grow px-6">{children}</div>
    </div>
  );
};

export default RootLayout;
