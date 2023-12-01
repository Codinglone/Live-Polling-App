import { useState } from 'react'
import AnonymousOne from '../components/AnonymousOne'
import AnonymousTwo from '../components/AnonymousTwo'
import AnonymousThree from '../components/AnonymousThree'
import AnonymousNavbar from '../components/AnonymousNavbar'
import AnonymousPolls from '../components/AnonymousPolls'
import AnonymousPollAnswer from '../components/AnonymousPollAnswer'
const Anonymous = () => {
  return (
    <div>
      <AnonymousNavbar />
        {/* <AnonymousOne /> */}
        {/* <AnonymousTwo /> */}
        {/* <AnonymousThree /> */}
        {/* <AnonymousPolls /> */}
        <AnonymousPollAnswer />
    </div>
  )
}

export default Anonymous