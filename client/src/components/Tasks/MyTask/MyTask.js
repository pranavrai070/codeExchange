import React from 'react'
import './myTask.css' 
import { useSelector } from 'react-redux'
import TaskList from '../../TaskList/TaskList'
import {useDispatch} from 'react-redux'
import { changeTab } from '../../../actions/tasks'


const MyTask = () => {

  //const tasklist = useSelector(state=>state.task)
  //const task = useSelector(state=>state.task)

  const currentTab =useSelector(state=>state.currentTab)
  const dispatch = useDispatch()

  
  
  const onActive=()=>{
    dispatch(changeTab("ACTIVE"))
  }

  const onPending=()=>{
    dispatch(changeTab("PENDING"))
  }

  const onDone=()=>{
    dispatch(changeTab("DONE"))
  }

  return (
    <>
    <TaskList/>
    </>
  )
}

export default MyTask