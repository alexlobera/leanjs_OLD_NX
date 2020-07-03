/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import styled from 'styled-components';

interface TweetPlaceholderProps {
  height?: string;
}
const TweetPlaceholder = styled.div<TweetPlaceholderProps>`
  min-height: ${(props) => props.height};
  width: 100%;
`;

export const Tweet = ({ id, placeholderHeight = '200px' }) => {
  if (typeof window !== 'undefined') {
    const { TwitterTweetEmbed } = require('react-twitter-embed');

    return (
      <div style={{ paddingTop: '25px', paddingBottom: '40px' }}>
        <TwitterTweetEmbed tweetId={id} />
      </div>
    );
  }

  return <TweetPlaceholder height={placeholderHeight} />;
};
