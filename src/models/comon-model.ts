export interface BlogItemModel {
  title?: string;
  description?: string;
  author?: string;
  dateCreated?: string;
  commentCount?: number;
  redirectUrl?: string;
  image?: any;
}

export enum ECategory {
  APP,
  CARD,
  WEB,
}

export interface PortfolioItemModel {
  image?: any;
  title?: string;
  description?: string;
  category?: ECategory;
}

export interface SITE_MAP_Model {
  path: string;
  title: string;
}

export interface SlideItemModel {
  image?: any;
  title?: string;
  description?: string;
  redirectUrl?: string;
}

export const SITE_MAP = {
  HOME_PAGE: {
    path: '/',
    title: 'Trang Chủ',
  },
  ABOUT_PAGE: {
    path: '/about',
    title: 'Giới Thiệu',
  },
  SERVICE_PAGE: {
    path: '/services',
    title: 'Dịch Vụ',
  },
  PORTOLIO_PAGE: {
    path: '/portolio',
    title: 'Hình ảnh',
  },
  PRICING_PAGE: {
    path: '/pricing',
    title: 'Giá',
  },
  BLOG_PAGE: {
    path: '/blog',
    title: 'bài Viết',
  },
  CONTACT_PAGE: {
    path: '/contact',
    title: 'Liên Hệ',
  },
};
