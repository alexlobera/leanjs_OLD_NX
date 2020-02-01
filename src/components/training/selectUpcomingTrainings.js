export const selectNthTraining = ({ trainings, type, nth = 1 }) => {
  const typeTrainings = type
    ? trainings.filter(trainingByType(type))
    : trainings
  return typeTrainings.length ? typeTrainings[nth - 1] : undefined
}
const trainingByType = type => training => !type || training.type === type

const trainingByTypes = types => training =>
  types && types.length ? types.find(type => type === training.type) : true

// const trainingByTypes = types => {
//   let typeFound = {}
//   return training =>
//     types && types.length
//       ? types.find(type => {
//           if (typeFound[type]) {
//             return false
//           } else {
//             typeFound[type] = type === training.type

//             return typeFound[type]
//           }
//         })
//       : true
// }

const trainingByCity = ({ city, onlineOrOffline = false } = {}) => training => {
  if (!city) {
    return true
  }

  const cityLowerCase = city.toLowerCase()
  //   const trainingCityLowerCase =
  //     training && training.city && training.city.toLowerCase()
  const isSameCity =
    training && training.city && training.city.toLowerCase() === cityLowerCase
  //   training.city.toLowerCase().replace(' ', '-') ===
  //     cityLowerCase.replace(' ', '-')

  return onlineOrOffline && (training.isOnline || isSameCity)
    ? true
    : cityLowerCase === 'online' && training.isOnline
    ? true
    : cityLowerCase !== 'online' && isSameCity && !training.isOnline
    ? true
    : false

  //   return city.toLowerCase() === 'online'
  //     ? training.isOnline
  //     : (!training.isOnline &&
  //         training.city &&
  //         training.city.toLowerCase().replace(' ', '-')) ===
  //         city.toLowerCase().replace(' ', '-')
}

export const getNextTrainingByTrainingId = ({ trainings, trainingId }) =>
  trainings.find(({ training } = {}) => training && training.id === trainingId)

export const selectTrainingByInstanceId = ({ trainings, id }) =>
  trainings.find(training => training.id === id)

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
