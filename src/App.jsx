
import LogIn from './pages/Auth/Login'
import SignUpForm from './pages/Auth/Login'
import LandingPage from './pages/landing_page/Main'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
    </>
  )
}

export default App
