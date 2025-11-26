import { Button } from "@repo/ui/components";
import { currentMagazine } from "../../_dummy/magazine";
import Link from "next/link";

export function MagazineSection() {
  return (
    <section id="magazine" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 sm:h-96 lg:h-[500px] bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center shadow-xl">
            <div className="text-center space-y-4">
              <div className="text-6xl">📚</div>
              <p className="text-muted-foreground font-medium">
                {currentMagazine.title}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              {currentMagazine.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {currentMagazine.title}
              <br />
              {currentMagazine.subtitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {currentMagazine.description}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {currentMagazine.awards.map((award, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary">
                    {award.edition}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {award.name}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/magazine">
                <Button size="lg">자세히 보기</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
