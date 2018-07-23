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
  const iconsList = {
    bussiness: BussinessIcon,
    calendar: CalendarIcon,
    code: CodeIcon,
    collabs: CollabsIcon,
    enterMind: EnterMindIcon,
    heart: HeartIcon,
    notBegginer: NotBegginerIcon,
    notBegginers: NotBegginersIcon,
    production: ProductionReadyIcon,
    runFast: RunFastIcon,
    spanner: SpannerIcon,
    star: StarIcon,
    target: TargetIcon,
    tickBadge: TickBadgeIcon,
    time: TimeIcon,
    trainer: TrainerIcon,
    react: ReactIcon,
    world: WorldIcon,
  }

  const Icon = iconsList[icon]
  return (
    <StyledIcon>
      <Icon />
    </StyledIcon>
  )
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
