import React from "react";
import { Route, Switch } from "react-router";
import { useRouteMatch } from "react-router-dom";

import NewTrainingFeedbackPage from "./Pages/NewTrainingFeedbackPage";

const Routes = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route
        exact
        path={`${match.url}/:trainingInstanceId/:trainingUnitId`}
        component={NewTrainingFeedbackPage}
      />
      <Route
        exact
        path={`${match.url}/:trainingInstanceId`}
        component={NewTrainingFeedbackPage}
      />
    </Switch>
  );
} 
export default Routes;
