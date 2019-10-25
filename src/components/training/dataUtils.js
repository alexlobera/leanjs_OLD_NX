import {
  PART_TIME,
  REACT_BOOTCAMP,
  REACT_FUNDAMENTALS,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  REACT_WORKSHOP,
  GRAPHQL_API,
  MEETUP,
  GRAPHQL_WORKSHOP,
} from '../../config/data'

// const LISBON_LOCATION =
//   'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flocation_lisbon-perede.jpg?alt=media'

// const LONDON_LOCATION =
//   'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flocation_london.jpg?alt=media'

// const BARCELONA_LOCATION =
//   'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flocation_barcelona.jpg?alt=media'

// const AMSTERDAM_LOCATION =
//   'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/location_images%2Flocation_amsterdam.jpg?alt=media'

// const BERLIN_LOCATION =
//   'https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/images%2Flocation_images%2Flocation_berlin.jpg?alt=media'

// const DEFAULT_INFOBOX =
//   'https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/images%2Fdefault_infobox.jpg?alt=media'

export const createTrainingPath = ({ type, city = '', index, slug }) => {
  const i = index > 1 ? index : ''
  switch (type) {
    case PART_TIME:
      return `/react/training/part-time-course/${city.toLowerCase()}/${i}`
    case REACT_BOOTCAMP:
      return `/react/training/bootcamp/${city.toLowerCase()}/${i}`
    case REACT_FUNDAMENTALS:
      return `/react/training/react-fundamentals/${city.toLowerCase()}/${i}`
    case ADVANCED_REACT:
      return `/react/training/advanced/${city.toLowerCase()}/${i}`
    case GRAPHQL_BOOTCAMP:
      return `/graphql/training/bootcamp/${city.toLowerCase()}/${i}`
    case GRAPHQL_API:
      return `/graphql/training/api/${city.toLowerCase()}/${i}`
    case GRAPHQL_WORKSHOP:
      return `/graphql/training/workshops/${slug}/${city.toLowerCase()}/${i}`
    case REACT_WORKSHOP:
      return `/react/training/workshops/${slug}/${city.toLowerCase()}/${i}`
    default:
      return '/'
  }
}

// export const selectLocationImage = ({ city = '' }) => {
//   switch (city) {
//     case 'London':
//       return LONDON_LOCATION
//     case 'Amsterdam':
//       return AMSTERDAM_LOCATION
//     case 'Lisbon':
//       return LISBON_LOCATION
//     case 'Barcelona':
//       return BARCELONA_LOCATION
//     case 'Berlin':
//       return BERLIN_LOCATION
//     default:
//       return DEFAULT_INFOBOX
//   }
// }

export function formatMeetup({ node }) {
  return {
    ...node,
    type: MEETUP,
    toPath: `/community/meetups/${node.id}`,
    // image: selectLocationImage({ city: node.city }),
  }
}
