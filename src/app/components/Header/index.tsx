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

  // on('click', '.mobile-nav-toggle', function(e) {
  //   console.log("thantest");
  //   select('#navbar').classList.toggle('navbar-mobile')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  // })

  const MobileNavToggleClick = () => {
    document.querySelector('#navbar')?.classList.toggle('navbar-mobile');
    document.querySelector('.mobile-nav-toggle')?.classList.toggle('bi-list');
    document.querySelector('.mobile-nav-toggle')?.classList.toggle('bi-x');
  };

  const MobileNavCloseClick = () => {
    document.querySelector('#navbar')?.classList.remove('navbar-mobile');
  };

  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          {/* <h1 className="logo me-auto">
            <Link to={HOME_PAGE.path}>Thuê Xe</Link>
          </h1> */}
          {/* Uncomment below if you prefer to use an image logo */}
          <a href="index.html" className="logo me-auto">
            <img
              src="https://farm5.staticflickr.com/4230/35108607076_fc9c72a7f4_o.png"
              alt=""
              className="img-fluid"
            />
          </a>
          <nav id="navbar" className="navbar">
            <ul onClick={MobileNavCloseClick}>
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
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={MobileNavToggleClick}
            />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
}
