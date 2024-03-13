import "@/app/(landing)/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import Sidebar from "../JudgeComponents/Sidebar";

export const metadata = {
  title: "Proctowise",
  description: "Streamlined And Customized Evaluation And Proctoring Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "font-sans antialiased grainy flex bg-gray-100 min-h-screen overflow-hidden"
      )}
    >
      <Sidebar />
      <div className="h-screen flex-1 p-7 overflow-y-auto">{children}</div>
    </div>
  );
}
