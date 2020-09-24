import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PublicRoutes from '../../Public/Routes';
import Backoffice from '../../Backoffice';
import AuthRoutes from '../../Auth/Routes';
import '../../App/reset.css';
import { useMagic } from '../../Auth/Components/MagicProvider';

export const paths = {
  auth: '/login',
  backoffice: '/backoffice',
};

const App = () => {
  const { loading, loggedIn } = useMagic();

  return (
    <Switch>
      <Route path={`${paths.auth}`} component={AuthRoutes} />
      <Route
        path={`${paths.backoffice}`}
        render={() =>
          loading ? (
            'loading...'
          ) : loggedIn ? (
            <Backoffice />
          ) : (
            <Redirect to={`${paths.auth}`} />
          )
        }
      />
      <Route component={PublicRoutes} />
    </Switch>
  );
};

export default App;

// import Dashboard from "src/Backoffice/Dashboard/Pages/Dashboard";
// import Notifications from "src/Backoffice/Notifications/Components/Notifications";
// import { Training } from "src/Backoffice/Training";
// import { Feedback } from "src/Backoffice/Feedback";
// import People from "src/Backoffice/People/People";
// import NotFound from "src/App/Components/NotFound";
// import Payments from "src/Backoffice/Payment/Routes";
// import PeopleProfile from "src/Backoffice/People/PeopleProfile";
// import CreatePerson from "src/Backoffice/People/CreatePerson";
// import Menu from "src/App/Components/Navigation/Menu";
// import { Flex, Box, Grid } from "src/App/Components/Layout";

// const MENU_WIDTH = 50;

// const PageContent = styled(Box)`
//   flex: 1;
// `;

// const App = () => (
//   <Flex>
//     <Menu />
//     <PageContent>
//       <Grid fluid>
//         <Switch>
//           <Route exact path="/" component={Dashboard} />
//           <Route exact path="/notifications" component={Notifications} />
//           <Route path="/payments" component={Payments} />
//           <Route path="/courses" component={Training} />
//           <Route path="/feedback" component={Feedback} />
//           <Route exact path="/people" component={People} />
//           <Route exact path="/people/create-person" component={CreatePerson} />
//           <Route exact path="/people/:id" component={PeopleProfile} />
//           <Route component={NotFound} />
//         </Switch>
//       </Grid>
//     </PageContent>
//   </Flex>
// );

// export default App;
