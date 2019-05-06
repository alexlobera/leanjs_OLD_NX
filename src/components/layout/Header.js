import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Helmet from 'react-helmet'

import { formatUTC } from '../utils'
import Section from './Section'
import Grid, { Col, Row } from './Grid'
import Ul, { Li } from './Ul'
import { H1 as BaseH1, H2 as BaseH2, Span } from '../text'
import {
  blue1,
  blue2,
  WHITE,
  reactBlue,
  FONT_FAMILY,
  TEXT_SIZE,
} from '../../config/styles'
import { SCREEN_SM_MIN, SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'
import Link, { styleChildLinkColor } from '../navigation/Link'
import {
  PART_TIME_IMG,
  FULL_TIME_IMG,
  TRAINING_EVENT_IMG,
  CURRICULUM_IMG,
  COMMUNITY_IMG,
  CORP_TRAINING_HEADER_IMG,
  SMALL_CLASSROOM,
} from '../../config/images'
import { Z_INDEX_BG } from '../../config/styles'
import { selectTypeColor } from '../utils/index.js'
import { Image } from '../elements'

const H1 = styled(BaseH1)`
  margin-bottom: 0;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
  text-shadow: 1px -1px 17px ${reactBlue(0.4)};
  @media (max-width: ${SCREEN_SM_MAX}) {
    font-size: 2.77rem;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    font-size: 2.05rem;
  }
`

const HEADER_SUBSECTION_PADDING_LEFT_RIGHT = `
  @media (min-width: ${SCREEN_SM_MIN}) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-left: 8px;
    padding-right: 8px;
  }
`
// switch (bgImg) {
//   // case 'home':
//   //   return `background-image: url(${HOME_IMG});`
//   case 'part-time':
//     return `background-image: url(${PART_TIME_IMG});`
//   case 'full-time':
//     return `background-image: url(${FULL_TIME_IMG});`
//   case 'training-event':
//     return `background-image: url(${TRAINING_EVENT_IMG});`
//   case 'about-us':
//     return `background-image: url(${PART_TIME_IMG});`
//   case 'curriculum':
//     return `background-image: url(${CURRICULUM_IMG});`
//   case 'community':
//     return `background-image: url(${COMMUNITY_IMG});`
//   case 'corp-training':
//     return `background-image: url(${CORP_TRAINING_HEADER_IMG});`
//   default:
//     return `background-image: url(${bgImage});`
// }
const HeaderSection = styled(Section)`
  ${({ bgColor }) =>
    bgColor === 'blue' &&
    `background-color: ${reactBlue(0.4)};`} position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${Z_INDEX_BG};
    background-image: url(${PART_TIME_IMG});
    ${({ defaultBgImage, bgImage }) =>
      `background-image: url(${
        bgImage ? bgImage : defaultBgImage
      });`} background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: ${SCREEN_SM_MIN}) {
    height: ${({ fullHeight }) => (fullHeight !== false ? '100vh' : '')};
    min-height: ${({ fullHeight }) =>
      fullHeight === false ? 'auto' : '800px'};
    padding-bottom: ${({ paddingBottom = '200' }) =>
      paddingBottom}px !important;
    padding-top: 200px !important;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-top: 150px;
  }
`
HeaderSection.displayName = 'HeaderSection'

const H2Header = styled(BaseH2)`
  padding: 0 !important;
  margin: 0 !important;
  font-size: 1.16rem !important;
  color: ${WHITE};
  font-weight: normal;
  text-shadow: 1px -1px 17px ${reactBlue(0.4)};
`

const TITLE_BACKGROUND = `
  background-color: ${blue1(0.75)};
  display: table;
  ${HEADER_SUBSECTION_PADDING_LEFT_RIGHT};
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
TitleBackground.displayName = 'TitleBackground'

const SubTitleBackground = styled.div`
  ${TITLE_BACKGROUND} padding: 16px;
  max-width: 65ch;
  a {
    color: ${WHITE};
  }
  ul {
    margin-top: 20px;
  }
`

const Nav = styled.div`
  ${FONT_FAMILY}
  ${TEXT_SIZE({ lg: true })}
  ${HEADER_SUBSECTION_PADDING_LEFT_RIGHT}
  background-color: ${props => (props.quickLinks ? blue1(0.75) : blue2(0.9))};
  color: ${WHITE};
  ${styleChildLinkColor(WHITE)}
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top:36px;

  @media (min-width: ${SCREEN_SM_MIN}) {
    text-shadow: 1px -1px 17px #367088;
    
    display: inline-block;
    ul {
      display:inline-block;
    }
  }

  @media (max-width: ${SCREEN_XS_MAX}) {
    li {
      display:block;
    }
  }
`
const TitleCol = styled(Col)`
  ${({ type }) =>
    type &&
    `
    height: 100%;
    border-left: solid 27px ${selectTypeColor(type)};
    box-shadow: #373a477d -12px 0px 9px -13px;
    @media (min-width: ${SCREEN_SM_MIN}) {
      margin-left: 9px;
    }
    margin-bottom: 1em;
  `};
`
const InfoBox = styled.div`
  background-color: ${WHITE};
  ul {
    padding: 5px 10px 10px 10px;
    margin: 0;
  }
  li {
    margin-bottom: 1em;
  }
  a {
    font-size: 0.9rem;
  }
  font-size: 0.9rem;
  padding: 10px 10px 0 10px;
  border: ${({ type }) => `solid 5px ${selectTypeColor(type)}`};
`

const Header = ({
  training = {},
  showInfoBox = false,
  type = '',
  titleLines = [],
  subtitle,
  links = [],
  bgImage,
  defaultBgImage,
  bgColor,
  fullHeight,
  paddingBottom,
  children,
  linkToGallery,
  downloadVenuePDF,
}) => (
  <React.Fragment>
    <HeaderContext.Consumer>
      {bgImage && (
        <Helmet
          link={[
            {
              rel: 'preload',
              href: bgImage,
              as: 'image',
            },
          ]}
        />
      )}
      {value => (
        <HeaderSection
          top
          bgColor={bgColor}
          bgImage={bgImage}
          defaultBgImage={value}
          fullHeight={fullHeight}
          paddingBottom={paddingBottom}
        >
          <Grid>
            <Row>
              <TitleCol md={showInfoBox && training ? 7 : 12} type={type}>
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
                {children ? (
                  <SubTitleBackground>{children}</SubTitleBackground>
                ) : null}
                <Row>
                  <Col>
                    {links.length ? (
                      <Nav quickLinks>
                        <Ul inline>
                          <Li>
                            <Span>On this page:</Span>
                          </Li>
                          {links.map(({ to, text }, i) => (
                            <Li key={i}>
                              <Link to={to[0] !== '#' ? `#${to}` : to}>
                                {text}
                              </Link>
                            </Li>
                          ))}
                        </Ul>
                      </Nav>
                    ) : null}
                  </Col>
                </Row>
              </TitleCol>
              {showInfoBox && (
                <Col md={3} mdOffset={1}>
                  <InfoBox type={type}>
                    <Link to={`#${linkToGallery}`}>
                      <Image
                        src={training.image || SMALL_CLASSROOM}
                        width="100%"
                        alt="ReactJS Academy coach Alex assists a student, being next to them, inspecting their code and helping them on their learning path."
                      />
                    </Link>

                    <Ul unstyled>
                      <Li>
                        <strong>Date</strong>:{' '}
                        {training.startDate
                          ? `${formatUTC(
                              training.startDate,
                              training.utcOffset,
                              'D MMM'
                            )} - ${formatUTC(
                              training.endDate,
                              training.utcOffset,
                              'D MMM'
                            )}`
                          : 'TBD'}
                      </Li>
                      <Li>
                        <strong>Timings</strong>:{' '}
                        {`${(training.startDate &&
                          formatUTC(
                            training.startDate,
                            training.utcOffset,
                            'HH:mm'
                          )) ||
                          '9am'} - ${(training.endDate &&
                          formatUTC(
                            training.endDate,
                            training.utcOffset,
                            'HH:mm'
                          )) ||
                          '6:30pm'}`}
                      </Li>
                      <Li>
                        <strong>Venue</strong>: {training.address || 'TBD'} -{' '}
                        {training.mapUrl && (
                          <Link to={training.mapUrl}> map</Link>
                        )}
                      </Li>
                      {linkToGallery && (
                        <Li>
                          <Link to={`#${linkToGallery}`}>
                            See venue pictures
                          </Link>
                        </Li>
                      )}
                      {downloadVenuePDF && (
                        <Li>
                          <Link to={downloadVenuePDF}>
                            Download more info PDF
                          </Link>
                        </Li>
                      )}
                    </Ul>
                  </InfoBox>
                </Col>
              )}
            </Row>
          </Grid>
        </HeaderSection>
      )}
    </HeaderContext.Consumer>
  </React.Fragment>
)

Header.propTypes = {
  titleLines: PropTypes.array.isRequired,
  subtitle: PropTypes.string,
  links: PropTypes.array,
  height: PropTypes.number,
  bgImg: PropTypes.string,
  training: PropTypes.object,
}

export default Header
