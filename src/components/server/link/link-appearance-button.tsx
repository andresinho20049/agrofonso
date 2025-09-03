import Link from 'next/link';
import { ReactNode } from 'react';

interface ILinkAppearanceButtonProps {
  children: ReactNode;
  href: string;
  isBlank?: boolean;
}

export const LinkAppearanceButton = ({
  children,
  href,
  isBlank,
}: ILinkAppearanceButtonProps) => {
  return (
    <Link
      aria-label={href}
      className='flex items-center justify-center gap-1 rounded-md border-2 border-green-200 border-y-green-500 px-4 py-2 text-center no-underline transition-colors duration-200 ease-in hover:border-y-green-200 dark:bg-transparent'
      href={href}
      target={isBlank ? '_blank' : ''}
      rel={isBlank ? 'noopener noreferrer' : ''}
    >
      <span className='sr-only'>{href}</span>
      {children}
    </Link>
  );
};
