import NextImage, { ImageProps } from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MdxButton from './MdxButton';

const components = {
  MdxButton,
  Image: (props: ImageProps) => (
    <div className='relative flex aspect-video rounded-md overflow-hidden'>
      <NextImage
        {...props}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='-translate-y-8'
      />
    </div>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
