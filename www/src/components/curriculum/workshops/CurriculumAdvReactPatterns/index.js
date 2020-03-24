import React from 'react'
import Section from '../../CurriculumSection'
import { TRAINING_TYPE_WORKSHOP } from '../../../../config/data'
import AdvancedReactPatternsSession, {
  titleSession as titleSession1,
} from '../../sessions/AdvancedReactPatternsSession'
import AdvancedHooksAndPerfSession, {
  titleSession as titleSession2,
} from '../../sessions/AdvancedHooksAndPerfSession'
import Curriculum from '../../Curriculum'

const CurriculumAdvReactPatterns = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '1-Day Advanced React Patterns and Performance' : ''}
    trainingType={TRAINING_TYPE_WORKSHOP}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section
          title={titleSession1}
          trainingType={TRAINING_TYPE_WORKSHOP}
          {...section}
        >
          <AdvancedReactPatternsSession title="" />
        </Section>
        <Section
          title={titleSession2}
          trainingType={TRAINING_TYPE_WORKSHOP}
          {...section}
        >
          <AdvancedHooksAndPerfSession title="" />
        </Section>
      </React.Fragment>
    }
  />
)

export default CurriculumAdvReactPatterns
