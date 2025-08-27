'use client';

import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { type Book } from '@/types/book';
import Image from 'next/image';
import React from 'react';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="group h-full w-full overflow-hidden transition-all p-0 border-gray-100 dark:border-gray-800 shadow-none rounded-lg bg-white dark:bg-gray-900 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10">
      <CardHeader className="p-0">
        <div className="group relative aspect-[3/4] overflow-hidden rounded-t-lg bg-gray-100 dark:bg-gray-800" style={{ perspective: '1000px' }}>
          <div
            className="relative w-full h-full transition-transform duration-500 group-hover:scale-105"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(0deg) rotateY(0deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotateX(5deg) rotateY(12deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
            }}
          >
            <Image
              className="h-full w-full object-cover rounded-t-lg"
              src={book.image}
              alt={book.title}
              width={300}
              height={400}
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/meta/books.png'; // Fallback image
              }}
            />
            {/* 3D Shadow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6 py-4">
        <div className="space-y-3">
          {/* Book Header */}
          <div>
            <h3 className="text-lg font-semibold leading-tight group-hover:text-primary line-clamp-2">
              {book.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              by {book.author}
            </p>
          </div>

          {/* Genre */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {book.genre}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3">
            {book.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
