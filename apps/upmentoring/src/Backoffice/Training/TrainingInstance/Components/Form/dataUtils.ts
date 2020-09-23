import moment from 'moment';
import memoize from 'lodash.memoize';

import { twoDigits, createUTCDate } from '../../../../../App/Utils';
import { isOnline } from '../../../../../App/Components/Forms/utils';

export const transformSubmitValues = (onSubmit: any) => ({
  __typename,
  endTime,
  startTime,
  startDate,
  endDate,
  training,
  ...trainingInstance
}: any) => {
  const { utcOffset } = trainingInstance;
  trainingInstance.startDate = createUTCDate(startDate, startTime, utcOffset);
  trainingInstance.endDate = createUTCDate(endDate, endTime, utcOffset);
  trainingInstance.standardPrice = Number(trainingInstance.standardPrice);

  trainingInstance.isOnline = isOnline(trainingInstance);

  trainingInstance.coaches = trainingInstance.coaches.map(
    ({ __typename: __, ...coach }: any) => coach,
  );

  return onSubmit(trainingInstance);
};

export const formatInitialValues = memoize(({ ...values }) => {
  if (!values) {
    return;
  }

  if (values.startDate) {
    const startDate = moment
      .utc(values.startDate)
      .utcOffset(values.utcOffset || 0);

    values.startDate = {
      year: startDate.year(),
      month: twoDigits(startDate.month()),
      day: twoDigits(startDate.date()),
    };

    values.startTime = {
      hour: twoDigits(startDate.hour()),
      minute: twoDigits(startDate.minutes()),
    };
  }

  if (!values.venueName) {
    values.venueName = 'To be confirmed';
  }

  if (values.isOnline) {
    values.isOnline = [true];
  }

  if (values.endDate) {
    const endDate = moment.utc(values.endDate).utcOffset(values.utcOffset || 0);
    values.endDate = {
      year: endDate.year(),
      month: twoDigits(endDate.month()),
      day: twoDigits(endDate.date()),
    };

    values.endTime = {
      hour: twoDigits(endDate.hour()),
      minute: twoDigits(endDate.minutes()),
    };
  }

  return values;
});
