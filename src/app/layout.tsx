import NavBar from "@components/Navbar";
import "./globals.css";
import Footer from "@components/Footer";


export const metadata = {
  title: "Arabalar",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='gradient leading-relaxed tracking-wide flex flex-col'>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
