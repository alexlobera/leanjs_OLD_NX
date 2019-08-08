import React from 'react'
import { Query } from 'react-apollo'

import selectUpcomingTrainings from './selectUpcomingTrainings'
import GET_UPCOMING_TRAINING from './QueryUpcomingTrainings.graphql'
import {
  PART_TIME,
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  REACT_WORKSHOP,
  GRAPHQL_CLIENT,
  GRAPHQL_API,
  MEETUP,
} from '../../config/data'

const LISBON_LOCATION =
  'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flocation_lisbon-perede.jpg?alt=media'

const LONDON_LOCATION =
  'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flocation_london.jpg?alt=media'

const BARCELONA_LOCATION =
  'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flocation_barcelona.jpg?alt=media'

const AMSTERDAM_LOCATION =
  'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flocation_amsterdam.jpg?alt=media'

const BERLIN_LOCATION =
  'https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/images%2Flocation_images%2Flocation_berlin.jpg?alt=media'

const DEFAULT_INFOBOX =
  'https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/images%2Fdefault_infobox.jpg?alt=media'

const createTrainingPath = ({ type, city = '', index, id, slug }) => {
  const i = index > 1 ? index : ''
  switch (type) {
    case PART_TIME:
      return `/react/training/part-time-course/${city.toLowerCase()}/${i}`
    case REACT_BOOTCAMP:
      return `/react/training/bootcamp/${city.toLowerCase()}/${i}`
    case REACT_FUNDAMENTALS:
      return `/react/training/react-fundamentals/${city.toLowerCase()}/${i}`
    case ADVANCED_REACT:
      return `/react/training/advanced/${city.toLowerCase()}/${i}`
    case GRAPHQL_BOOTCAMP:
      return `/graphql/training/bootcamp/${city.toLowerCase()}/${i}`
    case GRAPHQL_API:
      return `/graphql/training/api/${city.toLowerCase()}/${i}`
    case GRAPHQL_CLIENT:
      return `/graphql/training/workshops/graphql-apollo-client/${city.toLowerCase()}/${i}`
    case REACT_WORKSHOP:
      return `/react/training/workshops/${slug}/${city.toLowerCase()}/${i}`
    default:
      return '/'
  }
}

const selectLocationImage = ({ city = '' }) => {
  switch (city) {
    case 'London':
      return LONDON_LOCATION
    case 'Amsterdam':
      return AMSTERDAM_LOCATION
    case 'Lisbon':
      return LISBON_LOCATION
    case 'Barcelona':
      return BARCELONA_LOCATION
    case 'Berlin':
      return BERLIN_LOCATION
    default:
      return DEFAULT_INFOBOX
  }
}

function formatMeetup({ node }) {
  return {
    ...node,
    type: MEETUP,
    toPath: `/community/meetups/${node.id}`,
    image: selectLocationImage({ city: node.city }),
  }
}

const QueryUpcomingTrainings = ({ type, city, limit, children }) => (
  <Query query={GET_UPCOMING_TRAINING} variables={{ city }}>
    {({ loading, error, data }) => {
      const cityIndex = {}
      const formatTraining = ({ node }) => {
        const { type, slug, description } = node.training || {}
        const { title = '' } = description || {}
        const { city = '', id } = node
        const key = `${city}${type}${slug}`
        cityIndex[key] = cityIndex[key] ? cityIndex[key] + 1 : 1

        return {
          ...node,
          title,
          type,
          toPath: createTrainingPath({
            type,
            city,
            index: cityIndex[key],
            id,
            slug,
          }),
          image: selectLocationImage({ city }),
        }
      }

      const trainings =
        !error && !loading && data.trainingInstancesConnection
          ? data.trainingInstancesConnection.edges.map(formatTraining)
          : []

      const meetups =
        !error && !loading && data.eventsConnection
          ? data.eventsConnection.edges.map(formatMeetup)
          : []

      return children({
        trainings: selectUpcomingTrainings({
          trainings: [...trainings, ...meetups],
          type,
          city,
          limit,
        }),
        trainingLoading: loading,
        trainingError: error,
      })
    }}
  </Query>
)

export default QueryUpcomingTrainings
