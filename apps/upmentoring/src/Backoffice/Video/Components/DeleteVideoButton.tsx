import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import { QUERY_VIDEOS } from '../Pages/VideosPage';
import ConfirmDeleteButton from '../../../App/Components/Communication/ConfirmDeleteButton';

interface Props {
  videoId: string;
}

const DeleteVideoButton = ({ videoId }: Props) => {
  const history = useHistory();
  const [deleteVideo] = useMutation(DELETE_VIDEO, {
    variables: { videoId },
    refetchQueries: [{ query: QUERY_VIDEOS }],
  });

  const onDeleteVideo = async () => {
    try {
      const response = await deleteVideo();
      response?.data?.deleteVideo?.video?.deletedAt &&
        history.push(`${appPaths.backoffice}${backofficePaths.video}`);
    } catch (e) {
      // empty
    }
  };

  return <ConfirmDeleteButton onConfirm={onDeleteVideo} />;
};

const DELETE_VIDEO = gql`
  mutation deleteVideo($id: ID!) {
    deleteVideo(id: $id) {
      video {
        id
        deletedAt
      }
    }
  }
`;

export default DeleteVideoButton;
