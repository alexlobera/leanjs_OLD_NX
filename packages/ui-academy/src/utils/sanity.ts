export function removeCarriageReturn(text) {
  if (text && typeof text === 'string') {
    return text.replace(/[\n\r]+/g, '');
  } else {
    return text;
  }
}

export const getImagePublicURLs = ({ nodes = [] } = {}) =>
  nodes.reduce((acc, { localFile = {}, id }) => {
    const baseUrl = process.env.GATSBY_BASE_URL;
    const { publicURL = '' } = localFile;
    acc[id] =
      publicURL.indexOf('http') === 0 || !baseUrl
        ? publicURL
        : `${baseUrl}${publicURL}`;

    return acc;
  }, {});
