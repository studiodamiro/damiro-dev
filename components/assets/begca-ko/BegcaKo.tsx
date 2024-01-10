type LogoProps = {
  color?: string;
  secColor?: string;
};

export default function BegcaKo({ color = '#DEAB26', secColor = '#182F58' }: LogoProps) {
  return (
    <svg
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='transition-colors duration-1000 ease-out'
    >
      <path
        d='M136.882 98.8984C134.933 107.107 131.797 114.808 127.898 122.001C126.711 124.117 125.524 126.148 124.253 128.094C124.168 128.179 124.168 128.263 124.083 128.348C122.134 131.31 120.1 134.102 117.896 136.726C117.642 137.064 117.303 137.403 117.048 137.741C115.946 139.01 114.844 140.28 113.743 141.465C113.234 141.972 112.725 142.48 112.217 143.072C111.624 143.665 110.945 144.342 110.352 144.934C109.335 145.865 108.318 146.881 107.216 147.727C106.707 148.15 106.199 148.658 105.606 149.081C104.588 149.927 103.487 150.773 102.469 151.62C102.046 151.958 101.622 152.297 101.198 152.55C100.689 152.889 100.266 153.227 99.7571 153.566C98.9942 154.074 98.2314 154.581 97.4685 155.089C97.1295 155.343 96.7057 155.597 96.3666 155.851C94.9257 156.782 93.4848 157.713 91.9591 158.559C91.62 158.728 91.281 158.897 91.0267 159.066C89.4162 159.913 87.8058 160.844 86.1953 161.605H113.319C114.421 160.759 115.523 159.828 116.54 158.897C117.048 158.474 117.557 157.966 118.065 157.543C118.574 157.036 119.167 156.612 119.676 156.105C121.71 154.158 123.66 152.212 125.609 150.181C126.881 148.827 128.067 147.388 129.254 145.95C129.593 145.611 129.847 145.188 130.186 144.85C131.373 143.411 132.475 141.888 133.577 140.449C133.577 140.364 133.661 140.364 133.661 140.28C134.424 139.18 135.187 138.08 135.95 136.979C142.222 127.586 147.138 117.093 150.19 105.922C145.952 103.214 141.459 100.845 136.882 98.8984Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M87.4664 92.0436L95.6882 76.8112C96.9597 76.7266 98.3158 76.7266 99.5872 76.7266C85.6017 76.7266 72.2942 79.3499 60.0039 84.1735C60.4277 89.251 61.1906 94.1592 62.3772 98.9828C70.1752 95.5132 78.6513 93.1437 87.4664 92.0436Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path d='M99.586 29L45 171L99.586 69.4505V29Z' fill={color} className='transition-colors duration-700 ease-out' />
      <path d='M99.586 69.4455V50.3203L45 170.995L99.586 69.4455Z' fill='black' fillOpacity='0.3' />
      <path
        d='M154.172 171L99.5859 29V50.3254V69.4505L154.172 171Z'
        fill={color}
        className='transition-colors duration-700 ease-out'
      />
      <path d='M99.5859 29V50.3254L154.172 171L99.5859 29Z' fill='black' fillOpacity='0.3' />
      <path
        d='M139.254 84.1735C126.963 79.3499 113.571 76.7266 99.5857 76.7266C98.3142 76.7266 96.9581 76.8112 95.6867 76.8112L87.4648 92.0436C89.4143 91.7897 91.4486 91.6205 93.3981 91.4512C93.4829 91.4512 93.4829 91.4512 93.5676 91.4512C95.5171 91.3666 97.5514 91.282 99.5857 91.282C112.808 91.282 125.438 93.99 136.796 98.8982C141.458 100.845 145.865 103.214 150.103 105.837L139.254 84.1735Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M68.48 96.4476L60.0039 84.0078C60.4277 89.0853 61.1906 93.9935 62.3772 98.8171C64.3267 97.9709 66.361 97.2092 68.48 96.4476Z'
        fill='black'
        fillOpacity='0.3'
      />
      <path
        d='M136.88 98.8984C136.287 101.268 135.609 103.553 134.846 105.838H150.103C145.949 103.214 141.457 100.845 136.88 98.8984Z'
        fill='black'
        fillOpacity='0.3'
      />
      <path
        d='M62.3778 98.903C61.1911 94.0794 60.4283 89.1712 60.0045 84.0938L49.0703 105.927C55.2579 128.268 68.4806 147.647 86.0261 161.779L93.4796 158.022L99.5871 153.823C78.5925 137.409 67.2091 119.128 62.3778 98.903Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M91.8719 158.639C93.3976 157.793 94.8386 156.862 96.2795 155.931C96.6185 155.678 97.0424 155.424 97.3814 155.17C98.1442 154.662 98.9071 154.154 99.5852 153.562C97.8052 152.293 96.0252 150.939 94.33 149.5L86.0234 161.601C87.6339 160.84 89.2443 159.909 90.8548 159.063C91.1938 158.978 91.5329 158.809 91.8719 158.639Z'
        fill='black'
        fillOpacity='0.3'
      />
    </svg>
  );
}
