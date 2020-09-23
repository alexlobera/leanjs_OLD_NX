import React from 'react';
import { gql } from '@apollo/client';

import { Col, Row } from '../../../App';
import { P } from '../../../App/Components/Text/P';
import Box from '../../../App/Components/Layout/Box';
import FeedbackRatingIcon from '../Components/FeedbackRatingIcon';

const AverageRatingCard = ({ feedback }: any) => {
  return (
    <Box border={2} mb={3} textAlign="center">
      <Row>
        <Col lg={3}>
          <P>Student is ...</P>
          <FeedbackRatingIcon rating={feedback.averageRating} />
        </Col>
        <Col lg={3}>
          <P>Class content</P>
          <P>{feedback.rating && feedback.rating.contentOrganized}</P>
        </Col>
        <Col lg={3}>
          <P>Teaching</P>
          <P>{feedback.rating && feedback.rating.materialHelpful}</P>
        </Col>
        <Col lg={3}>
          <P>Facilities</P>
          <P>{feedback.rating && feedback.rating.venueFacilities}</P>
        </Col>
      </Row>
    </Box>
  );
};

export const AVERAGE_RATING_FRAGMENT = gql`
  fragment averageRatingFragment on Feedback {
    id
    averageRating
    rating {
      materialHelpful
      contentOrganized
      venueFacilities
    }
  }
`;

export default AverageRatingCard;
