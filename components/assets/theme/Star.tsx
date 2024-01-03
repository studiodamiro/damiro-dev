type StarProps = {
  color?: string | undefined;
  className?: string;
};

export default function Star({ color = '#71717a', className }: StarProps) {
  return (
    <svg width='9' height='9' viewBox='0 0 9 9' className={className}>
      <path d='M4.25 0L5.525 2.975L8.5 4.25L5.525 5.525L4.25 8.5L2.975 5.525L0 4.25L2.975 2.975L4.25 0Z' fill={color} />
    </svg>
  );
}
