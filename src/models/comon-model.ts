export interface BlogItemModel {
  title?: string;
  description?: string;
  author?: string;
  dateCreated?: string;
  commentCount?: number;
  redirectUrl?: string;
  image?: any;
}

export interface PortfolioItemModel {
  image?: any;
  title?: string;
  description?: string;
}

export interface SITE_MAP_Model {
  path: string;
  title: string;
}

export const SITE_MAP = {
  HOME_PAGE: {
    path: '/',
    title: 'Home',
  },
  ABOUT_PAGE: {
    path: '/about',
    title: 'About',
  },
  SERVICE_PAGE: {
    path: '/services',
    title: 'Services',
  },
  PORTOLIO_PAGE: {
    path: '/portolio',
    title: 'Portolio',
  },
  PRICING_PAGE: {
    path: '/pricing',
    title: 'Pricing',
  },
  BLOG_PAGE: {
    path: '/blog',
    title: 'Blog',
  },
  CONTACT_PAGE: {
    path: '/contact',
    title: 'Contact',
  },
};
