'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/shared/lib/cn';

type Status = 'idle' | 'sending' | 'sent';

const inputCls =
  'w-full rounded-xl border border-gold/15 bg-ink-700/50 px-4 py-3 text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-gold/60 focus:bg-ink-700';

/**
 * Форма обратной связи «Напишите нам». Без бэкенда: демонстрирует состояние
 * отправки. Готова к подключению к API-роуту или внешнему сервису.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;
    setStatus('sending');
    // Заглушка отправки — здесь подключается реальный обработчик.
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-paper/70">
            Имя <span className="text-dragon">*</span>
          </label>
          <input id="name" name="name" required placeholder="Как к вам обращаться" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-paper/70">
            Телефон <span className="text-dragon">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+7 (___) ___-__-__"
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-paper/70">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Бронь стола, заказ банкета или вопрос о меню…"
          className={cn(inputCls, 'resize-none')}
        />
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        disabled={status !== 'idle'}
        className={cn(
          'inline-flex h-13 items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold text-ink transition-all',
          status === 'sent'
            ? 'bg-emerald-400'
            : 'bg-gradient-to-br from-gold-bright via-gold to-gold-deep shadow-gold hover:-translate-y-0.5',
        )}
      >
        {status === 'idle' && 'Отправить'}
        {status === 'sending' && 'Отправляем…'}
        {status === 'sent' && 'Заявка отправлена'}
      </motion.button>
      <p className="text-xs text-paper/40">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}
