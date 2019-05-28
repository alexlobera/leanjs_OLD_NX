import React from 'react'
import Tick from './Tick'
import FacebookIcon from './FacebookIcon'
import ExternalLinkIcon from './ExternalLinkIcon'
import TwitterIcon from './TwitterIcon'
import GitHubIcon from './GitHubIcon'
import InstagramIcon from './InstagramIcon'
import PdfDownload from './PdfDownload'

import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  ${({ social }) =>
    !social
      ? `
      width: 24px;
      height: 24px;
    `
      : `
      width: 24px;
      height: 24px;
    `} position: relative;
  svg {
    position: absolute;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    top: 0;
    left: 0;
  }
`

const BulletIcon = ({ icon, social, ...rest }) => (
  <StyledIcon social={social}>{React.createElement(icon, rest)}</StyledIcon>
)

BulletIcon.propTypes = {
  icon: PropTypes.func.isRequired,
}

export {
  ExternalLinkIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  PdfDownload,
  GitHubIcon,
  BulletIcon,
  Tick,
}
