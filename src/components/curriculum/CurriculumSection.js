import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H4 } from '../text'
import { PINK } from '../../config/styles'
import { Element } from 'react-scroll'
import { Link } from '../navigation'
import trackUserBehaviour, {
  CURRICULUM_MORE_DETAILS,
} from '../utils/trackUserBehaviour'
import { selectTypeColor, selectBorderStyle } from '../utils'
import { getURLParameter } from '../utils/url'
import Flex from '../layout/Flex'
import Box from '../layout/Box'

export const curriedToggleNavigateTo = to => section =>
  to ? `${to}&section=${section}` : false

const Section = styled(Box)`
  &:first-child {
    margin-top: 0;
  }
  ${({ type }) =>
    `border-left: 3px ${selectBorderStyle(type)} ${selectTypeColor(type)};`}
  a {
    display: inline-block;
  }
`
Section.defaultProps = {
  mt: 5,
  pl: 3,
}

const StyledFeedback = styled(Flex)`
  border: 2px dashed ${PINK};
  max-width: 320px;
`
StyledFeedback.defaultProps = {
  p: 3,
  my: 3,
  jc: 'center',
}

const Feedback = () => (
  <StyledFeedback>
    Any questions?
    <Link className="training-curriculum-link-clicks" ml={1} to="#contact-us">
      Contact us
    </Link>
  </StyledFeedback>
)

const CurriculumSection = props => {
  const isOpen =
    props.isOpen ||
    (getURLParameter('section') === props.name &&
      getURLParameter('tab') === props.type)

  const [isTabOpen, setIsOpen] = useState(isOpen)

  const toggleSubSection = () => {
    setIsOpen(prevState => !prevState)
  }

  useEffect(() => {
    trackUserBehaviour({
      event: CURRICULUM_MORE_DETAILS,
      payload: {
        courseOutline: props.title,
      },
    })
  }, [isTabOpen])

  const {
    title,
    name,
    type,
    subTitle,
    trainingTime = '',
    children,
    enableToggle = false,
    toggleNavigateTo,
    showLinkToCurriculum = true,
  } = props
  // TODO: Remove traingType once all upcoming workshops have type REACT_WORKSHOP or GRAPHQL_WORKSHOP as it should only be a string
  const trainingType = type.length < 5 ? type[0] : type
  const toogleLinkProps =
    toggleNavigateTo && !enableToggle
      ? {
          to:
            typeof toggleNavigateTo === 'function'
              ? toggleNavigateTo(name)
              : toggleNavigateTo,
        }
      : { onClick: toggleSubSection }

  const subsection = isTabOpen ? (
    <Box pt={1}>
      {children}
      <Feedback />
      <Link
        className="training-curriculum-link-clicks"
        duration={200}
        to={`#${name || title}`}
        onClick={toggleSubSection}
      >
        Hide detail
      </Link>
    </Box>
  ) : (
    <Link
      className="curriculum training-curriculum-link-clicks"
      {...toogleLinkProps}
    >
      Find out more
    </Link>
  )

  return (
    <Section type={trainingType}>
      <Element name={name || title} />
      {title ? (
        <H4 mb={1}>
          {title} {trainingTime && <small>{` (${trainingTime.trim()})`}</small>}
        </H4>
      ) : (
        ''
      )}
      <Box m={0} pb={3} lineHeight={2}>
        {addFullStopAtTheEnd(subTitle)} {` `}
        {showLinkToCurriculum || enableToggle ? subsection : ''}
      </Box>
    </Section>
  )
}

const addFullStopAtTheEnd = text =>
  text && text.replace ? text.replace(/([^.])$/, '$1.') : ''

CurriculumSection.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  subTitle: PropTypes.string,
  trainingTime: PropTypes.string,
  enableToggle: PropTypes.bool,
  toggleNavigateTo: PropTypes.func,
  showLinkToCurriculum: PropTypes.bool,
}

export default CurriculumSection
