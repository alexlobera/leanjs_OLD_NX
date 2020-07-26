import React from 'react';

export const createMetas = ({
  title,
  description,
  subtitle = '',
  imageFullPublicUrl = '',
  ogType = 'article',
  twitterSite = '@reactgqlacademy',
  authorTwitter = '',
}) => {
  const metaDescription = description || subtitle || title;
  return [
    <meta name="description" content={metaDescription} />,
    <meta key={'og:title'} property="og:title" content={title} />,
    <meta
      key={'og:description'}
      property="og:description"
      content={metaDescription}
    />,
    ogType ? (
      <meta key={'og:type'} property="og:type" content={ogType} />
    ) : null,
    imageFullPublicUrl ? (
      <meta key={'og:image'} property="og:image" content={imageFullPublicUrl} />
    ) : null,
    <meta name="twitter:card" content="summary_large_image" />,
    twitterSite ? (
      <meta key={'twitter:site'} name="twitter:site" content={twitterSite} />
    ) : null,
    <meta key={'twitter:title'} name="twitter:title" content={title} />,
    <meta name="twitter:image" content={imageFullPublicUrl} />,
    <meta
      key={'twitter:description'}
      name="twitter:description"
      content={metaDescription}
    />,
    authorTwitter ? (
      <meta
        key={'twitter:creator'}
        name="twitter:creator"
        content={authorTwitter}
      />
    ) : null,
  ].filter((m) => m);
};
