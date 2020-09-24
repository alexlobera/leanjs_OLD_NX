import moment from 'moment';

import { CurrencyEnum } from '../../Backoffice/Payment/GraphQL';

/* styling */
const themed = (key: string) => (props: any) => props.theme[key];

// export function styled<Props extends object>(Component: any) {
//   return function(strings: any, ...args: FlattenInterpolation<Props>) {
//     return styledComponents(Component)<Props>(
//       strings,
//       ...args,
//       Component.getStyledSystem ? Component.getStyledSystem() : undefined
//     );
//   };
// }

export function twoDigits(num: string | number) {
  return ('0' + num).slice(-2);
}

interface Date {
  year: string;
  month: string;
  day: string;
}

interface Time {
  hour: string;
  minute: string;
}

export function createUTCDate(date: Date, time: Time, utcOffset: number) {
  const { year = '', month = '', day = '' } = date || {};
  const { hour = '', minute = '' } = time || {};
  const h = utcOffset / 60;
  const offsetHour = Math.floor(h);
  const m = (h - offsetHour) * 60;
  const offsetMinutes = Math.round(m);

  const utcDate = `${year}-${twoDigits(parseInt(month, 10) + 1)}-${twoDigits(
    day
  )}T${twoDigits(hour)}:${twoDigits(minute)}:00.00${
    utcOffset >= 0 ? '+' : '-'
  }${twoDigits(Math.abs(offsetHour))}:${twoDigits(offsetMinutes)}`;

  return utcDate;
}

// Return new object based on existing object without a particular key
const omitProperty = (obj: any, key: string) => {
  const { [key]: omit, ...rest } = obj;
  return rest;
};

/* Currency format */
interface PriceFormatArgs {
  currency: CurrencyEnum;
  amount: number;
}
const priceFormat = ({ currency, amount }: PriceFormatArgs) => {
  return new Intl.NumberFormat(
    currency === CurrencyEnum.GBP
      ? 'en-GB'
      : currency === CurrencyEnum.EUR
      ? 'de-DE'
      : currency === CurrencyEnum.USD
      ? 'en-US'
      : currency === CurrencyEnum.AUD
      ? 'en-AU'
      : ' ',
    {
      style: 'currency',
      currency:
        currency === CurrencyEnum.GBP
          ? CurrencyEnum.GBP
          : currency === CurrencyEnum.EUR
          ? CurrencyEnum.EUR
          : currency === CurrencyEnum.USD
          ? CurrencyEnum.USD
          : currency === CurrencyEnum.AUD
          ? CurrencyEnum.AUD
          : ' ',
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }
  ).format(amount / 100);
};

export const formatUTC = (
  utcDate?: string,
  utcOffset?: number,
  format = "D MMM 'YYYY"
) =>
  utcDate
    ? moment
        .utc(utcDate)
        .utcOffset(utcOffset || 1)
        .format(format)
    : '';

const removeKeyFromObject = (key: string, obj: any) => {
  const { [key]: removed, ...rest } = obj;
  return rest;
};

export function removeLastDirectoryPath(path: string) {
  const pathWithouTrailingSlash = path.replace(/\/$/, '');

  return pathWithouTrailingSlash.substring(
    0,
    pathWithouTrailingSlash.lastIndexOf('/')
  );
}

export { themed, priceFormat, omitProperty, removeKeyFromObject };
