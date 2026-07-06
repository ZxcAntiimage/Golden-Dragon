import { cn } from '@/shared/lib/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  as?: 'section' | 'div' | 'footer' | 'header';
  container?: boolean;
}

/** Секция с якорем и стандартными вертикальными отступами. */
export function Section({
  id,
  as: Tag = 'section',
  container = true,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn('relative scroll-mt-24 py-20 sm:py-28', className)}
      {...rest}
    >
      {container ? (
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}
