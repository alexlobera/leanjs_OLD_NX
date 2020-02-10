import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { formatUTC, convertMinutesToHoursAndMinutes } from '../utils'
import Section from './Section'
import { Col, Row } from './Grid'
import Ul, { Li } from './Ul'
import { useExpandCheckout } from '../payment/checkout'
import { H1 as BaseH1, H2, Span, H3 } from '../text'
import {
  DARK_BLUE_075,
  LIGHT_BLUE,
  WHITE,
  BLUE_04,
  FONT_FAMILY,
  TEXT_SIZE,
  Z_INDEX_BG,
  GRAPHQL_PINK,
  BLUE,
  DARK_GREY,
} from '../../config/styles'
import withWidth, { SMALL } from '../utils/WithWidth'
import { SCREEN_SM_MIN, SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'
import Link, { styleChildLinkColor } from '../navigation/Link'
import { selectTypeColor, selectBorderStyle } from '../utils/index.js'
import { Image } from '../elements'
import Box from '../layout/Box'
import { LinkButton } from '../buttons'
import { TECH_GRAPHQL, TECH_REACT } from '../../config/data'
import { Breadcrumb } from '../navigation'
import Tag from '../elements/Tag'
import TrainingItem, { getTrainingTimings } from '../training/TrainingItem'

const H1 = styled(BaseH1)`
  margin-bottom: 0;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
  text-shadow: 1px -1px 17px ${BLUE_04};
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

const HeaderSection = styled(Section)`
  position: relative;
  display:block;
  ${({ bgColors, bgColor }) => {
    const bgc =
      bgColors && bgColors.length ? bgColors : bgColor ? [bgColor] : []

    return (
      bgc.length &&
      `
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: ${Z_INDEX_BG};
      ${
        bgc.length > 1
          ? `background-image: linear-gradient(to bottom right,${bgc.join()});`
          : bgc.length === 1
          ? `
          background-color: ${bgc[0]};
          opacity: 0.6;`
          : ''
      }
      
    }
    `
    )
  }}
  
  ${({ bgImage, bgImageOpacity = '0.5' }) => `
    @media (min-width: ${SCREEN_SM_MIN}) {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${Z_INDEX_BG};
        ${
          bgImage
            ? `
          background-image: url(${bgImage}); 
          background-repeat: no-repeat; 
          background-size: cover;
          background-position: center;
          opacity: ${bgImageOpacity};
          `
            : ''
        }
      }
    }
  `}
  
  @media (min-width: ${SCREEN_SM_MIN}) {
    height: ${({ fullHeight }) => (fullHeight !== false ? '100vh' : 'auto')};
    min-height: ${({ fullHeight }) =>
      fullHeight === false ? 'auto' : '800px'};
    padding-bottom: ${({ paddingBottom = '200' }) =>
      paddingBottom}px !important;
    padding-top: 200px !important;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-top: 160px;
  }
`
HeaderSection.displayName = 'HeaderSection'
// HeaderSection.defaultProps = {
//   sx: {
//     bgColor: 'rgba(196,196,196,0.6)',
//     mt: 0,
//     mb: 0,
//     pb: [5],
//   },
// }

// const H2Header = styled(BaseH2)`
//   text-shadow: 1px -1px 17px ${BLUE_04};
// `
const H2Header = ({ sx = {}, ...rest }) => (
  <H2
    sx={{
      color: WHITE,
      p: 0,
      m: 0,
      fontSize: 4,
      lineHeight: 3,
      fontWeight: 'normal',
      textShadow: `1px -1px 17px ${BLUE_04}`,
      ...sx,
    }}
    {...rest}
  />
)
const TechLogo = styled.div`
  ${({ tech }) =>
    tech &&
    `
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${Z_INDEX_BG};
    background-image: ${
      tech === TECH_REACT
        ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'%3E%3Cg fill='%2361DAFB'%3E%3Cpath d='M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z'/%3E%3Ccircle cx='420.9' cy='296.5' r='45.7'/%3E%3Cpath d='M520.5 78.1z'/%3E%3C/g%3E%3C/svg%3E")`
        : tech === TECH_GRAPHQL
        ? `url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='-150 -23 530 530' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23E535AB' d='M57.468 302.656l-14.376-8.3 160.15-277.38 14.376 8.3z'/%3E%3Cpath fill='%23E535AB' d='M39.8 272.2h320.3v16.6H39.8z'/%3E%3Cpath fill='%23E535AB' d='M206.348 374.025l-160.21-92.5 8.3-14.376 160.21 92.5zM345.521 132.947l-160.21-92.5 8.3-14.375 160.21 92.5z'/%3E%3Cpath fill='%23E535AB' d='M54.482 132.881l-8.3-14.375 160.21-92.5 8.3 14.375z'/%3E%3Cpath fill='%23E535AB' d='M342.566 302.666l-160.15-277.38 14.375-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5z'/%3E%3Cpath fill='%23E535AB' d='M330.9 107.5h16.6v185h-16.6z'/%3E%3Cpath fill='%23E535AB' d='M203.527 367.002l-7.25-12.557 139.339-80.45 7.25 12.557z'/%3E%3Cpath d='M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8s-22.4-31-12.8-47.7 31-22.4 47.7-12.8c16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8s-22.4-31-12.8-47.7 31-22.4 47.7-12.8c16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9S180.7 326 200 326s34.9 15.6 34.9 34.9c0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9S180.7 4.2 200 4.2s34.9 15.6 34.9 34.9S219.3 74 200 74' fill='%23E535AB'/%3E%3C/svg%3E")`
        : ''
    };
    opacity:0.6;
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    width: 100%;
    height: 150%;
    @media (min-width: ${SCREEN_SM_MIN}) {
      background-position-x: 200px;
      background-position-y: -100px;
    }
  }
