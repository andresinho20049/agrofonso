'use client';

import { pages } from '@onion/hooks/usePage';
import { useCallback, useEffect, useRef, useState } from 'react';
import { HamburgerButton } from './hamburger';
import { LogoComponent } from './Logo';
import { NavBarLink } from './navbar-link';
import { ThemeToggle } from './theme-toggle';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (navRef.current && !navRef.current?.contains(event.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
  }, [navRef]);

  return (
    <nav
      ref={navRef}
      className='flex flex-wrap items-center justify-between px-10 py-1'
    >
      <LogoComponent />
      <div className='flex md:hidden'>
        <HamburgerButton open={open} setOpen={setOpen} />
      </div>
      <div
        className={` ${
          open ? 'flex flex-col' : 'hidden'
        } w-full items-center gap-4 md:mt-0 md:flex md:w-auto md:flex-row md:border-none`}
      >
        {pages.map((p) => (
          <NavBarLink
            key={p.href}
            href={p.href}
            label={p.label}
            callback={handleClose}
          />
        ))}
      </div>

      <div
        className={`${
          open
            ? 'mt-5 flex justify-center gap-2 border-t-2 border-gray-500 py-4'
            : 'hidden'
        } w-full md:flex md:w-auto`}
      >
        <ThemeToggle />
      </div>
    </nav>
  );
};
