type SunRaysProps = {
  color?: string | undefined;
  className?: string;
};

export default function SunRays({ color = '#71717a', className }: SunRaysProps) {
  return (
    <svg width='34' height='34' viewBox='0 0 34 34' className={className}>
      <rect x='15.7857' width='2.42857' height='3.64286' rx='1.21429' fill={color} />
      <rect x='15.7857' y='30.3572' width='2.42857' height='3.64286' rx='1.21429' fill={color} />
      <rect y='18.2144' width='2.42857' height='3.64286' rx='1.21429' transform='rotate(-90 0 18.2144)' fill={color} />
      <rect
        x='30.3571'
        y='18.2144'
        width='2.42857'
        height='3.64286'
        rx='1.21429'
        transform='rotate(-90 30.3571 18.2144)'
        fill={color}
      />
      <rect
        x='4.12054'
        y='5.83789'
        width='2.42857'
        height='3.64286'
        rx='1.21429'
        transform='rotate(-45 4.12054 5.83789)'
        fill={color}
      />
      <rect
        x='25.5863'
        y='27.3036'
        width='2.42857'
        height='3.64286'
        rx='1.21429'
        transform='rotate(-45 25.5863 27.3036)'
        fill={color}
      />
      <rect
        x='5.8378'
        y='29.8794'
        width='2.42857'
        height='3.64286'
        rx='1.21429'
        transform='rotate(-135 5.8378 29.8794)'
        fill={color}
      />
      <rect
        x='27.3036'
        y='8.41357'
        width='2.42857'
        height='3.64286'
        rx='1.21429'
        transform='rotate(-135 27.3036 8.41357)'
        fill={color}
      />
    </svg>
  );
}
