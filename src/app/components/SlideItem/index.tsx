/**
 *
 * SlideItem
 *
 */
import { SlideItemModel } from 'models';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const SlideItem = (slideItem: SlideItemModel) => {
  const { description, image, redirectUrl, title } = slideItem;
  return (
    <>
      <div
        className="carousel-item active"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="carousel-container">
          <div className="container">
            <h2 className="animate__animated animate__fadeInDown">{title}</h2>
            <p className="animate__animated animate__fadeInUp">{description}</p>
            <Link
              to={redirectUrl}
              className="btn-get-started animate__animated animate__fadeInUp scrollto"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
