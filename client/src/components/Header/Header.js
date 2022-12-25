import React, { useState, useEffect } from 'react';

import {Navbar,Container,Button,Nav} from 'react-bootstrap'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import mmLogo from '../../images/logoMM.png';
import * as actionType from '../../constants/actionTypes';
import './header.css'


const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();


  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
      <Navbar bg="light" variant="light" className='mt-4'>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={mmLogo}
              width="60"
              height="60"
              className="d-inline-block"
            />{' '}
            Todo List MetaMix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div>
            {user?.result?(
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav variant='pills' className="me-auto" defaultActiveKey="#home">
                <Nav.Item>
                <Nav.Link href="#home">Task Form</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link href="#personal">Personal Task</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link href="#Taskforme">Tasks for Me</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link href="#taskforothers">Tasks for Other</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
            ):(null)}
          </div>
          <div>
            {user?.result?(
              <div>
             <Button variant="danger"
             onClick={logout}>Logout</Button>
             </div>
            ):(
            <Button component={Link} to="/auth" variant="success" >Sign In</Button>
            )}
          </div>
        </Container>
      </Navbar>
   </>
  );
};

export default Header;