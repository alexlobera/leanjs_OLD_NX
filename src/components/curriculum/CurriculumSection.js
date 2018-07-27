import React from 'react'
import styled from 'styled-components'
import { H4, P } from '../text'
import Ul, { Li } from '../layout/Ul'
import Link from '../navigation/Link'
import { blue1 } from '../../config/styles'
import { Link as LinkScroll, Element } from 'react-scroll'
import { ANCHOR_STYLE } from '../navigation/Link'

const Section = styled.div`
  margin-top: 2em;
  border-left: 3px solid ${blue1()};
  padding-left: 20px;
`

export const CurriculumSubSection = styled.div`
  padding-top: 5px;
`

const StyledLinkScroll = styled(LinkScroll)`
  ${ANCHOR_STYLE};
`

class CurriculumSection extends React.Component {
  state = {
    isOpen: false,
  }

  toggleSubSection = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { isOpen } = this.state
    const { title, subTitle, children } = this.props
    const { toggleSubSection } = this

    return (
      <Section>
        <Element name={title} />
        {title ? <H4>{title}</H4> : ''}
        {subTitle ? <P>{subTitle}</P> : ''}
        {isOpen ? (
          <CurriculumSubSection>
            {children}
            <StyledLinkScroll
              duration={500}
              to={title}
              onClick={toggleSubSection}
            >
              Hide detail
            </StyledLinkScroll>
          </CurriculumSubSection>
        ) : (
          <Link onClick={toggleSubSection}>Click here for more detail</Link>
        )}
      </Section>
    )
  }
}

export default CurriculumSection
