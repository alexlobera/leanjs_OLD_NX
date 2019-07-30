import React from 'react'
import styled from 'styled-components'

import {
  REACT_BOOTCAMP,
  PART_TIME,
  ADVANCED_REACT,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  GRAPHQL_WORKSHOP,
  ONE_DAY_WORKSHOP,
  MEETUP,
} from '../../config/data'
import { GRAPHQL_PINK, MEETUP_RED, BLUE } from '../../config/styles'

export const SCREEN_XS_MAX = '767px'
export const SCREEN_SM_MIN = '768px'
export const SCREEN_SM_MAX = '991px'
export const SCREEN_MD_MIN = '992px'
export const SCREEN_MD_MAX = '1199px'
export const SCREEN_LG_MIN = '1200px'

const Components = ({ children, ...props }) =>
  React.Children.map(children, child =>
    React.cloneElement(child, {
      className: props.className,
    })
  )

export const selectTypeColor = type => {
  switch (type) {
    case REACT_BOOTCAMP:
    case PART_TIME:
    case ADVANCED_REACT:
    case REACT_WORKSHOP:
    case ONE_DAY_WORKSHOP:
    case REACT_FUNDAMENTALS:
      return BLUE
    case GRAPHQL_BOOTCAMP:
    case GRAPHQL_API:
    case GRAPHQL_CLIENT:
    case GRAPHQL_WORKSHOP:
      return GRAPHQL_PINK
    case MEETUP:
      return MEETUP_RED
    default:
      return BLUE
  }
}

export const selectBorderStyle = type => {
  switch (type) {
    case REACT_BOOTCAMP:
    case GRAPHQL_BOOTCAMP:
      return 'solid'
    case PART_TIME:
      return 'double'
    case ADVANCED_REACT:
    case GRAPHQL_CLIENT:
    case GRAPHQL_WORKSHOP:
      return 'dashed'
    case REACT_FUNDAMENTALS:
      return 'dotted'
    case REACT_WORKSHOP:
    case ONE_DAY_WORKSHOP:
    case GRAPHQL_API:
      return 'double'
    default:
      return 'solid'
  }
}

export const createSocialMetas = metas => [
  <meta key={'og:title'} property="og:title" content={metas.title} />,
  <meta
    key={'og:description'}
    property="og:description"
    content={metas.description}
  />,
  <meta key={'og:type'} property="og:type" content="article" />,
  <meta key={'og:image'} property="og:image" content={metas.image} />,
  <meta key={'twitter:site'} name="twitter:site" content="@reactgqlacademy" />,
  <meta key={'twitter:title'} name="twitter:title" content={metas.title} />,
  <meta
    key={'twitter:description'}
    name="twitter:description"
    content={metas.description}
  />,
  <meta
    key={'twitter:creator'}
    name="twitter:creator"
    content="@reactgqlacademy"
  />,
]

export const HideComponentsUsingCss = styled(Components)`
    ${props =>
      props.xs
        ? `
        @media (max-width: ${SCREEN_XS_MAX}) {
            display:none !important;
        }
    `
        : ''}
    ${props =>
      props.sm
        ? `
        @media (min-width:${SCREEN_SM_MIN}) and (max-width: ${SCREEN_SM_MAX}) {
            display:none !important;
        }
    `
        : ''}
    ${props =>
      props.md
        ? `
        @media (min-width: ${SCREEN_MD_MIN}) and (max-width: ${SCREEN_MD_MAX}) {
            display:none !important;
        }
    `
        : ''}
    ${props =>
      props.lg
        ? `
       @media (min-width: ${SCREEN_LG_MIN}) {
        display: none !important;
       }
    `
        : ''}
`

export const DisplayComponentsUsingCss = styled(Components)`
    display:none !important;
    ${props =>
      props.xs
        ? `
        @media (max-width: ${SCREEN_XS_MAX}) {
            display:block !important;
        }
    `
        : ''}
    ${props =>
      props.sm
        ? `
        @media (min-width:${SCREEN_SM_MIN}) and (max-width: ${SCREEN_SM_MAX}) {
            display:block !important;
        }
    `
        : ''}
    ${props =>
      props.md
        ? `
        @media (min-width: ${SCREEN_MD_MIN}) and (max-width: ${SCREEN_MD_MAX}) {
            display:block !important;
        }
    `
        : ''}
    ${props =>
      props.lg
        ? `
       @media (min-width: ${SCREEN_LG_MIN}) {
        display: block !important;
       }
    `
        : ''}
`

export const formatUTC = (
  utcDate,
  utcOffset = 60,
  format = "D MMM 'YYYY",
  offsetDays = 0
) => {
  const targetTime = new Date(utcDate),
    now = new Date(),
    minutesToMilliseconds = 60000,
    minutesToDays = 1440
  const localOffsetInMs = now.getTimezoneOffset() * minutesToMilliseconds
  const utcOffsetInMs = utcOffset * minutesToMilliseconds
  const dayOffset = offsetDays * minutesToDays * minutesToMilliseconds
  const offsetDate = new Date(
    targetTime.getTime() + dayOffset + localOffsetInMs + utcOffsetInMs
  )
  const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    D = offsetDate.getDate() || '',
    MMM = months[offsetDate.getMonth()] || '',
    YYYY = offsetDate.getFullYear() || '',
    HH = twoDigits(offsetDate.getHours()) || '',
    mm = twoDigits(offsetDate.getMinutes()) || ''
  switch (format) {
    case 'D MMM':
      return `${D} ${MMM}`
    case 'MMM':
      return `${MMM}`
    case 'HH:mm':
      return `${HH}:${mm}`
    case "D MMM 'YYYY":
      return `${D} ${MMM} ${YYYY}`
    default:
      return ''
  }
}

export const trainingDateByDay = ({ training = {}, day = 0 }) =>
  training.startDate
    ? formatUTC(training.startDate, training.utcOffset, 'D MMM', day)
    : ''

export const trainingTimings = ({ training = {} }) =>
  `${(training.startDate &&
    formatUTC(training.startDate, training.utcOffset, 'HH:mm')) ||
    '09:00'} - ${(training.endDate &&
    formatUTC(training.endDate, training.utcOffset, 'HH:mm')) ||
    '18:30'}`

function twoDigits(number) {
  return ('0' + number).slice(-2)
}

export const trainingTime = ({ day, training = {}, type }) =>
  `${trainingDateByDay({ training, day })} ${
    day === 0 && type !== ADVANCED_REACT
      ? '18:30 - 21:00'
      : trainingTimings({ training })
  }`

export function titleCase(txt) {
  return txt
    ? txt.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    : ''
}
