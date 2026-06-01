import { IoPlaySharp, IoCartSharp } from 'react-icons/io5';
import { HiShoppingBag } from 'react-icons/hi';

interface ActionButtonProps {
  action: 'play' | 'buy';
  className?: string;
}

export default function ActionButton({ action, className }: ActionButtonProps) {
  return (
    <span className={className} data-action={action}>
      {action === 'buy' ? (
        <>
          <IoCartSharp size={24} />
          <span>Buy</span>
        </>
      ) : (
        <>
          <IoPlaySharp size={24} />
          <span>Play</span>
        </>
      )}
    </span>
  );
}
