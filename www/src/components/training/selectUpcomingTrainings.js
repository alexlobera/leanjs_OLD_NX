export const selectNthTraining = ({ trainings, type, nth = 1 }) => {
  const typeTrainings = type
    ? trainings.filter(trainingByType(type))
    : trainings
  return typeTrainings.length ? typeTrainings[nth - 1] : undefined
}
const trainingByType = type => training => !type || training.type === type

const trainingByTypes = types => training =>
  types && types.length ? types.find(type => type === training.type) : true

const trainingByCity = ({ city, onlineOrOffline = false } = {}) => training => {
  if (!city) {
    return true
  }

  const cityLowerCase = city.toLowerCase()
  const isSameCity =
    training && training.city && training.city.toLowerCase() === cityLowerCase

  return onlineOrOffline && (training.isOnline || isSameCity)
    ? true
    : cityLowerCase === 'remote' && training.isOnline
    ? true
    : cityLowerCase !== 'remote' && isSameCity && !training.isOnline
    ? true
    : false
}

export const getNextTrainingByTrainingId = ({ trainings, trainingId }) =>
  trainings.find(({ training } = {}) => training && training.id === trainingId)

export const selectTrainingByInstanceId = ({ trainings, id }) =>
  trainings.find(training => training.id === id)

export const selectNodeById = ({ nodes, id }) =>
  nodes.find(node => node.id === id)

export const excludeByTrainingId = trainingId => ({ training }) =>
  !training || !training.id || training.id !== trainingId

export const excludeByInstanceId = instanceId => instance =>
  !instance || !instance.id || instance.id !== instanceId

export const filterByTrainingId = trainingId => ({ training } = {}) =>
  !trainingId || (training && training.id && training.id === trainingId)

export const sortUpcomingTrainings = (a, b) =>
  a.startDate > b.startDate ? 1 : -1

export const selectUpcomingTrainings = ({
  city,
  types,
  type,
  trainingId,
  excludeTrainingId,
  excludeInstanceId,
  trainings = [],
  limit = 9999,
  onlineOrOffline,
}) => {
  const typesArray = types ? types : type ? [type] : []

  return trainings
    .filter(trainingByTypes(typesArray))
    .filter(trainingByCity({ city, onlineOrOffline }))
    .filter(excludeByInstanceId(excludeInstanceId))
    .filter(filterByTrainingId(trainingId))
    .filter(excludeByTrainingId(excludeTrainingId))
    .sort(sortUpcomingTrainings)
    .slice(0, limit)
}

export default selectUpcomingTrainings
