/**
 *
 * Asynchronously loads the component for PortfolioItem
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PortfolioItem = lazyLoad(
  () => import('./index'),
  module => module.PortfolioItem,
);
