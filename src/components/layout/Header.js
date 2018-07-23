import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Section from '../layout/Section'
import Grid, { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'
import { H1 as BaseH1, H2 as BaseH2 } from '../text'
import { blue1, WHITE, reactBlue } from '../../styles'
import { SCREEN_SM_MIN, SCREEN_SM_MAX } from '../utils'
import Link from '../navigation/Link'

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
`
const HeaderSection = styled(Section)`
  background-color: ${reactBlue()};
  min-height: 700px;
  @media (min-width: ${SCREEN_SM_MIN}) {
    height: 100vh;
    padding: 175px 0;
  }
`
const H2Header = styled(BaseH2)`
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${WHITE};
  text-shadow: 1px -1px 17px ${reactBlue(0.4)};
`

const TitleBackground = styled.span`
  background-color: ${blue1(0.75)};
  padding-left: 15px;
  padding-right: 15px;
  display: inline-block;
  &:first-child  {
    padding-top: 15px;
  }
  &:last-child {
    padding-bottom: 15px;
  }
`

const Header = ({ titleLines = [], subtitle, links = [] }) => (
  <HeaderSection top>
    <Grid>
      <Row>
        <Col>
          <H1>
            {titleLines.map((line, i) => (
              <TitleBackground key={i} children={line} />
            ))}
          </H1>
          <H2Header>
            <TitleBackground dangerouslySetInnerHTML={{ __html: subtitle }} />
          </H2Header>
          {/* {links && links.length ? (
                        <Ul inline>
                            {links.map((link, index) => (
                                <Li>
                                    <Link to={link.to}>{link.text}</Link>
                                </Li>
                            ))}
                        </Ul>
                    ) : ''
                    } */}
        </Col>
      </Row>
    </Grid>
  </HeaderSection>
)

Header.propTypes = {
  titleLines: PropTypes.array.isRequired,
  subtitle: PropTypes.string.isRequired,
  links: PropTypes.array,
}

export default Header
