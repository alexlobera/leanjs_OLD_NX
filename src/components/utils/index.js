import React from 'react'
import styled from 'styled-components'

import {
  REACT_BOOTCAMP,
  REACT_PART_TIME,
  ADVANCED_REACT,
  REACT_WORKSHOP,
  REACT_FUNDAMENTALS,
  GRAPHQL_PART_TIME,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  GRAPHQL_WORKSHOP,
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

export const getVariantProps = (variants, variantProps) =>
  variants && variants.reduce
    ? variants.reduce(
        (acc, variant) => ({
          ...acc,
          ...(variantProps[variant] || {}),
        }),
        {}
      )
    : variantProps[variants || 'default'] || {}

export const selectTypeColor = type => {
  switch (type) {
    case REACT_BOOTCAMP:
    case REACT_PART_TIME:
    case ADVANCED_REACT:
    case REACT_WORKSHOP:
    case REACT_FUNDAMENTALS:
      return BLUE
    case GRAPHQL_PART_TIME:
    case GRAPHQL_BOOTCAMP:
    case GRAPHQL_API:
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
    case GRAPHQL_PART_TIME:
    case REACT_PART_TIME:
      return 'double'
    case REACT_FUNDAMENTALS:
    case ADVANCED_REACT:
    case GRAPHQL_API:
      return 'dashed'
    case REACT_WORKSHOP:
    case GRAPHQL_WORKSHOP:
      return 'dotted'
    default:
      return 'solid'
  }
}

export const createMetas = ({
  title,
  description,
  subtitle,
  imageFullPublicUrl, // previously named metaImageFullPublicUrl and image
  ogType = 'article',
  twitterSite = '@reactgqlacademy',
  twitterCreator, // previously named authorTwitter
}) => {
  const metaDescription = description || subtitle || title
  return [
    <meta name="description" content={metaDescription} />,
    <meta key={'og:title'} property="og:title" content={title} />,
    <meta
      key={'og:description'}
      property="og:description"
      content={metaDescription}
    />,
    ogType ? (
      <meta key={'og:type'} property="og:type" content={ogType} />
    ) : null,
    imageFullPublicUrl ? (
      <meta key={'og:image'} property="og:image" content={imageFullPublicUrl} />
    ) : null,
    <meta name="twitter:card" content="summary_large_image" />,
    twitterSite ? (
      <meta key={'twitter:site'} name="twitter:site" content={twitterSite} />
    ) : null,
    <meta key={'twitter:title'} name="twitter:title" content={title} />,
    <meta name="twitter:image" content={imageFullPublicUrl} />,
    <meta
      key={'twitter:description'}
      name="twitter:description"
      content={metaDescription}
    />,
    twitterCreator ? (
      <meta
        key={'twitter:creator'}
        name="twitter:creator"
        content={twitterCreator}
      />
    ) : null,
  ].filter(m => m)
}

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

function getOffsetDate(utcDate, utcOffset = 60, offsetDays = 0) {
  if (!utcDate) {
    return null
  }
  const targetTime = new Date(utcDate),
    minutesToMilliseconds = 60000,
    minutesToDays = 1440
  const localOffsetInMs = targetTime.getTimezoneOffset() * minutesToMilliseconds
  const utcOffsetInMs = utcOffset * minutesToMilliseconds
  const dayOffset = offsetDays * minutesToDays * minutesToMilliseconds
  const offsetDate = new Date(
    targetTime.getTime() + dayOffset + localOffsetInMs + utcOffsetInMs
  )

  return offsetDate
}

function formatDate(date, format) {
  if (!date) {
    return ''
  }
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
    D = date.getDate() || '',
    MMM = months[date.getMonth()] || '',
    YYYY = date.getFullYear() || '',
    HH = twoDigits(date.getHours()) || '',
    mm = twoDigits(date.getMinutes()) || ''
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

export const formatUTC = (
  utcDate,
  utcOffset = 60,
  format = "D MMM 'YYYY",
  offsetDays = 0
) => formatDate(getOffsetDate(utcDate, utcOffset, offsetDays), format)

const days = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
  Sun: 0,
}

export const trainingDateByDay = ({ training = {}, dayOffset = 0 }) => {
  let daysOfTheWeek
  if (training.daysOfTheWeek && training.daysOfTheWeek.length) {
    daysOfTheWeek = new Set(training.daysOfTheWeek.map(day => days[day]))
  }
  if (daysOfTheWeek) {
    let validDaysCounter = 0
    const day = dayOffset + 1
    for (
      let iterationDate = getOffsetDate(training.startDate, training.utcOffset);
      iterationDate <= getOffsetDate(training.endDate, training.utcOffset);
      iterationDate.setDate(iterationDate.getDate() + 1)
    ) {
      if (daysOfTheWeek.has(iterationDate.getDay())) {
        validDaysCounter++
        if (validDaysCounter === day) {
          return formatDate(iterationDate, 'D MMM')
        }
      }
    }
  } else {
    return formatUTC(training.startDate, training.utcOffset, 'D MMM', dayOffset)
  }
}

export const trainingTimings = ({ training = {} }) =>
  `${(training.startDate &&
    formatUTC(training.startDate, training.utcOffset, 'HH:mm')) ||
    '09:00'} - ${(training.endDate &&
    formatUTC(training.endDate, training.utcOffset, 'HH:mm')) ||
    '18:00'}`

function twoDigits(number, includeSymbol = false) {
  const intNumber = parseInt(number)
  const twoDigitNumber = ('0' + Math.abs(intNumber)).slice(-2)

  return includeSymbol
    ? intNumber < 0
      ? `-${twoDigitNumber}`
      : `+${twoDigitNumber}`
    : twoDigitNumber
}

export const trainingDateTime = ({
  dayOffset,
  training = {},
  preEvening = false,
}) =>
  `${trainingDateByDay({ training, dayOffset })} ${
    dayOffset === 0 && preEvening
      ? '18:30 - 21:00'
      : trainingTimings({ training })
  }`

export function convertMinutesToHoursAndMinutes(
  totalMinutes,
  useTwoDigits = true
) {
  const intMinutes = parseInt(totalMinutes)
  const hours = Math.floor(intMinutes / 60)
  const minutes = intMinutes % 60

  return {
    hours: useTwoDigits ? twoDigits(hours, true) : `${hours}`,
    minutes: useTwoDigits ? twoDigits(minutes) : `${minutes}`,
  }
}
