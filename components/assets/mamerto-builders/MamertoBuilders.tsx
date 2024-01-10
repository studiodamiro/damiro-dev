type LogoProps = {
  color?: string;
  secColor?: string;
};

export default function MamertoBuilders({ color = '#F7941D', secColor = '#666666' }: LogoProps) {
  return (
    <svg
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M85.1539 41.77L100.039 29.0007V29L152.269 59.1553L170.771 69.8372L152.269 80.5191L133.768 69.8372L85.1539 41.77Z'
        fill={color}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M100.039 29L114.667 41.9183L66.0532 69.9855L47.5516 80.6674L29.0488 69.9855H29.0499L47.5516 59.3036L100.039 29Z'
        fill={color}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M114.667 98.0528L99.7821 110.822V110.823L47.5516 80.6674L29.0499 69.9855L47.5516 59.3036L66.0532 69.9855L114.667 98.0528Z'
        fill={color}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M99.7821 110.823L85.1539 97.9044L133.768 69.8372L152.269 59.1553L170.771 69.8372L152.269 80.5191L99.7821 110.823Z'
        fill={color}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M114.665 158.191L99.7798 170.96V170.961L47.5016 140.778L29 130.096V121.55L34.5505 111.937L47.5016 119.414L114.665 158.191Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M99.7798 170.961L85.1517 158.042L165.266 111.788L171 121.72V129.842L152.498 140.524L99.7798 170.961Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M29 87.0781L47.5016 97.7599V119.414V140.778L29 130.096V121.55L29 87.0781Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M171 87.0781L152.498 97.76V119.142V140.524L171 129.842V121.72V87.0781Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
    </svg>
  );
}
