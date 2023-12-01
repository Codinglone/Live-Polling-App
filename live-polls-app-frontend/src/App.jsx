import { Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Admin from "./pages/Admin"
import User from "./pages/User"
import Anonymous from "./pages/Anonymous"
function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/anonymous" element={<Anonymous />} />
        <Route path="/user" element={<User />} />
       </Routes>
    </>
  )
}

export default App
