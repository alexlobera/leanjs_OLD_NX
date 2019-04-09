import {
  LONDON_MEETUP,
  LISBON_MEETUP,
  BCN_MEETUP,
  AMSTERDAM_MEETUP,
  RICHARD,
  ALEX,
  HORACIO,
  LISBON_LOCATION,
  LONDON_LOCATION,
  BARCELONA_LOCATION,
  AMSTERDAM_LOCATION,
} from './images'

export const LONDON = 'London'
export const LISBON = 'Lisbon'
export const BARCELONA = 'Barcelona'
export const AMSTERDAM = 'Amsterdam'
export const REACT_NATIVE = 'React Native'
export const PART_TIME = 'Part-time'
export const REACT_BOOTCAMP = 'React Bootcamp'
export const ADVANCED_REACT = 'Advanced React'
export const GRAPHQL_BOOTCAMP = 'GraphQL Bootcamp'

/*
Boocamp prices:
1450
1579.17 -> Nov 23
1662.5 -> Dec 14
1800 -> Jan 15

Part-time prices
829.17
1000 -> Jan 17
1166.67 -> Jan 12
*/

const emptyTraining = (type, city) => ({
  dates: 'TBC',
  dateStartsOn: null,
  city,
  type,
  cityShortName: city,
  country: '',
  trainingInstanceId: '',
  price: 0,
  currency: '',
})

const upcomingPartTimes = [
  {
    dates: 'April 23 - May 23, 2019',
    dateStartsOn: new Date('April 23, 2019'),
    city: LONDON,
    country: 'UK',
    type: PART_TIME,
    cityShortName: 'London',
    location: 'TBD',
    timings: "6pm - 9pm Tuesday's & Thursday's",
    pathUrl: '/react-redux-training-london',
    trainingInstanceId: '5c90f64dcb52b3bf20685e71',
    price: 1166.67,
    discountPrice: 829.17,
    priceGoesUpOn: new Date('April 5, 2019'),
    currency: 'gbp',
    image: LONDON_LOCATION,
    mapLink: '',
  },
  {
    dates: 'April 26 - 24 May, 2019',
    dateStartsOn: new Date('26 April, 2019'),
    city: AMSTERDAM,
    country: 'NL',
    type: PART_TIME,
    cityShortName: 'Amsterdam',
    country: 'Holland',
    location: 'TBD',
    timings: "9am - 6pm Friday's",
    pathUrl: '/react-redux-training-amsterdam',
    trainingInstanceId: '5c90fdcacb52b3bf20685e72',
    price: 1166.67,
    discountPrice: 829.17,
    priceGoesUpOn: new Date('April 10, 2019'),
    currency: 'eur',
    image: AMSTERDAM_LOCATION,
    mapLink: '',
  },
  {
    dates: 'May 28 - June 27, 2019',
    dateStartsOn: new Date('May 28, 2019'),
    city: LONDON,
    country: 'UK',
    type: PART_TIME,
    cityShortName: 'London',
    location: 'TBD',
    timings: "6pm - 9pm Tuesday's & Thursday's",
    pathUrl: '/react-redux-training-london/2',
    trainingInstanceId: '5c9a0815dc3c0e1978c0fbb3',
    price: 1166.67,
    discountPrice: 829.17,
    priceGoesUpOn: new Date('May 1, 2019'),
    currency: 'gbp',
    image: LONDON_LOCATION,
    mapLink: '',
  },
]

const upcomingBootCamps = [
  {
    dates: '24-30 July, 2019',
    dateStartsOn: new Date('2019-06-24T18:00:00'),
    city: LONDON,
    country: 'UK',
    type: GRAPHQL_BOOTCAMP,
    cityShortName: 'London',
    location: 'Publicis.Sapient - Eden House, 8 Spital Square',
    pathUrl: '/graphql-bootcamp-london/',
    trainingInstanceId: '5c6ca2dfef523c695ce4aaa4',
    price: 1800,
    currency: 'gbp',
    image: LONDON_LOCATION,
    mapLink: 'https://goo.gl/maps/jjX9zs5Ags32',
  },
  {
    dates: '7-13 July, 2019',
    dateStartsOn: new Date('2019-07-07T18:00:00'),
    city: LONDON,
    country: 'UK',
    type: REACT_BOOTCAMP,
    cityShortName: 'London',
    location: 'TBD',
    pathUrl: '/react-redux-graphql-bootcamp-london/2',
    trainingInstanceId: '5c9a0675dc3c0e1978c0fbb2',
    price: 1800,
    discountPrice: 1450,
    priceGoesUpOn: new Date('June 1, 2019'),
    currency: 'gbp',
    image: LONDON_LOCATION,
    mapLink: 'https://goo.gl/maps/jjX9zs5Ags32',
  },
  {
    dates: '12-18 May, 2019',
    dateStartsOn: new Date('2019-05-12T18:00:00'),
    city: LONDON,
    country: 'UK',
    type: REACT_BOOTCAMP,
    cityShortName: 'London',
    location: 'Publicis.Sapient - Eden House, 8 Spital Square',
    pathUrl: '/react-redux-graphql-bootcamp-london/',
    trainingInstanceId: '5cacbaec80c1577e379810df',
    price: 1800,
    currency: 'gbp',
    image: LONDON_LOCATION,
    mapLink: 'https://goo.gl/maps/jjX9zs5Ags32',
  },
]

