import React from 'react'
import styled from 'styled-components'
import queryString from 'query-string'
import { H4 } from '../text'
import { withRouter } from 'react-router-dom'
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
    `border-left: 3px solid ${selectTypeColor(props.type)};`} margin-top: 2em;
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
  ${FONT_FAMILY};
`

class CurriculumSection extends React.Component {
  constructor(props) {
    super(props)

    const { section, tab } = queryString.parse(props.location.search) || {}
    this.state = {
      isOpen: props.isOpen || (section === props.name && tab === props.type),
    }
  }

  toggleSubSection = () => {
    this.setState(
      state => ({
        isOpen: !state.isOpen,
      }),
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
      enableToggle = false,
      toggleNavigateTo,
    } = this.props
    const { toggleSubSection } = this
    const toogleLinkProps =
      toggleNavigateTo && !enableToggle
        ? {
            to:
              typeof toggleNavigateTo === 'function'
                ? toggleNavigateTo(name)
                : toggleNavigateTo,
          }
        : { onClick: toggleSubSection }
    const subsection = isOpen ? (
      <CurriculumSubSection>
        {children}
        <span> - </span>
        <Link
          duration={200}
          to={`#${name || title}`}
          onClick={toggleSubSection}
        >
          Hide detail
        </Link>
      </CurriculumSubSection>
    ) : (
      <React.Fragment>
        <span> - </span>
        <Link {...toogleLinkProps}>More detail</Link>
      </React.Fragment>
    )

    return (
      <Section type={type}>
        <Element name={name || title} />
        {title ? <CurriculumItemTitle>{title}</CurriculumItemTitle> : ''}
        <SubTitleSection>
          {subTitle ? subTitle : ''}
          {subsection}
        </SubTitleSection>
      </Section>
    )
  }
}

export default withRouter(CurriculumSection)
