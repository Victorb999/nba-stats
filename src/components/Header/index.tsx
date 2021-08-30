import styles from "./styles.module.scss";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Image
        width={159}
        height={24}
        src="/logo.svg"
        alt="logo"
        objectFit="cover"
      />
    </header>
  );
}
