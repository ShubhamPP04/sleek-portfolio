import { type Book } from '@/types/book';
import React from 'react';
import Image from 'next/image';

interface BookListProps {
  books: Book[];
  className?: string;
  onBookClick?: (book: Book) => void;
}

export function BookList({ books, className, onBookClick }: BookListProps) {
  if (books.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No books found.</p>
      </div>
    );
  }

  return (
    <div className={`divide-y divide-border ${className}`}>
      {books.map((book: Book, index: number) => (
        <div
          key={book.title}
          className="group flex gap-6 py-6 transition-all duration-300 cursor-pointer hover:bg-accent/50 first:pt-0"
          onClick={() => onBookClick?.(book)}
        >
          {/* Number */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              {index + 1}
            </div>
          </div>

          {/* Book Cover */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="relative w-32 h-40 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/meta/books.png'; // Fallback image
                  }}
                />
              </div>
              {/* Lower shadow effect */}
              <div className="absolute -bottom-2 left-2 right-2 h-4 bg-black/10 rounded-full blur-sm transform rotate-1 group-hover:bg-black/15 transition-all duration-300"></div>
            </div>
          </div>

          {/* Book Details */}
          <div className="flex-1 min-w-0">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {book.title}
              </h3>
              <p className="text-muted-foreground">
                by {book.author}
              </p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {book.genre}
                </span>
              </div>
              <p className="text-muted-foreground line-clamp-2">
                {book.description}
              </p>
            </div>
          </div>

          {/* Arrow Indicator */}
          <div className="flex-shrink-0 flex items-center">
            <svg
              className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
