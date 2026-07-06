import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '@/shared/lib/cn';

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-br from-gold-bright via-gold to-gold-deep text-ink shadow-gold hover:shadow-[0_16px_50px_-12px_rgba(212,175,55,0.7)] hover:-translate-y-0.5',
        dragon:
          'bg-gradient-to-br from-dragon-bright via-dragon to-dragon-deep text-white shadow-dragon hover:-translate-y-0.5',
        outline:
          'border border-gold/40 bg-ink-700/40 text-gold backdrop-blur hover:border-gold hover:bg-gold/10',
        ghost: 'text-paper/80 hover:text-gold',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-14 px-9 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type BaseProps = VariantProps<typeof buttonVariants> & { className?: string };

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Универсальная кнопка/ссылка с золотым и «драконьим» вариантами. */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);

    if ('href' in props && props.href !== undefined) {
      const { href, ...rest } = props as ButtonAsLink;
      const external = /^https?:\/\/|^tel:|^mailto:/.test(href);
      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            {...rest}
          />
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonAsButton)}
      />
    );
  },
);
Button.displayName = 'Button';
