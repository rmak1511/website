import { createContext, useContext } from "react";
import { withBase } from "../routes";

// Client-side navigation: App provides `navigate`, and every internal
// <Link> renders a real href (with the GitHub Pages base prefix) so
// open-in-new-tab and no-JS still work, while plain clicks route in-app.
export const NavigationContext = createContext(() => {});

function isInternal(href) {
  return href.startsWith("/");
}

export function Link({ href, children, onClick, ...rest }) {
  const navigate = useContext(NavigationContext);

  if (!isInternal(href)) {
    return (
      <a href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  const handleClick = (event) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    navigate(href);
  };

  return (
    <a href={withBase(href)} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
