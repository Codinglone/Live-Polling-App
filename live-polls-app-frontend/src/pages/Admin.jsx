import AdminNavbar from "../components/AdminNavbar"
import AdminPolls from "../components/AdminPolls"
import AdminCreatePoll from "../components/AdminCreatePoll"
import AdminQuestionOne from "../components/AdminQuestionOne"
import AdminQuestionTwo from "../components/AdminQuestionTwo"
import AdminQuestionThree from "../components/AdminQuestionThree"
import AdminQuizResult from "../components/AdminQuizResult"
import AdminPollOne from "../components/AdminPollOne"
import AdminPollDetails from "../components/AdminPollDetails"
import { useState } from 'react'
const Admin = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showCreatePoll, setShowCreatePoll] = useState(true);
  const [question, setQuestion] = useState("");
  const [pollCode, setPollCode] = useState("");
  const [pollDetails, setPollDetails] = useState({});
  const [showPolls, setShowPolls] = useState(true);
  const [showPollDetails, setShowPollDetails] = useState(false);
  const handleAddPoll = (question, pollCode) => {
    setShowOptions(true);
    setShowCreatePoll(false);
    setQuestion(question);
    setPollCode(pollCode);
  }

  const handlePollDetails = (poll) => {
    setPollDetails(poll);
    setShowPolls(false);
    setShowPollDetails(true);
  }
  return (
    <div>
      <AdminNavbar />
      { showPolls && <AdminPolls handlePollDetails={handlePollDetails} />}
      {showPollDetails && <AdminPollDetails poll={pollDetails} />}
      {/* {showCreatePoll && <AdminCreatePoll handleAddPoll={handleAddPoll} />} */}
      {/* {showOptions && <AdminPollOne question={question} pollCode={pollCode} />} */}
      {/* <AdminQuestionTwo /> */}
      {/* <AdminQuestionThree /> */}
      {/* <AdminQuizResult /> */}
    </div>
  )
}

export default Admin