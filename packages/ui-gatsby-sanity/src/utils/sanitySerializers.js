export const internalLinkTo = ({ mark = {} }) => {
  const { reference } = mark;
  const to = reference.path
    ? reference.path
    : reference._type === 'post'
    ? `/${reference.category}/${reference.slug.current}`
    : '????';

  return to;
};
