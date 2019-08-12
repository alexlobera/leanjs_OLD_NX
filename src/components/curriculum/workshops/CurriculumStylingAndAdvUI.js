import React from 'react'

import { REACT_WORKSHOP } from '../../../config/data'
import { Li } from '../../layout/Ul'
import Section from '../CurriculumSection'
import AdvancedUIPatterns, {
  titleSession as titleSession1,
} from '../sessions/AdvancedUIPatterns'
import StylingInReactSession, {
  titleSession as titleSession2,
} from '../sessions/StylingInReactSession'
import DesignSystemSession, {
  titleSession as titleSession3,
} from '../sessions/DesignSystemSession'
import Curriculum from '../Curriculum'

const CurriculumStylingAndAdvUI = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '1-Day Advanced React UIs & Styling Curriculum' : ''}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section title={titleSession1} type={REACT_WORKSHOP} {...section}>
          <AdvancedUIPatterns title="" />
        </Section>
        <Section title={titleSession2} type={REACT_WORKSHOP} {...section}>
          <StylingInReactSession title="" />
        </Section>
        <Section title={titleSession3} type={REACT_WORKSHOP} {...section}>
          <DesignSystemSession title="" />
        </Section>
      </React.Fragment>
    }
  />
)

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A developer or designer with experience building React components and
      using CSS?
    </Li>
    <Li>
      A developer or designer interested in building scalable and reusable UIs
      for big React projects?
    </Li>
    <Li>
      Not satisfied with the Designer/Developer handover in real-world React
      projects?
    </Li>
    <Li>
      A designer that builds React components and interacts with developers.
    </Li>
  </React.Fragment>
)

export default CurriculumStylingAndAdvUI
