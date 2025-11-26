import { Button } from "@repo/ui/components";
import { featuredBook } from "../../_dummy/books";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                {featuredBook.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {featuredBook.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {featuredBook.author} 지음 · {featuredBook.translator} 옮김
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {featuredBook.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/books">
                <Button size="lg">자세히 보기</Button>
              </Link>
              <Link href="/books">
                <Button size="lg" variant="outline">전체 도서 보기</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="text-6xl">📚</div>
                <p className="text-muted-foreground">책 표지 이미지</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

