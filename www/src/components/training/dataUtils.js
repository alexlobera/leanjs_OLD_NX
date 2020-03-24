import {
  FULL_TIME,
  FULL_DAY,
  PART_TIME,
  TRAINING_TYPE_WORKSHOP,
  TRAINING_TYPE_TRIAL,
  REACT_BOOTCAMP_ID,
  ADVANCED_REACT_ID,
  REACT_FUNDAMENTALS_ID,
} from '../../config/data'

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
  } else if (
    trainingInstanceTypeName === PART_TIME &&
    trainingType === TRAINING_TYPE_WORKSHOP
  ) {
    return `/${tech}/training/${slug}-part-time/${cityPathI}`
  } else if (trainingType === TRAINING_TYPE_TRIAL) {
    return `/${tech}/training/${slug}/${cityPathI}`
  }
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
    toPath: '/graphql/mini-conference/',
  }
}
