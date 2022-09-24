/**
 *
 * PortfolioItem
 *
 */
import { PortfolioItemModel } from 'models';
import * as React from 'react';
import Fade from 'react-reveal/Fade';

export const PortfolioItem = (portfolioItem: PortfolioItemModel) => {
  const { description, image, title } = portfolioItem;
  return (
    <Fade right cascade>
      <div className="col-lg-4 col-md-6 portfolio-item">
        <div className="portfolio-wrap">
          <img src={image} className="img-fluid" alt="" />
          <div className="portfolio-info">
            <h4>{title}</h4>
            <p>{description}</p>
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
    </Fade>
  );
};
