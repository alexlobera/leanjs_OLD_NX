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

const SocialShare = styled.div.attrs((props) => ({
  className: 'blog-article',
}))`
  display: flex;
  justify-content: space-evenly;
  div {
    cursor: pointer;
  }
`

const ShareButtons = ({ path }) => (
  <SocialShare>
    <TwitterShareButton
      url={`https://reactgraphql.academy${path}`}
      quote={'title'}
      via="reactgqlacademy"
    >
      <TwitterIcon size={36} round />
    </TwitterShareButton>

    <FacebookShareButton
      url={`https://reactgraphql.academy${path}`}
      quote={'title'}
    >
      <FacebookIcon size={36} round />
    </FacebookShareButton>

    <LinkedinShareButton
      url={`https://reactgraphql.academy${path}`}
      quote={'title'}
    >
      <LinkedinIcon size={36} round />
    </LinkedinShareButton>

    <EmailShareButton
      url={`https://reactgraphql.academy${path}`}
      quote={'title'}
    >
      <EmailIcon size={36} round />
    </EmailShareButton>
  </SocialShare>
)

export default ShareButtons
