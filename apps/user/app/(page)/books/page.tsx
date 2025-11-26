import { Button, Card, CardHeader, CardTitle } from "@repo/ui/components";
import { bookCategories, newBooks } from "../../_dummy/books";
import { BookCard } from "../../_components/books/BookCard";

export default function BooksPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">전체 도서</h1>
          <p className="text-lg text-muted-foreground">
            책책책책의 모든 도서를 만나보세요
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">카테고리</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {bookCategories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-md transition-all text-center"
              >
                <CardHeader className="p-6">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <CardTitle className="text-sm group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select className="px-4 py-2 border rounded-md bg-background">
            <option>전체 카테고리</option>
            <option>책책책책</option>
            <option>북@북스</option>
            <option>리틀북</option>
          </select>
          <select className="px-4 py-2 border rounded-md bg-background">
            <option>최신순</option>
            <option>인기순</option>
            <option>가나다순</option>
          </select>
          <div className="flex-1" />
          <div className="relative">
            <input
              type="search"
              placeholder="도서 검색..."
              className="w-full sm:w-64 px-4 py-2 pl-10 border rounded-md bg-background"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[...newBooks, ...newBooks].map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <Button variant="outline" size="sm" disabled>
            이전
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button size="sm">2</Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            4
          </Button>
          <Button variant="outline" size="sm">
            5
          </Button>
          <Button variant="outline" size="sm">
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}
