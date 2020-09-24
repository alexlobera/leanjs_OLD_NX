import memoize from 'lodash.memoize';
import {
  formatSubmitCustomFields,
  formatInitialValueCustomFields,
} from '../../../../utils';

export const transformSubmitValues = (onSubmit: any) => ({
  __typename,
  videos,
  customFieldsValues,
  ...trainingUnit
}: any) => {
  if (videos && videos.map) {
    trainingUnit.videoIds = videos.map(({ value }: any) => value);
  }

  trainingUnit.customFieldsValues = formatSubmitCustomFields(
    customFieldsValues
  );
  return onSubmit(trainingUnit);
};

export const formatInitialValues = memoize((values, allVideos) => {
  const { id, ...rest } = values || {};
  const published = rest.published || {};
  // const objectives = published.objectives;
  const videoList = allVideos || [];

  const videos = published?.videoIds?.reduce((acc: any, videoId: string) => {
    const video = videoList.find(
      (videoItem: any) => videoItem.value === videoId
    );
    if (video) {
      acc.push(video);
    }

    return acc;
  }, []);

  const customFieldsValues = formatInitialValueCustomFields(
    published.customFieldsValues
  );

  return {
    id,
    ...published,
    customFieldsValues,
    // objectives,
    videos,
  };
});
