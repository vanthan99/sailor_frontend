/**
 *
 * ContactPage
 *
 */
import { Breadcrumbs } from 'app/components/Breadcrumbs/Loadable';
import { ContactForm } from 'app/components/ContactForm/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { Location } from 'app/components/Location/Loadable';
import * as React from 'react';

interface Props {}

export function ContactPage(props: Props) {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          {<Location />}
          {<ContactForm />}
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
}
