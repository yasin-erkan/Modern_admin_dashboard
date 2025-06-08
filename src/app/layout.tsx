import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Admin Dashboard',
  description: 'A modern admin dashboard built with Next.js and Material UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Navbar />
          <div className="flex flex-col w-full">
            <Header />
            <main className="flex-1 bg-[#edeff5] text-black">{children}</main>
            <ToastContainer />
          </div>
        </div>
      </body>
    </html>
  )
}
