import { useTheme } from 'next-themes';

type LogoProps = {
  name?: boolean;
  color?: string;
  secColor?: string;
};

export default function SmartgridPh({ color = '#BFA016', secColor = '#0F172A', name = false }: LogoProps) {
  const { theme } = useTheme();
  const adjustedColor = theme === 'light' ? color : secColor;

  return (
    <svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M92.2768 97.3405C92.2768 84.7895 100.528 73.1494 114.472 64.5536C127.976 56.229 146.588 50.9327 167.291 50.6265C166.569 75.6403 151.01 96.8795 129.073 105.941C128.15 106.322 127.711 107.378 128.093 108.3C128.475 109.222 129.533 109.66 130.456 109.279C154.085 99.5183 170.734 76.3978 170.933 49.296C170.977 49.1403 171 48.976 171 48.8062C171 47.8087 170.19 47 169.191 47L169.132 47L169.126 47L169.117 47C147.122 47.0124 127.13 52.5055 112.572 61.4796C98.0263 70.4464 88.6597 83.0734 88.6597 97.3405C88.6597 98.338 89.4694 99.1467 90.4682 99.1467C91.4671 99.1467 92.2768 98.338 92.2768 97.3405Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M144.069 60.1603C144.813 59.4953 144.877 58.3535 144.211 57.6099C143.545 56.8663 142.402 56.8026 141.657 57.4676C133.232 64.9931 127.956 75.9425 127.956 88.1177C127.956 100.529 117.894 110.579 105.466 110.579C100.682 110.579 96.4782 108.047 94.1762 104.254L93.4967 103.134L92.2199 103.43C72.6482 107.976 50.4528 110.579 26.8085 110.579C25.8097 110.579 25 111.387 25 112.385C25 113.382 25.8097 114.191 26.8085 114.191C50.2225 114.191 72.2619 111.667 91.8149 107.23C94.862 111.451 99.8543 114.191 105.466 114.191C117.785 114.191 128.103 105.682 130.854 94.2251C133.931 92.7647 136.865 91.2838 139.642 89.6816C140.507 89.1826 140.803 88.0778 140.303 87.2141C139.803 86.3503 138.697 86.0547 137.832 86.5537C135.828 87.7102 133.724 88.809 131.513 89.8951C131.553 89.3078 131.573 88.7151 131.573 88.1177C131.573 77.0068 136.383 67.025 144.069 60.1603Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M87.0041 145.511C87.0041 146.113 87.5587 146.414 88.668 146.414H89.0297C90.1389 146.414 90.6935 146.113 90.6935 145.511V128.28C90.6935 127.677 90.1389 127.376 89.0297 127.376H88.668C87.5587 127.376 87.0041 127.677 87.0041 128.28V145.511Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M87.3658 124.848C87.6793 124.992 88.1736 125.064 88.8488 125.064C89.524 125.064 90.0063 124.992 90.2956 124.848C90.6091 124.679 90.7658 124.45 90.7658 124.161V121.813C90.7658 121.524 90.6091 121.308 90.2956 121.163C90.0063 120.994 89.524 120.91 88.8488 120.91C88.1736 120.91 87.6793 120.994 87.3658 121.163C87.0765 121.308 86.9318 121.524 86.9318 121.813V124.161C86.9318 124.45 87.0765 124.679 87.3658 124.848Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        d='M32.849 146.306C33.7412 146.546 34.7057 146.667 35.7426 146.667C37.0447 146.667 38.1901 146.414 39.1788 145.908C40.1674 145.402 40.9391 144.716 41.4937 143.849C42.0483 142.982 42.3256 141.983 42.3256 140.851C42.3256 139.647 42.0724 138.671 41.566 137.925C41.0837 137.178 40.4327 136.576 39.6128 136.118C38.8171 135.637 37.9369 135.239 36.9724 134.926C35.9114 134.565 35.1639 134.204 34.7298 133.843C34.2958 133.481 34.0788 132.976 34.0788 132.325C34.0788 131.651 34.3561 131.133 34.9107 130.772C35.4653 130.411 36.1405 130.23 36.9362 130.23C37.9007 130.23 38.6483 130.375 39.1788 130.664C39.7334 130.953 40.071 131.097 40.1915 131.097C40.3844 131.097 40.5774 130.965 40.7703 130.7C40.9632 130.411 41.132 130.098 41.2766 129.761C41.4213 129.399 41.4937 129.11 41.4937 128.894C41.4937 128.556 41.2405 128.255 40.7341 127.991C40.2277 127.726 39.5887 127.533 38.8171 127.413C38.0695 127.268 37.2979 127.196 36.5022 127.196C35.2965 127.196 34.2234 127.425 33.283 127.882C32.3667 128.316 31.6433 128.942 31.1128 129.761C30.6064 130.579 30.3532 131.531 30.3532 132.614C30.3532 133.843 30.5943 134.818 31.0766 135.541C31.5589 136.263 32.1738 136.829 32.9213 137.238C33.6688 137.624 34.4284 137.961 35.2 138.25C36.1887 138.587 36.9965 138.96 37.6234 139.37C38.2745 139.755 38.6 140.369 38.6 141.212C38.6 142.777 37.5511 143.56 35.4532 143.56C34.6816 143.56 34.0064 143.452 33.4277 143.235C32.849 143.018 32.3908 142.801 32.0532 142.585C31.7156 142.344 31.4865 142.223 31.366 142.223C31.1731 142.223 30.9681 142.368 30.7511 142.657C30.5341 142.922 30.3412 143.223 30.1724 143.56C30.0036 143.873 29.9192 144.126 29.9192 144.319C29.9192 144.656 30.1844 145.005 30.7149 145.366C31.2695 145.728 31.9809 146.041 32.849 146.306Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M48.6947 153.494C49.8762 153.831 51.2507 154 52.8181 154C54.6989 154 56.2904 153.771 57.5926 153.314C58.9188 152.856 59.9195 152.206 60.5947 151.363C61.2699 150.52 61.6075 149.521 61.6075 148.365C61.6075 147.209 61.3422 146.306 60.8117 145.655C60.3053 145.005 59.6061 144.511 58.7139 144.174C57.8458 143.837 56.8933 143.596 55.8564 143.452C54.916 143.331 54.0117 143.223 53.1436 143.127C52.2996 143.006 51.6004 142.801 51.0457 142.512C50.4911 142.223 50.2138 141.766 50.2138 141.14C50.2138 140.465 50.455 139.984 50.9372 139.695C51.4195 139.382 52.1911 139.225 53.2521 139.225C54.7713 139.225 56.0614 138.984 57.1224 138.503C58.1834 137.997 59.0032 137.299 59.5819 136.407C60.1607 135.516 60.45 134.469 60.45 133.265C60.45 132.711 60.3656 132.193 60.1968 131.711C60.0521 131.23 59.7869 130.76 59.4011 130.302L59.4373 130.23C59.7748 130.302 60.2089 130.363 60.7394 130.411C61.2699 130.459 61.6557 130.483 61.8968 130.483C62.4273 130.483 62.6926 130.062 62.6926 129.219V128.749C62.6926 127.882 62.4153 127.449 61.8607 127.449H55.4947C55.133 127.376 54.7592 127.316 54.3734 127.268C53.9876 127.22 53.5897 127.196 53.1798 127.196C51.6606 127.196 50.3464 127.449 49.2372 127.954C48.1521 128.46 47.3081 129.159 46.7053 130.05C46.1266 130.941 45.8372 132.012 45.8372 133.265C45.8372 134.397 46.1025 135.408 46.633 136.299C47.1635 137.166 47.923 137.852 48.9117 138.358C48.2606 138.768 47.7542 139.249 47.3925 139.803C47.0549 140.357 46.8862 141.007 46.8862 141.754C46.8862 142.404 47.0067 142.97 47.2479 143.452C47.5131 143.933 47.8748 144.331 48.333 144.644L48.2968 144.752C47.3564 145.138 46.5847 145.716 45.9819 146.486C45.3791 147.257 45.0776 148.16 45.0776 149.195C45.0776 150.327 45.3911 151.243 46.0181 151.941C46.645 152.663 47.5372 153.181 48.6947 153.494ZM56.8692 150.388C56.0734 150.797 54.8557 151.002 53.216 151.002C51.5762 151.002 50.3947 150.797 49.6713 150.388C48.972 150.002 48.6223 149.388 48.6223 148.545C48.6223 147.871 48.8152 147.305 49.2011 146.847C49.611 146.414 50.1053 146.065 50.684 145.8C51.4798 145.992 52.2996 146.137 53.1436 146.233C54.0117 146.306 54.8195 146.402 55.567 146.522C56.3145 146.667 56.9174 146.884 57.3755 147.173C57.8337 147.462 58.0628 147.907 58.0628 148.509C58.0628 149.352 57.6649 149.978 56.8692 150.388ZM55.8202 135.649C55.0727 136.106 54.1805 136.335 53.1436 136.335C52.1067 136.335 51.2145 136.106 50.467 135.649C49.7436 135.191 49.3819 134.385 49.3819 133.229C49.3819 132.073 49.7436 131.266 50.467 130.808C51.2145 130.351 52.1067 130.122 53.1436 130.122C54.1805 130.122 55.0727 130.351 55.8202 130.808C56.5677 131.266 56.9415 132.073 56.9415 133.229C56.9415 134.385 56.5677 135.191 55.8202 135.649Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M67.8974 153.819C66.7882 153.819 66.2336 153.53 66.2336 152.952V133.192C66.2336 132.133 66.1974 131.278 66.1251 130.628C66.0528 129.977 65.9804 129.484 65.9081 129.147C65.8357 128.809 65.7996 128.593 65.7996 128.496C65.7996 128.304 65.896 128.147 66.0889 128.027C66.3059 127.906 66.5591 127.81 66.8485 127.738C67.1379 127.665 67.4272 127.617 67.7166 127.593C68.0059 127.569 68.223 127.557 68.3676 127.557C68.6811 127.557 68.9223 127.69 69.0911 127.954C69.2599 128.219 69.3804 128.544 69.4528 128.93C69.5492 129.291 69.6336 129.616 69.7059 129.905C70.4535 129.038 71.2854 128.376 72.2017 127.918C73.118 127.437 74.1067 127.196 75.1677 127.196C76.6145 127.196 77.8563 127.605 78.8932 128.424C79.9301 129.243 80.7258 130.387 81.2805 131.856C81.8351 133.301 82.1124 134.987 82.1124 136.913C82.1124 139.996 81.4251 142.38 80.0507 144.066C78.7003 145.752 76.9159 146.595 74.6975 146.595C73.6606 146.595 72.7563 146.438 71.9847 146.125C71.2372 145.788 70.562 145.39 69.9591 144.933V152.952C69.9591 153.53 69.4045 153.819 68.2953 153.819H67.8974ZM73.8655 143.452C75.3365 143.452 76.4336 142.91 77.157 141.826C77.9046 140.718 78.2783 139.141 78.2783 137.094C78.2783 134.926 77.9287 133.265 77.2294 132.109C76.5542 130.929 75.5776 130.339 74.2996 130.339C73.5279 130.339 72.7684 130.555 72.0209 130.989C71.2733 131.422 70.5861 132 69.9591 132.723V142.115C70.5138 142.525 71.1166 142.85 71.7677 143.09C72.4187 143.331 73.118 143.452 73.8655 143.452Z'
        fill={adjustedColor}
        className='transition-colors duration-700 ease-out'
      />
    </svg>
  );
}