import React from 'react';
import { gql } from '@apollo/client';

import { Col, Row } from '../../../App';
import Heading from '../../../App/Components/Text/Heading';
import Box from '../../../App/Components/Layout/Box';
import { P, Small } from '../../../App/Components/Text/P';
import Card from '../../../App/Components/Elements/Card';
import ToggleContent from '../../../App/Components/Layout/ToggleContent';

const FacilitiesFeedbackCard = ({ feedback }: any) => {
  return (
    <>
      <Box>
        <Box mb={3}>
          <Row>
            <Col lg={9}>
              <Heading variant="h4">Facilities</Heading>
              <Heading variant="h6">Student's comments</Heading>
            </Col>
            <Col lg={3}>
              <P>{feedback.rating && feedback.rating.venueFacilities}</P>
            </Col>
          </Row>
        </Box>
        <Box mb={1}>
          <Card>
            <P>The meeting room and facilities were adequate and comfortable</P>
            <Small>Some comments</Small>
          </Card>
        </Box>
      </Box>
      <ToggleContent
        hideContentText="Hide all scores from feedback"
        showContentText="See all scores from feedback"
      >
        <Card>
          <P>The meeting room and facilities were adequate and comfortable</P>
          <P>rating: {feedback.rating && feedback.rating.venueFacilities}</P>
        </Card>
      </ToggleContent>
    </>
  );
};

export const FACILITIES_FRAGMENT = gql`
  fragment facilitiesFragment on Feedback {
    id
    rating {
      venueFacilities
    }
  }
`;

export default FacilitiesFeedbackCard;
