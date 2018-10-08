export const LONDON = 'London'
export const LISBON = 'Lisbon dist.'
export const REACT_NATIVE = 'React Native'
export const PART_TIME = 'Part-time'
export const REACT_BOOTCAMP = 'React bootcamp'
export const ADVANCED_REACT = 'Advanced React'

const emptyTraining = (type, city) => ({
  dates: 'TBC',
  dateStartsOn: null,
  city,
  type,
  cityShortName: city,
  country: '',
  trainingInstanceId: '',
  price: 0,
  ticketName: '',
  currency: '',
})

export const selectTrainings = (type, city) =>
  trainings
    .filter(
      training =>
        (!type || training.type === type) &&
        (!city || training.city === city) &&
        training.dateStartsOn > Date.now()
    )
    .sort((a, b) => a.dateStartsOn > b.dateStartsOn)

export const selectSecondTraining = (type, city) => {
  const trainings = selectTrainings(type, city)
  return trainings.length > 1 ? trainings[1] : emptyTraining(type, city)
}

export const selectFirstTraining = (type, city) => {
  const trainings = selectTrainings(type, city)
  return trainings.length ? trainings[0] : emptyTraining(type, city)
}

export const trainings = [
  {
    dates: '06-08 Dec, 2018',
    dateStartsOn: new Date('06 Dec, 2018'),
    city: LONDON,
    country: 'UK',
    type: ADVANCED_REACT,
    cityShortName: 'London',
    location: 'Publicis.Sapient, Eden House, London',
    pathUrl: '/advanced-react-redux-graphql-bootcamp-london',
    trainingInstanceId: '5ba96ce0ad1320594b25457b',
    price: 1250,
    ticketName: 'Regular ticket',
    currency: 'gbp',
  },
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
  {
    dates: '16 Oct - 15 Nov, 2018',
    dateStartsOn: new Date('16 October, 2018'),
    city: LONDON,
    country: 'UK',
    type: PART_TIME,
    cityShortName: 'London',
    country: 'UK',
    location: 'Makers Academy',
    pathUrl: '/react-redux-training-london',
    trainingInstanceId: '5b1c2197b8340f47a4b8e3e7',
    price: 1166.67,
    ticketName: 'Standard ticket',
    currency: 'gbp',
  },
  {
    dates: '11-17 Nov, 2018',
    dateStartsOn: new Date('2018-11-11T18:00:00'),
    city: LISBON,
    country: 'Portugal',
    type: REACT_BOOTCAMP,
    cityShortName: 'Lisbon',
    country: 'Portugal',
    location: 'Torres Vedras, Portugal',
    pathUrl: '/react-redux-graphql-bootcamp-lisbon/',
    trainingInstanceId: '5b74235404ba003b823513d7',
    price: 1800,
    discountPrice: 1579.17,
    nextDiscountPrice: 1662.5,
    priceGoesUpOn: 'Oct 20th, 2018.',
    ticketName: 'Discount ticket',
    currency: 'gbp',
  },
  // {
  //   dates: '11-13 Oct, 2018',
  //   dateStartsOn: new Date('11 Oct, 2018'),
  //   city: LISBON,
  //   country: 'Portugal',
  //   type: ADVANCED_REACT,
  //   cityShortName: 'Lisbon',
  //   country: 'Portugal',
  //   location: 'Torres Vedras, Portugal',
  //   pathUrl: '/advanced-react-redux-graphql-bootcamp-lisbon',
  //   trainingInstanceId: '5b86df299b6211f511254d97',
  //   price: 1250,
  //   ticketName: 'Regular ticket',
  //   currency: 'gbp',
  // },
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
