import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './Login';

import '../assets/scss/themes.scss';
//const Dashboard = React.lazy(() => import('../pages/dashboard/index'));



export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      {/* <Route exact path="/" component={Dashboard} /> */}
    </Switch>
  );
}
