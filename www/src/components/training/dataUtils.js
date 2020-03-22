import {
  REACT_PART_TIME,
  //   REACT_BOOTCAMP,
  //   REACT_FUNDAMENTALS,
  //   ADVANCED_REACT,
  //   GRAPHQL_BOOTCAMP,
  //   REACT_WORKSHOP,
  //   GRAPHQL_API,
  MEETUP,
  // GRAPHQL_WORKSHOP,
  GRAPHQL_PART_TIME,
  GRAPHQL_PART_TIME_TRIAL,
  REACT_PART_TIME_TRIAL,
  GRAPHQL_MINI_CONF,
} from '../../config/data'

export const createTrainingPathFromTrial = ({ type, ...rest }) => {
  switch (type) {
    case GRAPHQL_PART_TIME_TRIAL:
      return createTrainingPath({ ...rest, type: GRAPHQL_PART_TIME })
    case REACT_PART_TIME_TRIAL:
      return createTrainingPath({ ...rest, type: REACT_PART_TIME })
  }
}

export const REACT_BOOTCAMP_ID = '5db067d734ca7d0002dfd232'
export const REACT_FUNDAMENTALS_ID = '5db0681934ca7d0002dfd233'
export const ADVANCED_REACT_ID = '5db17dcbcfdceb0002083c2f'
export const GRAPHQL_API_ID = '5e289434817eda00025ce40c'
export const FULL_TIME_REACT_ID = '5e7153d8340ff73c84dbf14c'
export const PART_TIME_REACT_ID = '5e715373340ff73c84dbf14b'
export const FULL_DAY_REACT_ID = '5e7153f9340ff73c84dbf14d'
export const FULL_DAY_GRAPHQL_ID = '5e724400340ff73c84dbf14e'
export const PART_TIME_GRAPHQL_ID = '5e724426340ff73c84dbf150'

// export const createTrainingPath = ({ type, city = '', index, slug }) => {
export const createTrainingPath = ({
  trainingId,
  trainingTypeId,
  city = '',
  index,
  slug,
}) => {
  const i = index > 1 ? index : ''
  const cityPath = city.toLowerCase().replace(' ', '-')
  const cityPathI = `${cityPath}/${i}/`
  if (
    trainingId === '5a16f0ea4939a601fe2db701' &&
    trainingTypeId === FULL_TIME_REACT_ID
  ) {
    return `/react/training/bootcamp/${cityPathI}`
  } else if (
    trainingId === '5a16f0ea4939a601fe2db701' &&
    trainingTypeId === PART_TIME_REACT_ID
  ) {
    return `/react/training/complete-part-time/${cityPathI}`
  } else if (
    trainingId === '5ab6244a88546e46fa2b2601' &&
    trainingTypeId === FULL_TIME_REACT_ID
  ) {
    return `/react/training/advanced/${cityPathI}`
  } else if (
    trainingId === '5ab6244a88546e46fa2b2601' &&
    trainingTypeId === PART_TIME_REACT_ID
  ) {
    return `/react/training/advanced-part-time/${cityPathI}`
  } else if (
    trainingId === '5d0114b706051b7d3bcb0cf9' &&
    trainingTypeId === FULL_TIME_REACT_ID
  ) {
    return `/react/training/fundamentals/${cityPathI}`
  } else if (
    trainingId === '5d0114b706051b7d3bcb0cf9' &&
    trainingTypeId === PART_TIME_REACT_ID
  ) {
    return `/react/training/fundamentals-part-time/${cityPathI}`
  } else if (trainingTypeId === FULL_DAY_REACT_ID) {
    return `/react/training/workshops/${slug}/${cityPathI}`
  } else if (
    trainingId === '5dc6f35fce62530002bd3e92' &&
    trainingTypeId === PART_TIME_GRAPHQL_ID
  ) {
    return `/graphql/training/part-time/${cityPathI}`
  } else if (trainingTypeId === FULL_DAY_GRAPHQL_ID) {
    return `/graphql/training/workshops/${slug}/${cityPathI}`
  }
  /////////
  ///
  ///
  ///
  //   switch (type) {
  //     case REACT_PART_TIME:
  //       return `/react/training/part-time/${cityPathI}`
  //     case REACT_BOOTCAMP:
  //       return `/react/training/bootcamp/${cityPathI}`
  //     case REACT_FUNDAMENTALS:
  //       return `/react/training/fundamentals/${cityPathI}`
  //     case ADVANCED_REACT:
  //       return `/react/training/advanced/${cityPathI}`
  //     case GRAPHQL_BOOTCAMP:
  //       return `/graphql/training/bootcamp/${cityPathI}`
  //     case GRAPHQL_PART_TIME:
  //       return `/graphql/training/part-time/${cityPathI}`
  //     case GRAPHQL_API:
  //       return `/graphql/training/api/${cityPathI}`
  //     case GRAPHQL_WORKSHOP:
  //       return `/graphql/training/workshops/${slug}/${cityPathI}`
  //     case REACT_WORKSHOP:
  //       return `/react/training/workshops/${slug}/${cityPathI}`
  //     default:
  //       return '/'
}

export function formatMeetup({ node }) {
  return {
    ...node,
    shoppingItemEnum: 'event',
    type: MEETUP,
    toPath: `/community/meetups/${node.id}`,
  }
}

export function formatConf({ node }) {
  return {
    ...node,
    shoppingItemEnum: 'event',
    // TODO TYPE SHOULD NOT BE HARDCODED
    type: GRAPHQL_MINI_CONF,
    // TODO URL SHOULD NOT BE HARDCODED
    toPath: '/graphql/mini-conference/',
  }
}
