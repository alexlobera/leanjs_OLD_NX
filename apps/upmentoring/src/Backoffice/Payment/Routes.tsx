import React from 'react';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import PaymentsPage from './Pages/PaymentsPage';
import PaymentDetailPage from './Pages/PaymentDetailPage';
import VouchersPage from '../Voucher/Pages/VouchersPage';
import CreateVoucherPage from '../Voucher/Pages/CreateVoucherPage';
import UpdateVoucherPage from '../Voucher/Pages/UpdateVoucherPage';
import VoucherDetailPage from '../Voucher/Pages/VoucherDetailPage';
import { paths as backofficePaths } from '../../Backoffice';

const Routes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.url}`} component={PaymentsPage} />
      <Route
        exact
        path={`${match.url}${backofficePaths.voucher}${backofficePaths.createVoucher}`}
        component={CreateVoucherPage}
      />
      <Route
        exact
        path={`${match.url}${backofficePaths.voucher}`}
        component={VouchersPage}
      />
      <Route exact path={`${match.url}/:id`} component={PaymentDetailPage} />
      <Route
        exact
        path={`${match.url}${backofficePaths.voucher}/:id`}
        component={VoucherDetailPage}
      />
      <Route
        exact
        path={`${match.url}${backofficePaths.voucher}/:id${backofficePaths.editVoucher}`}
        component={UpdateVoucherPage}
      />
    </Switch>
  );
};

export default Routes;
