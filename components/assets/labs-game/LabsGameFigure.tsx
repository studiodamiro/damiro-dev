import { cn } from '@/lib/utils';
import LabsGameLogo from './LabsGameLogo';
import { useTheme } from 'next-themes';
import ParallaxEffect from '@/components/ParallaxEffect';
import useMeasure from 'react-use-measure';
import { ImageFadeIn } from '@/components/ImageFadeIn';

export default function LabsGameFigure() {
  const { theme } = useTheme();
  let [ref, { width, height }] = useMeasure();

  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full aspect-[4/3] place-content-center flex items-center justify-center overflow-visible'
      )}
    >
      {/* LOGO */}
      <ParallaxEffect scale={0.1} width={width / 5} position={{ left: width / 2, top: height / 2 }}>
        <LabsGameLogo
          color={theme === 'light' ? 'black' : 'white'}
          className='scale-75 lg:scale-100 -translate-x-1/2 -translate-y-1/2 bg-red-500/5'
        />
      </ParallaxEffect>

      {/* EQPT */}
      <ParallaxEffect scale={0.2} width={width / 5} position={{ left: width / 4, top: height / 6 }}>
        <ImageFadeIn src='/images/labsgame-01.webp' alt='Labs equipment tripod' className='z-[-1] blur-[3px]' />
      </ParallaxEffect>
      <ParallaxEffect scale={0.6} width={width / 5} position={{ left: width / 1.5, top: height / 3 }}>
        <ImageFadeIn
          src='/images/labsgame-02.webp'
          alt='Labs equipment goggles'
          className='blur-[0px] scale-150 rotate-45'
        />
      </ParallaxEffect>
      <ParallaxEffect scale={0.2} width={width / 5} position={{ left: width - 200, top: height - 300 }}>
        <ImageFadeIn
          src='/images/labsgame-03.webp'
          alt='Labs equipment microscope'
          className='z-[-1] blur-[2px] scale-105 -rotate-12'
        />
      </ParallaxEffect>
      <ParallaxEffect scale={0.6} width={width / 5} position={{ left: width / 6, top: height - 200 }}>
        <ImageFadeIn
          src='/images/labsgame-04.webp'
          alt='Labs equipment magnets'
          className='blur-[1px] scale-110 rotate-30'
        />
      </ParallaxEffect>
      <ParallaxEffect scale={0.2} width={width / 5} position={{ left: 0, top: height - 400 }}>
        <ImageFadeIn
          src='/images/labsgame-05.webp'
          alt='Labs equipment ph meter'
          className='blur-[3px] scale-50 rotate-30'
        />
      </ParallaxEffect>
      <ParallaxEffect scale={0.1} width={width / 5} position={{ left: width - 200, top: height - 100 }}>
        <ImageFadeIn
          src='/images/labsgame-06.webp'
          alt='Labs equipment measuring cup'
          className='z-[-1] blur-[4px] scale-50 rotate-45'
        />
      </ParallaxEffect>
      <ParallaxEffect scale={0.2} width={width / 5} position={{ left: width / 3, top: height - 200 }}>
        <ImageFadeIn
          src='/images/labsgame-07.webp'
          alt='Labs equipment beaker'
          className='blur-[1px] scale-75 -rotate-[60deg]'
        />
      </ParallaxEffect>
    </div>
  );
}
