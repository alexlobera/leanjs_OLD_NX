import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { formatUTC } from '../../../App/Utils';
import FeedbackRatingIcon from '../../Feedback/Components/FeedbackRatingIcon';
import Link from '../../../App/Components/Navigation/Link';
import Card from '../../../App/Components/Elements/Card';
import { P } from '../../../App/Components/Text/P';
import Flex from '../../../App/Components/Layout/Flex';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';

const FeedbackCards = ({ feedbacks }: any) => {
  const edges = feedbacks?.edges || [];

  return (
    <React.Fragment>
      {edges.map(({ node: feedback }: any) => {
        const { trainingInstance } = feedback;
        return (
          <Card key={feedback.id}>
            <Flex flexDirection="column">
              {' '}
              <FeedbackRatingIcon rating={feedback.averageRating} />
              <Link
                to={`${appPaths.backoffice}${backofficePaths.feedback}/${feedback.id}`}
              >
                {formatUTC(
                  feedback.createdAt,
                  trainingInstance && trainingInstance.utcOffset
                )}
              </Link>
              <P>{feedback.username ? feedback.username : 'Anonymous'}</P>
              {feedback.training && (
                <>
                  <P>{feedback.training && feedback.trainingInstance.title}</P>
                  {trainingInstance && (
                    <P>
                      {formatUTC(
                        trainingInstance.startDate,
                        trainingInstance.utcOffset
                      )}{' '}
                      - {trainingInstance.city}
                    </P>
                  )}
                </>
              )}
            </Flex>
          </Card>
        );
      })}
      <Link
        pb={3}
        button
        to={`${appPaths.backoffice}${backofficePaths.feedback}`}
      >
        See all feedback
      </Link>
    </React.Fragment>
  );
};

export const FRAGMENT_FEEDBACKS_DASHBOARD = gql`
  fragment feedbacksDashboardFragment on FeedbackConnection {
    edges {
      node {
        id
        averageRating
        createdAt
        trainingInstance {
          id
          startDate
          utcOffset
          city
          title
        }
      }
    }
  }
`;

export default FeedbackCards;
