import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PlanProvider from "@/context/PlanContext";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  title: "Zibon's Fit-Log",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27><text y=%27.9em%27 font-size=%2790%27>🏋️</text></svg>",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <PlanProvider>

          <Navbar></Navbar>
          {children}

          <Footer></Footer>
          <Toaster
            position="bottom-right"
            toastOptions={{ style: { background: "#14161b", color: "#fff", border: "1px solid rgba(255,255,255,0.1)" } }}
          />
        </PlanProvider>
      </body>
    </html>
  );
}
