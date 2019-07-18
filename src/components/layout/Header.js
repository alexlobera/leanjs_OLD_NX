import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { formatUTC } from '../utils'
import Section from './Section'
import Grid, { Col, Row } from './Grid'
import Ul, { Li } from './Ul'
import { H1 as BaseH1, H2 as BaseH2, Span } from '../text'
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
} from '../../config/styles'
import withWidth, { SMALL } from '../utils/WithWidth'
import { SCREEN_SM_MIN, SCREEN_SM_MAX, SCREEN_XS_MAX } from '../utils'
import Link, { styleChildLinkColor } from '../navigation/Link'
import { selectTypeColor, selectBorderStyle } from '../utils/index.js'
import { Image } from '../elements'
import Box from '../layout/Box'

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
  ${({ bgColors, bgColor }) =>
    ((bgColors && bgColors.length) || bgColor) &&
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
        (bgColors && bgColors.length === 1) || bgColor
          ? `background-color: ${bgColors[0] || bgColor}`
          : `background-image: linear-gradient(to bottom right,${bgColors.join()})`
      };
    }
  `}
  
  ${({ bgImage, bgImageOpacity = '0.7' }) =>
    `
    @media (min-width: ${SCREEN_SM_MIN}) {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${Z_INDEX_BG};
        background-image: url(${bgImage}); background-repeat: no-repeat; background-size: cover;
        opacity: ${bgImageOpacity};
      }
    }
  `}
  
  @media (min-width: ${SCREEN_SM_MIN}) {
    height: ${({ fullHeight }) => (fullHeight !== false ? '100vh' : '')};
    min-height: ${({ fullHeight }) =>
      fullHeight === false ? 'auto' : '800px'};
    padding-bottom: ${({ paddingBottom = '200' }) =>
      paddingBottom}px !important;
    padding-top: 200px !important;
  }
  @media (max-width: ${SCREEN_XS_MAX}) {
    padding-top: 200px;
  }
`
HeaderSection.displayName = 'HeaderSection'
HeaderSection.defaultProps = {
  bgColors: ['rgba(196,196,196,0.4)'],
}

const H2Header = styled(BaseH2)`
  text-shadow: 1px -1px 17px ${BLUE_04};
`

H2Header.defaultProps = {
  color: WHITE,
  padding: 0,
  margin: 0,
  fontSize: 3,
  lineHeight: 3,
  fontWeight: 'normal',
}

const TITLE_BACKGROUND = `
  background-color: ${DARK_BLUE_075};
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
  border: ${({ type }) =>
    `${selectBorderStyle(type)} 5px ${selectTypeColor(type)}`};
`
const FeaturedSection = styled(Box)`
  background-color: ${WHITE};
`
FeaturedSection.defaultProps = {
  p: 4,
}

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
  featuredSection,
  type = '',
  titleLines = [],
  subtitle,
  links = [],
  bgImageName,
  bgImgUrl,
  bgColors,
  bgColor,
  fullHeight,
  paddingBottom,
  children,
  linkToGallery,
  downloadVenuePDF,
  width,
  bgImageOpacity,
  className = '',
}) => (
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
        defaultHeaderImage: file(relativePath: { regex: "/covers/default/" }) {
          childImageSharp {
            fluid(maxWidth: $maxWidth) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const bgImage = bgImgUrl || getBackgroundImageSrc(data, bgImageName)
      const startDate =
        training.startDate &&
        formatUTC(training.startDate, training.utcOffset, 'D MMM')
      const endDate =
        training.endDate &&
        formatUTC(training.endDate, training.utcOffset, 'D MMM')

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
          <HeaderSection
            top
            bgColors={bgColors}
            bgColor={bgColor}
            bgImage={bgImage}
            fullHeight={fullHeight}
            paddingBottom={paddingBottom}
            bgImageOpacity={bgImageOpacity}
          >
            <Grid>
              <Row>
                <TitleCol
                  md={(showInfoBox && training) || featuredSection ? 7 : 12}
                  type={type}
                >
                  <H1>
                    {titleLines.map((line, i) => (
                      <TitleBackground key={i} children={line} />
                    ))}
                  </H1>
                  {subtitle ? (
                    <SubTitleBackground>
                      <H2Header
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                      />
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
                {featuredSection && (
                  <Col md={3} mdOffset={1}>
                    <FeaturedSection>{featuredSection}</FeaturedSection>
                  </Col>
                )}
                {showInfoBox && (
                  <Col md={3} mdOffset={1}>
                    <InfoBox type={type}>
                      {training.image && (
                        <Image
                          src={training.image}
                          width="100%"
                          alt="React GraphQL Academy coach Alex assists a student, being next to them, inspecting their code and helping them on their learning path."
                        />
                      )}

                      <Ul unstyled>
                        <Li>
                          <strong>Date</strong>: {startDate ? startDate : 'TBD'}
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
                            '9am'} - ${(training.endDate &&
                            formatUTC(
                              training.endDate,
                              training.utcOffset,
                              'HH:mm'
                            )) ||
                            '6:30pm'}`}
                        </Li>
                        <Li>
                          <strong>Venue</strong>:{' '}
                          {training.address || 'To be confirmed'}
                          {training.mapUrl ? (
                            <React.Fragment>
                              {` - `}
                              <Link to={training.mapUrl} className={className}>
                                {' '}
                                map
                              </Link>
                            </React.Fragment>
                          ) : null}
                        </Li>
                        {(!training.address ||
                          training.address === 'To be confirmed') && (
                          <Li>
                            <strong>Location</strong>:{' '}
                            {training.city || 'To be confirmed'}
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
                    </InfoBox>
                  </Col>
                )}
              </Row>
            </Grid>
          </HeaderSection>
        </React.Fragment>
      )
    }}
  />
)

export const RootHeader = props => (
  <Header bgColors={[GRAPHQL_PINK, BLUE]} bgImageOpacity={0.3} {...props} />
)

Header.propTypes = {
  titleLines: PropTypes.array.isRequired,
  subtitle: PropTypes.string,
  links: PropTypes.array,
  height: PropTypes.number,
  bgImg: PropTypes.string,
  training: PropTypes.object,
  bgImgUrl: PropTypes.string,
}

export default withWidth()(Header)
