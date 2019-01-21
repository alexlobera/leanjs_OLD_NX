import React from 'react'
import styled from 'styled-components'

// TODO add some SVG that looks like a tweet?
const TweetPlaceholder = styled.div`
  height: ${props => props.height || '200px'};
  width: 100%;
`

const Tweet = ({ id, placeholderHeight }) => {
  if (typeof window !== 'undefined') {
    const { TwitterTweetEmbed } = require('react-twitter-embed')

    return <TwitterTweetEmbed tweetId={id} />
  }

  return <TweetPlaceholder height={placeholderHeight} />
}

export default Tweet
