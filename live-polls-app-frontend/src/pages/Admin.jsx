import AdminNavbar from "../components/AdminNavbar"
import AdminPolls from "../components/AdminPolls"
import AdminCreatePoll from "../components/AdminCreatePoll"
import AdminQuestionOne from "../components/AdminQuestionOne"
import AdminQuestionTwo from "../components/AdminQuestionTwo"
// import AdminQuestionThree from "../components/AdminQuestionThree"
import AdminQuizResult from "../components/AdminQuizResult"
import AdminPollOne from "../components/AdminPollOne"
import AdminPollDetails from "../components/AdminPollDetails"
import { useState } from 'react'
const Admin = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showCreatePoll, setShowCreatePoll] = useState(false);
  const [question, setQuestion] = useState("");
  const [pollCode, setPollCode] = useState("");
  const [pollDetails, setPollDetails] = useState({});
  const [showPolls, setShowPolls] = useState(true);
  const [showPollDetails, setShowPollDetails] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [showAddChoices, setShowAddChoices] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("home");

  const handleAddQuestion = (question) => {
    setQuestion(question);
  }

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

  const handleNavigation = (activeLink) => {
    if(activeLink === "home") {
      setShowPolls(true);
      setShowPollDetails(false);
      setShowCreatePoll(false);
      setShowOptions(false);
      setShowQuestion(false);
      setShowQuizResult(false);
      setShowAddChoices(false);
      setActiveNavLink("home");

    }

    else if(activeLink == "create-polls") {
      setShowPolls(false);
      setShowPollDetails(false);
      setShowCreatePoll(true);
      setShowOptions(false);
      setShowQuestion(false);
      setShowQuizResult(false);
      setShowAddChoices(false);
      setActiveNavLink("create-polls");
    }

    else if(activeLink == "create-quiz") {
      setShowPolls(false);
      setShowPollDetails(false);
      setShowCreatePoll(false);
      setShowOptions(false);
      setShowQuestion(true);
      setShowQuizResult(false);
      setActiveNavLink("create-quiz");
      setShowAddChoices(false);
    }
    
    else if(activeLink == "quiz-results") {
      setShowPolls(false);
      setShowPollDetails(false);
      setShowCreatePoll(false);
      setShowOptions(false);
      setShowQuestion(false);
      setShowQuizResult(true);
      setActiveNavLink("quiz-results");
      setShowAddChoices(false);
    }
    else if(activeLink == "add-choices") {
      setShowPolls(false);
      setShowPollDetails(false);
      setShowCreatePoll(false);
      setShowOptions(false);
      setShowQuestion(false);
      setShowQuizResult(false);
      setShowAddChoices(true);
      setActiveNavLink("create-quiz");
    
    }
  }
  return (
    <div>
      <AdminNavbar activeNavLink={activeNavLink} handleNavigation={handleNavigation} />
      { showPolls && <AdminPolls handlePollDetails={handlePollDetails} />}
      {showPollDetails && <AdminPollDetails poll={pollDetails} />}
      {showCreatePoll && <AdminCreatePoll  handleAddPoll={handleAddPoll} />}
      {showOptions && <AdminPollOne handleNavigation={handleNavigation} question={question} pollCode={pollCode} />}
      {showQuestion && <AdminQuestionOne handleAddQuestion={handleAddQuestion}  handleNavigation={handleNavigation} />}
      {showAddChoices && <AdminQuestionTwo  question={question} />}
      { showQuizResult && <AdminQuizResult />}
    </div>
  )
}

export default Admin