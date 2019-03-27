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

const withUpcomingTrainings = ({
  type,
  city,
  limit = 3,
}) => InnerComponent => props => (
  <Query query={GET_UPCOMING_TRAINING} variables={{ city }}>
    {({ loading, error, data }) => {
      const cityIndex = {}
      const trainings =
        !error && !loading
          ? data.trainingInstancesConnection.edges
              .filter(({ node }) => type && node.training.type === type)
              .slice(0, limit)
              .map(({ node }) => {
                const { city } = node
                cityIndex[city] = cityIndex[city] ? cityIndex[city] + 1 : 1

                return {
                  ...node,
                  toPath: createTrainingPath({
                    type,
                    city,
                    index: cityIndex[city],
                  }),
                }
              })
          : []

      return <InnerComponent {...props} trainings={trainings} />
    }}
  </Query>
)

export default withUpcomingTrainings
