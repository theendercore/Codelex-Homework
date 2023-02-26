import "./globals.css";

export const metadata = {
  title: "Recipe Book",
  description: "Made my me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-slate-900 container m-auto py-10 flex items-center justify-center"
    >
      <body>{children}</body>
    </html>
  );
}
