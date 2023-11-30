import AdminNavbar from "../components/AdminNavbar"
import AdminPolls from "../components/AdminPolls"
import AdminCreatePoll from "../components/AdminCreatePoll"
const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      {/* <AdminPolls /> */}
      <AdminCreatePoll />
    </div>
  )
}

export default Admin