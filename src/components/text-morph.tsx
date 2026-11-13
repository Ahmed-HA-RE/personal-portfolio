import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

type TextMorphProps = {
  words: string[];
  interval?: number;
  className?: string;
};

export function TextMorph({
  words,
  interval = 2500,
  className,
}: TextMorphProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  if (!words.length) return null;

  const chars = Array.from(words[index] ?? '');

  return (
    // Screen readers read the first word once instead of every letter swap
    <span className='relative inline-flex'>
      <span className='sr-only'>{words[0]}</span>
      <AnimatePresence mode='popLayout'>
        <motion.span
          key={index}
          aria-hidden
          className={cn('inline-flex gap-0.25 overflow-hidden', className)}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.4 }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              className='inline-block'
              initial={{ opacity: 0, y: 5, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -5, filter: 'blur(5px)' }}
              transition={{
                delay: i * 0.03,
                duration: 0.3,
              }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
