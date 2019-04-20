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
      return `/graphql-bootcamp-${city.toLowerCase()}/${i}`
  }
}

export const selectNthTraining = ({ trainings, type, nth = 1 }) => {
  const typeTrainings = type
    ? trainings.filter(trainingByType(type))
    : trainings
  return typeTrainings.length ? typeTrainings[nth - 1] : undefined
}
const trainingByType = type => training =>
  !type || training.training.type === type
const trainingByCity = city => training => !city || training.city === city

export const selectUpcomingTrainings = ({
  type,
  city,
  trainings = [],
  limit,
}) => {
  const filteredTrainings = trainings
    .filter(trainingByType(type))
    .filter(trainingByCity(city))
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
        const { type } = node.training
        const { city } = node
        const key = `${city}${type}`
        cityIndex[key] = cityIndex[key] ? cityIndex[key] + 1 : 1

        return {
          ...node,
          toPath: createTrainingPath({
            type,
            city,
            index: cityIndex[key],
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
          trainings={selectUpcomingTrainings({
            trainings,
            type,
            city,
            limit,
          })}
          trainingLoading={loading}
          trainingError={error}
        />
      )
    }}
  </Query>
)

export default withUpcomingTrainings
