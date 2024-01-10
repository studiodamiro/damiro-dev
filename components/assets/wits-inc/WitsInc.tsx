import adjustHexColor from '@/lib/adjustHexColor';
import { useTheme } from 'next-themes';

type LogoProps = {
  color?: string;
  secColor?: string;
};

export default function WitsInc({ color = '#1E194D', secColor = '#ffffff' }: LogoProps) {
  const { theme } = useTheme();
  const adjustedColor = theme === 'light' ? color : adjustHexColor(color, 'light', 100);

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
        d='M144.155 109.475C139.474 104.416 141.086 96.2134 147.761 91.154C154.436 86.0945 163.642 86.0945 168.322 91.154C173.003 96.2134 171.391 104.416 164.716 109.475C158.041 114.535 148.835 114.535 144.231 109.475H144.155Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M111.086 134.624C106.406 129.564 108.017 121.362 114.692 116.302C121.367 111.243 130.574 111.243 135.254 116.302C139.934 121.362 138.323 129.564 131.648 134.624C124.973 139.683 115.766 139.683 111.086 134.624Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M78.0179 159.764C73.3378 154.705 74.949 146.502 81.6239 141.443C88.2988 136.384 97.5056 136.384 102.109 141.443C106.789 146.502 105.178 154.705 98.503 159.764C91.8281 164.824 82.6213 164.824 78.0179 159.764Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M124.59 65.9352C131.265 60.8758 140.472 60.8758 145.152 65.9352C149.832 70.9946 148.221 79.1971 141.546 84.2565C134.871 89.3159 125.664 89.3159 121.061 84.2565C116.381 79.1971 117.992 70.9946 124.667 65.9352H124.59Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M101.421 40.7946C108.096 35.7351 117.302 35.7351 121.983 40.7946C126.663 45.854 125.051 54.0564 118.377 59.1159C111.702 64.1753 102.495 64.1753 97.8148 59.1159C93.1346 54.0564 94.7458 45.854 101.421 40.7946Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M91.5223 91.0836C98.1972 86.0242 107.404 86.0242 112.084 91.0836C116.764 96.1431 115.153 104.345 108.478 109.405C101.803 114.464 92.5964 114.464 87.9163 109.405C83.2362 104.345 84.8474 96.1431 91.5223 91.0836Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M68.3524 65.9352C75.0273 60.8758 84.2341 60.8758 88.8375 65.9352C93.5176 70.9946 91.9064 79.1971 85.2315 84.2565C78.5566 89.3159 69.3498 89.3159 64.7464 84.2565C60.0663 79.1971 61.6775 70.9946 68.3524 65.9352Z'
        fill={secColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M58.4556 116.216C65.1305 111.157 74.3373 111.157 78.9407 116.216C83.6208 121.276 82.0096 129.478 75.3347 134.538C68.6598 139.597 59.453 139.597 54.8496 134.538C50.2463 129.478 51.7807 121.276 58.4556 116.216Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M35.284 91.0836C41.9589 86.0242 51.1657 86.0242 55.7691 91.0836C60.4492 96.1431 58.838 104.345 52.1631 109.405C45.4882 114.464 36.2814 114.464 31.678 109.405C26.9979 104.345 28.6091 96.1431 35.284 91.0836Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M66.6629 112.625C52.6226 114.158 57.0725 103.732 57.5329 102.812L44.2598 112.931C58.8372 111.398 53.3131 122.82 53.3131 122.82L66.7396 112.625H66.6629Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M122.825 112.695C108.785 114.228 113.235 103.803 113.695 102.883L100.422 113.002C114.999 111.469 109.475 122.891 109.475 122.891L122.902 112.695H122.825Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M137.864 122.891C138.631 110.625 149.833 112.772 150.83 113.002L141.547 102.883C140.703 115.608 128.504 112.695 128.504 112.695L137.864 122.891Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
    </svg>
  );
}
