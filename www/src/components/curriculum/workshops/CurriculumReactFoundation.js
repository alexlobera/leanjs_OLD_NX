import React from 'react'
import Section from '../CurriculumSection'
import Curriculum from '../Curriculum'
import ES6Session, { titleSession as es6Title } from '../sessions/ES6Session'
import ThinkingInReactSession, {
  titleSession as thinkingTitle,
} from '../sessions/ThinkingInReactSession'
import RoutingAndDataFetchingSession, {
  titleSession as routingTitle,
} from '../sessions/RoutingAndDataFetchingSession'
import { Li } from 'src/components/layout/Ul'
import { REACT_WORKSHOP } from '../../../config/data'

const CurriculumReactFoundation = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '1-Day React Foundation Curriculum' : ''}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section title={thinkingTitle} type={REACT_WORKSHOP} {...section}>
          <ThinkingInReactSession title="" />
        </Section>
        <Section title={es6Title} type={REACT_WORKSHOP} {...section}>
          <ES6Session title="" />
        </Section>
        <Section title={routingTitle} type={REACT_WORKSHOP} {...section}>
          <RoutingAndDataFetchingSession title="" />
        </Section>
      </React.Fragment>
    }
  />
)

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      Ideal for <strong>React beginners</strong>.
    </Li>
    <Li>
      You've done some online tutorials and can build very simple things with
      React that work, but you are not sure how and why they work.
    </Li>
    <Li>
      Want to build a single-page app in React with navigation between different
      pages and you are not sure of the right approach.
    </Li>
    <Li>
      Want to pull data from an API into a React app but you are confused with
      the different approaches you find on the Internet.
    </Li>
  </React.Fragment>
)

export default CurriculumReactFoundation
