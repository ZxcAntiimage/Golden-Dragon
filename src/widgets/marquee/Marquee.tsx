const PHRASES = [
  'Аутентичная китайская кухня',
  '正宗中国菜',
  'Приготовлено на воке',
  '金龙',
  'Доставка по Костроме',
  '外卖',
  'Банкеты до 60 персон',
  '宴会厅',
];

/** Бесконечная золотая «бегущая строка» с китайскими акцентами. */
export function Marquee() {
  const row = [...PHRASES, ...PHRASES];
  return (
    <div className="relative flex overflow-hidden border-y border-gold/15 bg-ink-800 py-5 select-none">
      <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-8 pr-8">
        {row.map((p, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-lg font-semibold text-gold/80 sm:text-xl">
              {p}
            </span>
            <span className="text-dragon">❖</span>
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-[marquee_30s_linear_infinite] items-center gap-8 pr-8"
      >
        {row.map((p, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-lg font-semibold text-gold/80 sm:text-xl">
              {p}
            </span>
            <span className="text-dragon">❖</span>
          </span>
        ))}
      </div>
    </div>
  );
}
