'use client'
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const SignUpPage = () => {

  const {register, handleSubmit,formState:{errors}} = useForm()
  const handleSignup = (data) => {
    console.log(data);

  }
  return (
    <div className='container mx-auto bg-slate-200 min-h-175 min-w-188 flex justify-center items-center mt-20'>
      <div className='bg-white text-base p-4 rounded-xl h-[548px] w-[606px]'>
        <h2 className=' text-center font-medium mb-2'>Register your account</h2>
  
        <form className='space-y-4 items-center justify-center mt-12' onSubmit={handleSubmit(handleSignup)}>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input type="text" className="input w-full" placeholder="Enter your name" {...register('name', { required: "name is required please enter your name" })} />
            {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input type="text" className="input w-full" placeholder="Enter photo URL" {...register('photo', { required: "Input a photo" })} />
            {errors.photo && <p className='text-red-600'>{errors.photo.message}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input type="email" className="input w-full" placeholder="Type your email"  {...register('email')} />
            
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input w-full" placeholder="Type your password" {...register('password', { required: "password is required please enter your password" })} />
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </fieldset>
          
          <button className="btn w-full bg-slate-900 text-white">Login</button>
        </form>
        <p className='text-center mt-4'>Already have account? <Link href="/login" className='text-blue-600'>Login</Link> </p>
      </div>
    </div>
  );
};

export default SignUpPage;