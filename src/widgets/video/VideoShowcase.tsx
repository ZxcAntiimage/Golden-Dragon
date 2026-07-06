'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gallery } from '@/entities/gallery/data';
import { site } from '@/shared/config/site';
import { showcaseVideos } from '@/shared/config/videos';
import { Button } from '@/shared/ui/Button';

const SLIDES = [
  '/images/exterior-night.jpg',
  '/images/hall-banquet.jpg',
  gallery[6].src,
  gallery[12].src,
];

/** Кинематографичная секция с видео ресторана. */
export function VideoShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeClip, setActiveClip] = useState(0);
  const [videoOk, setVideoOk] = useState(true);
  const [slide, setSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  useEffect(() => {
    if (!videoOk) {
      const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4500);
      return () => clearInterval(id);
    }
    const id = setInterval(
      () => setActiveClip((c) => (c + 1) % showcaseVideos.length),
      10000,
    );
    return () => clearInterval(id);
  }, [videoOk]);

  const current = showcaseVideos[activeClip];

  return (
    <section
      ref={sectionRef}
      id="video"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        {videoOk ? (
          <AnimatePresence mode="wait">
            <motion.video
              key={current.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={current.poster}
              onError={() => setVideoOk(false)}
              className="h-full w-full object-cover"
            >
              <source src={current.src} type="video/quicktime" />
              <source src={current.src} type="video/mp4" />
            </motion.video>
          </AnimatePresence>
        ) : (
          SLIDES.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${site.name} — атмосфера ресторана`}
              fill
              sizes="100vw"
              priority={i === 0}
              className={`object-cover transition-opacity duration-1500 ${
                i === slide ? 'ken-burns opacity-100' : 'opacity-0'
              }`}
            />
          ))
        )}
      </motion.div>

      <div className="absolute inset-0 bg-ink/50" />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto w-full max-w-5xl px-5"
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold backdrop-blur">
            <Play className="h-3.5 w-3.5 fill-gold" /> Видеопрогулка
          </span>

          <h2 className="text-balance font-display text-[clamp(2rem,6vw,4rem)] font-black leading-[1.02] text-paper">
            Почувствуйте
            <br />
            <span className="text-shimmer">атмосферу кухни</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-paper/70 lg:mx-0">
            Ароматы вока, тёплый свет фонарей и радушие — приходите или закажите
            доставку, чтобы ощутить всё это лично.
          </p>

          {videoOk && (
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {showcaseVideos.map((clip, i) => (
                <button
                  key={clip.src}
                  type="button"
                  onClick={() => setActiveClip(i)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    i === activeClip
                      ? 'border-gold bg-gold/15 text-gold'
                      : 'border-gold/20 text-paper/50 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {clip.label}
                </button>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href="/#delivery" variant="primary" size="lg">
              Заказать доставку
            </Button>
            <Button href="/contacts" variant="outline" size="lg">
              Забронировать стол
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
