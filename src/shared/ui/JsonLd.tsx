/** Вставляет структурированные данные Schema.org в разметку страницы. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Данные формируются на сервере из site config — безопасно.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
