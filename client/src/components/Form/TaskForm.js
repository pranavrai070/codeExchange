import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {Form,Button,Row,Col} from 'react-bootstrap'
import { addTask } from '../../actions/tasks'
import {useDispatch} from 'react-redux'
import './taskForm.css'

const TaskForm = () => {
   
  //state declaration
  const [flag,setFlag] = useState(false)
  const [taskname,setTaskname]= useState("")
  const [to,setTo] = useState("")
  const dispatch =useDispatch();

  // const date = useSelector(state=>state.user.date)
  // const user = useSelector(state=>state.user.user)
   
  const user = JSON.parse(localStorage.getItem('profile'));
  
  
  //on ForMebutton Click
  const onForMeHandler=()=>{
    setTo(user?.result?.email);
  }

  //on For other button
  const onForOtherButton=()=>{
    setFlag(true)
  }

  const clear=()=>{
    setTo("");
    setTaskname("");
    setFlag(false);
  }

  //on task input chnage
  const onTasknameChange=(event)=>{
    setTaskname(event.target.value)
  }


  //username
  const onUsernameChange=(event)=>{
    setTo(event.target.value)
  }

  //on Form submit
  const handleSubmit= async(event)=>{
    //Api call
    event.preventDefault()
    dispatch(addTask(
      { data:taskname, 
        by:user?.result?.email,
        to:to
      }));
      console.log(user);
    clear();
  }


  return (
    <Form className='taskform' onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Task</Form.Label>
        <Col sm={12}>
        <Form.Control className='mb-3' type="text" placeholder="Enter the Task" value={taskname} onChange={onTasknameChange} />
        </Col>
        <Row>
        <Col sm={12}>
        <Button variant="outline-success" type="submit" onClick={onForMeHandler}>
        For Me
      </Button>
      </Col>
        <Col sm={12}>
        <Button variant="outline-info" type="button" className='mt-3' onClick={onForOtherButton}>
        For Other
      </Button>
      </Col>
      </Row>
      {flag&&
      <>
      <Col sm={12}>
        <Form.Control className='mt-3' type="email" placeholder="Enter the Email" value={to} onChange={onUsernameChange} />
        </Col>
        <Button variant="warning" type="submit" className='mt-3'>
        Save
      </Button>
      </>
      }
      </Form.Group>
    </Form>
  )
}

export default TaskForm