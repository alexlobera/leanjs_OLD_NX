import React, { useState, useEffect } from 'react'
import { H4 } from '../text'
import { Element } from 'react-scroll'
import Link from '../navigation/Link'
import trackUserBehaviour, {
  CURRICULUM_MORE_DETAILS,
} from '../utils/trackUserBehaviour'
import { selectTechColor, selectBorderStyle } from '../utils'
import { getURLParameter } from '../utils/url'
import Box from '../layout/Box'
import Card from '../elements/Card'

// DELETE NEXT FUNCTION AFTER GRAPHQL REFACTORING
export const curriedToggleNavigateTo = to => section =>
  to ? `${to}&section=${section}` : false

export const navigateToSection = (to, section) =>
  section ? `${to}&section=${section}` : to

const CurriculumSection = props => {
  const isOpen =
    props.isOpen ||
    (getURLParameter('section') === props.name &&
      getURLParameter('tab') ===
        `${props.trainingId}${props.trainingInstanceTypeName}`)
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
  }, [isTabOpen, props.title])

  const {
    title,
    name,
    tech,
    trainingType,
    subTitle,
    trainingDateTime = '',
    children,
    enableToggle = false,
    toggleNavigateTo,
    showLinkToCurriculum = true,
    sx = {},
  } = props

  const toogleLinkProps =
    toggleNavigateTo && !enableToggle
      ? {
          to: navigateToSection(toggleNavigateTo, name),
        }
      : { onClick: toggleSubSection }

  const subsection = isTabOpen ? (
    <Box sx={{ pt: 1 }}>
      {children}
      {enableToggle || showLinkToCurriculum ? (
        <Link
          className="training-curriculum-link-clicks"
          duration={200}
          to={`#${name || title}`}
          onClick={toggleSubSection}
        >
          Hide detail
        </Link>
      ) : null}
    </Box>
  ) : enableToggle || showLinkToCurriculum ? (
    <Link
      sx={{ display: 'block', pt: subTitle ? 1 : 0 }}
      className="curriculum training-curriculum-link-clicks"
      {...toogleLinkProps}
    >
      Find out more
    </Link>
  ) : null

  return (
    <Card
      borderStyle={selectBorderStyle({ trainingType })}
      borderColor={selectTechColor({ tech })}
      sx={{
        mt: 4,
        ...sx,
      }}
    >
      <Element name={name || title} />
      {title ? (
        <H4 sx={{ mb: 1 }}>
          {title} {trainingDateTime && <small>{trainingDateTime}</small>}
        </H4>
      ) : (
        ''
      )}
      <Box sx={{ m: 0, pb: 1, lineHeight: 2 }}>
        {addFullStopAtTheEnd(subTitle)} {` `}
        {subsection}
      </Box>
    </Card>
  )
}

const addFullStopAtTheEnd = text =>
  text && text.replace ? text.replace(/([^.])$/, '$1.') : ''

// CurriculumSection.defaultProps = {
//   sx: { mt: 4 },
// }

export default CurriculumSection
