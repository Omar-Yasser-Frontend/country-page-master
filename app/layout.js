import Background from "./_components/Background";
import SortFilterProvider from "./_context/SortFilterContext";
import "./globals.css";

export const metadata = {
  title: "Country Page Master",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-bg text-light-gray">
        <Background />
        <SortFilterProvider>{children}</SortFilterProvider>
      </body>
    </html>
  );
}
