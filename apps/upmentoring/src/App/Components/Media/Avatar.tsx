import styled from 'styled-components';
import Box from '../Layout/Box';

// interface AvatarProps {
//   thumbnail: boolean;
//   box: string;
// }

const Avatar = styled(Box)`
  ${({ thumbnail }) =>
    thumbnail
      ? `
  max-width: 75px;
  max-height: 75px;
  `
      : `
  max-width: 150px;
  max-height: 150px;
  `}
  border-radius: 50%;
`;

Avatar.defaultProps = {
  box: 'img',
  m: '2',
};

Avatar.displayName = 'Avatar';

export default Avatar;
