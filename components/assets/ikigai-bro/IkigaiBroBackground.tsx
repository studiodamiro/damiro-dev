export default function IkigaiBroBackground() {
  return (
    <div className='z-[-1] fixed w-screen min-h-screen top-0 left-0 overflow-hidden'>
      <div className='absolute bottom-0 -left-4 lg:left-[100%] translate-x-0 lg:translate-x-[-97%] rotate-180 lg:rotate-0 h-1/3 lg:h-screen'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 44 100'
          fill='none'
          className='w-auto'
        >
          <path fillRule='evenodd' clipRule='evenodd' d='M0 0L43 100V0H0Z' fill={'#F2CA15'} fillOpacity='0.3' />
        </svg>
      </div>
      <div className='absolute -bottom-4 right-0 w-full lg:w-1/2 h-auto'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 100 44'
          fill='none'
        >
          <path d='M100.637 0.363037L0.636963 43.6369L100.637 43.6369V0.363037Z' fill={'#70B0D8'} fillOpacity='0.3' />
        </svg>
      </div>
    </div>
  );
}
