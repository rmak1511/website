import { useEffect, useState } from "react";
import { siteContent } from "../data/siteContent";
import { Icon } from "./Icons";
import { Link } from "./Link";

// Sticky top bar: wordmark left, nav + quote pill right. Below 768px the
// nav collapses into a full-width sheet under the bar.
export function SiteHeader({ activePageId }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [activePageId]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${open ? "is-open" : ""}`}>
      <div className="container site-header-inner">
        <Link href="/" className="brand" aria-label={`${siteContent.brandName} home`}>
          <span className="brand-mark" aria-hidden="true">T</span>
          <span className="brand-name">{siteContent.brandName}</span>
        </Link>

        <nav className="site-nav" id="site-nav" aria-label="Primary">
          {siteContent.navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`site-nav-link ${item.id === activePageId ? "is-active" : ""}`}
              aria-current={item.id === activePageId ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a className="button button-small site-nav-cta" href={siteContent.quoteHref}>
            Request a quote
          </a>
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
