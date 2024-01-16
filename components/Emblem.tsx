import { CSSProperties, useEffect, useState } from 'react';
import { Work } from '@/.contentlayer/generated/types';
import { useTheme } from 'next-themes';
import { usePath } from '@/providers/PathProvider';
import { motion } from 'framer-motion';
import { projectEmblems } from '@/data/projectEmblems';
import { cn } from '@/lib/utils';
import getRandomRotation from '@/lib/getRandomRotation';
import useMousePosition from '@/lib/useMousePosition';
import { useSize } from '@/providers/SizeProvider';

type EmblemProps = {
  index?: number;
  style?: CSSProperties;
  work: Work;
  width: number;
  parallax?: boolean;
  position: { left: number; top: number };
};

export default function Emblem({ index = 0, width, position, work, parallax = false }: EmblemProps) {
  const { w, h } = useSize();
  const { setPath } = usePath();
  const [displacement, setDisplacement] = useState({ x: 0, y: 0 });

  const mouse = useMousePosition();

  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [scale, setScale] = useState(0.5);

  const sm = 0.3;
  const md = 0.6;
  const lg = 0.9;

  useEffect(() => {
    if (!work) return;
    if (work.works.split(', ')[0] === "web dev't") {
      setScale(lg);
    } else if (work.works.split(', ')[0] === 'identity') {
      setScale(md);
    } else {
      setScale(sm);
    }
  }, []);

  const handleMouseMove = () => {
    const centerX = w / 2;
    const centerY = h / 2;
    const displacementX = ((mouse.x - centerX) / centerX) * width * scale;
    const displacementY = ((mouse.y - centerY) / centerY) * width * scale;
    setDisplacement({ x: -displacementX, y: -displacementY });
  };

  useEffect(() => {
    parallax && handleMouseMove();
  }, [mouse]);

  const RenderEmblem = projectEmblems[work.slugAsParams as keyof typeof projectEmblems];

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.15 * index }}
      style={{
        width: width,
        left: position.left + displacement.x,
        top: position.top + displacement.y,
      }}
      className={cn(isHovered ? 'z-[1]' : 'z-0', 'absolute cursor-pointer aspect-square bg-red-500/0')}
    >
      <div
        onClick={() => setPath(work.slug)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        style={{
          width: width,
          scale: isHovered ? 1 : scale,
          rotate: isHovered ? '0deg' : `${getRandomRotation(10)}deg`,
          backgroundColor: isHovered
            ? theme === 'light'
              ? `#${work.colors.split(', ')[work.colors.split(', ').length - 2]}` // second to the last color
              : `#${work.colors.split(', ')[work.colors.split(', ').length - 1]}` // last color
            : theme === 'light'
            ? '#e4e4e7'
            : '#27272a',
        }}
        className={cn(
          scale === sm && 'lg:blur-[6px]',
          scale === md && 'lg:blur-[2px]',
          scale === lg && 'lg:blur-none',
          'flex items-center justify-center text-center hover:blur-none rounded-md',
          'w-full h-full aspect-square overflow-hidden',
          'transition-all duration-300 delay-100 ease-out'
        )}
      >
        {RenderEmblem ? (
          <RenderEmblem
            color={isHovered ? `#${work.colors.split(', ')[0]}` : theme === 'light' ? '#09090b' : '#fafafa'}
            secColor={isHovered ? `#${work.colors.split(', ')[1]}` : theme === 'light' ? '#52525b' : '#a1a1aa'}
          />
        ) : (
          work.slugAsParams
        )}
      </div>
    </motion.div>
  );
}
