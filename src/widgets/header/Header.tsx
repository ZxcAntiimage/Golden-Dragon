'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navItems } from '@/shared/config/nav';
import { site } from '@/shared/config/site';
import { cn } from '@/shared/lib/cn';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { closeNav, toggleNav } from '@/shared/store/uiSlice';
import { Button } from '@/shared/ui/Button';

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={site.name}>
      <span className="relative grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-ink-700">
        <span className="font-display text-lg font-bold text-gold-gradient text-gold">
          {site.nameZh}
        </span>
        <span className="absolute inset-0 rounded-full bg-gold/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-wide text-paper">
          {site.name}
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-gold/70">
          {site.city} · 金龙
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.navOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500',
            scrolled
              ? 'glass border border-gold/15 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]'
              : 'border border-transparent',
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-paper/75 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href={`tel:${site.phones[0].tel}`} variant="outline" size="sm">
              <Phone className="h-4 w-4" />
              {site.phones[0].label}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => dispatch(toggleNav())}
            className="grid h-11 w-11 place-items-center rounded-xl border border-gold/20 text-gold lg:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={() => dispatch(closeNav())}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col gap-2 border-l border-gold/15 bg-ink-800 p-6 pt-24"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => dispatch(closeNav())}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium text-paper/85 transition-colors hover:bg-gold/10 hover:text-gold"
                  >
                    {item.label}
                    <span className="text-gold/40">→</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                {site.phones.map((p) => (
                  <Button key={p.tel} href={`tel:${p.tel}`} variant="outline">
                    <Phone className="h-4 w-4" />
                    {p.label}
                  </Button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
