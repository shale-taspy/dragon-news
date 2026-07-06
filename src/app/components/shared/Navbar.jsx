
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between'>
      <div></div>
      <ul className='flex justify-between py-8 items-center gap-3 text-gray-700'>
        <li><NavLink href='/'>Home</NavLink></li>
        <li><NavLink href='/about'>About</NavLink></li>
        <li><NavLink href='/career'>Career</NavLink></li>
        
      </ul>
      <div className='flex justify-between items-center gap-3'>
        <Image src={avatar} alt='user-avatar' width={60} height={40}></Image>
        <button className='btn bg-amber-700 text-white'><Link href='/login'>Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;