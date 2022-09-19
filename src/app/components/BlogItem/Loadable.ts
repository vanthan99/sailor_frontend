/**
 *
 * Asynchronously loads the component for BlogItem
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BlogItem = lazyLoad(
  () => import('./index'),
  module => module.BlogItem,
);
