import memoize from 'lodash.memoize';

export const transformSubmitValues = (onSubmit: any) => ({
  __typename,
  asset,
  tags,
  isPrivate,
  ...rest
}: any) => {
  const video = {
    ...rest,
    tags: tags ? tags.map(({ value }: any) => value) : [],
    isPrivate: isVideoPrivate(isPrivate, asset),
  };

  return onSubmit(video);
};

function isVideoPrivate(isPrivate: any, asset: any) {
  if (typeof isPrivate === 'boolean') {
    return isPrivate;
  }
  return asset && asset.isPrivate;
}

export const formatInitialValues = memoize((values) => {
  const isPrivate = values && isVideoPrivate(values.isPrivate, values.asset);

  return {
    ...values,
    tags: values?.tags
      ? values.tags.map((tag: any) => ({ value: tag, title: tag }))
      : [],
    isPrivate,
  };
});
