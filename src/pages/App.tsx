import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './Login';

import '../assets/scss/themes.scss';

require('dotenv').config();

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );
}
