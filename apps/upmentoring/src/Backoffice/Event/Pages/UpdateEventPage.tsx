import React, { useState } from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';

import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import { P } from '../../../App/Components/Text/P';
import Header from '../../../App/Components/Layout/Header';
import EventForm, { EVENT_FORM_FRAGMENT } from '../Components/Form/EventForm';
import { QUERY_EVENTS } from './EventsPage';

const UpdateEventPage = () => {
  const history = useHistory();
  const { eventId } = useParams();
  const { data, loading, error } = useQuery(QUERY_EVENT, {
    variables: { id: eventId },
  });
  const [updateEvent] = useMutation(UPDATE_EVENT);

  const onSubmit = async (variables: any) => {
    try {
      const a = await updateEvent({
        refetchQueries: [{ query: QUERY_EVENTS }],
        variables,
      });

      history.push(`${appPaths.backoffice}${backofficePaths.event}`);
    } catch (e) {
      // empty
    }
  };

  return (
    <>
      <Header title="Update event" />
      {error ? (
        <P>There's an error</P>
      ) : loading ? (
        <P>...loading</P>
      ) : (
        <>
          <EventForm onSubmit={onSubmit} initialValues={data.event} />
        </>
      )}
    </>
  );
};

const QUERY_EVENT = gql`
  query event($id: ID!) {
    event(id: $id) {
      ...eventFormFragment
    }
  }
  ${EVENT_FORM_FRAGMENT}
`;

const UPDATE_EVENT = gql`
  mutation updateEvent($event: UpdateEventInput!) {
    updateEvent(event: $event) {
      event {
        ...eventFormFragment
      }
    }
  }
  ${EVENT_FORM_FRAGMENT}
`;

export default UpdateEventPage;
