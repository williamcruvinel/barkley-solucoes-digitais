import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'CEO, TechStore Brasil',
    content: 'A equipe transformou completamente nossa presença digital. Em 6 meses, aumentamos as vendas em 150% e nosso tráfego orgânico cresceu 300%. O trabalho deles é simplesmente excepcional!',
    avatar: '/foto-1.jpg',
    rating: 5,
    company: 'TechStore'
  },
  {
    id: 2,
    name: 'Carlos Santos',
    role: 'Diretor de Marketing, Construtora Nova',
    content: 'Profissionais incríveis e muito dedicados. Entregaram um site moderno e uma estratégia de SEO que nos colocou na primeira página do Google. Recomendo fortemente!',
    avatar: '/foto-2.jpg',
    rating: 5,
    company: 'Construtora Nova'
  },
  {
    id: 3,
    name: 'Mariana Costa',
    role: 'Fundadora, Beauty Care',
    content: 'O atendimento é diferenciado! Sempre disponíveis para tirar dúvidas e propor melhorias. Nossas campanhas de marketing digital nunca tiveram resultados tão expressivos.',
    avatar: '/foto-4.jpg',
    rating: 4,
    company: 'Beauty Care'
  },
  {
    id: 4,
    name: 'Roberto Oliveira',
    role: 'Proprietário, Restaurante Sabor',
    content: 'A consultoria digital foi um divisor de águas para nosso negócio. Aumentamos em 200% os pedidos online e melhoramos muito nosso relacionamento com os clientes.',
    avatar: '/foto-3.jpg',
    rating: 5,
    company: 'Restaurante Sabor'
  }
];

export default function TestimonialsSection() {
  return (
    <section id='clientes' className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Depoimentos</span>
          <h2 className={styles.title}>
            O que nossos <span className={styles.highlight}>clientes</span> dizem
          </h2>
          <p className={styles.subtitle}>
            Histórias reais de parcerias de sucesso e resultados transformadores
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>

              <div className={styles.content}>
                <p className={styles.text}>{`"${testimonial.content}"`}</p>
              </div>

              {/* Avaliação em estrelas */}
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`${styles.star} ${i < testimonial.rating ? styles.starFilled : ''}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 15L4.122 18.09L5.5 11.545L0.5 7.91L7.061 7.18L10 1L12.939 7.18L19.5 7.91L14.5 11.545L15.878 18.09L10 15Z" />
                  </svg>
                ))}
              </div>

              <div className={styles.profile}>
                <div className={styles.avatarWrapper}>
                  {testimonial.avatar ? (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className={styles.avatar}
                    />
                  ) : (
                    <div className={styles.avatarFallback}>
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  
                </div>

                <div className={styles.info}>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                  <span className={styles.company}>@{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas de satisfação */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Clientes satisfeitos</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Depoimentos reais</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4.9</span>
            <span className={styles.statLabel}>Avaliação média</span>
          </div>
        </div>
      </div>
    </section>
  );
}