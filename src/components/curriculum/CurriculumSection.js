import React from 'react'
import styled from 'styled-components'
import { H4, P } from '../text'
import { FONT_FAMILY } from '../../config/styles'
import { Element } from 'react-scroll'
import { Link } from '../navigation'
import trackUserBehaviour, {
  CURRICULUM_MORE_DETAILS,
} from '../utils/trackUserBehaviour'
import { selectTypeColor } from '../utils'

export const curriedToggleNavigateTo = to => section =>
  to ? `${to}&section=${section}` : false


const Section = styled.div`
  ${props => 
    `border-left: 3px solid ${selectTypeColor(props.type)};`
  }
  margin-top: 2em;
  padding-left: 20px;
`

export const CurriculumSubSection = styled.div`
  padding-top: 5px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`
const CurriculumItemTitle = styled(H4)`
  margin-bottom: 0.5em;
`
const SubTitleSection = styled.div` 
  margin: 0;
  padding-bottom: 18px;
  line-height: 1.5;
  ${FONT_FAMILY}
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
      type,
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
      <Link {...toogleLinkProps}>More detail</Link>
    )
    const childrenWithoutToggle = (
      <CurriculumSubSection>{children}</CurriculumSubSection>
    )

    return (
      <Section type={type}>
        <Element name={name || title} />
        {title ? <CurriculumItemTitle>{title}</CurriculumItemTitle> : ''}
        <SubTitleSection>
        {`${subTitle ? subTitle : ''} - `}
        {showToggle ? childrenWithToggle : childrenWithoutToggle}
        </SubTitleSection> 
      </Section>
    )
  }
}

export default CurriculumSection
