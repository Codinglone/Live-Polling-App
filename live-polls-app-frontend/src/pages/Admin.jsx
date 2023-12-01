import AdminNavbar from "../components/AdminNavbar"
import AdminPolls from "../components/AdminPolls"
import AdminCreatePoll from "../components/AdminCreatePoll"
import AdminQuestionOne from "../components/AdminQuestionOne"
import AdminQuestionTwo from "../components/AdminQuestionTwo"
import AdminQuestionThree from "../components/AdminQuestionThree"
const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      {/* <AdminPolls /> */}
      {/* <AdminCreatePoll /> */}
      {/* <AdminQuestionOne /> */}
      {/* <AdminQuestionTwo /> */}
      <AdminQuestionThree />
    </div>
  )
}

export default Admin