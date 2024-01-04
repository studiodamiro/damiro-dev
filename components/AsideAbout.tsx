import PillTech from './PillTech';

const aboutItems = {
  backgrounds: 'Electronics Engineering, Masters in IT, Self-learned front-end developer',
  technologies:
    'HTMLS5, CSS3, JavaScript, TypeScript, Tailwind CSS, NPM, Node JS, React JS, Next JS, Vite, Electron JS, Wordpress, Netlify, Vercel, Framer Motion, Flutter, Dart, Amazon Web Services, Google Cloud, PHP, MySQL',
  tools: 'Obsidian, VS Code, Github, Figma, Adobe Creative Suite, Open AI, Stable Diffusion, Codeium',
};

export default function AsideAbout() {
  return (
    <div>
      <div className='flex flex-col w-full md:w-4/5 lg:w-full pl-0 md:pl-[68px] lg:pl-0 pr-4 md:pr-8 mb-8'>
        <div className='h-10 w-full hidden lg:block' />
        <span className='allcap-span pt-2 lg:pt-0 pb-2'>Bits & pieces of me</span>
        <div className='flex flex-col gap-6'>
          <div>
            <span className='font-fauna text-md md:text-xl -mx-[1px] mt-2 mb-1.5 text-zinc-500'>Background</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              {aboutItems.backgrounds.split(', ').map((background, index) => (
                <PillTech key={index} tech={background} />
              ))}
            </div>
          </div>
          <div>
            <span className='font-fauna text-md md:text-xl -mx-[1px] mt-2 mb-1.5 text-zinc-500'>Technologies</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              {aboutItems.technologies.split(', ').map((technology, index) => (
                <PillTech key={index} tech={technology} />
              ))}
            </div>
          </div>
          <div>
            <span className='font-fauna text-md md:text-xl -mx-[1px] mt-2 mb-1.5 text-zinc-500'>Tools</span>
            <div className='flex flex-wrap gap-2 mt-2'>
              {aboutItems.tools.split(', ').map((tool, index) => (
                <PillTech key={index} tech={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
