import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import Header from '../../../App/Components/Layout/Header';
import VoucherForm, {
  VOUCHER_FORM_FRAGMENT,
} from '../../../Backoffice/Voucher/Components/Form/VoucherForm';
import { QUERY_VOUCHERS } from './VouchersPage';
import VoucherType from '../Components/Form/VoucherType';
import { CODE, GLOBAL_CODE, GLOBAL_AUTO } from '../Components/Form/VoucherType';

const CreateVoucher = () => {
  const history = useHistory();
  const [type, setType] = useState(CODE);
  const [createVouchers] = useMutation(CREATE_VOUCHERS);
  const [createGlobalVouchers] = useMutation(CREATE_GLOBAL_CODE_VOUCHERS);

  const onSubmit = async (variables: any) => {
    try {
      const args = {
        refetchQueries: [{ query: QUERY_VOUCHERS }],
        variables,
      };
      if (type === GLOBAL_CODE || type === GLOBAL_AUTO) {
        await createGlobalVouchers(args);
      } else {
        await createVouchers(args);
      }

      history.push(
        `${appPaths.backoffice}${backofficePaths.payment}${backofficePaths.voucher}`
      );
    } catch (e) {
      // empty
    }
  };

  return (
    <>
      <Header title="Create discount" />
      <VoucherType onChange={setType} value={type} />
      <VoucherForm
        type={type}
        enableDelete={true}
        enableAddMore={true}
        onSubmit={onSubmit}
      />
    </>
  );
};

const CREATE_VOUCHERS = gql`
  mutation createVouchers(
    $vouchers: [CreateVoucherInput!]!
    $itemId: ID!
    $type: LocalVoucherTypeEnum!
  ) {
    createVouchers(vouchers: $vouchers, type: $type, itemId: $itemId) {
      vouchers {
        ...VoucherFormFragment
      }
    }
  }
  ${VOUCHER_FORM_FRAGMENT}
`;

const CREATE_GLOBAL_CODE_VOUCHERS = gql`
  mutation createGlobalVouchers(
    $vouchers: [CreateVoucherInput!]!
    $type: GlobalVoucherTypeEnum!
  ) {
    createGlobalVouchers(vouchers: $vouchers, type: $type) {
      vouchers {
        ...VoucherFormFragment
      }
    }
  }
  ${VOUCHER_FORM_FRAGMENT}
`;

export default CreateVoucher;
