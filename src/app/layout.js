import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";
import NavBar from "@/component/navBar/NavBar";

const poppinsRegular = Poppins({
  weight: "400", // Regular weight
  subsets: ["latin"],
  display: "swap",
});

const poppinsMedium = Poppins({
  weight: "500", // Medium weight
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsRegular.className} ${poppinsMedium.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}