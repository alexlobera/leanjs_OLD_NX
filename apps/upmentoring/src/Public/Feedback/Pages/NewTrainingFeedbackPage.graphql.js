import { gql } from '@apollo/client';

export default gql`
  query getTrainingInstance($id: ID!, $trainingUnitId: ID) {
    trainingInstance(id: $id) {
      id
      trainingId
      address
      city
      venueName
      startDate
      endDate
      unit(trainingUnitId: $trainingUnitId) {
        trainingUnitId
        coaches {
          userId
          username
          firstName
          lastName
          profileImage {
            size100x100
            size400x400
          }
        }
      }
      training {
        id
        description {
          title
          objectives
        }
        unit(trainingUnitId: $trainingUnitId) {
          id
          title
          id
          objectives
        }
      }
      coaches {
        userId
        username
        firstName
        lastName
        bio
        profileImage {
          size100x100
          size400x400
        }
      }
    }
  }
`;
