import { type Book } from '@/types/book';
import Image from 'next/image';
import React from 'react';

interface BookDetailProps {
  book: Book;
}

export function BookDetail({ book }: BookDetailProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Book Cover */}
        <div className="flex-shrink-0">
          <div className="relative aspect-[3/4] w-80 mx-auto lg:mx-0 overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={book.image}
              alt={`${book.title} by ${book.author}`}
              fill
              className="object-cover"
              sizes="320px"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/meta/books.png'; // Fallback image
              }}
            />
          </div>
        </div>

        {/* Book Details */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                {book.genre}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {book.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              by {book.author}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              About this book
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {book.description}
            </p>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border">
            <div>
              <h4 className="font-medium text-foreground mb-2">Genre</h4>
              <p className="text-muted-foreground">{book.genre}</p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Status</h4>
              <p className="text-green-600 dark:text-green-400">Read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
