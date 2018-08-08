import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import { H1 as BaseH1, H2 as BaseH2 } from '../text'
import { blue1, WHITE, reactBlue } from '../../config/styles'
import { SCREEN_SM_MIN, SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'
import { ANCHOR_STYLE } from '../navigation/Link'
import {
  HOME_IMG,
  PART_TIME_IMG,
  FULL_TIME_IMG,
  TRAINING_EVENT_IMG,
  CURRICULUM_IMG,
  COMMUNITY_IMG,
} from '../../config/images'
import { Link as LinkScroll } from 'react-scroll'

const H1 = styled(BaseH1)`
  font-size: 64px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
  text-shadow: 1px -1px 17px ${reactBlue(0.4)};
  @media (max-width: ${SCREEN_SM_MAX}) {
    font-size: 58px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    font-size: 40px;
  }
`

const backgroundImg = css`
  ${({ bgImg }) => {
    switch (bgImg) {
      case 'home':
        return `background-image: url(${HOME_IMG});`
      case 'part-time':
        return `background-image: url(${PART_TIME_IMG});`
      case 'full-time':
        return `background-image: url(${FULL_TIME_IMG});`
      case 'training-event':
        return `background-image: url(${TRAINING_EVENT_IMG});`
      case 'about-us':
        return `background-image: url(${PART_TIME_IMG});`
      case 'curriculum':
        return `background-image: url(${CURRICULUM_IMG});`
      case 'community':
        return `background-image: url(${COMMUNITY_IMG});`
    }
  }};
`
const HeaderSection = styled(Section)`
  ${({ bgImg }) =>
    bgImg === 'home' &&
    `background-color: ${reactBlue(0.4)};`} min-height: 700px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    ${backgroundImg} background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: ${SCREEN_SM_MIN}) {
    height: 100vh;
    min-height: 750px;
    padding-bottom: 200px !important;
    padding-top: 200px !important;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding: 150px 0 20px;
  }
`
const H2Header = styled(BaseH2)`
  padding: 0 !important;
  margin: 0 !important;
  font-size: 24px !important;
  color: ${WHITE};
  text-shadow: 1px -1px 17px ${reactBlue(0.4)};
`

const TITLE_BACKGROUND = `
  background-color: ${blue1(0.75)};
  padding-left: 15px;
  padding-right: 15px;
  display: inline-block;
`
const TitleBackground = styled.span`
  &:first-child  {
    padding-top: 15px;
  }
  &:last-child {
    padding-bottom: 20px;
  }
  ${TITLE_BACKGROUND};
`

const SubTitleBackground = styled.div`
  ${TITLE_BACKGROUND} padding: 15px;
  a {
    color: ${WHITE};
  }
  ul {
    margin-top: 20px;
  }
`

const StyledLinkScroll = styled(LinkScroll)`
  ${ANCHOR_STYLE};
`

const Header = ({ titleLines = [], subtitle, links = [], bgImg }) => (
  <HeaderSection top bgImg={bgImg}>
    <Grid>
      <Row>
        <Col>
          <H1>
            {titleLines.map((line, i) => (
              <TitleBackground key={i} children={line} />
            ))}
          </H1>
          {subtitle || (links && links.length) ? (
            <SubTitleBackground>
              <H2Header dangerouslySetInnerHTML={{ __html: subtitle }} />
              {links && links.length ? (
                <Ul inline>
                  {links.map((link, i) => (
                    <Li key={i}>
                      <StyledLinkScroll
                        smooth={true}
                        duration={500}
                        to={link.to}
                      >
                        {link.text}
                      </StyledLinkScroll>
                    </Li>
                  ))}
                </Ul>
              ) : (
                ''
              )}
            </SubTitleBackground>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </Grid>
  </HeaderSection>
)

Header.propTypes = {
  titleLines: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired,
  links: PropTypes.array,
  bgImg: PropTypes.string,
}

export default Header
