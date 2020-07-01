import {
  FULL_TIME,
  PART_TIME,
  TRAINING_TYPE_WORKSHOP,
  TRAINING_TYPE_TRIAL,
  REACT_BOOTCAMP_ID,
  ADVANCED_REACT_ID,
  REACT_FUNDAMENTALS_ID,
  GRAPHQL_API_ID,
} from '../../config/data';

export const createTrainingPath = ({
  trainingId,
  city = '',
  index = 0,
  slug,
  trainingType,
  tech,
  trainingInstanceTypeName,
}) => {
  const indexPath = index > 1 ? `${index}/` : '';
  const cityPath = city ? `${city.toLowerCase().replace(' ', '-')}/` : '';
  const cityPathI = `${cityPath}${indexPath}`;
  if (
    trainingId === REACT_BOOTCAMP_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/react/training/bootcamp/${cityPathI}`;
  } else if (
    trainingId === REACT_BOOTCAMP_ID &&
    trainingInstanceTypeName === PART_TIME
  ) {
    return `/react/training/part-time-bundle/${cityPathI}`;
  } else if (
    trainingId === ADVANCED_REACT_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/react/training/advanced/${cityPathI}`;
  } else if (
    trainingId === ADVANCED_REACT_ID &&
    trainingInstanceTypeName === PART_TIME
  ) {
    return `/react/training/advanced-part-time/${cityPathI}`;
  } else if (
    trainingId === REACT_FUNDAMENTALS_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/react/training/fundamentals/${cityPathI}`;
  } else if (
    trainingId === REACT_FUNDAMENTALS_ID &&
    trainingInstanceTypeName === PART_TIME
  ) {
    return `/react/training/fundamentals-part-time/${cityPathI}`;
  } else if (
    trainingInstanceTypeName === FULL_TIME &&
    trainingType === TRAINING_TYPE_WORKSHOP
  ) {
    return `/${tech}/training/workshops/${slug}/${cityPathI}`;
  } else if (
    trainingInstanceTypeName === PART_TIME &&
    trainingType === TRAINING_TYPE_WORKSHOP
  ) {
    return `/${tech}/training/${slug}-part-time/${cityPathI}`;
  } else if (trainingType === TRAINING_TYPE_TRIAL) {
    return `/${tech}/training/${slug}/${cityPathI}`;
  } else if (
    trainingId === GRAPHQL_API_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/graphql/training/api/${cityPathI}`;
  }
};

export function formatMeetup({ node }) {
  return {
    ...node,
    shoppingItemEnum: 'event',
    // type: MEETUP,
    toPath: `/community/meetups/${node.id}`,
  };
}

export function formatConf({ node }) {
  return {
    ...node,
    shoppingItemEnum: 'event',
    // TODO TYPE SHOULD NOT BE HARDCODED
    // type: GRAPHQL_MINI_CONF,
    toPath: '/graphql/mini-conference/',
  };
}
