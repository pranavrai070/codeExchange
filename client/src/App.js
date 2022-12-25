import React from 'react';
import {BrowserRouter,Redirect,Switch,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Header from './components/Header/Header';
import AddTask from './pages/AddTask';
import AssignedTask from './pages/AssignedTask';
import AssignTask from './pages/AssignTask';
import PersonalTask from './pages/PersonalTask';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'

const App=()=> {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
      <BrowserRouter>
      <Container>
        <Header/>
        <Switch>
            <Route path="/" exact component= {() => (user ?<Redirect to="/tasks" /> :<Home />  )}/>
            <Route path="/auth" exact component={Auth}/>
            <Route path='/tasks' exact component={() => (!user ? <Auth /> : <AddTask/>)} />
            <Route path='/personaltask' exact component={() => (!user ? <Auth /> : <PersonalTask/>)}/>
            <Route path='/assigntask' exact component={() => (!user ? <Auth /> : <AssignTask/>)}/>
            <Route path='/assignedtask' exact component={() => (!user ? <Auth /> : <AssignedTask/>)}/>
          </Switch>
        </Container>
      </BrowserRouter>
  );
}

export default App;
