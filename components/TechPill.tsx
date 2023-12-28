import { FaReact, FaNodeJs } from 'react-icons/fa6';
import { SiTailwindcss, SiNetlify, SiVite, SiNpm } from 'react-icons/si';
import { TbBrandNextjs, TbBrandFramerMotion } from 'react-icons/tb';
import { IoLogoElectron } from 'react-icons/io5';

type TechPillProps = {
  tech: string;
};

export default function TechPill({ tech }: TechPillProps) {
  const techIcons = {
    'React JS': <FaReact />,
    'Tailwind CSS': <SiTailwindcss />,
    'Next JS': <TbBrandNextjs />,
    'Node JS': <FaNodeJs />,
    'Electron JS': <IoLogoElectron />,
    'Framer Motion': <TbBrandFramerMotion />,
    Netlify: <SiNetlify />,
    Vite: <SiVite />,
    NPM: <SiNpm />,
  };

  return (
    <div className='py-0.5 px-2.5 rounded-md text-xs md:text-sm flex flex-row items-center gap-1.5 font-medium tracking-wider dark:bg-black bg-zinc-200'>
      {techIcons[tech as keyof typeof techIcons]}
      {tech}
    </div>
  );
}
