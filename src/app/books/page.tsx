import Container from '@/components/common/Container';
import { BookList } from '@/components/books/BookList';
import { Separator } from '@/components/ui/separator';
import { books } from '@/config/Books';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...getMetadata('/books'),
  title: 'Books | Shubham Kumar',
  description: 'A collection of my favorite books and recommendations.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function BooksPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Books
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A curated list of books I&apos;ve enjoyed reading, featuring mystery, thriller, and contemporary fiction.
          </p>
        </div>

        <Separator />

        {/* Books */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              My Book Collection
              {books.length > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({books.length}{' '}
                  {books.length === 1 ? 'book' : 'books'})
                </span>
              )}
            </h2>
          </div>

          <BookList books={books} />
        </div>
      </div>
    </Container>
  );
}
