import { gql } from '@apollo/client';

export default gql`
  fragment TrainingInstanceForm on TrainingInstance {
    id
    trainingId
    venueName
    address
    isOnline
    city
    cityCountry
    mapUrl
    startDate
    endDate
    utcOffset
    maxAttendees
    standardPrice
    currency
    daysOfTheWeek
    trainingInstanceTypeId
    training {
      # ...TrainingInstanceTypesFragment
      title
      trainingInstanceTypes {
        alternativeTitle
        trainingInstanceType {
          name
          id
          title
        }
      }
    }
    coaches {
      firstName
      lastName
      userId
    }
  }
`;

export const trainingInstanceTrainingFragment = gql`
  fragment TrainingInstanceTypesFragment on Training {
    title
    trainingInstanceTypes {
      alternativeTitle
      trainingInstanceType {
        name
        id
        title
      }
    }
  }
`;
