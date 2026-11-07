import { useCallback, useEffect, useMemo, useState } from "react";
import { NavigationContext } from "./components/Link";
import { CtaBand } from "./components/Sections";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { siteContent } from "./data/siteContent";
import { HomePage } from "./pages/HomePage";
import { AboutPage, RentalsPage, ServicesPage } from "./pages/InnerPages";
import { getRouteForPath, withBase } from "./routes";

const pageComponents = {
  home: HomePage,
  rentals: RentalsPage,
  services: ServicesPage,
  about: AboutPage,
};

function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const route = useMemo(() => getRouteForPath(currentPath), [currentPath]);
  const { page } = route;
  const PageComponent = pageComponents[page.id] ?? HomePage;

  const navigate = useCallback((href) => {
    const url = new URL(href, window.location.origin);
    const target = withBase(url.pathname) + url.search;
    if (target !== window.location.pathname + window.location.search) {
      window.history.pushState({}, "", target);
    }
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    document.title = page.documentTitle ?? siteContent.brandName;
  }, [page]);

  // Canonical + robots: unknown paths render Home but are noindexed.
  useEffect(() => {
    const robotsContent = route.isKnownPath ? "index, follow" : "noindex, nofollow";
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", robotsContent);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute(
      "href",
      new URL(withBase(route.canonicalPath), window.location.origin).href,
    );
  }, [route]);

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <NavigationContext.Provider value={navigate}>
      <div className={`site site-${page.id}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader activePageId={page.id} />
        <main id="main-content" tabIndex={-1}>
          <PageComponent page={page} />
          <CtaBand />
        </main>
        <SiteFooter />
      </div>
    </NavigationContext.Provider>
  );
}

export default App;
