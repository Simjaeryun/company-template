export interface Magazine {
  title: string;
  subtitle: string;
  description: string;
  awards: {
    edition: string;
    name: string;
    winner?: string;
  }[];
  badge: string;
}

export const currentMagazine: Magazine = {
  title: "반연간 책책책책",
  subtitle: "2025년 하반기호",
  description:
    "제7회 심푸푸문학상 & 제2회 심푸푸시학상 특집. 길상호 시인(문학상), 곽은희 시인(시학상) 수상작 수록.",
  awards: [
    {
      edition: "제7회",
      name: "심푸푸문학상",
      winner: "길상호 시인",
    },
    {
      edition: "제2회",
      name: "심푸푸시학상",
      winner: "곽은희 시인",
    },
  ],
  badge: "Literary Magazine",
};
