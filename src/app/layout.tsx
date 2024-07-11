"use client";
import React, { ReactNode } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <div className='drawer lg:drawer-open'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />

          <div className='drawer-content'>
            <div className='flex justify-between px-4'>
              <label
                htmlFor='my-drawer-2'
                className='btn btn-accent drawer-button lg:hidden my-4 uppercase'
              >
                menu
              </label>
              <ThemeSwitcher />
            </div>
            {/* Page content here */}
            <div className='p-4'> {children}</div>
            <Footer />
          </div>
          <div className='drawer-side'>
            <Header />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
