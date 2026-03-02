import Link from 'next/link';
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
            <Link href="#servicos">Serviços</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="#resultados">Resultados</Link>
          </li>
          <li className={styles.linkItem}>
            <Link href="#clientes">Clientes</Link>
          </li>
          <li className={styles.cta}>
            <Link href="#contato">Fale Conosco</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
