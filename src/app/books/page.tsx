'use client';

import Container from '@/components/common/Container';
import { BookList } from '@/components/books/BookList';
import { BookDetail } from '@/components/books/BookDetail';
import { Separator } from '@/components/ui/separator';
import { books } from '@/config/Books';
import { type Book } from '@/types/book';
import { useState } from 'react';

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleBackToGrid = () => {
    setSelectedBook(null);
  };

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
              {selectedBook ? selectedBook.title : 'My Book Collection'}
              {books.length > 0 && !selectedBook && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({books.length}{' '}
                  {books.length === 1 ? 'book' : 'books'})
                </span>
              )}
            </h2>
            {selectedBook && (
              <button
                onClick={handleBackToGrid}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                ← Back to all books
              </button>
            )}
          </div>

          {selectedBook ? (
            <BookDetail book={selectedBook} />
          ) : (
            <BookList books={books} onBookClick={handleBookClick} />
          )}
        </div>
      </div>
    </Container>
  );
}
