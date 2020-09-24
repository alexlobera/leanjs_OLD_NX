import React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import EventsPage from './Pages/EventsPage';
import CreateEventPage from './Pages/CreateEventPage';
import UpdateEventPage from './Pages/UpdateEventPage';
import EventDetailPage from './Pages/EventDetailPage';
import { paths as backofficePaths } from '../../Backoffice';

const Routes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`} component={EventsPage} />
      <Route
        exact
        path={`${match.url}${backofficePaths.createEvent}`}
        component={CreateEventPage}
      />
      <Route exact path={`${match.url}/:eventId`} component={EventDetailPage} />
      <Route
        exact
        path={`${match.url}/:eventId${backofficePaths.editEvent}`}
        component={UpdateEventPage}
      />
    </Switch>
  );
};

export default Routes;
