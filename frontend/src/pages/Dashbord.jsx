import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

function Dashbord() {
  return (
    <div>Dashbord
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