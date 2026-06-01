import { IoGiftSharp, IoCloseSharp } from 'react-icons/io5';
import styles from './SupportModal.module.css';

interface SupportModalProps {
  buttonClassName?: string;
}

export default function SupportModal({ buttonClassName }: SupportModalProps) {
  return (
    <>
      <input type="checkbox" id="support-modal-toggle" className={styles.toggle} />
      <label htmlFor="support-modal-toggle" className={buttonClassName}>
        <IoGiftSharp size={20} />
        Support my work
      </label>

      <div className={styles.overlay}>
        <div className={styles.modal}>
          <label
            htmlFor="support-modal-toggle"
            className={styles.closeButton}
            aria-label="Close modal"
          >
            <IoCloseSharp size={32} />
          </label>
          <div className={styles.content}>
            {/* Content will go here */}
          </div>
        </div>
      </div>
    </>
  );
}
