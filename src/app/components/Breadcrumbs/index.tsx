/**
 *
 * Breadcrumbs
 *
 */
import { SITE_MAP } from 'models';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export function Breadcrumbs(props: Props) {
  const { HOME_PAGE } = SITE_MAP;
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Contact</h2>
            <ol>
              <li>
                <Link to={HOME_PAGE.path}>Home</Link>
              </li>
              <li>Contact</li>
            </ol>
          </div>
        </div>
      </section>
      {/* End Breadcrumbs */}
    </>
  );
}
