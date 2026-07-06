import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className='text-center py-10'>
      <Image className='mx-auto' src={logo} width={300} height={200} alt='Dragon News'></Image>
      <p className='text-base font-medium'>Journalism Without Fear or Favour</p>
      <p className='text-base font-semibold'>{format(new Date(), "EEEE dd-MM-yyyy K-m-s-aa")}</p>
      
      <h2>Header</h2>
    </div>
  );
};

export default Header;