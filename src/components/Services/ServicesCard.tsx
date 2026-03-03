import { ReactNode } from 'react';
import styles from './ServicesCard.module.css';
// import { type LucideIcon } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  icon?: ReactNode
};

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
