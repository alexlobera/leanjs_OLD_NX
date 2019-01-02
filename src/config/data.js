import {
  LONDON_MEETUP,
  LISBON_MEETUP,
  BCN_MEETUP,
  RICHARD,
  ALEX,
} from './images'

export const LONDON = 'London'
export const LISBON = 'Lisbon dist.'
export const BARCELONA = 'Barcelona'
export const REACT_NATIVE = 'React Native'
export const PART_TIME = 'Part-time'
export const REACT_BOOTCAMP = 'React bootcamp'
export const ADVANCED_REACT = 'Advanced React'

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

export const trainings = [
  {
    dates: 'Jan 27 to Feb 2, 2019',
    dateStartsOn: new Date('2019-01-27T16:00:00'),
    city: LISBON,
    country: 'Portugal',
    type: REACT_BOOTCAMP,
    cityShortName: 'Lisbon',
    country: 'Portugal',
    location: 'TBC',
    pathUrl: '/react-redux-graphql-bootcamp-lisbon/',
    trainingInstanceId: '5be3358f1307cabce7761591',
    price: 1800,
    discountPrice: 1662.5,
    priceGoesUpOn: new Date('Jan 15, 2019'),
    currency: 'gbp',
  },
  {
    dates: 'Jan 31 to Feb 2, 2019',
    dateStartsOn: new Date('31 Jan, 2019'),
    city: LISBON,
    country: 'Portugal',
    type: ADVANCED_REACT,
    cityShortName: 'Lisbon',
    location: 'TBC',
    pathUrl: '/advanced-react-redux-graphql-bootcamp-lisbon',
    trainingInstanceId: '5bec7b5e33b9da5035c01817',
    price: 1250,
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
    location:
      'Torres Vedras LabCenter, Rua José Eduardo César n. 6, 2560-680, Torres Vedras, Portugal ',
    pathUrl: '/react-redux-graphql-bootcamp-lisbon/',
    trainingInstanceId: '5b74235404ba003b823513d7',
    price: 1800,
    discountPrice: 1662.5,
    priceGoesUpOn: 'Nov 7th, 2018.',
    currency: 'gbp',
  },
  {
    dates: '06-08 Dec, 2018',
    dateStartsOn: new Date('06 Dec, 2018'),
    city: LONDON,
    country: 'UK',
    type: ADVANCED_REACT,
    cityShortName: 'London',
    location: '146 Brick Lane, London',
    pathUrl: '/advanced-react-redux-graphql-bootcamp-london',
    trainingInstanceId: '5ba96ce0ad1320594b25457b',
    price: 1250,
    currency: 'gbp',
  },
  {
    dates: '2-8 Dec, 2018',
    dateStartsOn: new Date('2 December, 2018'),
    city: LONDON,
    country: 'UK',
    type: REACT_BOOTCAMP,
    cityShortName: 'London',
    country: 'UK',
    location: '146 Brick Lane, London',
    pathUrl: '/react-redux-graphql-bootcamp-london',
    trainingInstanceId: '5b98707c2bbd86e1b6c3c322',
    price: 1800,
    priceGoesUpOn: new Date('Nov 24, 2018.'),
    currency: 'gbp',
  },
  {
    dates: '22 Jan - 21 Feb, 2019',
    dateStartsOn: new Date('22 Jan, 2019'),
    city: LONDON,
    country: 'UK',
    type: PART_TIME,
    cityShortName: 'London',
    country: 'UK',
    location: 'Makers Academy',
    pathUrl: '/react-redux-training-london',
    trainingInstanceId: '5be3366f1307cabce7761593',
    price: 1166.67,
    discountPrice: 1000,
    priceGoesUpOn: new Date('Jan 12, 2019'),
    currency: 'gbp',
  },
  {
    dates: 'Oct 22, 2018',
    dateStartsOn: new Date('22 Oct, 2018'),
    city: LISBON,
    country: 'Portugal',
    type: ADVANCED_REACT,
    cityShortName: 'Lisbon',
    country: 'Portugal',
    location: 'Lisbon, Portugal',
    pathUrl: '/advanced-react-redux-graphql-bootcamp-lisbon',
    trainingInstanceId: '5ab6244a88546e46fa2b2601',
    price: 332.5,
    currency: 'eur',
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
    discountPrice: 375,
    priceGoesUpOn: 'September 14th, 2018.',
    currency: 'gbp',
  },
  {
    dates: '23 Mar - 13 Apr, 2019',
    dateStartsOn: new Date('23 Mar, 2019'),
    city: BARCELONA,
    country: 'BCN',
    type: PART_TIME,
    cityShortName: 'Barcelona',
    country: 'Spain',
    location: 'TBD',
    pathUrl: '/react-redux-training-barcelona',
    trainingInstanceId: '5c2a0d5e2ab1035da3138220',
    price: 1166.67,
    discountPrice: 829.17,
    priceGoesUpOn: new Date('Feb 28, 2019'),
    currency: 'eur',
  },
]

const meetups = [
  {
    dateStartsOn: new Date('15 Jan, 2019'),
    cityShortName: 'Barcelona',
    country: 'ES',
    url: 'https://www.meetup.com/JavaScript-Barcelona/events/257156744',
    title: 'Meet the Gatsby team!!',
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
