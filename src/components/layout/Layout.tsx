import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ThemeToggle from '../common/ThemeToggle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <ThemeToggle />
      <main className='mt-[10dvh]'>{children}</main>
      <Footer />
    </>
  );
}
