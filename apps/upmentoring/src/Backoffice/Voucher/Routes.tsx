import React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import VouchersPage from '../Voucher/Pages/VouchersPage';
import CreateVoucherPage from '../Voucher/Pages/CreateVoucherPage';
import UpdateVoucherPage from '../Voucher/Pages/UpdateVoucherPage';
import VoucherDetailPage from '../Voucher/Pages/VoucherDetailPage';
import { paths as backofficePaths } from '../../Backoffice';

const Routes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        exact
        path={`${match.url}${backofficePaths.createVoucher}`}
        component={CreateVoucherPage}
      />
      <Route exact path={`${match.url}`} component={VouchersPage} />
      <Route exact path={`${match.url}/:id`} component={VoucherDetailPage} />
      <Route
        exact
        path={`${match.url}/:id${backofficePaths.editVoucher}`}
        component={UpdateVoucherPage}
      />
    </Switch>
  );
};

export default Routes;
