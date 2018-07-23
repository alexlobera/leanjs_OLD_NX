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
import ProductionReadyIcon from './ProductionReadyIcon'
import RunFastIcon from './RunFastIcon'
import SpannerIcon from './SpannerIcon'
import StarIcon from './StarIcon'
import TargetIcon from './TargetIcon'
import TickBadgeIcon from './TickBadgeIcon'
import TimeIcon from './TimeIcon'
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
  width: 32px;
  height: 32px;
  position: relative;
  svg {
    position: absolute;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    top: 0;
    left: 0;
  }
`

const BulletIcon = ({ icon, ...rest }) => (
  <StyledIcon>{React.createElement(icon, rest)}</StyledIcon>
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
  ProductionReadyIcon,
  RunFastIcon,
  SpannerIcon,
  StarIcon,
  TargetIcon,
  TickBadgeIcon,
  TimeIcon,
  TrainerIcon,
  ReactIcon,
  WorldIcon,
  PeopleNetWorkIcon,
  BulletIcon,
  DiscussIcon,
  FacebookIcon,
  InstagramIcon,
}
