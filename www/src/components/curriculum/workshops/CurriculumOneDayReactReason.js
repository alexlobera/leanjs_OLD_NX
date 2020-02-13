import React from 'react'
import Section from '../CurriculumSection'
import { REACT_WORKSHOP } from '../../../config/data'
import Ul, { Li } from '../../layout/Ul'
import Curriculum from '../Curriculum'
import Session from '../sessions/Session'

const CurriculumReactReasonML = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? 'Working ReasonReact app with GraphQL' : ''}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section
          type={REACT_WORKSHOP}
          {...section}
          showLinkToCurriculum={false}
          enableToggle={false}
        >
          <Session title="">
            <Ul>
              <Li>
                ReasonML core syntax, Bucklescript and interop with existing
                JavaScript packages
              </Li>
              <Li>ReasonReact, Reason and GraphQL.</Li>
              <Li>
                During this workshop we will build a working ReasonReact app
                with GraphQL backend.
              </Li>
              <Li>
                We will also add JavaScript npm packages and interop between
                them and our Reason React app.
              </Li>
              <Li>
                For final touch we will discuss how to embed our ReasonReact app
                as part of bigger existing React application.
              </Li>
            </Ul>
          </Session>
        </Section>
      </React.Fragment>
    }
  />
)

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>A developer with good JavaScript and React knowledge?</Li>
    <Li>
      Open minded, basic functional programming concepts in any programming
      language is a bonus.
    </Li>
  </React.Fragment>
)

export default CurriculumReactReasonML
