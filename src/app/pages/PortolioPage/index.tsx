/**
 *
 * PortolioPage
 *
 */
import { Breadcrumbs } from 'app/components/Breadcrumbs/Loadable';
import { Footer } from 'app/components/Footer/Loadable';
import { Header } from 'app/components/Header/Loadable';
import { PortfolioItem } from 'app/components/PortfolioItem/Loadable';
import { ImagesResource } from 'images';
import { PortfolioItemModel } from 'models';
import * as React from 'react';

interface Props {}

export function PortolioPage(props: Props) {
  const {
    PORTFOLIO_PORTFOLIO1,
    PORTFOLIO_PORTFOLIO2,
    PORTFOLIO_PORTFOLIO3,
    PORTFOLIO_PORTFOLIO4,
    PORTFOLIO_PORTFOLIO5,
    PORTFOLIO_PORTFOLIO6,
    PORTFOLIO_PORTFOLIO7,
    PORTFOLIO_PORTFOLIO8,
    PORTFOLIO_PORTFOLIO9,
  } = ImagesResource;
  const PortfolioItemListData: Array<PortfolioItemModel> = [
    {
      image: PORTFOLIO_PORTFOLIO1,
      title: 'App1',
      description: 'APP',
    },
    {
      image: PORTFOLIO_PORTFOLIO2,
      title: 'App1',
      description: 'APP',
    },
    {
      image: PORTFOLIO_PORTFOLIO3,
      title: 'App1',
      description: 'APP',
    },
    {
      image: PORTFOLIO_PORTFOLIO4,
      title: 'App1',
      description: 'APP',
    },
    {
      image: PORTFOLIO_PORTFOLIO5,
      title: 'App1',
      description: 'APP',
    },
    {
      image: PORTFOLIO_PORTFOLIO6,
      title: 'App1',
      description: 'APP',
    },
    {
      image: PORTFOLIO_PORTFOLIO7,
      title: 'App1',
      description: 'APP',
    },
    {
      image: PORTFOLIO_PORTFOLIO8,
      title: 'App1',
      description: 'APP',
    },
    {
      image: PORTFOLIO_PORTFOLIO9,
      title: 'App1',
      description: 'APP',
    },
  ];

  const loadPortfolioItems = PortfolioItemListData.map((item, index) => (
    <PortfolioItem {...item} key={index} />
  ));
  return (
    <>
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            {/* {loadPortfolioItems} */}
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={PORTFOLIO_PORTFOLIO1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={PORTFOLIO_PORTFOLIO2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={PORTFOLIO_PORTFOLIO3} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-3.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={PORTFOLIO_PORTFOLIO4} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={PORTFOLIO_PORTFOLIO5} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-5.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 2"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={PORTFOLIO_PORTFOLIO6} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-6.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={PORTFOLIO_PORTFOLIO7} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-7.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={PORTFOLIO_PORTFOLIO8} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-8.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={PORTFOLIO_PORTFOLIO9} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-9.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a
                      href="portfolio-details.html"
                      className="portfolio-details-lightbox"
                      data-glightbox="type: external"
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
    </>
  );
}
