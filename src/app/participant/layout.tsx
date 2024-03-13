import "@/app/(landing)/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Proctowise",
  description: "Streamlined And Customized Evaluation And Proctoring Service",
  icons: {
    icon: '/108_p.jpg', // /public path
  },
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
          "font-sans antialiased grainy flex bg-gray-100 min-h-screen min-w-full",
          inter.className
        )}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
