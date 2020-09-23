import React from 'react';
import styled from 'styled-components';
import CloseIcon from '../Icons/CloseIcon';
import Flex from '../Layout/Flex';

const TagWrapper = styled(Flex)``;

const TagItem = styled(Flex)`
  > * {
    margin-right: 0.9rem;
  }
`;

const Tag = () => (
  <TagWrapper>
    <TagItem>
      <CloseIcon />
      Tag
    </TagItem>
    <TagItem>
      <CloseIcon />
      Tag
    </TagItem>
    <TagItem>
      <CloseIcon />
      Tag
    </TagItem>
  </TagWrapper>
);

TagItem.defaultProps = {
  py: 1,
  px: 2,
  mr: 4,
  mb: 1,
  fontFamily: 'serif',
  alignItems: 'center',
  border: '0.1rem solid',
  borderColor: 'GREY',
};

export default Tag;
