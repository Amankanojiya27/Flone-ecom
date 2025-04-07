import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/component/header/Header"
import LeftNav from "@/component/header/LeftNav"
const poppinsRegular = Poppins({
  weight: "400", // Regular weight
  subsets: ["latin"],
  display: "swap",
});

const poppinsMedium = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsRegular.className} ${poppinsMedium.className}`}>
        {/* <Header /> */}
        <LeftNav />
        {children}
      </body>
    </html>
  );
}