`}
`

// H2Header.defaultProps = {
//   sx: {
//     color: WHITE,
//     p: 0,
//     m: 0,
//     fontSize: 4,
//     lineHeight: 3,
//     fontWeight: 'normal',
//   },
// }

const TITLE_BACKGROUND = `
  background-color: ${DARK_BLUE_075};
  display: table;
  ${HEADER_SUBSECTION_PADDING_LEFT_RIGHT};
`

const FeaturedTrainingTitle = ({ sx = {}, ...rest }) => (
  <H3
    sx={{
      backgroundColor: DARK_BLUE_075,
      color: WHITE,
      display: 'inline-block',
      pt: 1,
      pr: 1,
      pb: 1,
      pl: 1,
      ...sx,
    }}
    {...rest}
  />
)
// FeaturedTrainingTitle.defaultProps = {
//   sx: {
//     backgroundColor: DARK_BLUE_075,
//     color: WHITE,
//     display: 'inline-block',
//     pt: 1,
//     pr: 1,
//     pb: 1,
//     pl: 1,
//   },
// }

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
  color: ${WHITE};
  max-width: 65ch;
  a {
    color: ${WHITE};
  }
  ul li {
    color: ${WHITE};
  }
`

const Nav = styled.div`
  ${FONT_FAMILY}
  ${TEXT_SIZE({ lg: true })}
  ${HEADER_SUBSECTION_PADDING_LEFT_RIGHT}
  background-color: ${props => (props.quickLinks ? DARK_BLUE_075 : LIGHT_BLUE)};
  color: ${WHITE};
  ${styleChildLinkColor(WHITE)}
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top:36px;
  span {
    color: ${WHITE};
  }
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
    border-left: ${selectBorderStyle(type)} 27px ${selectTypeColor(type)};
    @media (min-width: ${SCREEN_SM_MIN}) {
      margin-left: 9px;
    }
    @media (max-width: ${SCREEN_SM_MAX}) {
      border-left: ${selectBorderStyle(type)} 10px ${selectTypeColor(type)};
    }
    margin-bottom: 1em;
  `};
`
const InfoBox = styled(Box)`
  background-color: ${WHITE};
  a {
    font-size: 0.9rem;
  }
  font-size: 0.9rem;
  border: ${({ type }) =>
    `${selectBorderStyle(type)} 5px ${selectTypeColor(type)}`};
`
const FeaturedSection = ({ sx = {}, ...rest }) => (
  <Box
    sx={{
      p: 3,
      backgroundColor: WHITE,
      ...sx,
    }}
    {...rest}
  />
)

