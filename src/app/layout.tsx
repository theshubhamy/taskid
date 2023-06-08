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
      <body>{children}</body>
    </html>
  );
}
