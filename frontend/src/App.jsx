import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import HomePage from './pages/HomePage'
import ProblemPage from './pages/ProblemPage'
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashbord'

function App() {
  // Clerk provides the useUser hook to check if the user is signed in
  const { isSignedIn } = useUser()

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isSignedIn ? <Navigate to="/dashboard" /> : <HomePage />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/problem-page"
          element={isSignedIn ? <ProblemPage /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
