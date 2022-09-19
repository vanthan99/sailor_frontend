/**
 *
 * Asynchronously loads the component for Location
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Location = lazyLoad(
  () => import('./index'),
  module => module.Location,
);
