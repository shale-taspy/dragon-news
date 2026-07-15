'use client'
import { authClient } from '@/app/lib/auth-client';
import { email } from 'better-auth';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';


const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleLogin = async(data) => {
    console.log(data);
    const { data:res, error } = await authClient.signIn.email({
        email: data.email, // required
        password: data.password, // required
        rememberMe: true,
      callbackURL: "/",
       
    });
    console.log(res,error);



  }
  return (
    <div className='container mx-auto bg-slate-200 min-h-175 min-w-188 flex justify-center items-center mt-20'>
      <div className='bg-white text-base p-4 rounded-xl h-[548px] w-[606px]'>
        <h2 className=' text-center font-medium mb-2'>Login your account</h2>
  
        <form className='space-y-4 items-center justify-center mt-12' onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input type="email" className="input w-full" placeholder="Type your email"  {...register('email')} />
            
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input type={isShowPassword ? "text" : "password"} className="input w-full" placeholder="Type your password" {...register('password', { required: "password is required please enter your password" })} />
            <span className='absolute right-3 top-4 text-base' onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash> }</span>
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </fieldset>
          <button className="btn w-full bg-slate-900 text-white">Login</button>
        </form>
        <p className='text-center mt-4'>Don’t Have An Account ? <Link href="/signup" className='text-blue-600'>Signup</Link> </p>
      </div>
    </div>
  );
};

export default LoginPage;