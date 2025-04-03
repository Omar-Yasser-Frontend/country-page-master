import Background from "./_components/Background";
import SortFilterProvider from "./_context/SortFilterContext";
import "./globals.css";

export const metadata = {
  title: "Country Page Master",
  description:
    "country page master where you can search any country and know more info about it's capital, neighbour countries, population and more",
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
