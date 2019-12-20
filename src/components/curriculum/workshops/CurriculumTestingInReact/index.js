import React from 'react'
import Section from '../../CurriculumSection'
import { REACT_WORKSHOP } from '../../../../config/data'
import TestingIntroSession, {
  titleSession as introTitle,
} from '../../sessions/TestingIntroSession'
import TestingInReactSession, {
  titleSession as reactTitle,
} from '../../sessions/TestingInReactSession'
import Curriculum from '../../Curriculum'

const CurriculumTestingInReact = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '1-Day Testing in React Curriculum' : ''}
    type={REACT_WORKSHOP}
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

export default CurriculumTestingInReact
