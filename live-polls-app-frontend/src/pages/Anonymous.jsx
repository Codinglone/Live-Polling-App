import { useState } from 'react'
import AnonymousOne from '../components/AnonymousOne'
import AnonymousThree from '../components/AnonymousThree'
import AnonymousNavbar from '../components/AnonymousNavbar'
import AnonymousPolls from '../components/AnonymousPolls'
import AnonymousPollAnswer from '../components/AnonymousPollAnswer'
import AnonymousAnswer from '../components/AnonymousAnswer'
const Anonymous = () => {
  const [showPollOptions, setShowPollOptions] = useState(false);
  const [showPolls, setShowPolls] = useState(true)
  const [pollData, setPollData] = useState({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("polls");
  const handlePolling = (poll) => {
    setShowPollOptions(true);
    setShowPolls(false);
    setPollData(poll);
    console.log(poll);
    setShowQuiz(false);
  }

  const handleNavigation = (activeLink) => {
    if(activeLink === 'polls'){
      setShowPolls(true);
      setShowQuiz(false);
      setActiveNavLink('polls');
      setShowPollOptions(false);
    } else if(activeLink === 'quiz'){
      setShowQuiz(true);
      setShowPolls(false);
      setActiveNavLink('quiz');
      setShowPollOptions(false);
    }
  }


  return (
    <div>
      <AnonymousNavbar activeNavLink={activeNavLink} handleNavigation={handleNavigation} />
        {/* <AnonymousOne /> */}
        {showQuiz && <AnonymousAnswer />}
        {/* <AnonymousThree /> */}
        { showPolls && <AnonymousPolls handlePolling={handlePolling} />}
        {showPollOptions && <AnonymousPollAnswer poll={pollData} /> }
    </div>
  )
}

export default Anonymous