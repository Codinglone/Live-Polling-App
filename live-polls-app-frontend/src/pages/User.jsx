import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import UserCreatePoll from "../components/UserCreatePoll";
import UserPolls from "../components/UserPolls";
import UserAnswer from "../components/UserAnswer";
import UserPollOne from "../components/UserPollOne";
import UserPollAnswer from "../components/UserPollAnswer";
import axios from "axios";
const User = ({ pollcode }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showPollOptions, setShowPollOptions] = useState(false);
  const [showPolls, setShowPolls] = useState(false);
  const [pollData, setPollData] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [pollCode, setPollCode] = useState("");
  const [question, setQuestion] = useState("");
  const [activeNavLink, setActiveNavLink] = useState("create-poll");
  const [showCreatePoll, setShowCreatePoll] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/polls`);
        if (pollcode) {
          // Find the poll with matching pollCode
          const selectedPoll = response.data.find(
            (poll) => poll.pollCode === pollCode
          );
          if (selectedPoll) {
            setPollData(selectedPoll);
            // alert(selectedPoll.pollCode);
            handlePolling(selectedPoll);
          }
        }
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    };

    fetchPolls();
    
  }, [pollCode]);

  useEffect(() => {
    setShowPollOptions(false);
    setShowOptions(false);
  }, [])

  const handlePolling = (poll) => {
    setShowPollOptions(true);
    setShowPolls(false);
    setPollData(poll);
    setShowQuiz(false);
    setShowOptions(false);
  };

  const handleAddPoll = (question, pollCode) => {
    setShowOptions(true);
    setShowCreatePoll(false);
    setQuestion(question);
    setPollCode(pollCode);
  }

  const handleNavigation = (activeLink) => {
    if (activeLink === "polls") {
      setShowPolls(true);
      setShowQuiz(false);
      setActiveNavLink("polls");
      setShowPollOptions(false);
      setShowCreatePoll(false);
    } else if (activeLink === "quiz") {
      setShowPolls(false);
      setShowQuiz(true);
      setActiveNavLink("quiz");
      setShowPollOptions(false);
      setShowCreatePoll(false);
    }
    else if (activeLink === "create-poll") {
      setShowCreatePoll(true);
      setShowPolls(false);
      setActiveNavLink("create-poll");
      setShowPollOptions(false);
      setShowQuiz(false);
    }
    
  };
  return (
    <div>
      <UserNavbar
        activeNavLink={activeNavLink}
        handleNavigation={handleNavigation}
      />
      {showCreatePoll && <UserCreatePoll  handleAddPoll={handleAddPoll} />}
      {showOptions && <UserPollOne handleNavigation={handleNavigation} question={question} pollCode={pollCode} />}
      {showPolls && <UserPolls handlePolling={handlePolling} />}
      {showPollOptions && <UserPollAnswer poll={pollData} />}
      {showQuiz && <UserAnswer />}
      {/* <UserCreatePoll /> */}
      {/* <UserPolls /> */}
      {/* <UserOne /> */}
      {/* <UserTwo /> */}
    </div>
  );
};

export default User;
