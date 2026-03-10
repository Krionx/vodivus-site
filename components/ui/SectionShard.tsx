import { ReactNode } from 'react';

type SectionShardProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  id?: string;
};

export default function SectionShard({
  children,
  className = '',
  contentClassName = '',
  id,
}: SectionShardProps) {
  return (
    <section id={id} className={`vv-section ${className}`.trim()}>
      <div className={`vv-shard ${contentClassName}`.trim()}>{children}</div>
    </section>
  );
}