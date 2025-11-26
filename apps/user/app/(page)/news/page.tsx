import { Card, CardHeader, CardTitle, CardDescription, Button } from "@repo/ui/components";
import { newsItems } from "../../_dummy/news";

export default function NewsPage() {
  const allNews = [...newsItems, ...newsItems, ...newsItems]; // 더미 데이터 반복

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">소식</h1>
          <p className="text-lg text-muted-foreground">
            문학수첩의 최신 소식과 공지사항을 확인하세요
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button size="sm">전체</Button>
          <Button variant="outline" size="sm">공지사항</Button>
          <Button variant="outline" size="sm">새소식</Button>
          <Button variant="outline" size="sm">공모</Button>
          <Button variant="outline" size="sm">이벤트</Button>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {allNews.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">
                    {item.category} · {item.date}
                  </span>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    NEW
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
                <div className="mt-4">
                  <Button variant="ghost" size="sm">
                    자세히 보기 →
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <Button variant="outline" size="sm" disabled>이전</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">다음</Button>
        </div>
      </div>
    </div>
  );
}

