export const selectNthTraining = ({ trainings, type, nth = 1 }) => {
  const typeTrainings = type
    ? trainings.filter(trainingByType(type))
    : trainings
  return typeTrainings.length ? typeTrainings[nth - 1] : undefined
}
const trainingByType = type => training => !type || training.type === type

const trainingByTypes = types => training =>
  types && types.length ? types.find(type => type === training.type) : true

const trainingByCity = city => training =>
  !city || (training.city && training.city.toLowerCase()) === city.toLowerCase()

export const getNextTrainingByTrainingId = ({ trainings, trainingId }) =>
  trainings.find(({ training } = {}) => training && training.id === trainingId)

export const selectTrainingByInstanceId = ({ trainings, id }) =>
  trainings.find(training => training.id === id)

export const excludeByTrainingId = trainingId => ({ training = {} }) =>
  !training.id || training.id !== trainingId

export const filterByTrainingId = trainingId => ({ training } = {}) =>
  !trainingId || (training && training.id && training.id === trainingId)

export const selectUpcomingTrainings = ({
  city,
  types,
  type,
  trainingId,
  excludeTrainingId,
  trainings = [],
  limit = 9999,
}) => {
  const typesArray = types ? types : type ? [type] : []
  return trainings
    .filter(trainingByTypes(typesArray))
    .filter(filterByTrainingId(trainingId))
    .filter(trainingByCity(city))
    .filter(excludeByTrainingId(excludeTrainingId))
    .slice(0, limit)
}

export default selectUpcomingTrainings
