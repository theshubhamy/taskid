import "./globals.css";
export const metadata = {
  title: "Taskid",
  description: "Taskid - Trello 2.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">{children}</body>
    </html>
  );
}
