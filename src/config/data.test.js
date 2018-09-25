import {
  selectTrainings,
  LONDON,
  ADVANCED_REACT,
  REACT_BOOTCAMP,
  LISBON,
  REACT_NATIVE,
} from './data'

describe('selectTrainings', () => {
  const londonBootcamp = [
    {
      dates: '3-8 Dec, 2018',
      dateStartsOn: new Date('3 December, 2018'),
      city: LONDON,
      country: 'UK',
      type: REACT_BOOTCAMP,
      cityShortName: 'London',
      country: 'UK',
      location: '8 Spital Square E1 6DU, London',
      pathUrl: '/react-redux-graphql-bootcamp-london',
      trainingInstanceId: '5b98707c2bbd86e1b6c3c322',
      price: 1800,
      discountPrice: 1450,
      nextDiscountPrice: 1579.17,
      priceGoesUpOn: 'Nov 2nd, 2018.',
      ticketName: 'Early bird ticket',
      currency: 'gbp',
    },
  ]
  const pastTraining = [
    {
      dates: '17 September, 2018',
      dateStartsOn: new Date('17 Sep, 2018'),
      city: LONDON,
      country: 'UK',
      type: REACT_NATIVE,
      cityShortName: 'London',
      country: 'UK',
      location: '8 Spital Square E1 6DU, London',
      pathUrl: '/react-native-bootcamp-london',
      trainingInstanceId: '5b68c95eaff9b939d15e509c',
      price: 415.83,
      discountPrice: 375,
      priceGoesUpOn: 'September 14th, 2018.',
      ticketName: 'Early bird ticket',
      currency: 'gbp',
    },
  ]
  it('should return an array of trainings based on type and location', () => {
    expect(selectTrainings(REACT_BOOTCAMP, LONDON)).toEqual(londonBootcamp)
  })
  it('should not return a training if the dateStartsOn is in the past', () => {
    expect(selectTrainings()).toContainEqual(londonBootcamp[0])
    expect(selectTrainings()).toContainEqual(pastTraining[0])
  })
})
