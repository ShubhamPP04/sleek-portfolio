import { type Book } from '@/types/book';
import React from 'react';

import { BookCard } from './BookCard';

interface BookListProps {
  books: Book[];
  className?: string;
}

export function BookList({ books, className }: BookListProps) {
  if (books.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No books found.</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {books.map((book: Book) => (
        <BookCard key={book.title} book={book} />
      ))}
    </div>
  );
}
