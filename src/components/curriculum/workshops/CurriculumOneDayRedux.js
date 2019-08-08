import React from 'react'
import Section from '../CurriculumSection'
import { REACT_WORKSHOP } from '../../../config/data'
import IntroReduxSessions, {
  titleSession as titleSession1,
} from '../sessions/IntroReduxSession'
import AdvancedReduxSession, {
  titleSession as titleSession2,
} from '../sessions/AdvancedReduxSession'
import { Li } from '../../layout/Ul'
import Curriculum from './Curriculum'

const CurriculumOneDayRedux = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '1-Day Redux Curriculum' : ''}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section title={titleSession1} type={REACT_WORKSHOP} {...section}>
          <IntroReduxSessions title="" />
        </Section>
        <Section title={titleSession2} type={REACT_WORKSHOP} {...section}>
          <AdvancedReduxSession title="" />
        </Section>
      </React.Fragment>
    }
  />
)

// const CurriculumOneDayRedux = ({
//   showTitle = true,
//   layout,
//   enableToggle = true,
//   isOpen,
//   showLinkToCurriculum = false,
// }) => {
//   const type = REACT_WORKSHOP
//   const commonProps = {
//     showLinkToCurriculum,
//     enableToggle,
//     type,
//     isOpen,
//   }
//   const firstHalf = (
//     <React.Fragment>
//       <Section
//         {...commonProps}
//         title={titleSession1}
//         subTitle="Redux from the ground up"
//       >
//         <IntroReduxSessions />
//       </Section>
//     </React.Fragment>
//   )
//   const secondHalf = (
//     <React.Fragment>
//       <Section
//         {...commonProps}
//         title={titleSession2}
//         subTitle="Advanced concepts including FP and middlewares"
//       >
//         <AdvancedReduxSession />
//       </Section>
//     </React.Fragment>
//   )

//   const title = showTitle ? (
//     <H2Ref>
//       Redux{' '}
//       <Link to="#curriculum" name="curriculum">
//         #
//       </Link>
//       <H3>1 day workshop</H3>
//     </H2Ref>
//   ) : null

//   return selectCurriculumLayout({
//     firstHalf,
//     secondHalf,
//     title,
//     layout,
//     type,
//     corpTrainingFacts: true,
//   })
// }

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

export default CurriculumOneDayRedux
