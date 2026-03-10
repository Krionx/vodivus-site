"use client";

import { useState } from "react";
import Link from "next/link";

export default function GlobalVvHeader() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header
      id="vv-global-header"
      className={`vv-global-header${open ? " is-open" : ""}`}
      role="banner"
      aria-label="Vodivus header"
    >
      <div className="vv-global-header-inner">
        <Link href="/" className="vv-global-brand" aria-label="Vodivus Home" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.squarespace-cdn.com/content/691e9533ddf92169a657d827/fbc0dbf2-0595-4154-899d-24c0c8a48ac0/USE+Vodivus+Large+White.png?content-type=image%2Fpng"
            className="vv-global-logo"
            alt="Vodivus Venture Studios"
          />
        </Link>

        <div className="vv-global-right">
          <nav className="vv-global-nav" aria-label="Primary">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
          </nav>

          <Link href="/contact" className="vv-global-cta">
            Book your Consultation {"->"}
          </Link>

          <button
            className="vv-global-burger"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="vv-global-mobile"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="vv-global-burger-lines" aria-hidden="true" />
          </button>
        </div>
      </div>

      <button
        className="vv-global-mobile-overlay"
        aria-label="Close menu overlay"
        onClick={closeMenu}
      />

      <div id="vv-global-mobile" className="vv-global-mobile" role="navigation" aria-label="Mobile">
        <div className="vv-global-mobile-head">
          <span className="vv-global-mobile-title">Menu</span>
          <button className="vv-global-mobile-close" type="button" onClick={closeMenu} aria-label="Close menu">
            x
          </button>
        </div>

        <Link href="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About
        </Link>
        <Link href="/contact" className="is-primary" onClick={closeMenu}>
          Start a venture conversation {"->"}
        </Link>
      </div>
    </header>
  );
}
