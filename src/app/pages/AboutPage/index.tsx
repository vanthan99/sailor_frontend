/**
 *
 * AboutPage
 *
 */
import { Breadcrumbs } from 'app/components/Breadcrumbs/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { ImagesResource } from 'images';
import * as React from 'react';

interface Props {}

export function AboutPage(props: Props) {
  const { TEAM_TEAM_1, TEAM_TEAM_2, TEAM_TEAM_3, TEAM_TEAM_4 } = ImagesResource;
  return (
    <>
      <Header />
      <Breadcrumbs />
      <div>
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="row content">
              <div className="col-lg-6">
                <h2>Eum ipsam laborum deleniti velitena</h2>
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assum perenda sruen jonee trave
                </h3>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequa
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in
                  </li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Team Section ======= */}
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Team</h2>
              <p>Our Hardowrking Team</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img src={TEAM_TEAM_1} className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <p>Explicabo voluptatem mollitia et repellat</p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href="">
                        {' '}
                        <i className="ri-linkedin-box-fill" />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img src={TEAM_TEAM_2} className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <p>Aut maiores voluptates amet et quis</p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href="">
                        {' '}
                        <i className="ri-linkedin-box-fill" />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img src={TEAM_TEAM_3} className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <p>Quisquam facilis cum velit laborum corrupti</p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href="">
                        {' '}
                        <i className="ri-linkedin-box-fill" />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img src={TEAM_TEAM_4} className="img-fluid" alt="" />
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <p>Dolorum tempora officiis odit laborum officiis</p>
                    <div className="social">
                      <a href="">
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href="">
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href="">
                        <i className="ri-instagram-fill" />
                      </a>
                      <a href="">
                        {' '}
                        <i className="ri-linkedin-box-fill" />{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
      </div>
      <Footer />
    </>
  );
}
