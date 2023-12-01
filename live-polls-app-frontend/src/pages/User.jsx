import React from 'react'
import UserNavbar from '../components/UserNavbar'
import UserCreatePoll from '../components/UserCreatePoll'
import UserPolls from '../components/UserPolls'
import UserOne from '../components/UserOne'
import UserTwo from '../components/UserTwo'
const User = () => {
  return (
    <div>
      <UserNavbar />
      {/* <UserCreatePoll /> */}
      {/* <UserPolls /> */}
      {/* <UserOne /> */}
      <UserTwo />
    </div>
  )
}

export default User