import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import Header from '../../../App/Components/Layout/Header';
import EventForm, { EVENT_FORM_FRAGMENT } from '../Components/Form/EventForm';
import { QUERY_EVENTS } from './EventsPage';
import { paths as backofficePaths } from '../../../Backoffice';
import { paths as appPaths } from '../../../App';

const CreateEventPage = () => {
  const history = useHistory();
  const [createEvent] = useMutation(CREATE_EVENT);
  const onSubmit = async (variables: any) => {
    try {
      await createEvent({
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
      <Header title="Create Event" />
      <EventForm onSubmit={onSubmit} />
    </>
  );
};

const CREATE_EVENT = gql`
  mutation createEvent($event: CreateEventInput!) {
    createEvent(event: $event) {
      event {
        ...eventFormFragment
      }
    }
  }
  ${EVENT_FORM_FRAGMENT}
`;

export default CreateEventPage;
