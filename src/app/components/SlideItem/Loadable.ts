/**
 *
 * Asynchronously loads the component for SlideItem
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SlideItem = lazyLoad(
  () => import('./index'),
  module => module.SlideItem,
);
