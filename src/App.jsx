
import LogIn from './pages/Auth/Login'
import SignUpForm from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import LandingPage from './pages/landing_page/Main'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default App
