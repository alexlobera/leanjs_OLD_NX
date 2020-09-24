import React from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import { QUERY_EVENTS } from '../Pages/EventsPage';
import ConfirmDeleteButton from '../../../App/Components/Communication/ConfirmDeleteButton';

interface Props {
  eventId: string;
}

const DeleteEventButton = ({ eventId }: Props) => {
  const history = useHistory();
  const [deleteEvent] = useMutation(DELETE_EVENT, {
    variables: { id: eventId },
    refetchQueries: [{ query: QUERY_EVENTS }],
  });

  const onDeleteEvent = async () => {
    try {
      const response = await deleteEvent();
      response?.data?.deleteEvent?.event?.deletedAt &&
        history.push(`${appPaths.backoffice}${backofficePaths.event}`);
    } catch (e) {
      // empty
    }
  };

  return <ConfirmDeleteButton onConfirm={onDeleteEvent} />;
};

const DELETE_EVENT = gql`
  mutation deleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      event {
        id
        deletedAt
      }
    }
  }
`;

export default DeleteEventButton;
