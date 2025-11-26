import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@repo/ui/components";
import { newsItems } from "../../_dummy/news";
import Link from "next/link";

export function NewsSection() {
  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold">소식</h2>
            <p className="text-lg text-muted-foreground">
              책책책책의 최신 소식을 확인하세요
            </p>
          </div>
          <Link href="/news">
            <Button variant="ghost">전체보기 →</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all cursor-pointer"
            >
              <CardHeader>
                <div className="text-xs text-muted-foreground mb-2">
                  {item.category} · {item.date}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
