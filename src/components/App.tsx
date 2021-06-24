import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { Router } from 'react-router-dom';
import { isLoggedInVar } from '../apollo';
import { LoggedInRouter } from '../routers/logged-in-router';
import { LoggedOutRouter } from '../routers/logged-out-router';
import { Header } from './header/Header';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return <>{!isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}</>;
}

export default App;
