import { useTheme } from 'next-themes';

type LogoProps = {
  color?: string;
  secColor?: string;
};

export default function IieeMw({ color = '#EEE08E', secColor = '#62354A' }: LogoProps) {
  const { theme } = useTheme();
  const adjustedColor = theme === 'light' ? color : secColor;

  return (
    <svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M129.523 71.6962C128.471 61.3727 119.725 53.2891 109.127 53.2891C105.821 53.2891 102.697 54.0814 99.9236 55.4757C97.1503 54.0814 94.0266 53.2891 90.72 53.2891C80.1222 53.2891 71.3758 61.3727 70.3244 71.6962H59.8027V75.8865H70.2177V82.9949H74.4081V75.8865H88.8229C89.8057 81.1207 94.4075 85.0901 99.9159 85.0901C105.424 85.0901 110.026 81.1207 111.009 75.8865H125.424V82.9949H129.614V75.8865H140.037V71.6962H129.508H129.523ZM74.5604 71.6962C75.5966 63.6888 82.4383 57.4794 90.72 57.4794C92.4723 57.4794 94.1561 57.7613 95.7408 58.2794C91.8857 61.6088 89.2724 66.3478 88.7315 71.6962H74.5604ZM106.88 71.6962H92.9599C93.5694 66.9877 96.1751 62.904 99.9159 60.3365C103.657 62.904 106.262 66.9877 106.872 71.6962H106.88ZM99.9236 80.8997C96.7313 80.8997 94.0266 78.7893 93.1276 75.8865H106.712C105.813 78.7893 103.108 80.8997 99.9236 80.8997ZM111.116 71.6962C110.567 66.3554 107.961 61.6165 104.106 58.2794C105.691 57.7613 107.375 57.4794 109.127 57.4794C117.409 57.4794 124.251 63.6888 125.287 71.6962H111.116Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M129.63 116.978H125.439V124.086H111.024C110.042 118.852 105.44 114.883 99.9314 114.883C94.4229 114.883 89.8212 118.852 88.8383 124.086H74.4235V116.978H70.2331V124.086H59.8105V128.277H70.3398C71.3912 138.6 80.1376 146.684 90.7354 146.684C94.042 146.684 97.1657 145.892 99.939 144.497C102.712 145.892 105.836 146.684 109.143 146.684C119.74 146.684 128.487 138.6 129.538 128.277H140.06V124.086H129.645V116.978H129.63ZM99.9238 139.636C96.1829 137.069 93.5773 132.985 92.9678 128.277H106.887C106.278 132.985 103.672 137.069 99.9314 139.636H99.9238ZM99.9238 119.073C103.116 119.073 105.821 121.184 106.712 124.086H93.1277C94.0268 121.184 96.7315 119.073 99.9238 119.073ZM90.7202 142.493C82.4385 142.493 75.5968 136.284 74.5606 128.277H88.7317C89.2802 133.618 91.8859 138.356 95.741 141.694C94.1563 142.212 92.4725 142.493 90.7202 142.493ZM109.127 142.493C107.375 142.493 105.691 142.212 104.107 141.694C107.962 138.364 110.575 133.625 111.116 128.277H125.287C124.251 136.284 117.409 142.493 109.127 142.493Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M74.4388 91.4922H70.1875V95.7435H74.4388V91.4922Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M82.933 91.4922H78.6816V95.7435H82.933V91.4922Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M129.66 91.4922H125.408V95.7435H129.66V91.4922Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M70.1875 108.47H74.4388H78.6825V104.227H74.4388H70.1875V108.47Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M82.9336 108.47H87.1849H91.4286V104.227H87.1849H82.9336V108.47Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M108.418 104.227V108.47H112.669H116.913V104.227H112.669H108.418Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M121.164 104.227V108.47H125.408H129.659V104.227H125.408H121.164Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M104.175 104.227H99.9238V108.478H104.175V104.227Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M95.6791 91.4922H91.4277V95.7435H95.6791V91.4922Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M104.168 91.4922H99.9238V95.7435H104.168V91.4922Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M116.921 91.4922H112.67V95.7435H116.921V91.4922Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M101.569 39.4232L99.9234 36.0938L98.2854 39.4232L94.6055 39.9565L97.2644 42.5469L96.6397 46.2116L99.9234 44.4821L103.215 46.2116L102.59 42.5469L105.249 39.9565L101.569 39.4232Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M101.569 157.142L99.9234 153.812L98.2854 157.142L94.6055 157.675L97.2644 160.273L96.6397 163.93L99.9234 162.201L103.215 163.93L102.59 160.273L105.249 157.675L101.569 157.142Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M50.7214 127.79L49.0758 124.453L47.4301 127.79L43.7578 128.323L46.4168 130.914L45.7844 134.579L49.0758 132.849L52.3671 134.579L51.7347 130.914L54.3937 128.323L50.7214 127.79Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M50.7214 68.9935L49.0758 65.6641L47.4301 68.9935L43.7578 69.5268L46.4168 72.1172L45.7844 75.7819L49.0758 74.0524L52.3671 75.7819L51.7347 72.1172L54.3937 69.5268L50.7214 68.9935Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M152.487 127.79L150.841 124.453L149.196 127.79L145.516 128.323L148.182 130.914L147.55 134.579L150.841 132.849L154.125 134.579L153.5 130.914L156.159 128.323L152.487 127.79Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M152.487 69.0091L150.841 65.6797L149.196 69.0091L145.516 69.5501L148.182 72.1405L147.55 75.8051L150.841 74.0757L154.125 75.8051L153.5 72.1405L156.159 69.5501L152.487 69.0091Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M100 31.2857C62.0501 31.2857 31.2857 62.0501 31.2857 100C31.2857 137.95 62.0501 168.714 100 168.714C137.95 168.714 168.714 137.95 168.714 100C168.714 62.0501 137.95 31.2857 100 31.2857ZM29 100C29 60.7878 60.7878 29 100 29C139.212 29 171 60.7878 171 100C171 139.212 139.212 171 100 171C60.7878 171 29 139.212 29 100Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
    </svg>
  );
}
