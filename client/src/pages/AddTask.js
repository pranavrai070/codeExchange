import React from 'react'
import CurrentDate from '../components/CurrentDate/CurrentDate'
import Navbar from '../components/Navbar/SideBar'
import TaskForm from '../components/Form/TaskForm'

const AddTask = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <CurrentDate/>
      <TaskForm/>
    </div>
  )
}

export default AddTask