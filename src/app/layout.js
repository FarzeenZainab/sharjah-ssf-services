import localFont from "next/font/local";

import "./globals.css";

export const metadata = {
  title: "Sharjah Social Security Fund | Services",
  description: "Services offered by Sharjah social security fund",
};

// Font files
const pfDin = localFont({
  src: [
    {
      path: "../../public/fonts/pf-din-text-universal.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pf-din-text-universal-medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-pf-din",
});

const abhaya = localFont({
  src: [
    {
      path: "../../public/fonts/abhaya-libre-extra-bold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-abhaya",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pfDin.variable} ${abhaya.variable}`}>{children}</body>
    </html>
  );
}
