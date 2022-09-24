/**
 *
 * Section
 *
 */
import { ImagesResource } from 'images';
import { SlideItemModel } from 'models';
import * as React from 'react';
import { SlideItem } from '../SlideItem/Loadable';

export function Section(props: any) {
  const slideDatas: Array<SlideItemModel> = [
    {
      image: ImagesResource.SLIDE_SLIDE1,
      title: 'Welcome to Sailor',
      description:
        'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      redirectUrl: '#',
    },
    {
      image: ImagesResource.SLIDE_SLIDE2,
      title: 'Lorem Ipsum Dolor',
      description:
        'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto',
      redirectUrl: '#',
    },
    {
      image: ImagesResource.SLIDE_SLIDE3,
      title: 'Sequi ea ut et est quaerat',
      description:
        'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      redirectUrl: '#',
    },
  ];

  const loadSlide = slideDatas.map((item, index) => (
    <SlideItem {...item} key={index} />
  ));
  return (
    <>
      {/* ======= Hero Section ======= */}
      <section id="hero">
        <div
          id="heroCarousel"
          data-bs-interval={5000}
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators" id="hero-carousel-indicators">
            <li
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#heroCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#heroCarousel" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            {loadSlide}
          </div>
          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            />
          </a>
          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            />
          </a>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
}
