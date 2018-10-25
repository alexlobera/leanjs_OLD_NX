import React from 'react'
import styled from 'styled-components'
import { H4, P } from '../text'
import { blue1 } from '../../config/styles'
import { Element } from 'react-scroll'
import { Link } from '../navigation'
import trackUserBehaviour, {
  CURRICULUM_MORE_DETAILS,
} from '../utils/trackUserBehaviour'

export const curriedToggleNavigateTo = to => section =>
  to ? `${to}&section=${section}` : false

const Section = styled.div`
  margin-top: 2em;
  border-left: 3px solid ${blue1()};
  padding-left: 20px;
`

export const CurriculumSubSection = styled.div`
  padding-top: 5px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

class CurriculumSection extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.isOpen || false,
    }
  }

  toggleSubSection = () => {
    this.setState(
      {
        isOpen: !this.state.isOpen,
      },
      () => {
        if (this.state.isOpen) {
          // send event to analytics
          trackUserBehaviour({
            event: CURRICULUM_MORE_DETAILS,
            payload: {
              section: this.props.title,
            },
          })
        }
      }
    )
  }

  render() {
    const { isOpen } = this.state
    const {
      title,
      name,
      subTitle,
      children,
      showToggle = true,
      toggleNavigateTo,
    } = this.props
    const { toggleSubSection } = this
    const toogleLinkProps = toggleNavigateTo
      ? {
          to:
            typeof toggleNavigateTo === 'function'
              ? toggleNavigateTo(name)
              : toggleNavigateTo,
        }
      : { onClick: toggleSubSection }
    const childrenWithToggle = isOpen ? (
      <CurriculumSubSection>
        {children}
        <Link duration={500} to={name || title} onClick={toggleSubSection}>
          Hide detail
        </Link>
      </CurriculumSubSection>
    ) : (
      <Link {...toogleLinkProps}>Click here for more detail</Link>
    )
    const childrenWithoutToggle = (
      <CurriculumSubSection>{children}</CurriculumSubSection>
    )
    return (
      <Section>
        <Element name={name || title} />
        {title ? <H4>{title}</H4> : ''}
        {subTitle ? <P>{subTitle}</P> : ''}
        {showToggle ? childrenWithToggle : childrenWithoutToggle}
      </Section>
    )
  }
}

export default CurriculumSection
