import React from 'react';
import { gql } from '@apollo/client';

import { Col, Row } from '../../../App';
import Heading from '../../../App/Components/Text/Heading';
import Box from '../../../App/Components/Layout/Box';
import { P, Small } from '../../../App/Components/Text/P';
import Card from '../../../App/Components/Elements/Card';
import ToggleContent from '../../../App/Components/Layout/ToggleContent';

const TeachingFeedbackCard = ({ feedback }: any) => {
  return (
    <>
      <Box>
        <Box mb={3}>
          <Row>
            <Col lg={9}>
              <Heading variant="h4">Teaching</Heading>
              <Heading variant="h6">Student's comments</Heading>
            </Col>
            <Col lg={3}>
              <P>{feedback.rating && feedback.rating.materialHelpful}</P>
            </Col>
          </Row>
        </Box>
        <Box mb={1}>
          <Card>
            <P>
              Do you feel that the teaching objectives for this unit were met?
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
          <P>Participation and interaction were encouraged</P>
          <P>
            rating:{' '}
            {feedback.practiceRating &&
              feedback.practiceRating.enoughInteractionPractice}
          </P>
        </Card>
        <Card>
          <P>You received enough attention and feedback</P>
          <P>
            rating:{' '}
            {feedback.practiceRating &&
              feedback.practiceRating.enoughAttentionFeedback}
          </P>
        </Card>
      </ToggleContent>
    </>
  );
};
export const TEACHING_FRAGMENT = gql`
  fragment teachingFragment on Feedback {
    id
    rating {
      materialHelpful
    }
    practiceRating {
      enoughInteractionPractice
      enoughAttentionFeedback
    }
  }
`;

export default TeachingFeedbackCard;
