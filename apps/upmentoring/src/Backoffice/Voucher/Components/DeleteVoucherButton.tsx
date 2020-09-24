import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import { QUERY_VOUCHERS } from '../Pages/VouchersPage';
import ConfirmDeleteButton from '../../../App/Components/Communication/ConfirmDeleteButton';

interface Props {
  voucherId: string;
}

const DeleteVoucher = ({ voucherId }: Props) => {
  const history = useHistory();
  const [deleteVoucher] = useMutation(DELETE_VOUCHER, {
    variables: { id: voucherId },
    refetchQueries: [{ query: QUERY_VOUCHERS }],
  });
  const onDeleteVoucher = async () => {
    try {
      const response = await deleteVoucher();
      response?.data?.deleteVoucher?.voucher?.deletedAt &&
        history.push(
          `${appPaths.backoffice}${backofficePaths.payment}${backofficePaths.voucher}`,
        );
    } catch (e) {
      // empty
    }
  };

  return <ConfirmDeleteButton onConfirm={onDeleteVoucher} />;
};

const DELETE_VOUCHER = gql`
  mutation deleteVoucher($id: ID!) {
    deleteVoucher(id: $id) {
      voucher {
        id
        deletedAt
      }
    }
  }
`;

export default DeleteVoucher;
