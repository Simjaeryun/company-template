import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@repo/ui/components";
import type { Book } from "../../_dummy/books";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all">
      <CardHeader className="p-0">
        <div className="aspect-3/4 bg-linear-to-br from-primary/5 to-accent/5 rounded-t-xl flex items-center justify-center overflow-hidden">
          <div className="text-center p-6">
            <div className="text-4xl mb-2">📖</div>
            <p className="text-xs text-muted-foreground">표지 이미지</p>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <CardTitle className="text-base line-clamp-2 group-hover:text-primary transition-colors">
            {book.title}
          </CardTitle>
          <CardDescription className="text-sm">
            {book.author}
            {book.translator && ` · ${book.translator}`}
          </CardDescription>
          <div className="text-xs text-muted-foreground pt-2">
            {book.date} · {book.pages}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
