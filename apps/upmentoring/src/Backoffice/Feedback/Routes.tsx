import React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import FeedbackPage from './Pages/FeedbackPage';
import FeedbackDetailPage from './Pages/FeedbackDetailPage';

const Routes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={FeedbackPage} />
      <Route exact path={`${match.url}/:id`} component={FeedbackDetailPage} />
    </Switch>
  );
};

export default Routes;
