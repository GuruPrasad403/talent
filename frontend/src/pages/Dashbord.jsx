import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import Nav from '../components/Nav'

function Dashbord() {
  return (
    <div className="max-w-[1440px] mx-auto my-0 p-0">
      <Nav />
        <SignedIn>
            <SignOutButton></SignOutButton>
        </SignedIn>
        <SignedOut>
            <SignInButton></SignInButton>
        </SignedOut>
    <UserButton />
    </div>
  )
}

export default Dashbord