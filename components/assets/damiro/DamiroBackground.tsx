import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export default function DamiroBackground() {
  const { theme } = useTheme();

  return (
    <>
      {/* sm */}
      <div className='block lg:hidden z-[-1] relative w-screen aspect-[1/1.5] overflow-hidden'>
        <Bg color={theme === 'light' ? '#52525b' : '#52525b'} className='origin-center opacity-100' />
      </div>

      {/* lg */}
      <div className='hidden lg:block z-[-1] fixed bottom-2 right-0 w-full h-screen'>
        <Bg color={theme === 'light' ? '#52525b' : '#52525b'} className='origin-center opacity-30' />
      </div>
    </>
  );
}

const Bg = ({ color, className }: { color: string; className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='200%'
      height='200%'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 200 200'
      fill='none'
      className={cn('-rotate-[60deg]', className)}
    >
      <g clipPath='url(#clip0_1225_5704)'>
        <path
          d='M137.029 46.8203H122.479V61.3703H137.029V46.8203Z'
          stroke={color}
          strokeWidth='0.1'
          strokeMiterlimit='10'
        />
        <path
          d='M131.209 38.0781H122.479V46.8081H131.209V38.0781Z'
          stroke={color}
          strokeWidth='0.1'
          strokeMiterlimit='10'
        />
        <path
          d='M137.029 38.0781H131.209V43.8981H137.029V38.0781Z'
          stroke={color}
          strokeWidth='0.1'
          strokeMiterlimit='10'
        />
        <path
          d='M137.029 43.8984H134.119V46.8084H137.029V43.8984Z'
          stroke={color}
          strokeWidth='0.1'
          strokeMiterlimit='10'
        />
        <path
          d='M122.479 38.0781H99.1992V61.3581H122.479V38.0781Z'
          stroke={color}
          strokeWidth='0.1'
          strokeMiterlimit='10'
        />
        <path d='M137.029 0.25H99.1992V38.08H137.029V0.25Z' stroke={color} strokeWidth='0.1' strokeMiterlimit='10' />
        <path d='M198.149 0.25H137.029V61.37H198.149V0.25Z' stroke={color} strokeWidth='0.1' strokeMiterlimit='10' />
        <path
          d='M198.149 61.3672H99.1992V160.317H198.149V61.3672Z'
          stroke={color}
          strokeWidth='0.1'
          strokeMiterlimit='10'
        />
        <path
          d='M99.2001 160.318C132.956 160.318 160.32 132.954 160.32 99.1981C160.32 65.4425 132.956 38.0781 99.2001 38.0781C65.4444 38.0781 38.0801 65.4425 38.0801 99.1981C38.0801 132.954 65.4444 160.318 99.2001 160.318Z'
          stroke={color}
          strokeWidth='0.1'
          strokeMiterlimit='10'
        />
        <path
          d='M80.28 179.232C124.479 179.232 160.31 143.401 160.31 99.2019C160.31 55.0025 124.479 19.1719 80.28 19.1719C36.0807 19.1719 0.25 55.0025 0.25 99.2019C0.25 143.401 36.0807 179.232 80.28 179.232Z'
          stroke={color}
          strokeWidth='0.1'
          strokeMiterlimit='10'
        />
        <path
          d='M99.2 198.15C153.849 198.15 198.15 153.849 198.15 99.2C198.15 44.5514 153.849 0.25 99.2 0.25C44.5514 0.25 0.25 44.5514 0.25 99.2C0.25 153.849 44.5514 198.15 99.2 198.15Z'
          stroke={color}
          strokeWidth='0.1'
          strokeMiterlimit='10'
        />
      </g>
      <defs>
        <clipPath id='clip0_1225_5704'>
          <rect width='198.4' height='198.4' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
