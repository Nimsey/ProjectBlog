import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "project 4 blog project",
  description: "finishing off simple but useful",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <NavBar />
            {children}
            <Footer />
            </div>
        </div>
      </body>
    </html>
  );
}
