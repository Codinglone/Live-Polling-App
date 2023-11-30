import { Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<SignIn />} />
       </Routes>
    </>
  )
}

export default App
