import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { HomeContent } from 'app/components/HomeContent/Loadable';
import { Section } from 'app/components/Section/Loadable';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>My HomePage</span>
      <Header />
      <Section />
      <HomeContent />
      <Footer />
    </>
  );
}
