export interface NewsItem {
  category: string;
  date: string;
  title: string;
  description: string;
}

export const newsItems: NewsItem[] = [
  {
    category: "공지사항",
    date: "11월 12일",
    title: "2025 제3회 반연간 문학수첩 신인 작가상 당선작 발표",
    description:
      "㈜문학수첩에서 발행하는 반연간 문예지 《반연간 문학수첩》은 지난 2023년 제1회를 시작으로 한국 문단의...",
  },
  {
    category: "새소식",
    date: "10월 2일",
    title: "10월 14일 전 세계 동시 출간! 해리 포터와 불의 잔",
    description:
      "화려한 그림과 기발한 종이 공예로 큰 사랑을 받은 해리 포터 시리즈, 더 아름다운 일러스트로...",
  },
  {
    category: "공모",
    date: "9월 10일",
    title: "제4회 반연간 문학수첩 신인 작가상 공모 안내",
    description:
      "제4회 반연간 문학수첩 신인 작가상을 공모합니다. 많은 참여 부탁드립니다...",
  },
];
