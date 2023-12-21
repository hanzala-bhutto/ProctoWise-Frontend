import "@/app/(landing)/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import Sidebar from "../participantComponents/Sidebar";
import Homepage from "../participantComponents/Homepage";
import Header from "../participantComponents/Header";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "font-sans antialiased grainy flex bg-gray-100 min-h-screen ",
          inter.className
        )}
      >
        <Sidebar />
        <div className="h-screen flex-1 p-7">{children}</div>
      </body>
    </html>
  );
}