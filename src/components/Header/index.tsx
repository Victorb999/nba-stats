import styles from "./styles.module.scss";
import Image from "next/image";

import Link from "next/link";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href="/" passHref>
        <div className="navbar-brand">
          <Image
            width={139}
            height={24}
            src="/logo.svg"
            alt="logo"
            objectFit="cover"
          />
        </div>
      </Link>
      <Link href="/teams" passHref>
        <div className="navbar-brand">
          <h2>Teams</h2>
        </div>
      </Link>
      <Link href="/players" passHref>
        <div className="navbar-brand">
          <h2>Players</h2>
        </div>
      </Link>
    </header>
  );
}
