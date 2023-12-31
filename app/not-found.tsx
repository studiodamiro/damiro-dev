'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const route = useRouter();

  useEffect(() => {
    route.push('/not-found');
  }, []);
}
