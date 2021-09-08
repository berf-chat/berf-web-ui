import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';

import '../assets/scss/themes.scss';

export default function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
