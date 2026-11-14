"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms";
import { NAV_ITEMS } from "@/config/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cx } from "@/lib/cx";
import { CV_FILENAME, CV_HREF } from "@/lib/paths";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export function Header({ brand }: { brand: string }) {
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a href="#top" className="site-header__brand">{brand}</a>
        <nav aria-label="Main" className="site-header__nav">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={cx("site-header__link", isActive && "site-header__link--active")}
                aria-current={isActive ? "location" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="site-header__pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="site-header__label">{item.label}</span>
              </a>
            );
          })}
          <span className="site-header__cta">
            <Button size="sm" href={CV_HREF} download={CV_FILENAME}>Download CV</Button>
          </span>
        </nav>
      </div>
    </header>
  );
}
