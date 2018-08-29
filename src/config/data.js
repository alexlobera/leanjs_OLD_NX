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

export const selectTrainings = (type, city) => trainings
    .filter(training => (!type || training.type === type) && (!city || training.city === city))
    .sort((a, b) => a.dateStartsOn > b.dateStartsOn)

export const selectSecondTraining = (type, city) => {
    const trainings = selectTrainings(type, city)
    return trainings.length > 1 ?
        trainings[1]
        : emptyTraining(type, city)
}

export const selectFirstTraining = (type, city) => {
    const trainings = selectTrainings(type, city)
    return trainings.length ?
        trainings[0]
        : emptyTraining(type, city)
}

const trainings = [
    {
        dates: '16 Oct - 15 Nov, 2018',
        dateStartsOn: new Date('16 October, 2018'),
        city: LONDON,
        country: 'UK',
        type: PART_TIME,
        cityShortName: 'London',
        country: 'UK',
        location: '',
        pathUrl: '/react-redux-training-london',
        trainingInstanceId: '5b1c2197b8340f47a4b8e3e7',
        price: 1166.67,
        discountPrice: 829.17,
        nextDiscountPrice: 1000,
        priceGoesUpOn: 'Sept 20th, 2018.',
        ticketName: 'Early bird ticket',
        currency: 'gbp',
    },
    {
        dates: '7-13 Oct, 2018',
        dateStartsOn: new Date('7 October, 2018'),
        city: LISBON,
        country: 'Portugal',
        type: REACT_BOOTCAMP,
        cityShortName: 'Lisbon',
        country: 'Portugal',
        location: 'Torres Vedras, Portugal',
        pathUrl: '/react-redux-graphql-bootcamp-lisbon',
        trainingInstanceId: '5b699e97aff9b939d15e50a1',
        price: 1800,
        discountPrice: 1450,
        nextDiscountPrice: 1579.17,
        priceGoesUpOn: 'Sept 7th, 2018.',
        ticketName: 'Early bird ticket',
        currency: 'gbp',
    },
    {
        dates: '11-17 Nov, 2018',
        dateStartsOn: new Date('11 Nov, 2018'),
        city: LISBON,
        country: 'Portugal',
        type: REACT_BOOTCAMP,
        cityShortName: 'Lisbon',
        country: 'Portugal',
        location: 'Torres Vedras, Portugal',
        pathUrl: '/react-redux-graphql-bootcamp-lisbon/2',
        trainingInstanceId: '5b74235404ba003b823513d7',
        price: 1800,
        discountPrice: 1450,
        nextDiscountPrice: 1579.17,
        priceGoesUpOn: 'Sept 24th, 2018.',
        ticketName: 'Early bird ticket',
        currency: 'gbp',
    },
    {
        dates: '11-13 Oct, 2018',
        dateStartsOn: new Date('11 Oct, 2018'),
        city: LISBON,
        country: 'Portugal',
        type: ADVANCED_REACT,
        cityShortName: 'Lisbon',
        country: 'Portugal',
        location: 'Torres Vedras, Portugal',
        pathUrl: '/advanced-react-redux-graphql-bootcamp-lisbon',
        trainingInstanceId: '5b86df299b6211f511254d97',
        price: 1250,
        ticketName: 'Regular ticket',
        currency: 'gbp',
    },
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
        discountPrice: 332.5,
        nextDiscountPrice: 375,
        priceGoesUpOn: 'August 31st, 2018.',
        ticketName: 'Early bird ticket',
        currency: 'gbp',
    },
]
