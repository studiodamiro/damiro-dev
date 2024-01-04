import { cn } from '@/lib/utils';

type GradientLinearProps = {
  colors: string[];
  className?: string;
};

export default function GradientLinear({ colors, className }: GradientLinearProps) {
  return (
    <div
      className={cn(
        className,
        'relative w-full',
        'bg-gradient-to-t from-0% to-80%',
        'from-transparent to-slate-300',
        'dark:from-transparent dark:to-slate-900'
      )}
    />
  );
}
