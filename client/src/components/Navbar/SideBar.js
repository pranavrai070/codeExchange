import React from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
  return (
    <nav className='sidenav'>
      <Link to='/addtask' className='link'>Task form</Link>
      <Link to='/personaltask' className='link'>My Task</Link>
      <Link to='/assigntask' className='link'>Appoint Task</Link>
      <Link to='/assignedtask' className='link'>Appointed task</Link>
    </nav>
  )
}

export default SideBar;