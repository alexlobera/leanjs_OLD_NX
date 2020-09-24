import React from 'react';
import { gql } from '@apollo/client';

import { Col, Row } from '../../../App';
import Heading from '../../../App/Components/Text/Heading';
import Box from '../../../App/Components/Layout/Box';
import { P, Small } from '../../../App/Components/Text/P';
import Card from '../../../App/Components/Elements/Card';

const GeneralFeedbackCard = ({ feedback }: any) => {
  return (
    <>
      <Box mb={3}>
        <Box mb={3}>
          <Row>
            <Col lg={9}>
              <Heading variant="h4">General</Heading>
              <Heading variant="h6">Student's comments</Heading>
            </Col>
          </Row>
        </Box>
        <Box mb={1}>
          <Card>
            <P>What aspects of the training could be improved?</P>
            <Small>{feedback.commentToImprove}</Small>
          </Card>
          <Card>
            <P>What did you like most about this training?</P>
            <Small>{feedback.commentLikeMost}</Small>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export const GENERAL_FRAGMENT = gql`
  fragment generalFragment on Feedback {
    id
    commentToImprove
    commentLikeMost
  }
`;
export default GeneralFeedbackCard;
