import React from 'react'
import Section from '../../CurriculumSection'
import { REACT_WORKSHOP } from '../../../../config/data'
import AdvancedReactPatternsSession, {
  titleSession as titleSession1,
} from '../../sessions/AdvancedReactPatternsSession'
import ReactPerformanceSession, {
  titleSession as titleSession2,
} from '../../sessions/ReactPerformanceSession'
import Curriculum from '../../Curriculum'

const CurriculumAdvReactPatterns = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '1-Day Advanced React Patterns, FP and Performance' : ''}
    type={REACT_WORKSHOP}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section title={titleSession1} type={REACT_WORKSHOP} {...section}>
          <AdvancedReactPatternsSession title="" />
        </Section>
        <Section title={titleSession2} type={REACT_WORKSHOP} {...section}>
          <ReactPerformanceSession title="" />
        </Section>
      </React.Fragment>
    }
  />
)

export default CurriculumAdvReactPatterns
