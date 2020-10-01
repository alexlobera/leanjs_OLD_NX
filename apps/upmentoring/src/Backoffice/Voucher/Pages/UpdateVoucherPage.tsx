import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';

import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import { P } from '../../../App/Components/Text/P';
import Header from '../../../App/Components/Layout/Header';
import VoucherType from '../Components/Form/VoucherType';
import VoucherForm, {
  VOUCHER_FORM_FRAGMENT,
} from '../Components/Form/VoucherForm';
import { QUERY_VOUCHERS } from './VouchersPage';

const UpdateVoucher = () => {
  const history = useHistory();
  const { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_VOUCHER, {
    variables: { id },
  });
  const [updateVoucher] = useMutation(UPDATE_VOUCHER);

  const onSubmit = async (variables: any) => {
    try {
      await updateVoucher({
        refetchQueries: [{ query: QUERY_VOUCHERS }],
        variables,
      });

      history.push(
        `${appPaths.backoffice}${backofficePaths.payment}${backofficePaths.voucher}`
      );
    } catch (e) {
      // empty
    }
  };

  return (
    <>
      <Header title="Update discount" />
      {error ? (
        <P>There's an error</P>
      ) : loading ? (
        <P>...loading</P>
      ) : (
        <>
          <VoucherType disabled value={data.voucher.type} />
          <VoucherForm
            type={data.voucher.type}
            onSubmit={onSubmit}
            initialValues={data.voucher}
          />
        </>
      )}
    </>
  );
};

const QUERY_VOUCHER = gql`
  query voucher($id: ID!) {
    voucher(id: $id) {
      id
      code
      type
      description
      startsAt
      expiresAt
      discountPercentage
      discountAmount
      maxRedemptions
      trainingInstance {
        id
        title
        published {
          startDate
          endDate
          utcOffset
          city
        }
      }
      training {
        id
        published {
          title
        }
      }
      event {
        id
        published {
          title
          startDate
          endDate
          utcOffset
          city
        }
      }
    }
  }
`;

const UPDATE_VOUCHER = gql`
  mutation updateVouchers($vouchers: [UpdateVoucherInput]!) {
    updateVouchers(vouchers: $vouchers) {
      vouchers {
        ...VoucherFormFragment
      }
    }
  }
  ${VOUCHER_FORM_FRAGMENT}
`;

export default UpdateVoucher;
