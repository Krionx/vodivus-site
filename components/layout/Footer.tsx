import Link from "next/link";

export default function Footer() {
  return (
    <footer className="vv-footer">
      <div className="vv-container">
        <div className="vv-footer-inner">
          <div className="vv-footer-brand">
            <strong>Vodivus Venture Studios</strong>
            <p className="vv-footer-text">Venture architecture for founders and operators.</p>
          </div>

          <nav className="vv-footer-nav" aria-label="Footer navigation">
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <p className="vv-footer-meta">© {new Date().getFullYear()} Vodivus Venture Studios</p>
      </div>
    </footer>
  );
}