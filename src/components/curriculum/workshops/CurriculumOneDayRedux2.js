import React from 'react'
import Section from '../CurriculumSection'
import Link from '../../navigation/Link'
import { REACT_WORKSHOP } from '../../../config/data'
import { H2Ref, H3 } from '../../text'
// import selectCurriculumLayout from '../selectCurriculumLayout'
// import IntroReduxSessions from '../sessions/IntroReduxSession'
// import AdvancedReduxSession from '../sessions/AdvancedReduxSession'
import { Li } from '../../layout/Ul'

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      A developer with experience in JavaScript and with an understanding of
      React?
    </Li>
    <Li>
      Interested in understanding Redux from top to bottom including Redux
      Middlewares and tooling
    </Li>
    <Li>
      Looking to gain an in-depth understanding that will allow you to apply
      Redux to a large scale React appliaction or build upon an existing one.
    </Li>
    <Li>
      Interested in going deeper into functional programming principles and how
      they apply to Redux
    </Li>
  </React.Fragment>
)
