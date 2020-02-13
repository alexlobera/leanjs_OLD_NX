import React from 'react'
import styled from 'styled-components'

// TODO add some SVG that looks like a tweet?
const TweetPlaceholder = styled.div`
  min-height: ${props => props.height || '200px'};
  width: 100%;
`

const Tweet = ({ id, placeholderHeight }) => {
  if (typeof window !== 'undefined') {
    const { TwitterTweetEmbed } = require('react-twitter-embed')

    return (
      <div style={{ paddingTop: '25px', paddingBottom: '40px' }}>
        <TwitterTweetEmbed tweetId={id} />
      </div>
    )
  }

  return <TweetPlaceholder height={placeholderHeight} />
}

export default Tweet
