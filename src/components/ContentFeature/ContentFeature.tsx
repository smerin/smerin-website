import styles from './ContentFeature.module.css';

interface ContentFeatureProps {
  children: React.ReactNode;
}

export default function ContentFeature({ children }: ContentFeatureProps) {
  return <div className={styles.feature}>{children}</div>;
}
