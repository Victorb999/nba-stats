import styles from "./styles.module.scss";
import Image from "next/image";

import Link from "next/link";
import ThemeSelector from "../ThemeSelector";
import { useTheme } from "../../contexts/ThemeContext";

export function Header() {
  const { darkTheme } = useTheme();
  return (
    <header className={styles.headerContainer}>
      <Link href="/" passHref>
        <div className="navbar-brand">
          <Image
            width={139}
            height={24}
            src={darkTheme ? "/logo.svg" : "/logo-black.svg"}
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
      <ThemeSelector />
    </header>
  );
}
