/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { ContactPage } from './pages/ContactPage/Loadable';
import { BlogPage } from './pages/BlogPage/Loadable';
import { PricingPage } from './pages/PricingPage/Loadable';
import { PortolioPage } from './pages/PortolioPage/Loadable';
import { ServicePage } from './pages/ServicePage/Loadable';
import { AboutPage } from './pages/AboutPage/Loadable';
import MainLayout from 'layouts/MainLayout';
import HomeLayout from 'layouts/HomeLayout';
import { SITE_MAP } from 'models';

export function App() {
  const { i18n } = useTranslation();
  const {
    ABOUT_PAGE,
    BLOG_PAGE,
    CONTACT_PAGE,
    HOME_PAGE,
    PORTOLIO_PAGE,
    PRICING_PAGE,
    SERVICE_PAGE,
  } = SITE_MAP;
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path={HOME_PAGE.path}>
          <HomeLayout>
            <Switch>
              <Route exact path={HOME_PAGE.path} component={HomePage} />
            </Switch>
          </HomeLayout>
        </Route>
        <Route
          exact
          path={[
            CONTACT_PAGE.path,
            BLOG_PAGE.path,
            PRICING_PAGE.path,
            PORTOLIO_PAGE.path,
            SERVICE_PAGE.path,
            ABOUT_PAGE.path,
          ]}
        >
          <MainLayout>
            <Switch>
              <Route exact path={CONTACT_PAGE.path} component={ContactPage} />
              <Route exact path={BLOG_PAGE.path} component={BlogPage} />
              <Route exact path={PRICING_PAGE.path} component={PricingPage} />
              <Route exact path={PORTOLIO_PAGE.path} component={PortolioPage} />
              <Route exact path={SERVICE_PAGE.path} component={ServicePage} />
              <Route exact path={ABOUT_PAGE.path} component={AboutPage} />
            </Switch>
          </MainLayout>
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
