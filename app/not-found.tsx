'use client';

import { useEffect } from 'react';
import { useColor } from '@/providers/ColorProvider';
import { usePath } from '@/providers/PathProvider';
import SectionWriteup from '@/components/SectionWriteup';
import MdxButton from '@/components/MdxButton';

export default function NotFound() {
  const { setCover } = usePath();
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor && setColor('#71717a'); // Default primary color zinc-500

    const timer = setTimeout(() => setCover(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='w-full min-h-screen flex flex-col lg:flex-row'>
      <SectionWriteup
        title={'error 404'}
        preText={'NOT FOUND'}
        description={"What you're looking for does not exist"}
        color={color}
      >
        <MdxButton href='/'>RETURN HOME</MdxButton>
      </SectionWriteup>
    </main>
  );
}
