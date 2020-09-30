import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import PaymentList, {
  FRAGMENT_ANY_PAYMENTS_LIST,
} from '../../../Backoffice/Payment/Components/PaymentList';
import { formatUTC } from '../../../App/Utils';
import { Col, Row } from '../../../App';
import Link from '../../../App/Components/Navigation/Link';
import { Ul, Li } from '../../../App/Components/Text/Ul';
import Flex from '../../../App/Components/Layout/Flex';
import Heading from '../../../App/Components/Text/Heading';
import InfoBox from '../../../App/Components/Elements/InfoBox';
import { P } from '../../../App/Components/Text/P';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import DeleteEventButton from '../Components/DeleteEventButton';
import Header from '../../../App/Components/Layout/Header';

const EventDetailPage = () => {
  const { eventId } = useParams();
  const { loading, error, data } = useQuery(QUERY_EVENT, {
    variables: { id: eventId },
    fetchPolicy: 'cache-first',
  });

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>There's an error</P>;
  } else {
    const { event, vouchers } = data;
    const { edges } = vouchers;
    const { discountPrice } = event;
    const currentPrice = discountPrice ? discountPrice.currentPrice : undefined;

    if (!event) {
      return null;
    }
    return (
      <>
        <Header
          title="Event detail"
          actions={
            <Link
              button
              to={`${appPaths.backoffice}${backofficePaths.event}${backofficePaths.createEvent}`}
            >
              Create new event
            </Link>
          }
        />
        <Row>
          <Col md={8}>
            <PaymentList eventId={eventId} payments={data?.event?.payments} />
          </Col>
          <Col md={4}>
            <InfoBox>
              <Flex flexDirection="column">
                <Heading mb={0} variant="h6">
                  Event details
                </Heading>
                <Link
                  to={`${appPaths.backoffice}${backofficePaths.event}/${event.id}${backofficePaths.editEvent}`}
                >
                  Edit event details
                </Link>
              </Flex>
              <Ul nomargin>
                <Li>Title: {event.published.title}</Li>
                <Li>City: {event.published.city}</Li>
                <Li>Max Atttendees: {event.published.maxAttendees}</Li>
                <Li>Address: {event.published.address}</Li>
                <Li>Venue: {event.published.venueName}</Li>
                {event.published.mapUrl && (
                  <Li>
                    Map url:{' '}
                    <Link to={event.published.mapUrl} target="_blank">
                      open map
                    </Link>
                  </Li>
                )}
                <Li>
                  Price: {event.published.currency}{' '}
                  {event.published.standardPrice}
                </Li>
                {currentPrice || currentPrice === 0 ? (
                  <>
                    <Li>
                      Current discounted price: {event.published.currency} {` `}
                      {Math.floor(currentPrice * 100) / 100}
                    </Li>
                  </>
                ) : null}
                <Li>
                  Vouchers available:
                  <Ul>
                    {edges.map(({ node: voucher }: any) => (
                      <Li key={voucher.id}>
                        <Link
                          to={`${appPaths.backoffice}${backofficePaths.payment}${backofficePaths.voucher}/${voucher.id}`}
                        >
                          {voucher.description}
                        </Link>
                      </Li>
                    ))}
                  </Ul>
                </Li>
                {event.published.startDate && (
                  <Li>
                    Starts:{' '}
                    {formatUTC(
                      event.published.startDate,
                      event.published.utcOffset,
                      "D MMM 'YYYY"
                    )}
                  </Li>
                )}
                {event.published.endDate && (
                  <Li>
                    Ends:{' '}
                    {formatUTC(
                      event.published.endDate,
                      event.published.utcOffset,
                      "D MMM 'YYYY"
                    )}
                  </Li>
                )}
                {/* <Li>
                  Description:
                  <br />
                  <Markdown>{event.published.description}</Markdown>
                </Li> */}
              </Ul>
              <DeleteEventButton eventId={event.id} />
            </InfoBox>
          </Col>
        </Row>
      </>
    );
  }
};

const QUERY_EVENT = gql`
  query event($id: ID!) {
    vouchers(filter: { eventId: $id }) {
      edges {
        node {
          id
          code
          description
        }
      }
    }
    event(id: $id) {
      id
      published {
        meetup {
          id
        }
        title
        # description
        venueName
        address
        mapUrl
        city
        startDate
        endDate
        utcOffset
        maxAttendees
        standardPrice
        currency
      }
      discountPrice {
        currentPrice
      }
      payments {
        ...anyPaymentListFragment
      }
    }
  }
  ${FRAGMENT_ANY_PAYMENTS_LIST}
`;

export default EventDetailPage;
