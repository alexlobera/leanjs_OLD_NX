import moment from 'moment';
import memoize from 'lodash.memoize';

import { twoDigits, createUTCDate } from '../../../../App/Utils';
import { isOnline } from '../../../../App/Components/Forms/utils';

export const transformSubmitValues = (onSubmit: any) => ({
  __typename,
  endTime,
  startTime,
  startDate,
  endDate,
  ...data
}: any) => {
  const { __typename: _, ...meetup } = data.meetup || {};
  const { utcOffset } = data;
  const meetupId = parseInt(meetup.id, 10);
  data.startDate = createUTCDate(startDate, startTime, utcOffset);
  data.endDate = createUTCDate(endDate, endTime, utcOffset);
  data.standardPrice = Number(data.standardPrice);
  data.isOnline = isOnline(data);
  data.speakers = (data.speakers || []).map(
    ({ __typename: __, ...speakersRest }: any) => ({
      ...speakersRest,
      links: (speakersRest.links || []).map(
        ({ __typename: ___, ...restLink }: any) => restLink
      ),
    })
  );
  data.sponsors = (data.sponsors || []).map(
    ({ __typename: __, ...sponsorsRest }: any) => sponsorsRest
  );
  data.agenda = (data.agenda || []).map(
    ({ __typename: __, ...agendaRest }: any) => ({
      ...agendaRest,
      sessions: (agendaRest.sessions || []).map(
        ({ __typename: ___, ...sessionRest }: any) => sessionRest
      ),
    })
  );

  if (meetupId) {
    data.meetup = {
      ...meetup,
      id: meetupId.toString(),
    };
  } else {
    data.meetup = null;
  }
  return onSubmit({ event: data });
};

export const formatInitialValues = memoize(
  ({ published: immutablePublished, ...values }) => {
    const published = { ...immutablePublished };
    if (!published) {
      return;
    }

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

    if (published.isOnline) {
      published.isOnline = [true];
    }

    if (!published.venueName) {
      published.venueName = 'To be confirmed';
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

    return { ...values, ...published };
  }
);
