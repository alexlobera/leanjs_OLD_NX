import React from 'react'
import styled from 'styled-components'
import { H2, H3 } from '../text'
import Ul, { Li } from '../layout/Ul'
import Link from '../navigation/Link'

const Section = styled.div`
  padding-top: 2em;
`

export const CurriculumSubSection = styled.div`
  padding-top: 5px;
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
        {title ? <H2>{title}</H2> : ''}
        {subTitle ? <H3>{subTitle}</H3> : ''}
        {isOpen ? (
          <CurriculumSubSection>
            <Ul>{children}</Ul>
            <Link onClick={toggleSubSection}>Hide detail</Link>
          </CurriculumSubSection>
        ) : (
          <Link onClick={toggleSubSection}>Click here for more detail</Link>
        )}
      </Section>
    )
  }
}

export default CurriculumSection
