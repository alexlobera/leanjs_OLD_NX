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

const SocialShare = styled.div`
  display: flex;
  justify-content: space-evenly;
  div {
    cursor: pointer;
  }
`

const ShareButtons = ({ slug }) => (
  <SocialShare>
    <TwitterShareButton
      url={`https://reactjs.academy${slug}`}
      quote={'title'}
      via="reactjsacademy"
    >
      <TwitterIcon size={36} round />
    </TwitterShareButton>

    <FacebookShareButton url={`https://reactjs.academy${slug}`} quote={'title'}>
      <FacebookIcon size={36} round />
    </FacebookShareButton>

    <LinkedinShareButton url={`https://reactjs.academy${slug}`} quote={'title'}>
      <LinkedinIcon size={36} round />
    </LinkedinShareButton>

    <EmailShareButton url={`https://reactjs.academy${slug}`} quote={'title'}>
      <EmailIcon size={36} round />
    </EmailShareButton>
  </SocialShare>
)

export default ShareButtons
