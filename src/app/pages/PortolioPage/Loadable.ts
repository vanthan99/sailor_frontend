/**
 *
 * Asynchronously loads the component for PortolioPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PortolioPage = lazyLoad(
  () => import('./index'),
  module => module.PortolioPage,
);
