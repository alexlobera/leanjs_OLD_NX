import {
  selectTrainings,
  LONDON,
  ADVANCED_REACT,
  REACT_BOOTCAMP,
  LISBON,
} from './data'

describe('selectTrainings', () => {
  let londonBootcamp = [
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
  it('should return an array of trainings based on type and location', () => {
    expect(selectTrainings(REACT_BOOTCAMP, LONDON)).toEqual(londonBootcamp)
  })
  it('should not return a training if the dateStartsOn is in the past', () => {})
})
