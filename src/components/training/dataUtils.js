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
  GRAPHQL_PART_TIME_TRIAL,
  REACT_PART_TIME_TRIAL,
} from '../../config/data'

export const createTrainingPathFromTrial = ({ type, ...rest }) => {
  switch (type) {
    case GRAPHQL_PART_TIME_TRIAL:
      return createTrainingPath({ ...rest, type: GRAPHQL_PART_TIME })
    case REACT_PART_TIME_TRIAL:
      return createTrainingPath({ ...rest, type: REACT_PART_TIME })
  }
}

export const createTrainingPath = ({
  type,
  city = '',
  index,
  slug,
  isOnline,
}) => {
  const i = index > 1 ? index : ''
  const cityPath = isOnline ? 'online' : city.toLowerCase().replace(' ', '-')
  const cityPathI = `${cityPath}/${i}/`
  switch (type) {
    case REACT_PART_TIME:
      return `/react/training/part-time-course/${cityPathI}`
    case REACT_BOOTCAMP:
      return `/react/training/bootcamp/${cityPathI}`
    case REACT_FUNDAMENTALS:
      return `/react/training/react-fundamentals/${cityPathI}`
    case ADVANCED_REACT:
      return `/react/training/advanced/${cityPathI}`
    case GRAPHQL_BOOTCAMP:
      return `/graphql/training/bootcamp/${cityPathI}`
    case GRAPHQL_PART_TIME:
      return `/graphql/training/part-time-course/${cityPathI}`
    case GRAPHQL_API:
      return `/graphql/training/api/${cityPathI}`
    case GRAPHQL_WORKSHOP:
      return `/graphql/training/workshops/${slug}/${cityPathI}`
    case REACT_WORKSHOP:
      return `/react/training/workshops/${slug}/${cityPathI}`
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
