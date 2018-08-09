import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import { H1 as BaseH1, H2 as BaseH2, Span, P } from '../text'
import { blue1, blue2, WHITE, reactBlue } from '../../config/styles'
import { SCREEN_SM_MIN, SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'
import { LinkScroll, styleChildLinkColor } from '../navigation/Link'
import {
  HOME_IMG,
  PART_TIME_IMG,
  FULL_TIME_IMG,
  TRAINING_EVENT_IMG,
  CURRICULUM_IMG,
  COMMUNITY_IMG,
} from '../../config/images'

const H1 = styled(BaseH1)`
  margin-bottom:0;
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
    min-height: 800px;
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

const DetailList = styled(Ul)`
  display:block !important;
  margin: 0 !important;
  padding: 0 !important;
  li {
    margin: 0;
    color: ${WHITE};
    &:last-child {
      margin-bottom: 8px;
    }
  }
`

const Subnav = styled.div`
  display: block; 
`

const SubnavCard = styled.div`
  display: inline-block;
  text-shadow: 1px -1px 17px #367088;
  ${styleChildLinkColor(WHITE)}
  span {
    color: ${WHITE};
  }
  @media (min-width: ${SCREEN_SM_MIN}) {

    background-color: ${blue2(0.9)};
    margin-top:36px;
    padding: 16px;
    ul {
      display:inline-block;
    }
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    
  }
`

const Header = ({ titleLines = [], subtitle, details = [], links = [], bgImg }) => (
  <HeaderSection top bgImg={bgImg}>
    <Grid>
      <Row>
        <Col>
          <H1>
            {titleLines.map((line, i) => (
              <TitleBackground key={i} children={line} />
            ))}
          </H1>
          {subtitle ? (
            <SubTitleBackground>
              <H2Header dangerouslySetInnerHTML={{ __html: subtitle }} />
            </SubTitleBackground>
          ) : null}
          {(details.length || links.length) ? (
            <Subnav>
              <SubnavCard>
                {details.length ? (
                  <DetailList unstyled>
                    {details.map(detail => (
                      <Li>{detail}</Li>
                    ))}
                  </DetailList>
                ) : null}
                <Ul inline>
                  <Li><Span>On this page:</Span></Li>
                  {links.map((link, i) => (
                    <Li key={i}>
                      <LinkScroll smooth={true} duration={500} to={link.to}>
                        {link.text}
                      </LinkScroll>
                    </Li>
                  ))}
                </Ul>
              </SubnavCard>
            </Subnav>
          ) : null}
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
