import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import { useUser } from '@clerk/clerk-react'
import HomePage from './pages/HomePage'
import ProblemPage from './pages/ProblemPage'
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashbord'

function App() {
  // clrek give useUser hook to check weather the user is signed or not. 
  const { isSigned } = useUser()
  return (
    <>
      <Routes>
        <Route path="/" element={isSigned ? <HomePage /> : <Dashboard /> }  ></Route>
        <Route path="/dashboard" element={isSigned? <Dashboard />  : <Navigate to={"/"} />}></Route>
        <Route path="/problem-page" element={isSigned ? <ProblemPage></ProblemPage> : <Navigate to={"/"}></Navigate>}></Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App