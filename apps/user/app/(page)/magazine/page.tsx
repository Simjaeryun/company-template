import { Button, Card, CardHeader, CardTitle, CardDescription } from "@repo/ui/components";
import { currentMagazine } from "../../_dummy/magazine";

export default function MagazinePage() {
  const previousIssues = [
    { title: "2025년 상반기호", date: "2025년 3월" },
    { title: "2024년 하반기호", date: "2024년 9월" },
    { title: "2024년 상반기호", date: "2024년 3월" },
    { title: "2023년 하반기호", date: "2023년 9월" },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Current Issue */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[600px] bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="text-center space-y-4">
                <div className="text-6xl">📚</div>
                <p className="text-muted-foreground font-medium">{currentMagazine.title}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                {currentMagazine.badge}
              </div>
              <h1 className="text-4xl font-bold">
                {currentMagazine.title}
                <br />
                <span className="text-primary">{currentMagazine.subtitle}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentMagazine.description}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {currentMagazine.awards.map((award, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <div className="text-3xl font-bold text-primary">{award.edition}</div>
                    <div className="text-sm text-muted-foreground mt-1">{award.name}</div>
                    {award.winner && (
                      <div className="text-sm font-medium mt-2">{award.winner}</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="pt-4 flex gap-4">
                <Button size="lg">구매하기</Button>
                <Button size="lg" variant="outline">상세 정보</Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Magazine */}
        <section className="mb-20 py-16 px-8 bg-muted/30 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">반연간 문학수첩이란?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              반연간 문학수첩은 1년에 두 번 발행되는 문예지로, 한국 문학의 발전과 
              신인 작가 발굴을 위해 창간되었습니다. 매호마다 엄선된 작품들과 함께 
              김종철문학상, 김종철시학상 수상작을 소개하며, 독자와 작가가 함께 
              만들어가는 문학의 가치를 지향합니다.
            </p>
          </div>
        </section>

        {/* Previous Issues */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold">이전 호</h2>
              <p className="text-muted-foreground mt-2">지난 문학수첩을 만나보세요</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previousIssues.map((issue, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all">
                <CardHeader className="p-0">
                  <div className="aspect-3/4 bg-linear-to-br from-primary/5 to-accent/5 rounded-t-xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-4xl mb-2">📖</div>
                      <p className="text-xs text-muted-foreground">표지 이미지</p>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <CardTitle className="text-base group-hover:text-primary transition-colors">
                      {issue.title}
                    </CardTitle>
                    <CardDescription>{issue.date}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="mt-20 py-16 px-8 bg-primary text-primary-foreground rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">구독 안내</h2>
          <p className="text-lg opacity-90 mb-8">
            반연간 문학수첩을 정기 구독하고 특별한 혜택을 받아보세요
          </p>
          <Button size="lg" variant="secondary">
            구독 신청하기
          </Button>
        </section>
      </div>
    </div>
  );
}

