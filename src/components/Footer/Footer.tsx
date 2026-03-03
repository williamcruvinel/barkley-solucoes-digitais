import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Send,
} from 'lucide-react';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id='contato' className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <Image src={'/logo.png'} width={120} height={120} alt="logo" />
            </div>
            <p className={styles.description}>
              Impulsionamos negócios com estratégia e tecnologia
            </p>

            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>Receba novidades</h4>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Links Rápidos</h3>
            <ul className={styles.links}>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#servicos">Serviços</Link>
              </li>
              <li>
                <Link href="#sobre">Sobre Nós</Link>
              </li>
              <li>
                <Link href="#cases">Cases</Link>
              </li>
              <li>
                <Link href="#blog">Blog</Link>
              </li>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Fale Conosco</h3>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Endereço</span>
                  <span className={styles.contactValue}>
                    Av. Paulista, 200
                    <br />
                    São Paulo, SP - 14409-000
                  </span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Telefone</span>
                  <span className={styles.contactValue}>
                    (11) 3456-9876
                    <br />
                    (11) 91234-5678
                  </span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>E-mail</span>
                  <span className={styles.contactValue}>
                    barkley@agencia.com
                    <br />
                    suporte@barkley.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Redes Sociais</h3>

            <div className={styles.socialGrid}>
              <a href="#" className={`${styles.socialIcon} ${styles.facebook}`}>
                <Facebook size={20} />
                <span>Facebook</span>
              </a>

              <a
                href="#"
                className={`${styles.socialIcon} ${styles.instagram}`}
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>

              <a href="#" className={`${styles.socialIcon} ${styles.linkedin}`}>
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>

              <a href="#" className={`${styles.socialIcon} ${styles.twitter}`}>
                <Twitter size={20} />
                <span>Twitter</span>
              </a>

              <a href="#" className={`${styles.socialIcon} ${styles.youtube}`}>
                <Youtube size={20} />
                <span>YouTube</span>
              </a>
            </div>

            <div className={styles.hours}>
              <h4 className={styles.hoursTitle}>Horário de Atendimento</h4>
              <p>Seg - Sex: 9h às 18h</p>
              <p>Sábado: 10h às 14h</p>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197581938383!2d-46.657779!3d-23.561354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Barkley Soluções Digitais. Todos os direitos
            reservados.
          </div>

          <div className={styles.bottomLinks}>
            <Link href="#">Política de Privacidade</Link>
            <Link href="#">Termos de Uso</Link>
            <Link href="#">Trabalhe Conosco</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
