'use client';
import { FaGithub, FaGoogle } from "react-icons/fa";
import React from 'react';

const RightSide = () => {
  return (
    <div className="">
      <h2>Login With</h2>
      <div className="flex flex-col gap-2 mt-4">
        <button className='btn btn-primary'><FaGoogle />Login with Google</button>
      <button className="btn btn-accent"><FaGithub />Login with GitHub</button>
      </div>
    </div>
  );
};

export default RightSide;