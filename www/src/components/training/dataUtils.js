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
  FULL_TIME,
  FULL_DAY,
  PART_TIME,
  TRAINING_TYPE_WORKSHOP,
  TRAINING_TYPE_TRIAL,
  REACT_BOOTCAMP_ID,
  ADVANCED_REACT_ID,
  REACT_FUNDAMENTALS_ID,
} from '../../config/data'

export const createTrainingPathFromTrial = ({ type, ...rest }) => {
  // TODO REIMPLEMENT THIS USING trainingType, tech, etc
  switch (type) {
    case GRAPHQL_PART_TIME_TRIAL:
      return createTrainingPath({ ...rest, type: GRAPHQL_PART_TIME })
    case REACT_PART_TIME_TRIAL:
      return createTrainingPath({ ...rest, type: REACT_PART_TIME })
  }
}

// export const GRAPHQL_API_ID = '5e289434817eda00025ce40c'
// export const FULL_TIME_REACT_ID = '5e7153d8340ff73c84dbf14c'
// export const PART_TIME_REACT_ID = '5e715373340ff73c84dbf14b'
// export const FULL_DAY_REACT_ID = '5e7153f9340ff73c84dbf14d'
// export const FULL_DAY_GRAPHQL_ID = '5e724400340ff73c84dbf14e'
// export const PART_TIME_GRAPHQL_ID = '5e724426340ff73c84dbf150'

// export const createTrainingPath = ({ type, city = '', index, slug }) => {
export const createTrainingPath = ({
  trainingId,
  city = '',
  index,
  slug,
  trainingType,
  tech,
  trainingInstanceTypeName,
}) => {
  const i = index > 1 ? index : ''
  const cityPath = city.toLowerCase().replace(' ', '-')
  const cityPathI = `${cityPath}/${i}/`
  if (
    trainingId === REACT_BOOTCAMP_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/react/training/bootcamp/${cityPathI}`
  } else if (
    trainingId === REACT_BOOTCAMP_ID &&
    trainingInstanceTypeName === PART_TIME
  ) {
    return `/react/training/complete-part-time/${cityPathI}`
  } else if (
    trainingId === ADVANCED_REACT_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/react/training/advanced/${cityPathI}`
  } else if (
    trainingId === ADVANCED_REACT_ID &&
    trainingInstanceTypeName === PART_TIME
  ) {
    return `/react/training/advanced-part-time/${cityPathI}`
  } else if (
    trainingId === REACT_FUNDAMENTALS_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/react/training/fundamentals/${cityPathI}`
  } else if (
    trainingId === REACT_FUNDAMENTALS_ID &&
    trainingInstanceTypeName === PART_TIME
  ) {
    return `/react/training/fundamentals-part-time/${cityPathI}`
  } else if (
    trainingInstanceTypeName === FULL_DAY &&
    trainingType === TRAINING_TYPE_WORKSHOP
  ) {
    return `/${tech}/training/workshops/${slug}/${cityPathI}`
    //   } else if (
    //     trainingId === '5dc6f35fce62530002bd3e92' &&
    //     trainingInstanceTypeName === PART_TIME_GRAPHQL_ID
    //   ) {
    //     return `/graphql/training/part-time/${cityPathI}`
  } else if (
    trainingInstanceTypeName === PART_TIME &&
    trainingType === TRAINING_TYPE_WORKSHOP
  ) {
    return `/${tech}/training/${slug}-part-time/${cityPathI}`
  } else if (trainingType === TRAINING_TYPE_TRIAL) {
    return `/${tech}/training/${slug}/${cityPathI}`
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
    // type: MEETUP,
    toPath: `/community/meetups/${node.id}`,
  }
}

export function formatConf({ node }) {
  return {
    ...node,
    shoppingItemEnum: 'event',
    // TODO TYPE SHOULD NOT BE HARDCODED
    // type: GRAPHQL_MINI_CONF,
    // TODO URL SHOULD NOT BE HARDCODED
    toPath: '/graphql/mini-conference/',
  }
}
