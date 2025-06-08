import type {Metadata} from 'next';
import '../assets/globals.css';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import React from 'react';
import {ToastContainer} from 'react-toastify';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Modern Admin Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">
        <div className="flex min-h-screen">
          <Navbar />
          <div className="flex flex-col w-full">
            <Header />
            <main className="flex-1 bg-[#edeff5] text-black">{children}</main>
            <ToastContainer autoClose={2000} />
          </div>
        </div>
      </body>
    </html>
  );
}
