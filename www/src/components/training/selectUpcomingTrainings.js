export const TYPENAME_EVENT = 'UpMentoring_Event'
export const TYPENAME_TRAINING_INSTANCE = 'UpMentoring_TrainingInstance'

export const selectNthTraining = ({
  trainings,
  trainingId,
  trainingInstanceTypeName,
  nth = 1,
}) => {
  const filteredTrainings = trainings
    .filter(trainingByInstanceTypeName(trainingInstanceTypeName))
    .filter(filterByTrainingId(trainingId))

  return filteredTrainings.length ? filteredTrainings[nth - 1] : undefined
}

const trainingByInstanceTypeName = trainingInstanceTypeName => training =>
  !trainingInstanceTypeName ||
  training.trainingInstanceTypeName === trainingInstanceTypeName
const trainingByTech = tech => training => !tech || training.tech === tech

const trainingByTypename = typename => training =>
  !typename || training.__typename === typename

const trainingByTrainingType = trainingType => training =>
  !trainingType || training.trainingType === trainingType

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

export const excludeByTrainingType = trainingType => instance =>
  instance && !(trainingType && instance.trainingType === trainingType)

export const filterByTrainingId = trainingId => ({ training } = {}) =>
  !trainingId || (training && training.id && training.id === trainingId)

export const sortUpcomingTrainings = (a, b) =>
  a.startDate > b.startDate ? 1 : -1

function REMOVE_EVENTS_UNTIL_COVID_IS_GONE(training) {
  return training.__typename !== TYPENAME_EVENT
}

export const selectUpcomingTrainings = ({
  city,
  trainingInstanceTypeName,
  tech,
  trainingType,
  typename,
  trainingId,
  excludeTrainingId,
  excludeInstanceId,
  excludeTrainingType,
  trainings = [],
  limit = 9999,
  onlineOrOffline,
}) => {
  if (!trainings || !Array.isArray(trainings)) {
    return []
  }

  return trainings
    .filter(REMOVE_EVENTS_UNTIL_COVID_IS_GONE)
    .filter(trainingByTrainingType(trainingType))
    .filter(trainingByInstanceTypeName(trainingInstanceTypeName))
    .filter(trainingByTech(tech))
    .filter(trainingByTypename(typename))
    .filter(trainingByCity({ city, onlineOrOffline }))
    .filter(excludeByInstanceId(excludeInstanceId))
    .filter(filterByTrainingId(trainingId))
    .filter(excludeByTrainingId(excludeTrainingId))
    .filter(excludeByTrainingType(excludeTrainingType))
    .sort(sortUpcomingTrainings)
    .slice(0, limit)
}

export default selectUpcomingTrainings
