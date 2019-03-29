import React from 'react'
import { Query } from 'react-apollo'

import {
  PART_TIME,
  REACT_BOOTCAMP,
  REACT_NATIVE,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
} from '../../config/data'

import GET_UPCOMING_TRAINING from './withUpcomingTrainings.graphql'

const createTrainingPath = ({ type, city = '', index }) => {
  const i = index > 1 ? index : ''
  switch (type) {
    case PART_TIME:
      return `/react-redux-training-${city.toLowerCase()}/${i}`
    case REACT_BOOTCAMP:
      return `/react-redux-graphql-bootcamp-${city.toLowerCase()}/${i}`
    case REACT_NATIVE:
      return `/react-native-bootcamp-${city.toLowerCase()}/${i}`
    case ADVANCED_REACT:
      return `/advanced-react-redux-graphql-bootcamp-${city.toLowerCase()}/${i}`
    case GRAPHQL_BOOTCAMP:
      return `/graphql-${city.toLowerCase()}/${i}`
  }
}

export const selectFirstTraining = ({ trainings, type }) => {
  const typeTrainings = type
    ? trainings.filter(training => training.type === type)
    : trainings
  return typeTrainings.length && typeTrainings[0]
}

export const selectUpcomingTrainings = ({
  type,
  city,
  trainings = [],
  limit,
}) => {
  const trainingByType = training => !type || training.training.type === type
  const trainingByCity = training => !city || training.city === city
  const filteredTrainings = trainings
    .filter(trainingByType)
    .filter(trainingByCity)
    .slice(0, limit)
  return filteredTrainings
}

const withUpcomingTrainings = ({
  type,
  city,
  limit,
} = {}) => InnerComponent => props => (
  <Query query={GET_UPCOMING_TRAINING} variables={{ city }}>
    {({ loading, error, data }) => {
      const cityIndex = {}
      const formatTraining = ({ node }) => {
        const { city } = node
        cityIndex[city] = cityIndex[city] ? cityIndex[city] + 1 : 1

        return {
          ...node,
          toPath: createTrainingPath({
            type: node.training.type,
            city,
            index: cityIndex[city],
          }),
        }
      }

      const trainings =
        !error && !loading && data.trainingInstancesConnection
          ? data.trainingInstancesConnection.edges.map(formatTraining)
          : []

      return (
        <InnerComponent
          {...props}
          trainings={selectUpcomingTrainings({ trainings, type, city, limit })}
        />
      )
    }}
  </Query>
)

export default withUpcomingTrainings
