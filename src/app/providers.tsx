'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LogoWipe from '@/components/LogoWipe';

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [wipeActive, setWipeActive] = useState(false);
  const [displayPath, setDisplayPath] = useState(pathname);

  useEffect(() => {
    // Don't trigger on initial mount
    if (displayPath === pathname) {
      return;
    }

    // Trigger the wipe animation
    setWipeActive(true);

    // Wait for animation to complete, then update display path
    const timer = setTimeout(() => {
      setWipeActive(false);
      setDisplayPath(pathname);
    }, 900); // Match animation duration + buffer

    return () => clearTimeout(timer);
  }, [pathname, displayPath]);

  return (
    <>
      <LogoWipe active={wipeActive} />
      {children}
    </>
  );
}
