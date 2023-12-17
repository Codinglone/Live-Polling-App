import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Admin from "./pages/Admin"
import User from "./pages/User"
import Anonymous from "./pages/Anonymous"
import NotFound from "./components/NotFound"
function App() {
  const [pollCode, setPollCode] = useState("")

  const handleSelectPoll = (pollCode) => {
    setPollCode(pollCode);
  } 

  return (
    <>
       <Routes>
        <Route path="/" element={<SignIn handleSelectPoll={handleSelectPoll} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/anonymous" element={<Anonymous pollCode={pollCode} />} />
        <Route path="/user" element={<User pollcode={pollCode} />} />
        <Route path="/*" element={<NotFound />} />
       </Routes>
    </>
  )
}

export default App
