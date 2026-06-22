import { useRef } from 'react';
import { useInView, Variants } from 'motion/react';

export type AnimationPreset = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleUp';

const presets: Record<AnimationPreset, Variants> = {
  fadeUp:    { hidden: { opacity: 0, y: 32 },         visible: { opacity: 1, y: 0 } },
  fadeIn:    { hidden: { opacity: 0 },                visible: { opacity: 1 } },
  fadeLeft:  { hidden: { opacity: 0, x: -28 },        visible: { opacity: 1, x: 0 } },
  fadeRight: { hidden: { opacity: 0, x: 28 },         visible: { opacity: 1, x: 0 } },
  scaleUp:   { hidden: { opacity: 0, scale: 0.94 },   visible: { opacity: 1, scale: 1 } },
};

export function useScrollAnimation(preset: AnimationPreset = 'fadeUp', once = true) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '0px 0px -60px 0px' });
  return {
    ref,
    variants: presets[preset],
    animate: isInView ? 'visible' : 'hidden',
    initial: 'hidden',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  };
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};