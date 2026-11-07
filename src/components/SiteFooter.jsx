import { siteContent } from "../data/siteContent";
import { Link } from "./Link";

export function SiteFooter() {
  const { brandName, footer, navItems, contactEmail } = siteContent;
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/" className="brand" aria-label={`${brandName} home`}>
            <span className="brand-mark" aria-hidden="true">T</span>
            <span className="brand-name">{brandName}</span>
          </Link>
          <p className="site-footer-tagline">{footer.tagline}</p>
        </div>
        <nav className="site-footer-nav" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </nav>
      </div>
      <div className="container site-footer-legal">
        <span>{footer.copyright}</span>
        <span>Florida, USA</span>
      </div>
    </footer>
  );
}
