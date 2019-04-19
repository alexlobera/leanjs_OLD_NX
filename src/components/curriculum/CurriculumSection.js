import React from 'react'
import styled from 'styled-components'
import { H4, Span } from '../text'
import { withRouter } from 'react-router-dom'
import { FONT_FAMILY } from '../../config/styles'
import { Element } from 'react-scroll'
import { Link } from '../navigation'
import trackUserBehaviour, {
  CURRICULUM_MORE_DETAILS,
} from '../utils/trackUserBehaviour'
import { selectTypeColor } from '../utils'
import 'url-search-params-polyfill'
import Feedback from '../elements/Feedback'

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

    const queryString = props.location.search.replace('?', '')
    const params = new URLSearchParams(queryString)
    this.state = {
      isOpen:
        props.isOpen ||
        (params.get('section') === props.name &&
          params.get('tab') === props.type),
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
      showLinkToCurriculum = true,
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
        <Feedback />
        <Span> - </Span>
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
        <Span> - </Span>
        <Link {...toogleLinkProps}>Full detail</Link>
      </React.Fragment>
    )

    return (
      <Section type={type}>
        <Element name={name || title} />
        {title ? <CurriculumItemTitle>{title}</CurriculumItemTitle> : ''}
        <SubTitleSection>
          {subTitle ? subTitle : ''}
          {showLinkToCurriculum ? subsection : ''}
        </SubTitleSection>
      </Section>
    )
  }
}

export default withRouter(CurriculumSection)
