import React from 'react'
import BussinessIcon from './BussinessIcon'
import CalendarIcon from './CalendarIcon'
import CodeIcon from './CodeIcon'
import CollabsIcon from './CollabsIcon'
import EnterMindIcon from './EnterMindIcon'
import HeartIcon from './HeartIcon'
import NotBegginerIcon from './NotBegginerIcon'
import NotBegginersIcon from './NotBegginersIcon'
import ProductionReadyIcon from './ProductionReadyIcon'
import RunFastIcon from './RunFastIcon'
import SpannerIcon from './SpannerIcon'
import StarIcon from './StarIcon'
import TargetIcon from './TargetIcon'
import TickBadgeIcon from './TickBadgeIcon'
import TimeIcon from './TimeIcon'
import TrainerIcon from './TrainerIcon'
import ReactIcon from './ReactIcon'
import WorldIcon from './WorldIcon'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledIcon = styled.div`
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

const BulletIcon = ({ icon }) => {
  switch (icon) {
    case 'bussiness':
      return (
        <StyledIcon>
          <BussinessIcon />
        </StyledIcon>
      )
    case 'calendar':
      return (
        <StyledIcon>
          <CalendarIcon />
        </StyledIcon>
      )
    case 'code':
      return (
        <StyledIcon>
          <CodeIcon />
        </StyledIcon>
      )
    case 'collabs':
      return (
        <StyledIcon>
          <CollabsIcon />
        </StyledIcon>
      )
    case 'entermind':
      return (
        <StyledIcon>
          <EnterMindIcon />
        </StyledIcon>
      )
    case 'heart':
      return (
        <StyledIcon>
          <HeartIcon />
        </StyledIcon>
      )
    case 'notbegginer':
      return (
        <StyledIcon>
          <NotBegginerIcon />
        </StyledIcon>
      )
    case 'notbegginers':
      return (
        <StyledIcon>
          <NotBegginersIcon />
        </StyledIcon>
      )
    case 'productionready':
      return (
        <StyledIcon>
          <ProductionReadyIcon />
        </StyledIcon>
      )
    case 'runfast':
      return (
        <StyledIcon>
          <RunFastIcon />
        </StyledIcon>
      )
    case 'spanner':
      return (
        <StyledIcon>
          <SpannerIcon />
        </StyledIcon>
      )
    case 'star':
      return (
        <StyledIcon>
          <StarIcon />
        </StyledIcon>
      )
    case 'target':
      return (
        <StyledIcon>
          <TargetIcon />
        </StyledIcon>
      )
    case 'tickbadge':
      return (
        <StyledIcon>
          <TickBadgeIcon />
        </StyledIcon>
      )
    case 'time':
      return (
        <StyledIcon>
          <TimeIcon />
        </StyledIcon>
      )
    case 'trainer':
      return (
        <StyledIcon>
          <TrainerIcon />
        </StyledIcon>
      )
    case 'react':
      return (
        <StyledIcon>
          <ReactIcon />
        </StyledIcon>
      )
    case 'world':
      return (
        <StyledIcon>
          <WorldIcon />
        </StyledIcon>
      )
    default:
      return null
  }
}

BulletIcon.propTypes = {
  icon: PropTypes.string.isRequired,
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
  ReactIcon,
  WorldIcon,
}

export default BulletIcon
