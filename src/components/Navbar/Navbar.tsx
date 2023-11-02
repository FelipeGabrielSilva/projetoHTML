import { Link } from "@chakra-ui/react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar} >
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/QuemSomos">Quem somos</Link>
        </li>
        <li>
          <Link href="/FaleConosco">Fale Conosco</Link>
        </li>
      </ul>
    </nav>
  );
}
