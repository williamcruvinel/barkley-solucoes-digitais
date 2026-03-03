import Image from 'next/image';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Impulsionamos negócios com estratégia e tecnologia
          </h1>

          <p className={styles.description}>
            Somos a Barkley Soluções Digitais, uma agência focada em resultados.
            Desenvolvemos soluções criativas e estratégicas para acelerar o
            crescimento da sua marca.
          </p>

          <a href='#contato' className={styles.button}>Fale Conosco</a>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/heroOne.png"
            alt="Equipe trabalhando"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className={styles.imageOne}
          />

            <Image
            src="/heroTwo.png"
            alt="Equipe trabalhando"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className={styles.imageTwo}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
