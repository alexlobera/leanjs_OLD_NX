import {
  TRAINING_TYPE_FIELD_ID,
  TRAINING_TECH_FIELD_ID,
  FULL_TIME,
  PART_TIME,
  TRAINING_TYPE_TRIAL,
  REACT_BOOTCAMP_ID,
  ADVANCED_REACT_ID,
  REACT_FUNDAMENTALS_ID,
  GRAPHQL_API_ID,
  TRAINING_TYPE_FULL_CURRICULUM,
  TRAINING_TYPE_HALF_CURRICULUM,
  TRAINING_TYPE_WORKSHOP,
} from './data';

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
    MM = date.getMonth() + 1,
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
    case 'D/MM/YYYY':
      return `${D}/${MM}/${YYYY}`;
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

export const trainingTimings = ({ training }) =>
  training && training.startDate
    ? `${
        training.startDate &&
        `, ${formatUTC(training.startDate, training.utcOffset, 'HH:mm')}`
      } - ${
        training.endDate &&
        formatUTC(training.endDate, training.utcOffset, 'HH:mm')
      }`
    : '';

function twoDigits(number, includeSymbol = false) {
  const intNumber = parseInt(number);
  const twoDigitNumber = ('0' + Math.abs(intNumber)).slice(-2);

  return includeSymbol
    ? intNumber < 0
      ? `-${twoDigitNumber}`
      : `+${twoDigitNumber}`
    : twoDigitNumber;
}

export const trainingDateTime = ({
  dayOffset,
  training = {},
  preEvening = false,
}) =>
  `${trainingDateByDay({ training, dayOffset })} ${
    dayOffset === 0 && preEvening
      ? '18:30 - 21:00'
      : training
      ? trainingTimings({ training })
      : ''
  }`;

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
      return `${daysOfTheWeekEnglish[1]}s`;
    case 'Tue':
      return `${daysOfTheWeekEnglish[2]}s`;
    case 'Wed':
      return `${daysOfTheWeekEnglish[3]}s`;
    case 'Thu':
      return `${daysOfTheWeekEnglish[4]}s`;
    case 'Fri':
      return `${daysOfTheWeekEnglish[5]}s`;
    case 'Sat':
      return `${daysOfTheWeekEnglish[6]}s`;
    case 'Sun':
      return `${daysOfTheWeekEnglish[0]}s`;
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
    hours: useTwoDigits ? twoDigits(hours, true) : `${hours}`,
    minutes: useTwoDigits ? twoDigits(minutes) : `${minutes}`,
  };
}

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

export const createTrainingPath = ({
  trainingId,
  city = '',
  index = 0,
  slug,
  trainingType,
  tech,
  trainingInstanceTypeName,
}) => {
  const indexPath = index > 1 ? `${index}/` : '';
  const cityPath = city ? `${city.toLowerCase().replace(' ', '-')}/` : '';
  const cityPathI = `${cityPath}${indexPath}`;
  if (
    trainingId === REACT_BOOTCAMP_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/react/training/bootcamp/${cityPathI}`;
  } else if (
    trainingId === REACT_BOOTCAMP_ID &&
    trainingInstanceTypeName === PART_TIME
  ) {
    return `/react/training/part-time-bundle/${cityPathI}`;
  } else if (
    trainingId === ADVANCED_REACT_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/react/training/advanced/${cityPathI}`;
  } else if (
    trainingId === ADVANCED_REACT_ID &&
    trainingInstanceTypeName === PART_TIME
  ) {
    return `/react/training/advanced-part-time/${cityPathI}`;
  } else if (
    trainingId === REACT_FUNDAMENTALS_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/react/training/fundamentals/${cityPathI}`;
  } else if (
    trainingId === REACT_FUNDAMENTALS_ID &&
    trainingInstanceTypeName === PART_TIME
  ) {
    return `/react/training/fundamentals-part-time/${cityPathI}`;
  } else if (
    trainingInstanceTypeName === FULL_TIME &&
    trainingType === TRAINING_TYPE_WORKSHOP
  ) {
    return `/${tech}/training/workshops/${slug}/${cityPathI}`;
  } else if (
    trainingInstanceTypeName === PART_TIME &&
    trainingType === TRAINING_TYPE_WORKSHOP
  ) {
    return `/${tech}/training/${slug}-part-time/${cityPathI}`;
  } else if (trainingType === TRAINING_TYPE_TRIAL) {
    return `/${tech}/training/${slug}/${cityPathI}`;
  } else if (
    trainingId === GRAPHQL_API_ID &&
    trainingInstanceTypeName === FULL_TIME
  ) {
    return `/graphql/training/api/${cityPathI}`;
  }
};

export const formatTraining = ({
  baseUrl = 'https://reactgraphql.academy',
} = {}) => {
  const cityIndex = {};

  return ({ node: { published, ...restNode } }) => {
    const { training } = restNode;
    if (!training || !training.published) {
      return;
    }
    const { title, trainingInstanceType, city = '', isOnline } = published;
    const {
      published: { slug },
      id: trainingId,
    } = training || {};
    const remoteOrCity = isOnline ? 'remote' : city;

    const trainingType = training.published.customFieldsValues.find(
      ({ fieldId }) => fieldId === TRAINING_TYPE_FIELD_ID
    ).values[0];

    const tech = training.published.customFieldsValues.find(
      ({ fieldId }) => fieldId === TRAINING_TECH_FIELD_ID
    ).values[0];

    const trainingInstanceTypeName =
      trainingInstanceType && trainingInstanceType.name;

    const key = `${remoteOrCity}${slug}${trainingInstanceTypeName}`;
    cityIndex[key] = cityIndex[key] ? cityIndex[key] + 1 : 1;

    return {
      ...published,
      ...restNode,
      trainingInstanceTypeName,
      title,
      trainingType,
      tech,
      training: {
        ...training,
        toPath:
          baseUrl +
          createTrainingPath({
            trainingId,
            slug,
            trainingType,
            tech,
            trainingInstanceTypeName,
          }),
      },
      toPath:
        baseUrl +
        createTrainingPath({
          city: remoteOrCity,
          index: cityIndex[key],
          trainingId,
          slug,
          trainingInstanceTypeName,
          trainingType,
          tech,
        }),
    };
  };
};

export function getTrainingTimings({ training }) {
  if (!training) {
    return null;
  }

  const formatedDate = formatUTC(
    training.startDate,
    training.utcOffset,
    'D MMM'
  );
  const dayMonth = formatedDate ? formatedDate.split(' ') : ['', ''];
  const startDate = new Date(training.startDate);
  const endDate = new Date(training.endDate);
  const daysCoefficient = 86400000; // 1000 * 60 * 60 * 24
  const hourCoefficient = 3600000; // 1000 * 60 * 60
  const days = Math.round((endDate - startDate) / daysCoefficient) + 1;
  const hours = Math.round((endDate - startDate) / hourCoefficient);

  const duration =
    hours < 1
      ? `1 hour`
      : hours < 7
      ? `${hours} hours`
      : days < 2
      ? '1 day'
      : days < 3
      ? `2 days`
      : days < 5
      ? `3 days`
      : days < 10
      ? '1 week'
      : days < 15
      ? '2 weeks'
      : days < 22
      ? '3 weeks'
      : days < 30
      ? '4 weeks'
      : days < 36
      ? '5 weeks'
      : days < 43
      ? '6 weeks'
      : days < 50
      ? '7 weeks'
      : '';

  return { duration, dayMonth, days };
}
