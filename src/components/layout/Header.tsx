"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";
import { getDictionary } from "@/lib/i18n";
import type { NavItem } from "@/lib/i18n/types";

const dict = getDictionary();

function normalizePath(path: string) {
  const base = path.split("#")[0].replace(/\/$/, "");
  return base || "/";
}

function isNavHrefActive(href: string, pathname: string, hash: string) {
  const [pathPart, hashPart] = href.split("#");
  const targetPath = normalizePath(pathPart);
  const currentPath = normalizePath(pathname);

  if (hashPart) {
    return currentPath === targetPath && hash === `#${hashPart}`;
  }

  if (targetPath === "/") {
    return currentPath === "/";
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
}

function NavLink({ item, onNavigate }: { item: NavItem; onNavigate?: () => void }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  const isChildActive = item.children?.some((child) =>
    isNavHrefActive(child.href, pathname, hash)
  );

  const isActive =
    item.href === "/"
      ? pathname === "/"
      : item.href !== "#" && isNavHrefActive(item.href, pathname, hash);

  const parentActive = isActive || Boolean(isChildActive);

  const linkClass = cn(
    "flex items-center gap-1 py-2 text-sm font-bold uppercase tracking-[1px] transition-colors hover:text-brand-blue lg:px-[15px] lg:py-0",
    parentActive ? "text-brand-blue" : "text-brand-gray"
  );

  if (item.children?.length) {
    return (
      <div className="group relative">
        <Link
          href={item.href === "#" ? item.children[0].href : item.href}
          className={linkClass}
          onClick={onNavigate}
        >
          {item.label}
          <span className="hidden lg:inline">▾</span>
        </Link>
        <ul className="lg:absolute lg:left-0 lg:top-full lg:z-50 lg:min-w-[280px] lg:border lg:border-gray-100 lg:bg-white lg:py-2 lg:opacity-0 lg:shadow-lg lg:transition-opacity lg:group-hover:opacity-100 lg:group-focus-within:opacity-100">
          {item.children.map((child) => {
            const childActive = isNavHrefActive(child.href, pathname, hash);
            return (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={cn(
                    "block border-l-[3px] py-2 pl-[27px] pr-4 text-base font-normal normal-case tracking-normal text-brand-gray transition-[border-left-color] duration-300",
                    childActive
                      ? "border-l-[#00bcd4] max-lg:border-l-4 max-lg:bg-white max-lg:text-foreground"
                      : "border-l-transparent hover:border-l-[#00bcd4]"
                  )}
                  onClick={onNavigate}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <Link href={item.href} className={linkClass} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "left-0 right-0 top-0 bg-white shadow-[0_0_2px_0_rgba(56,69,84,0.2)] transition-all duration-300",
        scrolled ? "fixed z-[1000] shrink" : "relative z-[5]"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1170px] items-center justify-between px-5 transition-[min-height] duration-300",
          scrolled ? "min-h-[61px]" : "min-h-[91px]"
        )}
      >
        <Link
          href="/"
          className={cn(
            "shrink-0 transition-[padding] duration-300",
            scrolled ? "py-[5px]" : "py-[15px]"
          )}
          aria-label={dict.site.name}
        >
          <OptimizedImage
            src={images.logo}
            alt={dict.site.name}
            width={164}
            height={48}
            priority
            className="hidden h-auto max-h-[31px] w-[164px] md:block"
          />
          <OptimizedImage
            src={images.logoSmall}
            alt={dict.site.name}
            width={132}
            height={40}
            priority
            className="h-auto w-[132px] md:hidden"
          />
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={menuOpen}
          aria-label="메뉴"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={cn("h-0.5 w-6 bg-brand-gray transition", menuOpen && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-6 bg-brand-gray transition", menuOpen && "opacity-0")} />
          <span className={cn("h-0.5 w-6 bg-brand-gray transition", menuOpen && "-translate-y-2 -rotate-45")} />
        </button>

        <nav
          className={cn(
            scrolled
              ? "fixed inset-0 top-[61px] z-40 overflow-y-auto bg-white p-6 lg:static lg:inset-auto lg:overflow-visible lg:p-0"
              : "fixed inset-0 top-[91px] z-40 overflow-y-auto bg-white p-6 lg:static lg:inset-auto lg:overflow-visible lg:p-0",
            menuOpen ? "block" : "hidden lg:block"
          )}
          aria-label="주 메뉴"
        >
          <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0">
            {dict.nav.map((item, index) => (
              <li
                key={item.label}
                className={cn(
                  "transition-[padding] duration-300 lg:px-[3px]",
                  scrolled ? "lg:py-[18px]" : "lg:py-[31px]",
                  index < dict.nav.length - 1 &&
                    "lg:relative lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:text-brand-gray lg:after:content-['|']"
                )}
              >
                <NavLink item={item} onNavigate={() => setMenuOpen(false)} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
