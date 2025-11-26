export interface CompanyInfo {
  name: string;
  nameEn: string;
  description: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
}

export const companyInfo: CompanyInfo = {
  name: "문학수첩",
  nameEn: "Moonhak Soochup",
  description: "독자와 작가가 함께 만들어가는 문학의 가치를 지키는 출판사",
  address: "경기도 파주시 회동길 503-1",
  phone: "031-955-9088",
  fax: "031-955-9066",
  email: "moonhak@moonhak.co.kr",
};

export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "도서", href: "/books" },
  { name: "새로 나온 책", href: "/#new" },
  { name: "반연간 문학수첩", href: "/magazine" },
  { name: "소식", href: "/news" },
  { name: "문의", href: "/contact" },
];

export interface FooterLink {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

export const footerLinks: FooterLink[] = [
  {
    title: "도서",
    links: [
      { name: "전체 도서", href: "#" },
      { name: "새로 나온 책", href: "#" },
      { name: "수상 및 선정 도서", href: "#" },
      { name: "작가", href: "#" },
      { name: "해리포터 시리즈", href: "#" },
    ],
  },
  {
    title: "문학수첩",
    links: [
      { name: "반연간 문학수첩", href: "#" },
      { name: "김종철 시인의 집", href: "#" },
      { name: "회사 소개", href: "#" },
      { name: "연혁", href: "#" },
      { name: "공지사항", href: "#" },
    ],
  },
];
