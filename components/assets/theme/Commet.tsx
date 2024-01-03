type CommetProps = {
  color?: string | undefined;
  className?: string;
};

export default function Commet({ color = '#71717a', className }: CommetProps) {
  return (
    <svg width='26' height='21' viewBox='0 0 26 21' className={className}>
      <path
        d='M5.92005 13.2282L25.3282 0L7.74201 15.3217C7.90874 15.762 8 16.2394 8 16.7381C8 18.9472 6.20914 20.7381 4 20.7381C1.79086 20.7381 0 18.9472 0 16.7381C0 14.5289 1.79086 12.7381 4 12.7381C4.69581 12.7381 5.35012 12.9157 5.92005 13.2282Z'
        fill={color}
      />
    </svg>
  );
}
