'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="vv-header">
      <div className="vv-header-inner">
        <Link href="/" className="vv-header-brand" aria-label="Vodivus home">
          <Image
            src="/images/vodivus-logo.png"
            alt="Vodivus"
            width={220}
            height={72}
            priority
            className="vv-header-logo"
          />
        </Link>

        <nav className="vv-nav" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`vv-nav-link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}