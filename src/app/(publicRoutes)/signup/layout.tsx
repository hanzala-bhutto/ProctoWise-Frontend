import "@/app/(landing)/globals.css";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
