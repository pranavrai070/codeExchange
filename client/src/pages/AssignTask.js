import React from 'react'

import AppointList from  '../components/Tasks/AppointList/AppointList'
import CurrentDate from '../components/CurrentDate/CurrentDate'
import Navbar from '../components/Navbar/SideBar'

const AssignTask = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <CurrentDate/>
      <AppointList/>
    </div>
  )
}

export default AssignTask