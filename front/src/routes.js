// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App  from './components/App';
import Home from './components/Home';
import Window from './components/Window';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" exact component={Window} />
      <Route component={Page404} />
    </Switch>
  </App>


export default AppRoutes;
