/**
 *
 * Breadcrumbs
 *
 */
import * as React from 'react';

interface Props {}

export function Breadcrumbs(props: Props) {
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Contact</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
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
