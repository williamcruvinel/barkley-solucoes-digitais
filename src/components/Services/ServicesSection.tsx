import { CalendarClock, ChartNoAxesCombined, Laptop, Megaphone } from 'lucide-react'
import ServiceCard from './ServicesCard'
import styles from './ServicesSection.module.css'

const services = [
  {
    icon: <Laptop />,
    title: 'Web Design',
    description: 'Sites modernos, responsivos e otimizados para conversão.'
  },
  {
    icon: <Megaphone />,
    title: 'Marketing Digital',
    description: 'Campanhas estratégicas orientadas por dados para aumentar alcance e vendas.'
  },
  {
    icon: <ChartNoAxesCombined />,
    title: 'SEO',
    description: 'Otimização avançada para posicionar sua empresa no topo do Google.'
  },
  {
    icon: <CalendarClock />,
    title: 'Consultoria Digital',
    description: 'Diagnóstico e planejamento estratégico para escalar seu negócio.'
  }
]

export default function ServicesSection() {
  return (
    <section id="servicos" className={styles.services}>
      <h2>Nossos Serviços</h2>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}