import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import toast from 'react-hot-toast'

export default function HomePage() {
  return (
    <div> <h1 className='text-red-400 bg-black '>Welcome to My Application</h1>
     <button onClick={()=>{
        toast.success("Pressed login button")
      }}> Hi there </button>
     <SignedIn>
      <SignOutButton />
     </SignedIn>
     <SignedOut>
      <SignInButton mode='modal'  className='btn btn-primary'/>
     </SignedOut>
     <UserButton />
    </div>
  )
}
