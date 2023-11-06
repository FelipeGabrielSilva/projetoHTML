import { Link } from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <AiFillHome size="2em"/>
          </Link>
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
