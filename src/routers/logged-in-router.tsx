import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Header } from '../components/header/Header';
import { Mark } from '../pages/mark/Mark';
import { Users } from '../pages/users/Users';
import { Cars } from '../pages/cars/Cars';
import { CreateMark } from '../pages/CreateMark';

export const LoggedInRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/marks">
          <Mark />
        </Route>
        <Route exact path="/marks/createMark">
          <CreateMark />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/cars">
          <Cars />
        </Route>
      </Switch>
    </Router>
  );
};
