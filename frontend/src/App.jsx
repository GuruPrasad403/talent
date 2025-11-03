import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import HomePage from './pages/HomePage'
import ProblemPage from './pages/ProblemPage'
import { Toaster } from 'react-hot-toast'
import Dashbord from './pages/Dashbord.jsx'
/**
 * Root React component that renders the app header and Clerk authentication UI.
 *
 * Renders a welcome heading, a SignOutButton when a user is signed in, a SignInButton (modal) when signed out, and a persistent UserButton.
 * @returns {JSX.Element} The application's top-level UI fragment.
 */
function App() {
// clrek give useUser hook to check weather the user is signed or not. 
const {isSigned} = useUser()
  return (
    <>
      <Routes>
        <Route path ="/" element={isSigned ? <HomePage></HomePage> : <Navigate to={"/dashboard"} />}  ></Route>
        <Route path ="/dashbord" element={isSigned ? <Dashbord></Dashbord> : <Navigate to={"/"}></Navigate>}></Route>
        <Route path ="/problem-page" element={isSigned ? <ProblemPage></ProblemPage> : <Navigate to={"/"}></Navigate>}></Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App