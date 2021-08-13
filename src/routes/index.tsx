import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/favoritos" component={Favorites} />
  </Switch>
);

export default Routes;
