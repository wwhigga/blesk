import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <TopBanner />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout; 