import React from 'react'

import Appoint from  '../components/Tasks/Appoint/Appoint'
import CurrentDate from '../components/CurrentDate/CurrentDate'
import Navbar from '../components/Navbar/SideBar'

const AssignTask = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <CurrentDate/>
      <Appoint/>
    </div>
  )
}

export default AssignTask