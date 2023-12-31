'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useState } from 'react';

type IconProps = {
  children: ReactNode;
  className?: string;
};

export function Hydrate({ children, className }: IconProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // `typeof window !== 'undefined'` set to compensate for Warning: Prop `d` did not match
  return hasMounted && typeof window !== 'undefined' && <span>{children}</span>;
}
