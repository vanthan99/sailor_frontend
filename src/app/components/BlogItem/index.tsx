/**
 *
 * BlogItem
 *
 */
import { BlogItemModel } from 'models';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const BlogItem = (blogItemModel: BlogItemModel) => {
  const {
    author,
    commentCount,
    dateCreated,
    description,
    redirectUrl,
    title,
    image,
  } = blogItemModel;
  return (
    <>
      <article className="entry">
        <div className="entry-img">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <h2 className="entry-title">
          <a href={redirectUrl}>{title}</a>
        </h2>
        <div className="entry-meta">
          <ul>
            <li className="d-flex align-items-center">
              <i className="bi bi-person" />{' '}
              <a href="blog-single.html">{author}</a>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-clock" />{' '}
              <a href="blog-single.html">
                <time dateTime="2020-01-01">{dateCreated}</time>
              </a>
            </li>
            <li className="d-flex align-items-center">
              <i className="bi bi-chat-dots" />{' '}
              <a href="blog-single.html">{commentCount} Comments</a>
            </li>
          </ul>
        </div>
        <div className="entry-content">
          <p>{description}</p>
          <div className="read-more">
            <Link to={redirectUrl}>Read More</Link>
          </div>
        </div>
      </article>
      {/* End blog entry */}
    </>
  );
};
