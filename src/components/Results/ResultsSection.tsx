// ResultsSection.tsx
import styles from './ResultsSection.module.css';

const results = [
  {
    number: '500+',
    label: 'Projetos Entregues',
    description: 'Com sucesso e qualidade',
  },
  {
    number: '98%',
    label: 'Clientes Satisfeitos',
    description: 'Taxa de aprovação',
  },
  {
    number: '15+',
    label: 'Prêmios',
    description: 'Nacionais e internacionais',
  },
  {
    number: '3x',
    label: 'ROI Médio',
    description: 'Retorno sobre investimento',
  },
];

export default function ResultsSection() {
  return (
    <section id='resultados' className={styles.results}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Nossos Resultados</span>
          <h2 className={styles.title}>
            Números que <span className={styles.highlight}>comprovam</span>{' '}
            nossa excelência
          </h2>
          <p className={styles.subtitle}>
            Mais de uma década transformando negócios através de estratégias
            digitais inovadoras
          </p>
        </div>

        <div className={styles.grid}>
          {results.map((result, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.numberWrapper}>
                  <span className={styles.number}>{result.number}</span>
                </div>
                <h3 className={styles.label}>{result.label}</h3>
                <p className={styles.description}>{result.description}</p>
              </div>

              <div className={styles.decorator}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
