import { Button } from "@repo/ui/components";
import { newBooks } from "../../_dummy/books";
import { BookCard } from "./BookCard";
import Link from "next/link";

export function NewBooksSection() {
  return (
    <section id="new" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold">새로 나온 책</h2>
            <p className="text-lg text-muted-foreground">
              최신 출간 도서를 만나보세요
            </p>
          </div>
          <Link href="/books">
            <Button variant="ghost">전체보기 →</Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
