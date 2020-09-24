import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { Col, Row } from '../../../App';
import Link from '../../../App/Components/Navigation/Link';
import { Ul, Li } from '../../../App/Components/Text/Ul';
import Flex from '../../../App/Components/Layout/Flex';
import Heading from '../../../App/Components/Text/Heading';
import InfoBox from '../../../App/Components/Elements/InfoBox';
import { Em, Small, P } from '../../../App/Components/Text/P';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import DeleteVoucherButton from '../Components/DeleteVoucherButton';
import Header from '../../../App/Components/Layout/Header';

const VoucherDetailPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_VOUCHER, {
    variables: { id },
  });

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else {
    const { voucher } = data;

    if (!voucher) {
      return null;
    }
    return (
      <>
        <Header
          title="Discount detail"
          actions={
            <Link
              button
              to={`${appPaths.backoffice}${backofficePaths.payment}${backofficePaths.voucher}${backofficePaths.createVoucher}`}
            >
              Create new discount
            </Link>
          }
        />
        <Row>
          <Col md={4}>
            <InfoBox>
              <Flex flexDirection="column">
                <Heading mb={0} variant="h6">
                  Discount details
                </Heading>
                <Link
                  to={`${appPaths.backoffice}${backofficePaths.payment}${backofficePaths.voucher}/${voucher.id}${backofficePaths.editVoucher}`}
                >
                  Edit discount details
                </Link>
              </Flex>
              <Ul nomargin>
                {voucher.description && (
                  <Li>
                    <Em>
                      <Small>Discount name: {voucher.description}</Small>
                    </Em>
                    <Link
                      to={`${appPaths.backoffice}${backofficePaths.payment}${backofficePaths.voucher}/${voucher.id}`}
                    />
                  </Li>
                )}
                <Li>
                  <Em>
                    <Small>Discount type: {voucher.type} </Small>
                  </Em>
                </Li>
                {voucher.code && (
                  <Li>
                    <Em>
                      <Small>Discount code: {voucher.code} </Small>
                    </Em>
                  </Li>
                )}
                {voucher.startsAt && (
                  <Li>
                    <Em>
                      <Small>
                        Starts: {moment(voucher.startsAt).format("D MMM 'YYYY")}
                      </Small>
                    </Em>
                  </Li>
                )}
                {voucher.expiresAt && (
                  <Li>
                    <Em>
                      <Small>
                        Ends: {moment(voucher.expiresAt).format("D MMM 'YYYY")}
                      </Small>
                    </Em>
                  </Li>
                )}
                {voucher.discountAmount ? (
                  <Li>
                    <Em>
                      <Small>Discount amount: £{voucher.discountAmount}</Small>
                    </Em>
                  </Li>
                ) : (
                    <Li>
                      <Em>
                        <Small>
                          Discount Percentage: {voucher.discountPercentage}%
                      </Small>
                      </Em>
                    </Li>
                  )}
                <Li>
                  <Em>
                    <Small>Used {voucher.redemptions || 0} times</Small>
                  </Em>
                </Li>
                <Li>
                  <Em>
                    <Small>
                      Discount is available:{' '}
                      {voucher.event ? (
                        <Link
                          to={`${appPaths.backoffice}${backofficePaths.event}/${voucher.eventId}/`}
                        >
                          Event: {voucher.event.title}
                        </Link>
                      ) : voucher.trainingInstanceId ? (
                        <Link
                          to={`${appPaths.backoffice}${backofficePaths.training}/instances/${voucher.trainingInstanceId}`}
                        >
                          Course Instance:{' '}
                          {voucher.trainingInstance &&
                            voucher.trainingInstance.title}
                        </Link>
                      ) : voucher.trainingId ? (
                        <Link
                          to={`${appPaths.backoffice}${backofficePaths.training}/${voucher.trainingId}`}
                        >
                          Course: {voucher.training && voucher.training.title}
                        </Link>
                      ) : (
                              'Globaly'
                            )}
                    </Small>
                  </Em>
                </Li>
              </Ul>
              <DeleteVoucherButton voucherId={voucher.id} />
            </InfoBox>
          </Col>
        </Row>
      </>
    );
  }
};

const QUERY_VOUCHER = gql`
  query voucher($id: ID!) {
    voucher(id: $id) {
      id
      code
      description
      startsAt
      expiresAt
      discountPercentage
      redemptions
      discountAmount
      trainingId
      trainingInstanceId
      eventId
      type
      training {
        id
        title
      }
      trainingInstance {
        id
        title
      }
      event {
        id
        title
      }
    }
  }
`;

export default VoucherDetailPage;
