import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import Header from '../../../App/Components/Layout/Header';
import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import VideoForm, { VIDEO_FORM_FRAGMENT } from '../Components/Form/VideoForm';

function CreateVideoPage() {
  const history = useHistory();
  const [createVideo] = useMutation(CREATE_VIDEO);

  const onSubmit = async (video) => {
    try {
      const { data } = await createVideo({
        variables: {
          video,
        },
      });

      history.push(
        `${appPaths.backoffice}${backofficePaths.video}/${data.createVideo.video.id}${backofficePaths.editVideo}`
      );
    } catch (e) {
      // empty
    }
  };

  return (
    <>
      <Header title="Create a new video" />
      <VideoForm showVideoInput={false} onSubmit={onSubmit} />
    </>
  );
}

const CREATE_VIDEO = gql`
  mutation createVideo($video: CreateVideoInput!) {
    createVideo(video: $video) {
      video {
        ...VideoFormFragment
      }
    }
  }
  ${VIDEO_FORM_FRAGMENT}
`;

export default CreateVideoPage;
