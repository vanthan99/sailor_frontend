import { Breadcrumbs } from 'app/components/Breadcrumbs/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import React from 'react';

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
