import React from 'react'
 
import Appointed from '../components/Tasks/Appointed/Appointed'
import CurrentDate from '../components/CurrentDate/CurrentDate'
import Navbar from '../components/Navbar/SideBar'
const AssignedTask = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <CurrentDate/>
      <Appointed/>
    </div>
  )
}

export default AssignedTask