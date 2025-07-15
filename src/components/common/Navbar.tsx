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
        <div className="flex items-center gap-8 px-8 py-4 rounded-full backdrop-blur-3xl bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
          {/* Logo */}
          <Link href="/" className="group">
            <Image
              className="h-8 w-8 rounded-lg transition-all duration-300 group-hover:scale-110"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
              style={{ backgroundColor: '#297be6' }}
            />
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navbarConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
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
