/**
 *
 * Asynchronously loads the component for HomeContent
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HomeContent = lazyLoad(
  () => import('./index'),
  module => module.HomeContent,
);
