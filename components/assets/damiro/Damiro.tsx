import { useTheme } from 'next-themes';

type LogoProps = {
  color?: string;
  secColor?: string;
};

export default function Damiro({ color = '#A1A1AA', secColor = '#ED2024' }: LogoProps) {
  const { theme } = useTheme();
  const adjustedColor = theme === 'light' ? color : secColor;

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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M100.001 134.717C119.024 134.717 134.446 119.296 134.446 100.273C134.446 81.2494 119.024 65.8281 100.001 65.8281C80.9779 65.8281 65.5566 81.2494 65.5566 100.273C65.5566 119.296 80.9779 134.717 100.001 134.717ZM139.446 100.273C139.446 122.057 121.786 139.717 100.001 139.717C78.2165 139.717 60.5566 122.057 60.5566 100.273C60.5566 78.488 78.2165 60.8281 100.001 60.8281C121.786 60.8281 139.446 78.488 139.446 100.273Z'
        fill={adjustedColor}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M100 166C136.451 166 166 136.451 166 100C166 63.5492 136.451 34 100 34C63.5492 34 34 63.5492 34 100C34 136.451 63.5492 166 100 166ZM171 100C171 139.212 139.212 171 100 171C60.7878 171 29 139.212 29 100C29 60.7878 60.7878 29 100 29C139.212 29 171 60.7878 171 100Z'
        fill={adjustedColor}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M84.2222 149.132C111.959 149.132 134.444 126.647 134.444 98.9097C134.444 71.1728 111.959 48.6875 84.2222 48.6875C56.4853 48.6875 34 71.1728 34 98.9097C34 126.647 56.4853 149.132 84.2222 149.132ZM139.444 98.9097C139.444 129.408 114.721 154.132 84.2222 154.132C53.7238 154.132 29 129.408 29 98.9097C29 68.4113 53.7238 43.6875 84.2222 43.6875C114.721 43.6875 139.444 68.4113 139.444 98.9097Z'
        fill={adjustedColor}
      />
    </svg>
  );
}
