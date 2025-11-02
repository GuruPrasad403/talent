import './App.css'
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

/**
 * Root React component that renders the app header and Clerk authentication UI.
 *
 * Renders a welcome heading, a SignOutButton when a user is signed in, a SignInButton (modal) when signed out, and a persistent UserButton.
 * @returns {JSX.Element} The application's top-level UI fragment.
 */
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