import {
  curriedSelectTrainings,
  LONDON,
  REACT_BOOTCAMP,
  LISBON,
  REACT_NATIVE,
  PART_TIME,
} from './data'

describe('selectTrainings', () => {
  const upcomingLisbonBootcamp = {
    dates: '11-17 Nov, 2020',
    dateStartsOn: new Date('2020-11-11T18:00:00'),
    city: LISBON,
    country: 'Portugal',
    type: REACT_BOOTCAMP,
    cityShortName: 'Lisbon',
    country: 'Portugal',
    location:
      'Torres Vedras LabCenter, Rua José Eduardo César n. 6, 2560-680, Torres Vedras, Portugal ',
    pathUrl: '/react-redux-graphql-bootcamp-lisbon/',
    trainingInstanceId: '5b74235404ba003b823513d7',
    price: 1800,
    discountPrice: 1662.5,
    priceGoesUpOn: new Date('Nov 7th, 2020.'),
    currency: 'gbp',
  }

  const upcomingLondonBootcamp = {
    dates: '2-8 Dec, 2020',
    dateStartsOn: new Date('2 December, 2028'),
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
    priceGoesUpOn: new Date('Nov 2nd, 2020.'),
    currency: 'gbp',
  }

  const upcomingLondonPartTime = {
    dates: '16 Oct - 15 Nov, 2020',
    dateStartsOn: new Date('16 October, 2020'),
    city: LONDON,
    country: 'UK',
    type: PART_TIME,
    cityShortName: 'London',
    country: 'UK',
    location: 'Makers Academy',
    pathUrl: '/react-redux-training-london',
    trainingInstanceId: '5b1c2197b8340f47a4b8e3e7',
    price: 1166.67,
    currency: 'gbp',
  }

  const pastTraining = {
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
    currency: 'gbp',
  }

  const data = [
    upcomingLondonBootcamp,
    pastTraining,
    upcomingLisbonBootcamp,
    upcomingLondonPartTime,
  ]

  it('should return an array of trainings based on type and location', () => {
    expect(curriedSelectTrainings({ data })(REACT_BOOTCAMP, LONDON)).toEqual([
      upcomingLondonBootcamp,
    ])
  })
  it('should not return a training if the dateStartsOn is in the past', () => {
    expect(curriedSelectTrainings({ data })()).toContainEqual(
      upcomingLondonBootcamp
    )
    expect(curriedSelectTrainings({ data })()).toContainEqual(
      upcomingLisbonBootcamp
    )
    expect(curriedSelectTrainings({ data })()).toContainEqual(
      upcomingLondonPartTime
    )
    expect(curriedSelectTrainings({ data })()).not.toContainEqual(
      pastTraining[0]
    )
  })
})
