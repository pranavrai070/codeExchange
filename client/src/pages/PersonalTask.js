import React from 'react'
import CurrentDate from '../components/CurrentDate/CurrentDate'
import MyTask from '../components/Tasks/MyTask/MyTask'


const PersonalTask = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <CurrentDate/>
      <MyTask/>
    </div>
  )
}

export default PersonalTask