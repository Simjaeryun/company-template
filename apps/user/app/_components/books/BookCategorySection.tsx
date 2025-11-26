import { Card, CardHeader, CardTitle } from "@repo/ui/components";
import { bookCategories } from "../../_dummy/books";

export function BookCategorySection() {
  return (
    <section id="books" className="py-16 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-7xl mx-auto">
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
    </section>
  );
}
