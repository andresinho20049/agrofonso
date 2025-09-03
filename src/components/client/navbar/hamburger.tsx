'use client';

export type HamburgerButtonType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const HamburgerButton = ({ open, setOpen }: HamburgerButtonType) => {
  return (
    <button id='hamburger' onClick={() => setOpen(!open)}>
      <img
        alt='Toggle'
        className={!open ? 'block' : 'hidden'}
        src='/icons/menu-toggle.svg'
      />
      <img
        alt='Toggle'
        className={open ? 'block' : 'hidden'}
        src='/icons/close.svg'
      />
    </button>
  );
};
