import React, { useRef } from 'react';
import { gql, useQuery, useMutation, useApolloClient } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';

import { paths as appPaths } from '../../../App';
import { paths as backofficePaths } from '../../../Backoffice';
import Header from '../../../App/Components/Layout/Header';
import { P } from '../../../App/Components/Text/P';
import VideoForm, { VIDEO_FORM_FRAGMENT } from '../Components/Form/VideoForm';

function UpdateVideoPage() {
  const client = useApolloClient();
  const { videoId } = useParams();
  const history = useHistory();
  const previousAssetRef = useRef();

  const { data, loading, error, startPolling, stopPolling } = useQuery(
    QUERY_VIDEO,
    {
      variables: { id: videoId },
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    },
  );

  const [updateVideo] = useMutation(UPDATE_VIDEO);

  const onSubmit = async video => {
    try {
      await updateVideo({
        variables: {
          video,
        },
      });

      history.push(`${appPaths.backoffice}${backofficePaths.video}`);
      // todo show notification "video was saved"
    } catch (e) { }
  };

  if (error) {
    return <P>There's an error</P>;
  } else if (loading) {
    return <P>...loading</P>;
  } else if (!data.video) {
    return <P>Video not found</P>;
  }
  const { video } = data;
  const videoUrl = video?.asset?.url;
  const posterImageUrl = video?.asset?.posterImageUrl;

  function setVideoUrl(asset) {
    const variables = { id: videoId };
    const queryData = client.readQuery({
      query: QUERY_VIDEO,
      variables,
    });

    if (!asset) {
      previousAssetRef.current = queryData.video.asset;
    }

    client.writeQuery({
      query: QUERY_VIDEO,
      variables,
      data: {
        ...queryData,
        video: {
          ...queryData.video,
          asset,
        },
      },
    });
  }

  function resetVideoAsset() {
    setVideoUrl(previousAssetRef.current);
  }

  function clearVideoAsset() {
    setVideoUrl(null);
  }

  return (
    <>
      <Header title="Edit Video" />
      <VideoForm
        showVideoInput
        initialValues={video}
        onSubmit={onSubmit}
        startPolling={startPolling}
        stopPolling={stopPolling}
        videoUrl={videoUrl}
        posterImageUrl={posterImageUrl}
        clearVideoAsset={clearVideoAsset}
        resetVideoAsset={resetVideoAsset}
      />
    </>
  );
}

const QUERY_VIDEO = gql`
  query video($id: ID!) {
    video(id: $id) {
      ...VideoFormFragment
    }
  }
  ${VIDEO_FORM_FRAGMENT}
`;

const UPDATE_VIDEO = gql`
  mutation updateVideo($video: UpdateVideoInput!) {
    updateVideo(video: $video) {
      video {
        ...VideoFormFragment
      }
    }
  }
  ${VIDEO_FORM_FRAGMENT}
`;

export default UpdateVideoPage;
