'use client'
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/app/lib/auth-client';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user
  console.log(user, "User");

  return (
    <div className='container mx-auto flex justify-between'>
      <div></div>
      <ul className='flex justify-between py-8 items-center gap-3 text-gray-700'>
        <li><NavLink href='/'>Home</NavLink></li>
        <li><NavLink href='/about'>About</NavLink></li>
        <li><NavLink href='/career'>Career</NavLink></li>
      </ul>

      {isPending ? (<span className="loading loading-infinity loading-lg"></span>)
        :
        user ? (
        <div className='flex justify-between items-center gap-3'>
          <h2>Hello, {user.name}</h2>
          <Image src={user?.image || avatar} alt='user-avatar' width={60} height={40} className="rounded-full" />
          <button onClick={async()=>{await authClient.signOut();}}  className='btn bg-amber-700 text-white'>Logout</button>
        </div>
      ) : (
        <div className='flex justify-between items-center gap-3'>
          <Image src={avatar} alt='user-avatar' width={60} height={40} />
          <button className='btn bg-amber-700 text-white'>
            <Link href='/login'>Login</Link>
          </button>
        </div>
      )}
    </div> /* 👈 Added closing div */
  );       /* 👈 Added closing parenthesis and semicolon */
};

export default Navbar;