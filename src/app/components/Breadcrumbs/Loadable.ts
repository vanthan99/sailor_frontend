/**
 *
 * Asynchronously loads the component for Breadcrumbs
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Breadcrumbs = lazyLoad(
  () => import('./index'),
  module => module.Breadcrumbs,
);
