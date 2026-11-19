'use client';

import React, { useRef, useState, useEffect } from 'react';
import { 
  motion, 
  useInView, 
  useReducedMotion, 
  useMotionValue, 
  useTransform, 
  animate 
} from 'framer-motion';

// Premium Apple/Stripe-style easing curve
export const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;
export const SOFT_EASE = [0.25, 0.1, 0.25, 1] as const;

/**
 * Word-by-word Kinetic Text Reveal
 * Headlines appear one word at a time with smooth upward movement and opacity stagger.
 */
interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export function WordReveal({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.08,
  as = 'div',
}: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');
  const Component = motion[as] as any;

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: PREMIUM_EASE,
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-[0.28em] align-top">
          <motion.span variants={wordVariants} className={`inline-block ${wordClassName}`}>
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

/**
 * Character-by-character animation
 * For key accents or sequential reveals
 */
export function CharReveal({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const chars = Array.from(text);

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.03,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: PREMIUM_EASE },
            },
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * Scroll-triggered smooth container reveal
 */
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.75,
  direction = 'up',
  distance = 32,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: PREMIUM_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Interactive 3D Card Tilt on Hover
 * Subtle perspective movement, soft shadows, and reactive sheen.
 */
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = '',
  maxTilt = 6,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    setRotateX(tiltX);
    setRotateY(tiltY);

    if (glare) {
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 24,
      }}
      className={`relative transform-gpu will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}

      {glare && isHovered && !shouldReduceMotion && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(212, 175, 55, 0.12) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}

/**
 * Animated Gold Underline
 * Expands smoothly when entering viewport
 */
export function AnimatedUnderline({
  className = '',
  width = 'w-24',
}: {
  className?: string;
  width?: string;
}) {
  return (
    <div className={`overflow-hidden h-1.5 ${width} ${className}`}>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2, ease: PREMIUM_EASE }}
        className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-full shadow-sm shadow-gold-500/30"
      />
    </div>
  );
}

/**
 * CountUp Animated Number
 */
export function CountUp({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString('en-IN'));

  useEffect(() => {
    if (inView) {
      if (shouldReduceMotion) {
        count.set(value);
      } else {
        animate(count, value, {
          duration,
          ease: PREMIUM_EASE,
        });
      }
    }
  }, [inView, value, duration, count, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
