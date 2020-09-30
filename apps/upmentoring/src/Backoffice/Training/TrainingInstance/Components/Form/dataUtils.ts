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
    ({ __typename: __, ...coach }: any) => coach
  );

  return onSubmit(trainingInstance);
};

export const formatInitialValues = memoize((values) => {
  if (!values) {
    return;
  }

  const { published: immutablePublish, id, trainingId } = values;
  const published = { ...immutablePublish };

  if (published.startDate) {
    const startDate = moment
      .utc(published.startDate)
      .utcOffset(published.utcOffset || 0);

    published.startDate = {
      year: startDate.year(),
      month: twoDigits(startDate.month()),
      day: twoDigits(startDate.date()),
    };

    published.startTime = {
      hour: twoDigits(startDate.hour()),
      minute: twoDigits(startDate.minutes()),
    };
  }

  if (!published.venueName) {
    published.venueName = 'To be confirmed';
  }

  if (published.isOnline) {
    published.isOnline = [true];
  }

  if (published.endDate) {
    const endDate = moment
      .utc(published.endDate)
      .utcOffset(published.utcOffset || 0);
    published.endDate = {
      year: endDate.year(),
      month: twoDigits(endDate.month()),
      day: twoDigits(endDate.date()),
    };

    published.endTime = {
      hour: twoDigits(endDate.hour()),
      minute: twoDigits(endDate.minutes()),
    };
  }

  return { ...published, ...(id ? { id } : { trainingId }) };
});
