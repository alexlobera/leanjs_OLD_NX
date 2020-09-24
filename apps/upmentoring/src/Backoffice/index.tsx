import React from 'react';
import styled from '../App/Config/styled-components';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Dashboard from '../Backoffice/Dashboard/Pages/Dashboard';
import { Training } from '../Backoffice/Training';
import { Feedback } from '../Backoffice/Feedback';
import NotFound from './NotFound';
import Payments from '../Backoffice/Payment/Routes';
import Voucher from '../Backoffice/Voucher/Routes';
import Events from '../Backoffice/Event/Routes';
import Videos from '../Backoffice/Video/Routes';
import Menu, { MenuData } from '../App/Components/Navigation/Menu';
import { Flex, Box, Grid } from '../App/Components/Layout';
import HomeIcon from '../App/Components/Icons/HomeIcon';
import CourseIcon from '../App/Components/Icons/CourseIcon';
import FilterIcon from '../App/Components/Icons/FilterIcon';
import PaymentsIcon from '../App/Components/Icons/PaymentsIcon';
import Logout from '../Auth/Components/Logout';

const PageContent = styled(Box)`
  flex: 1;
`;

export const paths = {
  home: '/',
  training: '/courses',
  editTraining: '/edit-course',
  createTraining: '/create-course',
  createInstance: '/create-instance',
  editInstance: '/edit-instance',
  trainingUnit: '/unit',
  createTrainingUnit: '/create-unit',
  payment: '/payments',
  feedback: '/feedback',
  notification: '/notifications',
  voucher: '/discounts',
  createVoucher: '/create-discount',
  editVoucher: '/edit-discount',
  event: '/events',
  createEvent: '/create-event',
  editEvent: '/edit-event',
  video: '/videos',
  editVideo: '/edit-video',
  createVideo: '/create-video',
};

const getMenuData = (basePath: string): MenuData[] => [
  {
    title: 'Dashboard',
    to: `${basePath}${paths.home}`,
    icon: <HomeIcon />,
  },
  {
    title: 'Courses',
    to: `${basePath}${paths.training}`,
    icon: <CourseIcon />,
    subMenu: [
      {
        title: 'Create course instance',
        to: `${basePath}${paths.training}${paths.createInstance}`,
      },
    ],
  },
  {
    title: 'Payments',
    to: `${basePath}${paths.payment}`,
    icon: <PaymentsIcon />,
    subMenu: [
      {
        title: 'Discounts',
        to: `${basePath}${paths.voucher}`,
      },
      {
        title: 'Create Discount',
        to: `${basePath}${paths.voucher}${paths.createVoucher}`,
      },
    ],
  },
  {
    title: 'Feedback',
    to: `${basePath}${paths.feedback}`,
  },
  {
    title: 'Events',
    to: `${basePath}${paths.event}`,
  },
  { title: 'Videos', to: `${basePath}${paths.video}` },
  {
    title: 'Settings',
    icon: <FilterIcon />,
    subMenu: [
      {
        title: 'Logout',
        component: Logout,
      },
    ],
  },
];

const Root = () => {
  const match = useRouteMatch();

  return (
    <Flex>
      <Menu data={getMenuData(match.url)} />
      <PageContent>
        <Grid fluid>
          <Switch>
            <Route exact path={match.url} component={Dashboard} />
            <Route path={`${match.url}${paths.payment}`} component={Payments} />
            <Route path={`${match.url}${paths.voucher}`} component={Voucher} />
            <Route
              path={`${match.url}${paths.training}`}
              component={Training}
            />
            <Route path={`${match.url}${paths.video}`} component={Videos} />
            <Route
              path={`${match.url}${paths.feedback}`}
              component={Feedback}
            />
            <Route path={`${match.url}${paths.event}`} component={Events} />
            <Route component={NotFound} />
          </Switch>
        </Grid>
      </PageContent>
    </Flex>
  );
};

export default Root;
