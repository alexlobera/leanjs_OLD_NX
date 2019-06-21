import React from 'react'
import styled from 'styled-components'

import {
  REACT_NATIVE,
  REACT_BOOTCAMP,
  PART_TIME,
  ADVANCED_REACT,
  GRAPHQL_BOOTCAMP,
  GRAPHQL_API,
  GRAPHQL_CLIENT,
  ONE_DAY_WORKSHOP,
  MEETUP,
} from '../../config/data'
import {
  DARK_GREY,
  YELLOW,
  GRAPHQL_PINK,
  GREEN,
  MEETUP_RED,
  BLUE,
} from '../../config/styles'

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
      return BLUE
    case PART_TIME:
      return DARK_GREY
    case REACT_NATIVE:
      return GREEN
    case ADVANCED_REACT:
      return YELLOW
    case GRAPHQL_BOOTCAMP:
      return GRAPHQL_PINK
    case GRAPHQL_API:
      return YELLOW
    case GRAPHQL_CLIENT:
    case ONE_DAY_WORKSHOP:
      return GREEN
    case MEETUP:
      return MEETUP_RED
    default:
      return BLUE
  }
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

export const formatUTC = (
  utcDate,
  utcOffset = 60,
  format = "D MMM 'YYYY",
  day = 0
) => {
  const targetTime = new Date(utcDate),
    now = new Date(),
    minutesToMilliseconds = 60000
  const localOffsetInMs = now.getTimezoneOffset() * minutesToMilliseconds
  const utcOffsetInMs = utcOffset * minutesToMilliseconds
  const dayOffset = day * 1440 * minutesToMilliseconds
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

export const TrainingDateByDay = ({ training = {}, day = 0 }) =>
  training.startDate
    ? formatUTC(training.startDate, training.utcOffset, 'D MMM', day)
    : ''

function twoDigits(number) {
  return ('0' + number).slice(-2)
}
