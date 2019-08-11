import React from 'react'
import Section from '../CurriculumSection'
import { REACT_WORKSHOP } from '../../../config/data'
import { Li } from '../../layout/Ul'
import TestingIntroSession, {
  titleSession as introTitle,
} from '../sessions/TestingIntroSession'
import TestingInReactSession, {
  titleSession as reactTitle,
} from '../sessions/TestingInReactSession'
import Curriculum from '../Curriculum'

const CurriculumTestingInReact = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '1-Day Testing in React Curriculum' : ''}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section title={introTitle} type={REACT_WORKSHOP} {...section}>
          <TestingIntroSession title="" />
        </Section>
        <Section title={reactTitle} type={REACT_WORKSHOP} {...section}>
          <TestingInReactSession title="" />
        </Section>
      </React.Fragment>
    }
  />
)

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A developer who wants to make a difference in the projects you work on by
      learning how to test those React apps the best way possible.
    </Li>
    <Li>
      A developer who wants to stand out your résumé by being able to test
      real-world React apps.
    </Li>
    <Li>A developer with previous experience building React apps.</Li>
    <Li>
      A developer who wants to upskill or specialise in advanced React skills.
    </Li>
  </React.Fragment>
)

export default CurriculumTestingInReact
