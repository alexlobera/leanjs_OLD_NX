import {
  PART_TIME,
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  REACT_WORKSHOP,
  GRAPHQL_API,
  MEETUP,
  GRAPHQL_WORKSHOP,
} from '../../config/data'

export const createTrainingPath = ({ type, city = '', index, slug }) => {
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
    case GRAPHQL_WORKSHOP:
      return `/graphql/training/workshops/${slug}/${city.toLowerCase()}/${i}`
    case REACT_WORKSHOP:
      return `/react/training/workshops/${slug}/${city.toLowerCase()}/${i}`
    default:
      return '/'
  }
}

export function formatMeetup({ node }) {
  return {
    ...node,
    type: MEETUP,
    toPath: `/community/meetups/${node.id}`,
  }
}
