import { useState, useEffect } from "react";
import AnonymousNavbar from "../components/AnonymousNavbar";
import AnonymousPolls from "../components/AnonymousPolls";
import AnonymousPollAnswer from "../components/AnonymousPollAnswer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Anonymous = ({ pollCode }) => {
  const [showPollOptions, setShowPollOptions] = useState(false);
  const [showPolls, setShowPolls] = useState(true);
  const [pollData, setPollData] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("polls");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/polls`);
        if (pollCode) {
          const selectedPoll = response.data.find(
            (poll) => poll.pollCode === pollCode
          );
          if (selectedPoll) {
            setPollData(selectedPoll);
            handlePolling(selectedPoll);
            
          }
        }
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    };

    fetchPolls();
  }, [pollCode]);

  const handlePolling = (poll) => {
    setShowPollOptions(true);
    setShowPolls(false);
    setPollData(poll);
    setShowQuiz(false);
  };

  const handleNavigation = (activeLink) => {
    if (activeLink === "polls") {
      setShowPolls(true);
      setShowQuiz(false);
      setActiveNavLink("polls");
      setShowPollOptions(false);
   } 
  };

  return (
    <div>
      <AnonymousNavbar
        activeNavLink={activeNavLink}
        handleNavigation={handleNavigation}
      />
      {showPolls && <AnonymousPolls handlePolling={handlePolling} />}
      {showPollOptions && <AnonymousPollAnswer poll={pollData} />}
    </div>
  );
};

export default Anonymous;

