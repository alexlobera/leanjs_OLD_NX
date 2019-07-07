import React from 'react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share'

const SocialShare = styled.div.attrs({ className: 'blog-article' })`
  display: flex;
  justify-content: space-evenly;
  div {
    cursor: pointer;
  }
`

const ShareButtons = ({ slug }) => (
  <SocialShare>
    <TwitterShareButton
      url={`https://reactgraphql.academy${slug}`}
      quote={'title'}
      via="reactgqlacademy"
    >
      <TwitterIcon size={36} round />
    </TwitterShareButton>

    <FacebookShareButton
      url={`https://reactgraphql.academy${slug}`}
      quote={'title'}
    >
      <FacebookIcon size={36} round />
    </FacebookShareButton>

    <LinkedinShareButton
      url={`https://reactgraphql.academy${slug}`}
      quote={'title'}
    >
      <LinkedinIcon size={36} round />
    </LinkedinShareButton>

    <EmailShareButton
      url={`https://reactgraphql.academy${slug}`}
      quote={'title'}
    >
      <EmailIcon size={36} round />
    </EmailShareButton>
  </SocialShare>
)

export default ShareButtons
