import { useTheme } from 'next-themes';
import { FaReact } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

type TechPillProps = {
  tech: string;
};

export default function TechPill({ tech }: TechPillProps) {
  const { theme } = useTheme();

  return (
    <span
      style={{ backgroundColor: theme === 'dark' ? '#09090b' : '#e4e4e7' }}
      className='py-0.5 px-2 rounded-md text-xs md:text-sm flex flex-row items-center gap-1.5 font-medium tracking-wider'
    >
      {tech === 'React JS' && <FaReact />}
      {tech === 'Tailwind CSS' && <SiTailwindcss />}
      {tech === 'Netlify' && <SiNetlify />}
      {tech === 'Next JS' && <TbBrandNextjs />}
      {tech}
    </span>
  );
}
