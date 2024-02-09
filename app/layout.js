import { fira_code } from "./ui/fonts.js";
import LOGO_MOBILE from "./components/LOGO_MOBILE";
import NAVIGATION_MENU from "./components/NAVIGATION_MENU.js";

// Styles import:
import "./globals.css";
import "./components/global.module.css";

export const metadata = {
  title: "Ashish Yadav",
  description: "Hey, I'm Ashish an aspiring Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`xl:px-72`}>
      <body className={`${fira_code.className} max-w-screen   shadow-lg`}>
        <header className={` w-full flex font-bold justify-between items-center p-4 shadow-lg`}>
          {/* Logo */}
          <LOGO_MOBILE />

          {/* Menu */}
          <nav className={`z-10`}>
            <NAVIGATION_MENU />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
