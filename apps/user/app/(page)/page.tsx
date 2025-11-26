import { HeroSection } from "../_components/home/HeroSection";
import { BookCategorySection } from "../_components/books/BookCategorySection";
import { NewBooksSection } from "../_components/books/NewBooksSection";
import { MagazineSection } from "../_components/magazine/MagazineSection";
import { NewsSection } from "../_components/news/NewsSection";
import { ContactSection } from "../_components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookCategorySection />
      <NewBooksSection />
      <MagazineSection />
      <NewsSection />
      <ContactSection />
    </>
  );
}
