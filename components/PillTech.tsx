import { GrTechnology } from 'react-icons/gr';
import { IoLogoElectron } from 'react-icons/io5';
import {
  FaCode,
  FaGear,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaPalette,
  FaPhp,
  FaAmazon,
  FaWordpressSimple,
} from 'react-icons/fa6';
import {
  SiTailwindcss,
  SiNetlify,
  SiVite,
  SiNpm,
  SiJavascript,
  SiTypescript,
  SiVercel,
  SiFlutter,
  SiDart,
  SiGooglecloud,
  SiOpenai,
  SiObsidian,
  SiAdobecreativecloud,
} from 'react-icons/si';
import {
  TbBrandNextjs,
  TbBrandFramerMotion,
  TbBrandVscode,
  TbBrandFigma,
  TbBarcode,
  TbBrandMysql,
} from 'react-icons/tb';

type PillTechProps = {
  tech: string;
};

export default function PillTech({ tech }: PillTechProps) {
  const techIcons = {
    // Education
    'Electronics Engineering': <FaGear />,
    'Masters in IT': <GrTechnology />,
    'Self-learned front-end developer': <FaCode />,

    // Technologies
    HTMLS5: <FaHtml5 />,
    CSS3: <FaCss3 />,
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    Netlify: <SiNetlify />,
    Vite: <SiVite />,
    NPM: <SiNpm />,
    Vercel: <SiVercel />,
    Wordpress: <FaWordpressSimple />,
    Flutter: <SiFlutter />,
    Dart: <SiDart />,
    PHP: <FaPhp />,
    MySQL: <TbBrandMysql />,
    'Tailwind CSS': <SiTailwindcss />,
    'React JS': <FaReact />,
    'Next JS': <TbBrandNextjs />,
    'Node JS': <FaNodeJs />,
    'Electron JS': <IoLogoElectron />,
    'Framer Motion': <TbBrandFramerMotion />,
    'Amazon Web Services': <FaAmazon />,
    'Google Cloud': <SiGooglecloud />,

    // Tools
    Obsidian: <SiObsidian />,
    Github: <FaGithub />,
    Figma: <TbBrandFigma />,
    Codeium: <TbBarcode />,
    'VS Code': <TbBrandVscode />,
    'Adobe Creative Suite': <SiAdobecreativecloud />,
    'Open AI': <SiOpenai />,
    'Stable Diffusion': <FaPalette />,
  };

  return (
    <span className='py-0.5 px-2.5 rounded-md text-xs md:text-sm flex flex-row items-center gap-1.5 font-medium tracking-wider dark:bg-black bg-zinc-200'>
      {techIcons[tech as keyof typeof techIcons]}
      {tech}
    </span>
  );
}
