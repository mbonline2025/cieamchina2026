import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = 100;

    if (distance < maxDistance) {
      const force = (1 - distance / maxDistance) * 15;
      setPosition({
        x: (distanceX / distance) * force,
        y: (distanceY / distance) * force,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClass = variant === 'primary'
    ? 'px-8 md:px-12 py-3 md:py-4 bg-gold text-black-deep mono-label hover:bg-gold-light'
    : 'px-8 md:px-12 py-3 md:py-4 border-2 border-gold text-gold mono-label hover:bg-gold/10';

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      className={`${baseClass} smooth-transition relative overflow-hidden ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
