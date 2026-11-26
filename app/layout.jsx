import "./globals.css";

export const metadata = {
  title: "Farm Co. | Experience the real farm",
  description: "Discover farms, book hands-on experiences and reconnect with nature."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
