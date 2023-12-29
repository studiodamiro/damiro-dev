import React from 'react';
import PillSocial from './PillSocial';

export default function ListSocial() {
  return (
    <>
      <span className='allcap-span'>Reach me at my socials</span>
      <div className='flex flex-wrap gap-2 -ml-[1px]'>
        {/* <PillSocial social={'Facebook'} /> */}
        {/* <PillSocial social={'Linkedin'} /> */}
        <PillSocial social={'Github'} />
        <PillSocial social={'Twitter'} />
        <PillSocial social={'Instagram'} />
      </div>
    </>
  );
}
