import React from 'react'
import BussinessIcon from './BussinessIcon'
import CalendarIcon from './CalendarIcon'
import CodeIcon from './CodeIcon'
import CollabsIcon from './CollabsIcon'
import DiscussIcon from './DiscussIcon'
import EnterMindIcon from './EnterMindIcon'
import FacebookIcon from './FacebookIcon'
import HeartIcon from './HeartIcon'
import InstagramIcon from './InstagramIcon'
import NotBegginerIcon from './NotBegginerIcon'
import NotBegginersIcon from './NotBegginersIcon'
import ProductionReadyIcon from './ProductionReadyIcon'
import RunFastIcon from './RunFastIcon'
import SpannerIcon from './SpannerIcon'
import StarIcon from './StarIcon'
import TargetIcon from './TargetIcon'
import TickBadgeIcon from './TickBadgeIcon'
import TimeIcon from './TimeIcon'
import TwitterIcon from './TwitterIcon'
import TrainerIcon from './TrainerIcon'
import ReactIcon from './ReactIcon'
import PeopleNetWorkIcon from './PeopleNetWorkIcon'
import WorldIcon from './WorldIcon'

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
  BussinessIcon,
  CalendarIcon,
  CodeIcon,
  CollabsIcon,
  EnterMindIcon,
  HeartIcon,
  NotBegginerIcon,
  NotBegginersIcon,
  ProductionReadyIcon,
  RunFastIcon,
  SpannerIcon,
  StarIcon,
  TargetIcon,
  TickBadgeIcon,
  TimeIcon,
  TrainerIcon,
  TwitterIcon,
  ReactIcon,
  WorldIcon,
  PeopleNetWorkIcon,
  BulletIcon,
  DiscussIcon,
  FacebookIcon,
  InstagramIcon,
}
