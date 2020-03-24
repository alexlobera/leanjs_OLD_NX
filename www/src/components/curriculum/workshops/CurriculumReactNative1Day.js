import React from 'react'
import Link from '../../navigation/Link'
import { Li } from '../../layout/Ul'
import Section from '../CurriculumSection'
import ReactNativeFoundationSession, {
  titleSession as titleSession1,
} from '../sessions/native/ReactNativeFoundationSession'
import ReactNativeNavigationSession, {
  titleSession as titleSession2,
} from '../sessions/native/ReactNativeNavigationSession'
import ReactNativeAnimationsSession, {
  titleSession as titleSession3,
} from '../sessions/native/ReactNativeAnimationsSession'
import { TRAINING_TYPE_WORKSHOP } from '../../../config/data'
import Curriculum from '../Curriculum'

const trainingType = TRAINING_TYPE_WORKSHOP

const CurriculumReactNative = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '1-Day React Native Curriculum' : ''}
    trainingType={trainingType}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section title={titleSession1} trainingType={trainingType} {...section}>
          <ReactNativeFoundationSession title="" />
        </Section>
        <Section title={titleSession2} trainingType={trainingType} {...section}>
          <ReactNativeNavigationSession title="" />
        </Section>
        <Section title={titleSession3} trainingType={trainingType} {...section}>
          <ReactNativeAnimationsSession title="" />
        </Section>
      </React.Fragment>
    }
  />
)

export const TargetAudienceList = () => (
  <React.Fragment>
    <Li>
      You have at least a few months of experience using React on the web. If
      you don't know React, we recommend you first to attend our{' '}
      <Link to="/react/training/bootcamp">React Bootcamp</Link>
    </Li>
    <Li>
      Taking a step forward to become a React Native Specialist able to make
      critical decisions about the architecture of a React Native application.
    </Li>
  </React.Fragment>
)

export default CurriculumReactNative
