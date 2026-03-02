import Image from 'next/image'
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        <div className={styles.content}>
          <h1>
            Impulsionamos negócios com estratégia e tecnologia
          </h1>

          <p>
            Somos a Barkley Soluções Digitais, uma agência focada em resultados.
            Desenvolvemos soluções criativas e estratégicas para acelerar o crescimento da sua marca.
          </p>

          <button className={styles.button}>
            Fale Conosco
          </button>
        </div>

        <div className={styles.image}>
          <Image
            src="/images/hero.jpg"
            alt="Equipe trabalhando"
            width={500}
            height={400}
            priority
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection