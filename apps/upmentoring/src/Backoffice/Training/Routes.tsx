import React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import TrainingDetailPage from './Pages/TrainingDetailPage';
import TrainingPage from './Pages/TrainingPage';
import CreateTrainingPage from './Pages/CreateTrainingPage';
import UpdateTrainingPage from './Pages/UpdateTrainingPage';
import TrainingInstanceDetailPage from './TrainingInstance/Pages/TrainingInstanceDetailPage';
import CreateTrainingInstancePage from './TrainingInstance/Pages/CreateTrainingInstancePage';
import UpdateTrainingInstancePage from './TrainingInstance/Pages/UpdateTrainingInstancePage';
import TrainingCreateTrainingInstancePage from './TrainingInstance/Pages/TrainingCreateTrainingInstancePage';
import TrainingUnitsPage from './TrainingUnit/Pages/TrainingUnitsPage';
import CreateTrainingUnitPage from './TrainingUnit/Pages/CreateTrainingUnitPage';
import UpdateTrainingUnitPage from './TrainingUnit/Pages/UpdateTrainingUnitPage';
import { paths as backofficePaths } from '../../Backoffice';

const Routes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={TrainingPage} />
      <Route
        exact
        path={`${match.url}${backofficePaths.createTraining}`}
        component={CreateTrainingPage}
      />
      <Route
        path={`${match.url}${backofficePaths.createInstance}`}
        component={TrainingCreateTrainingInstancePage}
      />
      <Route
        path={`${match.url}${backofficePaths.trainingUnit}/:unitId`}
        component={UpdateTrainingUnitPage}
      />
      <Route
        exact
        path={`${match.url}/:trainingId`}
        component={TrainingDetailPage}
      />
      {/* <Route
        path={`${match.url}/instances${backofficePaths.createInstance}`}
        component={CreateTrainingInstancePage}
      /> */}
      <Route
        exact
        path={`${match.url}/:trainingId${backofficePaths.editTraining}`}
        component={UpdateTrainingPage}
      />
      <Route
        exact
        path={`${match.url}/:trainingId${backofficePaths.trainingUnit}`}
        component={TrainingUnitsPage}
      />{' '}
      <Route
        exact
        path={`${match.url}/:trainingId${backofficePaths.trainingUnit}${backofficePaths.createTrainingUnit}`}
        component={CreateTrainingUnitPage}
      />
      <Route
        exact
        path={`${match.url}/:trainingId${backofficePaths.createInstance}`}
        component={CreateTrainingInstancePage}
      />
      <Route
        exact
        path={`${match.url}/instances/:instanceId${backofficePaths.editInstance}`}
        component={UpdateTrainingInstancePage}
      />
      <Route
        path={`${match.url}/instances/:instanceId`}
        component={TrainingInstanceDetailPage}
      />
    </Switch>
  );
};

export default Routes;
