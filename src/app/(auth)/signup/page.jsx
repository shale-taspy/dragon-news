'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from "@/app/lib/auth-client";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const SignUpPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleSignup = async(data) => {
    console.log(data);
    const {name,email,photo,password} = data
    const {data:res,error} = await authClient.signUp.email({
          name: name, 
          email: email, 
          password: password, 
          image: photo,
          callbackURL: "/",
    })
    console.log(res, error);
    if (error) {
      alert(error.message)
    }
    if (res) {
      alert("SignUp SuccessFull")
    }

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

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input type={isShowPassword ? "text" : "password"} className="input w-full" placeholder="Type your password" {...register('password', { required: "password is required please enter your password" })} />
            <span className='absolute right-3 top-4 text-base' onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword?<FaEye></FaEye>:<FaEyeSlash></FaEyeSlash> }</span>
            {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </fieldset>
          
          <button className="btn w-full bg-slate-900 text-white" >SignUp</button>
        </form>
        <p className='text-center mt-4'>Already have account? <Link href="/login" className='text-blue-600'>Login</Link> </p>
      </div>
    </div>
  );
};

export default SignUpPage;