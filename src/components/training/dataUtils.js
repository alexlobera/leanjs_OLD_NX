import {
  REACT_PART_TIME,
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  REACT_WORKSHOP,
  GRAPHQL_API,
  MEETUP,
  GRAPHQL_WORKSHOP,
  GRAPHQL_PART_TIME,
} from '../../config/data'

export const createTrainingPath = ({
  type,
  city = '',
  index,
  slug,
  isOnline,
}) => {
  const i = index > 1 ? index : ''
  const cityPath = isOnline ? 'online' : city.toLowerCase().replace(' ', '-')
  switch (type) {
    case REACT_PART_TIME:
      return `/react/training/part-time-course/${cityPath}/${i}`
    case REACT_BOOTCAMP:
      return `/react/training/bootcamp/${cityPath}/${i}`
    case REACT_FUNDAMENTALS:
      return `/react/training/react-fundamentals/${cityPath}/${i}`
    case ADVANCED_REACT:
      return `/react/training/advanced/${cityPath}/${i}`
    case GRAPHQL_BOOTCAMP:
      return `/graphql/training/bootcamp/${cityPath}/${i}`
    case GRAPHQL_PART_TIME:
      return `/graphql/training/part-time-course/${cityPath}/${i}`
    case GRAPHQL_API:
      return `/graphql/training/api/${cityPath}/${i}`
    case GRAPHQL_WORKSHOP:
      return `/graphql/training/workshops/${slug}/${cityPath}/${i}`
    case REACT_WORKSHOP:
      return `/react/training/workshops/${slug}/${cityPath}/${i}`
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
