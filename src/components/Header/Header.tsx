'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <Image src={'/logo.png'} width={120} height={120} alt="logo" />

        <ul className={styles.navList}>
          <li className={styles.linkItem}>
            <a href="#servicos" onClick={handleLinkClick}>
              Serviços
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href="#resultados" onClick={handleLinkClick}>
              Resultados
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href="#clientes" onClick={handleLinkClick}>
              Clientes
            </a>
          </li>
          <li className={styles.cta}>
            <a href="#contato" onClick={handleLinkClick}>
              Fale Conosco
            </a>
          </li>
        </ul>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${styles.overlay} ${isMenuOpen ? styles.overlayActive : ''}`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuActive : ''}`}
        >
          <ul className={styles.mobileNavList}>
            <li className={styles.mobileLinkItem}>
              <a href="#servicos" onClick={handleLinkClick}>
                Serviços
              </a>
            </li>
            <li className={styles.mobileLinkItem}>
              <a href="#resultados" onClick={handleLinkClick}>
                Resultados
              </a>
            </li>
            <li className={styles.mobileLinkItem}>
              <a href="#clientes" onClick={handleLinkClick}>
                Clientes
              </a>
            </li>
            <li className={styles.mobileCta}>
              <a href="#contato" onClick={handleLinkClick}>
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
