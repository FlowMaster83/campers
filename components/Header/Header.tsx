"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const isCatalog = pathname.startsWith("/catalog");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" prefetch={false} className={styles.logo}>
          Travel<span className={styles.logoAccent}>Trucks</span>
        </Link>
        <nav className={styles.nav}>
          <Link
            href="/"
            prefetch={false}
            className={isCatalog ? styles.navLink : styles.navLinkMuted}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            prefetch={false}
            className={isCatalog ? styles.navLinkMuted : styles.navLink}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
