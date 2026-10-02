import Link from "next/link";
/** Accessible compact navigation and persistent theme control. */
import { useState, useSyncExternalStore, useRef } from "react";
import {
  ArrowUpRightIcon,
  Bars2Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
export function Arrow() {
  return <ArrowUpRightIcon aria-hidden="true" className="arrow" />;
}
function subscribeTheme(onChange: () => void) {
  window.addEventListener("jay-theme-change", onChange);
  return () => window.removeEventListener("jay-theme-change", onChange);
}
export default function PortfolioHeader() {
  const dark = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.dataset.theme === "dark",
    () => false,
  );
  const menuButton = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const next = !dark;

    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("jay-theme", next ? "dark" : "light");
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
    window.dispatchEvent(new Event("jay-theme-change"));
  };
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <Link className="wordmark" href="/#top" aria-label="Jay Zhou home">
        Jay Zhou<span aria-hidden="true">.</span>
      </Link>
      <nav
        aria-label="Main navigation"
        className={open ? "navigation open" : "navigation"}
        id="main-navigation"
      >
        <Link href="/#work" onClick={() => setOpen(false)}>
          Work
        </Link>
        <Link href="/#about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="/#contact" onClick={() => setOpen(false)}>
          Contact <Arrow />
        </Link>
      </nav>
      <div className="header-controls">
        <button
          type="button"
          className="icon-button"
          onClick={toggleTheme}
          aria-label="Toggle dark theme"
          aria-pressed={dark}
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </button>
        <button
          type="button"
          ref={menuButton}
          className="icon-button menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {open ? <XMarkIcon /> : <Bars2Icon />}
        </button>
      </div>
    </header>
  );
}
