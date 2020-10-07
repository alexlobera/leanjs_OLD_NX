import React from 'react';
import styled from 'styled-components';

import {
  MEETUP,
  TECH_REACT,
  TECH_GRAPHQL,
  TECH_JAMSTACK,
  TRAINING_TYPE_FULL_CURRICULUM,
  TRAINING_TYPE_HALF_CURRICULUM,
  TRAINING_TYPE_WORKSHOP,
  TRAINING_TYPE_TRIAL,
} from '../../config/data';
import {
  GRAPHQL_PINK,
  MEETUP_RED,
  BLUE,
  JAMSTACK_GREEN,
} from '../../config/styles';

export const SCREEN_XS_MAX = '767px';
export const SCREEN_SM_MIN = '768px';
export const SCREEN_SM_MAX = '991px';
export const SCREEN_MD_MIN = '992px';
export const SCREEN_MD_MAX = '1199px';
export const SCREEN_LG_MIN = '1200px';

const Components = ({ children, ...props }) =>
  React.Children.map(children, (child) =>
    React.cloneElement(child, {
      className: props.className,
    })
  );

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

export const getVariantProps = (variants, variantProps) =>
  variants && variants.reduce
    ? variants.reduce(
        (acc, variant) => ({
          ...acc,
          ...(variantProps[variant] || {}),
        }),
        {}
      )
    : variantProps[variants || 'default'] || {};

export const selectTechColor = ({ tech } = {}) => {
  switch (tech) {
    case TECH_REACT:
      return BLUE;
    case TECH_GRAPHQL:
      return GRAPHQL_PINK;
    case TECH_JAMSTACK:
      return JAMSTACK_GREEN;
    case MEETUP:
      return MEETUP_RED;
    default:
      return BLUE;
  }
};

export const selectBorderStyle = ({ trainingType } = {}) => {
  if (trainingType === TRAINING_TYPE_FULL_CURRICULUM) {
    return 'solid';
  } else if (trainingType === TRAINING_TYPE_HALF_CURRICULUM) {
    return 'dashed';
  } else if (trainingType === TRAINING_TYPE_WORKSHOP) {
    return 'dotted';
  } else if (trainingType === TRAINING_TYPE_TRIAL) {
    return 'double';
  } else {
    return 'solid';
  }
};

export const createMetas = ({
  title,
  description,
  subtitle = '',
  imageFullPublicUrl = '',
  ogType = 'article',
  twitterSite = '@reactgqlacademy',
  authorTwitter = '',
}) => {
  const metaDescription = description || subtitle || title;
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
    authorTwitter ? (
      <meta
        key={'twitter:creator'}
        name="twitter:creator"
        content={authorTwitter}
      />
    ) : null,
  ].filter((m) => m);
};

export const HideComponentsUsingCss = styled(Components)`
    ${(props) =>
      props.xs
        ? `
        @media (max-width: ${SCREEN_XS_MAX}) {
            display:none !important;
        }
    `
        : ''}
    ${(props) =>
      props.sm
        ? `
        @media (min-width:${SCREEN_SM_MIN}) and (max-width: ${SCREEN_SM_MAX}) {
            display:none !important;
        }
    `
        : ''}
    ${(props) =>
      props.md
        ? `
        @media (min-width: ${SCREEN_MD_MIN}) and (max-width: ${SCREEN_MD_MAX}) {
            display:none !important;
        }
    `
        : ''}
    ${(props) =>
      props.lg
        ? `
       @media (min-width: ${SCREEN_LG_MIN}) {
        display: none !important;
       }
    `
        : ''}
`;

export const DisplayComponentsUsingCss = styled(Components)`
    display:none !important;
    ${(props) =>
      props.xs
        ? `
        @media (max-width: ${SCREEN_XS_MAX}) {
            display:block !important;
        }
    `
        : ''}
    ${(props) =>
      props.sm
        ? `
        @media (min-width:${SCREEN_SM_MIN}) and (max-width: ${SCREEN_SM_MAX}) {
            display:block !important;
        }
    `
        : ''}
    ${(props) =>
      props.md
        ? `
        @media (min-width: ${SCREEN_MD_MIN}) and (max-width: ${SCREEN_MD_MAX}) {
            display:block !important;
        }
    `
        : ''}
    ${(props) =>
      props.lg
        ? `
       @media (min-width: ${SCREEN_LG_MIN}) {
        display: block !important;
       }
    `
        : ''}
`;

