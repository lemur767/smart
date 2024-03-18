"use client";

import Robot from '@/components/Spline'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
        <>        
        <div className="sign-up-main">
        <SignIn />
        </div>
        <div className="threed-asset">
          <Robot/>
        </div>
        </>
  )
}

export default SignInPage