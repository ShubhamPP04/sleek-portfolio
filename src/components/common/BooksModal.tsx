'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { books } from '@/config/Books';
import { Book } from '@/types/book';
import X from '../svgs/X';

interface BooksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BooksModal({ isOpen, onClose }: BooksModalProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedBook) {
          setSelectedBook(null);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, selectedBook]);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleBackToGrid = () => {
    setSelectedBook(null);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-white/50 dark:border-gray-700/50 shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            {selectedBook && (
              <button
                onClick={handleBackToGrid}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Back to all books"
              >
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedBook ? selectedBook.title : 'My Books Collection'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {selectedBook ? `by ${selectedBook.author}` : `${books.length} books in my reading journey`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Close books modal"
          >
            <span className="w-6 h-6 text-gray-600 dark:text-gray-400">
              <X />
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {selectedBook ? (
            /* Detailed Book View */
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Book Cover */}
              <div className="flex-shrink-0">
                <div className="relative aspect-[3/4] w-80 mx-auto lg:mx-0 overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={selectedBook.image}
                    alt={`${selectedBook.title} by ${selectedBook.author}`}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="flex-1 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#0077b6]/10 text-[#0077b6] dark:bg-[#0077b6]/20 dark:text-[#0077b6] rounded-full text-sm font-medium">
                      {selectedBook.genre}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedBook.title}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                    by {selectedBook.author}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    About this book
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {selectedBook.description}
                  </p>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Genre</h5>
                    <p className="text-gray-600 dark:text-gray-400">{selectedBook.genre}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Status</h5>
                    <p className="text-green-600 dark:text-green-400">Read</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Books Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {books.map((book: Book, index: number) => (
                <div
                  key={index}
                  onClick={() => handleBookClick(book)}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#0077b6]/10 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-[#0077b6]/30"
                >
                  {/* Book Cover */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={book.image}
                      alt={`${book.title} by ${book.author}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Book Details */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2 group-hover:text-[#0077b6] transition-colors duration-200">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      by {book.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-3 uppercase tracking-wide">
                      {book.genre}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                      {book.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