function getOffsetDate(utcDate, utcOffset = 60, offsetDays = 0) {
  if (!utcDate) {
    return null;
  }
  const targetTime = new Date(utcDate),
    minutesToMilliseconds = 60000,
    minutesToDays = 1440;
  const localOffsetInMs =
    targetTime.getTimezoneOffset() * minutesToMilliseconds;
  const utcOffsetInMs = utcOffset * minutesToMilliseconds;
  const dayOffset = offsetDays * minutesToDays * minutesToMilliseconds;
  const offsetDate = new Date(
    targetTime.getTime() + dayOffset + localOffsetInMs + utcOffsetInMs
  );

  return offsetDate;
}

function formatDate(date, format) {
  if (!date) {
    return '';
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
    mm = twoDigits(date.getMinutes()) || '';
  switch (format) {
    case 'D MMM':
      return `${D} ${MMM}`;
    case 'MMM':
      return `${MMM}`;
    case 'HH:mm':
      return `${HH}:${mm}`;
    case "D MMM 'YYYY":
      return `${D} ${MMM} ${YYYY}`;
    default:
      return '';
  }
}

export const formatUTC = (
  utcDate,
  utcOffset = 60,
  format = "D MMM 'YYYY",
  offsetDays = 0
) => formatDate(getOffsetDate(utcDate, utcOffset, offsetDays), format);

const days = {
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
  Sun: 0,
};

export const trainingDateByDay = ({ training = {}, dayOffset = 0 }) => {
  let daysOfTheWeek;
  if (training.daysOfTheWeek && training.daysOfTheWeek.length) {
    daysOfTheWeek = new Set(training.daysOfTheWeek.map((day) => days[day]));
  }
  if (daysOfTheWeek) {
    let validDaysCounter = 0;
    const day = dayOffset + 1;
    for (
      let iterationDate = getOffsetDate(training.startDate, training.utcOffset);
      iterationDate <= getOffsetDate(training.endDate, training.utcOffset);
      iterationDate.setDate(iterationDate.getDate() + 1)
    ) {
      if (daysOfTheWeek.has(iterationDate.getDay())) {
        validDaysCounter++;
        if (validDaysCounter === day) {
          return formatDate(iterationDate, 'D MMM');
        }
      }
    }
  } else {
    return formatUTC(
      training.startDate,
      training.utcOffset,
      'D MMM',
      dayOffset
    );
  }
};

export const trainingTimings = ({ training, endAfterXHours }) =>
  training && training.startDate
    ? `${
        training.startDate &&
        `, ${formatUTC(training.startDate, training.utcOffset, 'HH:mm')}`
      } - ${
        training?.startDate && endAfterXHours
          ? formatDate(
              getOffsetDate(training?.startDate, training.utcOffset).addHours(
                endAfterXHours
              ),
              'HH:mm'
            )
          : training?.endDate
          ? formatUTC(training.endDate, training.utcOffset, 'HH:mm')
          : ''
      }`
    : '';

function twoDigits(number, includeSymbol = false) {
  const intNumber = parseInt(number);
  const twoDigitNumber = ('0' + Math.abs(intNumber)).slice(-2);

  return includeSymbol
    ? intNumber < 0
      ? `- ${twoDigitNumber} `
      : `+ ${twoDigitNumber} `
    : twoDigitNumber;
}

export const trainingDateTime = ({
  dayOffset,
  training = {},
  endAfterXHours = 0,
}) =>
  `${trainingDateByDay({ training, dayOffset })} ${
    training ? trainingTimings({ training, endAfterXHours }) : ''
  } `;

const daysOfTheWeekEnglish = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export function dayOfTheWeekFromDate(dateString) {
  const date = new Date(dateString);
  const dayOfTheWeek = daysOfTheWeekEnglish[date.getDay()];

  return dayOfTheWeek || '';
}

export function dayToPlural(dayOfTheWeek) {
  switch (dayOfTheWeek) {
    case 'Mon':
      return `${daysOfTheWeekEnglish[1]} s`;
    case 'Tue':
      return `${daysOfTheWeekEnglish[2]} s`;
    case 'Wed':
      return `${daysOfTheWeekEnglish[3]} s`;
    case 'Thu':
      return `${daysOfTheWeekEnglish[4]} s`;
    case 'Fri':
      return `${daysOfTheWeekEnglish[5]} s`;
    case 'Sat':
      return `${daysOfTheWeekEnglish[6]} s`;
    case 'Sun':
      return `${daysOfTheWeekEnglish[0]} s`;
  }
}

export function convertMinutesToHoursAndMinutes(
  totalMinutes,
  useTwoDigits = true
) {
  const intMinutes = parseInt(totalMinutes);
  const hours = Math.floor(intMinutes / 60);
  const minutes = intMinutes % 60;

  return {
    hours: useTwoDigits ? twoDigits(hours, true) : `${hours} `,
    minutes: useTwoDigits ? twoDigits(minutes) : `${minutes} `,
  };
}

export function getRandom(arr, n) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
