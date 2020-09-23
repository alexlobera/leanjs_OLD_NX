import React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import CreateVideoPage from './Pages/CreateVideoPage';
import UpdateVideoPage from './Pages/UpdateVideoPage';
import VideosPage from './Pages/VideosPage';
import { paths as backofficePaths } from '../../Backoffice';

const Routes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`} component={VideosPage} />
      <Route
        exact
        path={`${match.url}${backofficePaths.createVideo}`}
        component={CreateVideoPage}
      />
      <Route
        exact
        path={`${match.url}/:videoId${backofficePaths.editVideo}`}
        component={UpdateVideoPage}
      />
    </Switch>
  );
};

export default Routes;
