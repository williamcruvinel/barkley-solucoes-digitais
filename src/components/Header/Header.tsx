import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
         <Image
          src={'/logo.png'}
          width={120}
          height={120}
          alt='logo'
        />
        

        <ul className={styles.navList}>
          <li className={styles.linkItem}>
            <a href="#servicos">Serviços</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#resultados">Resultados</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#clientes">Clientes</a>
          </li>
          <li className={styles.cta}>
            <a href="#contato">Fale Conosco</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
