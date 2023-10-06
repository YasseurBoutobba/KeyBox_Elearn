
import LogIn from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Profile from './pages/Profiles/ProfileLayout'
import LandingPage from './pages/landing_page/Main'
import { Route, Routes } from "react-router-dom"
import {User } from './pages/Profiles/User'
import { LeaderBoard } from './pages/Profiles/LeaderBoard'
function App() {

  return (
    <>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/main' element={<Profile />} >
        <Route index element={<User/>} />
        <Route path={'leader-bord'} element={<LeaderBoard/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
