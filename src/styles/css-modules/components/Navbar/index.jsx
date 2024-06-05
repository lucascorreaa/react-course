import styles from "./Navbar.module.css";

// Componente Navbar/1/ (RELUME-UI)

export default function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Logo</h1>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="" className={styles.titulo}>Link One</a>
          </li>
          <li>
            <a href="" className={styles.titulo}>Link Two</a>
          </li>
          <li>
            <a href="" className={styles.titulo}>Link Three</a>
          </li>
          <li>
            <a href="" className={styles.titulo}>Link Four</a>
          </li>
        </ul>

        <div>
            <button className={styles.button}>Button</button>
            <button className={styles.buttonActive}>Button</button>
        </div>
      </nav>
    </header>
  );
}
