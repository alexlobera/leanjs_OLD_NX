import React from 'react'
import Section from '../CurriculumSection'
import { REACT_WORKSHOP } from '../../../config/data'
import AdvancedReactPatternsSession, {
  titleSession as titleSession1,
} from '../sessions/AdvancedReactPatternsSession'
import ReactPerformanceSession, {
  titleSession as titleSession2,
} from '../sessions/ReactPerformanceSession'
import { Li } from '../../layout/Ul'
import Curriculum from '../Curriculum'

const CurriculumAdvReactPatterns = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '1-Day Advanced React Patterns, FP and Performance' : ''}
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

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>A developer with previous experience building React apps?</Li>
    <Li>
      A developer who wants to upskill or specialise in advanced React skills?
    </Li>
    <Li>
      A developer who is frustrated with slow performancce of your creations?
    </Li>
  </React.Fragment>
)

export default CurriculumAdvReactPatterns
