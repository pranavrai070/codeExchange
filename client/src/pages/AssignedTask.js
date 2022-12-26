import React from 'react'
 
import AppointedList from '../components/Tasks/AppointedList/AppointedList'
import CurrentDate from '../components/CurrentDate/CurrentDate'
import Navbar from '../components/Navbar/SideBar'
const AssignedTask = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <CurrentDate/>
      <AppointedList/>
    </div>
  )
}

export default AssignedTask