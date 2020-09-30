import { gql } from '@apollo/client';

export default gql`
  fragment TrainingInstanceForm on TrainingInstance {
    id
    trainingId
    published {
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
      coaches {
        firstName
        lastName
        userId
      }
    }
    training {
      # ...TrainingInstanceTypesFragment
      published {
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
    }
  }
`;

export const trainingInstanceTrainingFragment = gql`
  fragment TrainingInstanceTypesFragment on Training {
    published {
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
  }
`;
