export interface Book {
  title: string;
  author: string;
  translator?: string;
  date: string;
  pages: string;
  brand?: string;
}

export const newBooks: Book[] = [
  {
    title: "비밀 속의 비밀 1",
    author: "댄 브라운",
    translator: "공보경",
    date: "2025년 11월 27일",
    pages: "472쪽",
    brand: "책책책책",
  },
  {
    title: "아벨의 아이들",
    author: "변윤하",
    date: "2025년 11월 6일",
    pages: "384쪽",
    brand: "책책책책",
  },
  {
    title: "북 오브 도어즈",
    author: "개러스 브라운",
    translator: "심연희",
    date: "2025년 10월 31일",
    pages: "592쪽",
    brand: "책책책책",
  },
  {
    title: "서브 남주가 파업하면 생기는 일 6",
    author: "숙임",
    date: "2025년 10월 15일",
    pages: "480쪽",
    brand: "책책책책",
  },
  {
    title: "해리 포터와 불의 잔",
    author: "J.K. 롤링",
    translator: "강동혁",
    date: "2025년 10월 14일",
    pages: "608쪽",
    brand: "책책책책",
  },
  {
    title: "빛이 스미는 동안",
    author: "김경순",
    date: "2025년 9월 30일",
    pages: "232쪽",
    brand: "책책책책",
  },
  {
    title: "에일리언 클레이",
    author: "에이드리언 차이콥스키",
    translator: "이나경",
    date: "2025년 9월 26일",
    pages: "408쪽",
    brand: "책책책책",
  },
  {
    title: "시간이 흐른다는 착각",
    author: "요시다 노부오",
    translator: "김정환",
    date: "2025년 8월 27일",
    pages: "216쪽",
    brand: "책책책책",
  },
];

export interface BookCategory {
  name: string;
  icon: string;
  slug: string;
}

export const bookCategories: BookCategory[] = [
  { name: "책책책책", icon: "📘", slug: "moonhak" },
  { name: "북@북스", icon: "📗", slug: "books" },
  { name: "리틀북", icon: "📙", slug: "little" },
  { name: "해리포터", icon: "⚡", slug: "harry-potter" },
  { name: "수상작", icon: "🏆", slug: "awards" },
  { name: "전체보기", icon: "📚", slug: "all" },
];

export interface FeaturedBook {
  title: string;
  author: string;
  translator: string;
  description: string;
  badge: string;
}

export const featuredBook: FeaturedBook = {
  title: "비밀 속의 비밀",
  author: "댄 브라운",
  translator: "공보경",
  description:
    "'지적 스릴러 거장', 댄 브라운이 8년 만에 내놓는 최고의 복귀작. 출간과 동시에 베스트셀러 1위!",
  badge: "Featured Book",
};
