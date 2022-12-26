import React from 'react'
import CurrentDate from '../components/CurrentDate/CurrentDate'
import MyTaskList from '../components/Tasks/MyTaskList/MyTaskList'


const PersonalTask = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <CurrentDate/>
      <MyTaskList/>
    </div>
  )
}

export default PersonalTask