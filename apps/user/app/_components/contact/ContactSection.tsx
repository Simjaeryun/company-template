import { Button } from "@repo/ui/components";
import Link from "next/link";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold">문의하기</h2>
        <p className="text-lg opacity-90">
          원고 접수, 출판 문의, 오탈자 제보 등 궁금하신 사항을 남겨주세요
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              문의하기
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              원고 접수
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