const upcomingAdvanced = [
  {
    dates: '15-18 May, 2019',
    dateStartsOn: new Date('2019-05-15T09:00:00'),
    city: LONDON,
    country: 'UK',
    type: ADVANCED_REACT,
    cityShortName: 'London',
    location: 'Publicis.Sapient - Eden House, 8 Spital Square',
    pathUrl: '/advanced-react-redux-graphql-bootcamp-london',
    trainingInstanceId: '5cacbe8580c1577e379810e0',
    price: 1250,
    currency: 'gbp',
    image: LONDON_LOCATION,
  },
  {
    dates: '10-13 July, 2019',
    dateStartsOn: new Date('2019-07-10T09:00:00'),
    city: LONDON,
    country: 'UK',
    type: ADVANCED_REACT,
    cityShortName: 'London',
    location: 'Publicis.Sapient - Eden House, 8 Spital Square',
    pathUrl: '/advanced-react-redux-graphql-bootcamp-london/2',
    trainingInstanceId: '5cacbfae80c1577e379810e1',
    price: 1250,
    currency: 'gbp',
    image: LONDON_LOCATION,
  },
]
export const trainings = [
  ...upcomingPartTimes,
  ...upcomingBootCamps,
  ...upcomingAdvanced,
]

const meetups = [
  {
    dateStartsOn: new Date('15 Jan, 2019'),
    cityShortName: 'Barcelona',
    country: 'ES',
    url: 'https://www.meetup.com/JavaScript-Barcelona/events/257156744',
    title: 'Meet the Gatsby team!',
    imgUrl: BCN_MEETUP,
  },
  {
    dateStartsOn: new Date('16 Jan, 2019'),
    cityShortName: 'Lisbon',
    country: 'PT',
    url: 'https://www.meetup.com/JavaScript-Lisbon/events/257640193/',
    title: 'Getting started with React Hooks ',
    imgUrl: LISBON_MEETUP,
  },
  {
    dateStartsOn: new Date('21 Feb, 2019'),
    cityShortName: 'London',
    country: 'UK',
    url: 'https://www.meetup.com/JavaScript-London/events/257660896',
    title: 'Functional programming in JavaScript',
    imgUrl: LONDON_MEETUP,
  },
  {
    dateStartsOn: new Date('18 Feb, 2019'),
    cityShortName: 'Amsterdam',
    country: 'NL',
    url: 'https://www.meetup.com/JavaScript-Amsterdam/events/257709061/',
    title:
      'Learn JavaScript Testing Principles By Building Your Own Testing Library',
    imgUrl: AMSTERDAM_MEETUP,
  },
]

export const blogAuthors = {
  richard: {
    imgSrc: RICHARD,
    fullname: 'Richard Moss',
    path: 'richard-moss',
  },
  alex: {
    imgSrc: ALEX,
    fullname: 'Alex Lobera',
    path: 'alex-lobera',
  },
  horacio: {
    imgSrc: HORACIO,
    fullname: 'Horacio Herrera',
    path: 'horacio-herrera',
  },
}

export const instagramPictures = [
  {
    pageUrl: 'https://www.instagram.com/p/BlKzTaDhgHi/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F36817558_450106245453815_6112091121972674560_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bk75sNohLYj/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F35617654_170833687116966_1947517169063428096_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bk5YOLChqtU/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F36086456_1480216008745939_24472745127444480_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bez93FGjzF_/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26865648_169528813824877_4406314323148800000_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BegfOKJhqlI/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26864897_328580144320192_5121053768045035520_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BetL4W9jgH-/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26864416_129494071196900_7973896072546222080_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BehzsERhFD-/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26297885_475227026212742_5117213139569475584_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bm6aQgUBf5I/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F39082080_461163161052325_8607426366004002816_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bn03JlsBzha/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F40837332_948936048642799_1172628414218297748_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bm5oSYThgdh/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F38906658_416479198875897_7532493989954453504_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bm1fSwqhbs6/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F39509245_240024560031837_3622283981887635456_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BmzERnchwWI/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F38910064_2053848154901051_8646084443217330176_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/Bmv2RtLh-ni/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F39134109_227966924551660_991928276173717504_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BmgFNYuAId9/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F38254367_252576538717173_2313109170460557312_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BmGyp4KhDPq/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F37866739_2091795601072327_8113206459233206272_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BejRn8khgOr/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F26864283_388884551554676_8478013482342547456_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BkvoOb4B_CT/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F36160171_379799175876625_8073726428358639616_n.jpg?alt=media',
  },
  {
    pageUrl: 'https://www.instagram.com/p/BRYf6cZhEci/',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/instagram%2F17125812_1272222992812942_3290496564270727168_n.jpg?alt=media',
  },
]

export const CONVINCE_THE_BOSS_PDF =
  'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/pdf%2FConvince%20the%20boss%20-%20ReactJS%20Academy.pdf?alt=media'

export const curriedSelectTrainings = ({ data } = {}) => (type, city) =>
  [...data]
    .filter(
      training =>
        (!type || training.type === type) &&
        (!city || training.city === city) &&
        training.dateStartsOn > Date.now()
    )
    .sort((a, b) => a.dateStartsOn - b.dateStartsOn) || []

export const selectTrainings = curriedSelectTrainings({ data: trainings })

export const selectSecondTraining = (type, city) => {
  const trainings = selectTrainings(type, city)
  return trainings.length > 1 ? trainings[1] : emptyTraining(type, city)
}

export const selectFirstTraining = (type, city) => {
  const trainings = selectTrainings(type, city)
  return trainings.length ? trainings[0] : emptyTraining(type, city)
}

export const selectMeetups = () =>
  meetups
    .filter(meetup => meetup.dateStartsOn > Date.now())
    .sort((a, b) => a.dateStartsOn > b.dateStartsOn)
