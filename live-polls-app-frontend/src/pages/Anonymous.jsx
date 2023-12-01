import React from 'react'
import AnonymousOne from '../components/AnonymousOne'
import AnonymousTwo from '../components/AnonymousTwo'
import AnonymousThree from '../components/AnonymousThree'
import AnonymousNavbar from '../components/AnonymousNavbar'
import AnonymousPolls from '../components/AnonymousPolls'
const Anonymous = () => {
  return (
    <div>
      <AnonymousNavbar />
        {/* <AnonymousOne /> */}
        {/* <AnonymousTwo /> */}
        {/* <AnonymousThree /> */}
        <AnonymousPolls />
    </div>
  )
}

export default Anonymous