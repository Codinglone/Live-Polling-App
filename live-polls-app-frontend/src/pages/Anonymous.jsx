import { useState } from 'react'
import AnonymousOne from '../components/AnonymousOne'
import AnonymousTwo from '../components/AnonymousTwo'
import AnonymousThree from '../components/AnonymousThree'
import AnonymousNavbar from '../components/AnonymousNavbar'
import AnonymousPolls from '../components/AnonymousPolls'
import AnonymousPollAnswer from '../components/AnonymousPollAnswer'
const Anonymous = () => {
  const [showPollOptions, setShowPollOptions] = useState(false);
  const [showPolls, setShowPolls] = useState(true)
  const [pollData, setPollData] = useState({});
  const handlePolling = (poll) => {
    setShowPollOptions(true);
    setShowPolls(false);
    setPollData(poll);
    console.log(poll)
  }


  return (
    <div>
      <AnonymousNavbar />
        {/* <AnonymousOne /> */}
        {/* <AnonymousTwo /> */}
        {/* <AnonymousThree /> */}
        { showPolls && <AnonymousPolls handlePolling={handlePolling} />}
        {showPollOptions && <AnonymousPollAnswer poll={pollData} /> }
    </div>
  )
}

export default Anonymous