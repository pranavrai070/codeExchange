import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dateTask } from '../../actions/tasks'
import './currentDate.css'

const CurrentDate = () => {
  const [currentDates,setCurrentDates] = useState(new Date().toDateString())  
  const dispatch = useDispatch()

  const datePickHandler=(event)=>{
      setCurrentDates(event.target.value)
      dispatch(dateTask(currentDates))
  }
  return (

   
    <div className="date">
      <h1>{currentDates}</h1>
      <input type='date' onChange={datePickHandler}/>
    </div>
  )
}

export default CurrentDate
