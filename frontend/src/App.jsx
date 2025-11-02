import './App.css'
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
     <h1>Welcome to My Application</h1>
     <SignedIn>
      <SignOutButton />
     </SignedIn>
     <SignedOut>
      <SignInButton mode='modal'/>
     </SignedOut>
     <UserButton />
    </>
  )
}

export default App
