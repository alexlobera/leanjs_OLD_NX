import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Header from '../../../App/Components/Layout/Header';
import { formatUTC } from '../../../App/Utils';
import { P } from '../../../App/Components/Text/P';
import Link from '../../../App/Components/Navigation/Link';
import Box from '../../../App/Components/Layout/Box';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';

import AverageRatingCard, {
  AVERAGE_RATING_FRAGMENT,
} from '../Components/AverageRatingCard';
import ClassContentFeedbackCard, {
  CLASS_CONTENT_FRAGMENT,
} from '../Components/ClassContentFeedbackCard';
import TeachingFeedbackCard, {
  TEACHING_FRAGMENT,
} from '../Components/TeachingFeedbackCard';
import FacilitiesFeedbackCard, {
  FACILITIES_FRAGMENT,
} from '../Components/FacilitiesFeedbackCard';
import GeneralFeedbackCard, {
  GENERAL_FRAGMENT,
} from '../Components/GeneralFeedbackCard';

const FeedbackDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(QUERY_FEEDBACK, {
    variables: { id },
  });

  if (loading) {
    return <P>...Loading</P>;
  } else if (error) {
    return <P>Oops there was an error</P>;
  }

  const { feedback } = data;
  if (!feedback) {
    return null;
  }
  const { training, trainingInstance } = feedback;

  return (
    <>
      <Header
        title={`Feedback - ${
          feedback.username ? feedback.username : 'Anonymous'
        }`}
        subtitle={
          training && (
            <>
              <Link
                to={`${appPaths.backoffice}${backofficePaths.training}/instances/${feedback.trainingInstanceId}`}
              >
                {trainingInstance && trainingInstance.title}{' '}
              </Link>
              {<br />}received:
              {formatUTC(
                feedback.createdAt,
                trainingInstance && trainingInstance.utcOffset
              )}
            </>
          )
        }
      />
      <Box>
        <AverageRatingCard feedback={feedback} />
        <ClassContentFeedbackCard feedback={feedback} />
        <TeachingFeedbackCard feedback={feedback} />
        <FacilitiesFeedbackCard feedback={feedback} />
        <GeneralFeedbackCard feedback={feedback} />
        <Link to={`${appPaths.backoffice}${backofficePaths.feedback}`}>
          Return to feedback list
        </Link>
      </Box>
    </>
  );
};

const QUERY_FEEDBACK = gql`
  query feedback($id: ID!) {
    feedback(id: $id) {
      ...averageRatingFragment
      ...classContentFragment
      ...teachingFragment
      ...facilitiesFragment
      ...generalFragment
      id
      trainingId
      trainingInstanceId
      username
      trainingInstance {
        id
        startDate
        utcOffset
        city
        title
      }
    }
  }
  ${GENERAL_FRAGMENT}
  ${FACILITIES_FRAGMENT}
  ${TEACHING_FRAGMENT}
  ${AVERAGE_RATING_FRAGMENT}
  ${CLASS_CONTENT_FRAGMENT}
`;

export default FeedbackDetailPage;
