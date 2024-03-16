// import "@/app//globals.css";
import "@/app/participant/(tasks)/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";

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
        "font-sans antialiased grainy flex bg-gray-100 min-h-screen overflow-hidden w-screen"
      )}
    >
      <div className="overflow-y-auto w-screen">{children}</div>
    </div>
  );
}
