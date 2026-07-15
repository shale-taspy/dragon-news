'use client';
import { FaGithub, FaGoogle } from "react-icons/fa";
import React from 'react';
import { authClient } from "@/app/lib/auth-client";

const RightSide = () => {
  // 1. Google Auth Function (Closed properly)
    const handleGoogleSignin = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
      console.log(data);
    };
  
    // 2. GitHub Auth Function (Separated outside of Google)
    const handleGitHubSignin = async () => {
      const data = await authClient.signIn.social({
        provider: "github",
      });
      console.log(data);
    };
  return (
    <div className="">
      <h2>Login With</h2>
      <div className="flex flex-col gap-2 mt-4">
        <button className='btn btn-primary' onClick={handleGoogleSignin} ><FaGoogle />Login with Google</button>
      <button className="btn btn-accent" onClick={handleGitHubSignin}><FaGithub />Login with GitHub</button>
      </div>
    </div>
  );
};

export default RightSide;