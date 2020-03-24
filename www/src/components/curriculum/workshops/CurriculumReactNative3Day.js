import React from 'react'
import Link from '../../navigation/Link'
import Section from '../CurriculumSection'
import Ul, { Li } from '../../layout/Ul'
import Session from '../sessions/Session'
import { TRAINING_TYPE_WORKSHOP } from '../../../config/data'
import Curriculum from '../Curriculum'

const CurriculumReactNative = ({ showTitle = true, section, ...rest }) => (
  <Curriculum
    title={showTitle ? '3-Day React Native Immersive Curriculum' : ''}
    trainingType={TRAINING_TYPE_WORKSHOP}
    {...rest}
    firstHalf={
      <React.Fragment>
        <Section
          title="Day 1 - Fundamentals"
          trainingType={TRAINING_TYPE_WORKSHOP}
          {...section}
        >
          <Session title="">
            <Ul>
              <Li>Understand how React Native works under the hood</Li>
              <Li>
                Build responsive user interfaces for both iOS and Android
                platform
              </Li>
              <Li>
                Style React Native components including Flexbox styling and
                JavaScript styling syntax
              </Li>
              <Li>
                Understand and create navigation workflows using best practices
                and platform APIs
              </Li>
              <Li>Access and understand platform specific APIs</Li>
              <Li>Access and understand how to use cross platform APIs</Li>
              <Li>
                Target individual platforms for specific UI or API changes
              </Li>
              <Li>
                Understand React Native ecosystem (popular packages and
                solutions)
              </Li>
            </Ul>
          </Session>
        </Section>
        <Section
          title="Day 2 - Intermediate"
          trainingType={TRAINING_TYPE_WORKSHOP}
          {...section}
        >
          <Session title="">
            <Ul>
              <Li>
                Understand and use various debugging techniques and which are
                most efficient/effective
              </Li>
              <Li>
                Interact with external APIs over the network using fetch/xhr
                request or web sockets
              </Li>
              <Li>
                Persist local data (encrypted/unencrypted) and overview best
                practices
              </Li>
              <Li>
                Achieve animations using React Native APIs and helper libraries{' '}
              </Li>
              <Li>
                Implement various gestures interactions using native APIs{' '}
              </Li>
              <Li>
                Deploy application updates across the air bypassing the AppStore
                and Google Play
              </Li>
              <Li>Testing React Native apps</Li>
            </Ul>
          </Session>
        </Section>
        <Section
          title="Day 3 - Advanced"
          trainingType={TRAINING_TYPE_WORKSHOP}
          {...section}
        >
          <Session title="">
            <Ul>
              <Li>Overview best practices to scale your apps</Li>
              <Li>Introduce theming into your app.</Li>
              <Li>
                Use advanced animation techniques and native gesture handling to
                improve your animations across the board
              </Li>
              <Li>
                Creating more complex navigation workflows with nested and
                custom navigators
              </Li>
              <Li>
                Writing Native modules in Objective C or Android Java and bridge
                them into React Native
              </Li>
              <Li>Successfully debug native code</Li>
              <Li>
                Implement storybook workflow for component driven development
                and interactive style guide
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
    <Li>
      You have at least a few months of experience using React on the web. If
      you don't know React, we recommend you first to attend our{' '}
      <Link to="/react/training/bootcamp">React Bootcamp</Link>
    </Li>
    <Li>
      Taking a step forward to become a React Native Specialist able to make
      critical decisions about the architecture of a React Native application.
    </Li>
    <li>
      Mandatory completion of the pre-course setup instructions (it will be sent
      2 weeks before the bootcamp)
    </li>
  </React.Fragment>
)

export default CurriculumReactNative
