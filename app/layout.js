import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight:["400"]
});


export const metadata = {
  title: "Sudheer | Software Developer Engineer",
  description: "Portfolio of Sudheer — Software Developer Engineer with 5 years of experience building scalable web applications and robust software solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
