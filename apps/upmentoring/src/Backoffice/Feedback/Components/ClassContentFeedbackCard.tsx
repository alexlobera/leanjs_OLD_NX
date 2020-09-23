import React from 'react';
import { gql } from '@apollo/client';

import { Col, Row } from '../../../App';
import Heading from '../../../App/Components/Text/Heading';
import Box from '../../../App/Components/Layout/Box';
import { P, Small } from '../../../App/Components/Text/P';
import Card from '../../../App/Components/Elements/Card';
import ToggleContent from '../../../App/Components/Layout/ToggleContent';

const ClassContentFeedbackCard = ({ feedback }: any) => {
  return (
    <>
      <Box>
        <Box mb={3}>
          <Row>
            <Col lg={9}>
              <Heading variant="h4">Class content</Heading>
              <Heading variant="h6">Student's comments</Heading>
            </Col>
            <Col lg={3}>
              <P>{feedback.rating && feedback.rating.contentOrganized}</P>
            </Col>
          </Row>
        </Box>
        <Box mb={1}>
          <Card>
            <P>
              Do you feel that the training objectives for this unit were met?
            </P>
            <Small>Some comments</Small>
          </Card>
        </Box>
      </Box>
      <ToggleContent
        hideContentText="Hide all scores from feedback"
        showContentText="See all scores from feedback"
      >
        <Card>
          <P>
            Do you feel that the training objectives for this unit were met?
          </P>
          <P>rating: {feedback.rating && feedback.rating.objectivesMet}</P>
        </Card>
        <Card>
          <P>The content was organized and easy to follow</P>
          <P>rating: {feedback.rating && feedback.rating.contentOrganized}</P>
        </Card>
        <Card>
          <P>The materials used were helpful (slides, repos, etc)</P>
          <P>rating: {feedback.rating && feedback.rating.materialHelpful}</P>
        </Card>
      </ToggleContent>
    </>
  );
};

export const CLASS_CONTENT_FRAGMENT = gql`
  fragment classContentFragment on Feedback {
    id
    rating {
      contentOrganized
      objectivesMet
      materialHelpful
    }
  }
`;

export default ClassContentFeedbackCard;