// FeaturedSection.defaultProps = {
//   sx: {
//     p: 3,
//   },
// }

const getBackgroundImageSrc = (data, fileName) => {
  if (!data) {
    return ''
  }
  const bgImage = data.allFile.nodes.find(({ relativePath: r }) => {
    const nodeFileName = r.substring(r.lastIndexOf('/') + 1, r.lastIndexOf('.'))
    return nodeFileName === fileName
  })
  const img = bgImage || data.defaultHeaderImage

  return img.childImageSharp.fluid.src
}

const Header = ({
  training = {},
  showInfoBox = false,
  infoBoxFluidImage,
  featuredSection,
  featuredTrainings,
  type = '',
  titleLines = [],
  subtitle,
  links = [],
  bgImageName,
  removeBgImage,
  bgImgUrl,
  bgColors,
  bgColor = 'rgba(196,196,196,0.6)',
  fullHeight,
  paddingBottom,
  children,
  linkToGallery,
  downloadVenuePDF,
  width,
  bgImageOpacity,
  className = 'course-details-clicks',
  breadcrumbPath,
  tech,
}) => {
  const expandCheckout = useExpandCheckout()

  return (
    <StaticQuery
      query={graphql`
        query getBackgroundImage($maxWidth: Int = 1000) {
          allFile(filter: { relativePath: { regex: "/covers/" } }) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: $maxWidth) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          defaultHeaderImage: file(
            relativePath: { regex: "/covers/default/" }
          ) {
            childImageSharp {
              fluid(maxWidth: $maxWidth) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        const bgImage = removeBgImage
          ? undefined
          : bgImgUrl || getBackgroundImageSrc(data, bgImageName)
        const startDate =
          training.startDate &&
          formatUTC(training.startDate, training.utcOffset, 'D MMM')
        const endDate =
          training.endDate &&
          formatUTC(training.endDate, training.utcOffset, 'D MMM')
        const {
          hours: utcHours,
          minutes: utcMinutes,
        } = convertMinutesToHoursAndMinutes(training.utcOffset)

        return (
          <React.Fragment>
            {bgImage && width > SMALL && (
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
            {breadcrumbPath && <Breadcrumb tech={tech} path={breadcrumbPath} />}
            <TechLogo tech={tech}>
              <HeaderSection
                sx={{ bgColor: 'rgba(196,196,196,0.6)', mt: 0, mb: 0, pb: [5] }}
                bgColors={bgColors}
                bgColor={bgColor}
                bgImage={bgImage}
                fullHeight={fullHeight}
                paddingBottom={paddingBottom}
                bgImageOpacity={bgImageOpacity}
              >
                <Row>
                  <TitleCol
                    md={
                      (showInfoBox && training) || featuredSection
                        ? 7
                        : featuredTrainings
                        ? 8
                        : 12
                    }
                    type={type}
                  >
                    <H1>
                      {titleLines.map((line, i) => (
                        <TitleBackground key={i} children={line} />
                      ))}
                    </H1>
                    {subtitle ? (
                      <SubTitleBackground>
                        {typeof subtitle === 'string' ? (
                          <H2Header
                            dangerouslySetInnerHTML={{ __html: subtitle }}
                          />
                        ) : (
                          <H2Header>{subtitle}</H2Header>
                        )}
                      </SubTitleBackground>
                    ) : null}
                    {children ? (
                      <SubTitleBackground>{children}</SubTitleBackground>
                    ) : null}
                    <Row>
                      <Col>
                        {links.length ? (
                          <Nav quickLinks>
                            <Ul variant="inline">
                              <Li>
                                <Span>On this page:</Span>
                              </Li>
                              {links.map(({ to, text }, i) => (
                                <Li key={i}>
                                  <Link
                                    className="on-this-page"
                                    to={to[0] !== '#' ? `#${to}` : to}
                                  >
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
                  {featuredSection ? (
                    <Col md={3} mdOffset={1}>
                      <FeaturedSection>{featuredSection}</FeaturedSection>
                    </Col>
                  ) : featuredTrainings ? (
                    <Col md={4} sx={{ ml: 'auto' }}>
                      <FeaturedTrainingTitle>
                        Featured Course
                      </FeaturedTrainingTitle>
                      {featuredTrainings.map(training => {
                        const { dayMonth, duration } = getTrainingTimings({
                          training,
                        })
                        return (
                          <TrainingItem
                            key={training.id}
                            isOnline={training.isOnline}
                            cityCountry={training.cityCountry}
                            startDay={dayMonth[0]}
                            startMonth={dayMonth[1]}
                            duration={duration}
                            type={training.type}
                            title={training.title}
                            path={training.toPath}
                            className={className}
                            textSxProps={{
                              color: WHITE,
                              textShadow: `1px 1px 5px ${DARK_GREY};`,
                            }}
                          />
                        )
                      })}
                    </Col>
                  ) : null}
                  {showInfoBox && (
                    <Col md={3} mdOffset={1}>
                      <InfoBox type={type} sx={{ p: 1 }}>
                        {infoBoxFluidImage && (
                          <Image
                            fluid={infoBoxFluidImage.fluid}
                            sx={{
                              width: '100%',
                              mb: 1,
                            }}
                            alt={subtitle}
                          />
                        )}
                        <Ul variant="unstyled" sx={{ mb: 1, pl: 0, pr: 0 }}>
                          <Li>
                            <strong>Date</strong>:{' '}
                            {startDate ? startDate : 'TBD'}
                            {startDate === endDate ? '' : ` - ${endDate}`}
                          </Li>
                          <Li>
                            <strong>Timings</strong>:{' '}
                            {`${(training.startDate &&
                              formatUTC(
                                training.startDate,
                                training.utcOffset,
                                'HH:mm'
                              )) ||
                              '9am'}-${(training.endDate &&
                              formatUTC(
                                training.endDate,
                                training.utcOffset,
                                'HH:mm'
                              )) ||
                              '6:00pm'}`}
                            {training.isOnline &&
                              ` GMT${utcHours}:${utcMinutes}`}
                          </Li>
                          {training.isOnline ? (
                            <>
                              <Li>
                                <strong>Location</strong>: <Tag>Online</Tag>
                              </Li>
                              <Li>
                                <strong>Conference room</strong>:{' '}
                                {training.venueName}
                              </Li>
                            </>
                          ) : training.address ? (
                            <Li>
                              <strong>Venue</strong>:{training.address}
                              {training.mapUrl && (
                                <>
                                  {` - `}
                                  <Link
                                    to={training.mapUrl}
                                    className={className}
                                  >
                                    {' '}
                                    map
                                  </Link>
                                </>
                              )}
                            </Li>
                          ) : (
                            <Li>
                              <strong>Venue</strong>: TBC. {` `}
                              <Link to="/blog/4-reasons-why-you-should-host-our-react-graphql-training/">
                                Host it and get exclusive promotions
                              </Link>
                            </Li>
                          )}
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
                        <Box sx={{ textAlign: 'center', mb: '-38px' }}>
                          <LinkButton
                            onClick={expandCheckout || undefined}
                            className="header-buy-tickets"
                            variant="primary"
                            to="#pricing"
                          >
                            Buy tickets
                          </LinkButton>
                        </Box>
                      </InfoBox>
                    </Col>
                  )}
                </Row>
              </HeaderSection>
            </TechLogo>
          </React.Fragment>
        )
      }}
    />
  )
}

export const RootHeader = props => (
  <Header bgColors={[GRAPHQL_PINK, BLUE]} bgImageOpacity={0.3} {...props} />
)

export default withWidth()(Header)
