import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@leanjs/ui-core';

import theme from '../App/Config/theme';
// import LoginUM from './Pages/LoginUM';
import LoginRGA from './Pages/LoginRGA';

const Routes = () => {
  const match = useRouteMatch();

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {/* <Route exact path={`${match.url}`} component={LoginUM} /> */}
        {/* <Route exact path={`${match.url}/reactgrapqhlacademy`} component={LoginRGA} /> */}
        <Route exact path={`${match.url}/reactgraphqlacademy`} component={LoginRGA} />
      </Switch>
    </ThemeProvider>
  );
};

export default Routes;
