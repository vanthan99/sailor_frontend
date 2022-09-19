/**
 *
 * Header
 *
 */
import { SITE_MAP } from 'models';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Props {}

export function Header(props: Props) {
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
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to={HOME_PAGE.path}>Sailor</Link>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to={HOME_PAGE.path}>{HOME_PAGE.title}</Link>
              </li>
              <li>
                <NavLink to={ABOUT_PAGE.path}>{ABOUT_PAGE.title}</NavLink>
              </li>
              <li>
                <NavLink to={SERVICE_PAGE.path}>{SERVICE_PAGE.title}</NavLink>
              </li>
              <li>
                <NavLink to={PORTOLIO_PAGE.path}>{PORTOLIO_PAGE.title}</NavLink>
              </li>
              <li>
                <NavLink to={PRICING_PAGE.path}>{PRICING_PAGE.title}</NavLink>
              </li>
              <li>
                <NavLink to={BLOG_PAGE.path}>{BLOG_PAGE.title}</NavLink>
              </li>
              <li>
                <NavLink to={CONTACT_PAGE.path}>{CONTACT_PAGE.title}</NavLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
}
