import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-4 z-50">
      <div className="mx-auto max-w-fit">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border border-white/50 dark:border-gray-600/50 shadow-xl shadow-black/10 dark:shadow-white/10">
          {/* Logo */}
          <Link href="/" className="group">
            <Image
              className="h-7 w-7 md:h-8 md:w-8 rounded-lg transition-all duration-300 group-hover:scale-110"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
              style={{ backgroundColor: '#297be6' }}
            />
          </Link>
          
          {/* Navigation Links - Visible on all screen sizes */}
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {navbarConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Switch */}
          <ThemeSwitch />
        </div>
      </div>
    </Container>
  );
}
