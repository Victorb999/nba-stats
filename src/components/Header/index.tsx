import styles from "./styles.module.scss";
import Image from "next/image";

import Link from "next/link";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href="/" passHref>
        <div className="navbar-brand">

          <Image
            width={159}
            height={24}
            src="/logo.svg"
            alt="logo"
            objectFit="cover"
          />
        </div>
      </Link>
    </header>
  );
}
