import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';

import Login from './Pages/Login';

const Routes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`} component={Login} />
    </Switch>
  );
};

export default Routes;
