import { Rocket } from "@phosphor-icons/react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Rocket className={styles.rocket} size={32} />
      <p>
        to<span>do</span>
      </p>
    </header>
  );
}
