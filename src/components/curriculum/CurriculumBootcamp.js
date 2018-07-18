import React from 'react'
import styled from 'styled-components'
import withWidth, { MEDIUM } from 'react-width'
import Link from '../navigation/Link'
import { H1Ref, H2, H3 } from '../text'
import { CurriculumSection } from './'
import { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'

export const CurriculumSubSection = styled.div`
  padding-top: 20px;
`

const DAY_ONE_IS_OPEN = 'DAY_ONE_IS_OPEN'
const DAY_TWO_IS_OPEN = 'DAY_TWO_IS_OPEN'
const DAY_THREE_IS_OPEN = 'DAY_THREE_IS_OPEN'
const DAY_FOUR_IS_OPEN = 'DAY_FOUR_IS_OPEN'
const DAY_FIVE_IS_OPEN = 'DAY_FIVE_IS_OPEN'
const DAY_SIX_IS_OPEN = 'DAY_SIX_IS_OPEN'

class CurriculumBootcamp extends React.Component {
  state = {
    [DAY_ONE_IS_OPEN]: false,
    [DAY_TWO_IS_OPEN]: false,
    [DAY_THREE_IS_OPEN]: false,
    [DAY_FOUR_IS_OPEN]: false,
    [DAY_FIVE_IS_OPEN]: false,
    [DAY_SIX_IS_OPEN]: false,
  }

  toggleSubSection = day => {
    this.setState({
      [day]: !this.state[day],
    })
  }

  render() {
    const { toggleSubSection } = this

    return (
      <div>
        <H1Ref>
          The most complete curriculum{' '}
          <a href="#curriculum" name="curriculum">
            #
          </a>
        </H1Ref>
        <Row>
          <Col xs={12} md={6} lg={5} lgOffset={1}>
            <CurriculumSection>
              <H2>Day 1</H2>
              <H3>ES6 & ESNEXT, React Fundamentals, React Router</H3>
              {this.state[DAY_ONE_IS_OPEN] ? (
                <CurriculumSubSection>
                  <Ul>
                    <Li>
                      ES6 and ESNEXT
                      <Ul>
                        <Li>
                          Understanding language updates - difference between
                          ES6, ES7, and ESNEXT
                        </Li>
                        <Li>Arrow Functions, Class syntax, Template strings</Li>
                        <Li>Destructuring</Li>
                        <Li>
                          Default parameters, Rest operator, Spread operator
                        </Li>
                        <Li>Let and Const vs Var</Li>
                        <Li>Rest + Spread properties</Li>
                        <Li>ES6 iterators and functional programming in JS</Li>
                        <Li>Modules</Li>
                        <Li>Promises</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Thinking in React
                      <Ul>
                        <Li>The Imperative to Declarative Shift</Li>
                        <Li>Everything is a component</Li>
                      </Ul>
                    </Li>
                    <Li>
                      What is React made up of
                      <Ul>
                        <Li>Props & State</Li>
                        <Li>One way data binding</Li>
                        <Li>
                          Components with and without state. Classes Vs.
                          Functions
                        </Li>
                        <Li>Developer tools</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Virtual DOM and JSX
                      <Ul>
                        <Li>React Components, Elements, and Instances</Li>
                        <Li>JSX and React.createElement</Li>
                      </Ul>
                    </Li>
                    <Li>Component lifecycle</Li>
                    <Li>
                      React Router v4
                      <Ul>
                        <Li>Declarative routing</Li>
                        <Li>Implement a master-detail web application</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Data management
                      <Ul>
                        <Li>
                          Presentational Components Vs. Container Components
                        </Li>
                        <Li>Data fetching</Li>
                      </Ul>
                    </Li>
                  </Ul>
                  <Link onClick={() => toggleSubSection(DAY_ONE_IS_OPEN)}>
                    Hide detail
                  </Link>
                </CurriculumSubSection>
              ) : (
                <Link onClick={() => toggleSubSection(DAY_ONE_IS_OPEN)}>
                  Click here for more detail
                </Link>
              )}
            </CurriculumSection>
            <CurriculumSection>
              <H2>Day 2</H2>
              <H3>Forms, Authentication, Styling in React</H3>
              {this.state[DAY_TWO_IS_OPEN] ? (
                <CurriculumSubSection>
                  <Ul>
                    <Li>
                      Day 1 recap, build a React app from scratch on your own to
                      consolidate:
                      <Ul>
                        <Li>React</Li>
                        <Li>React Router</Li>
                        <Li>Data fetching</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Forms management in React
                      <Ul>
                        <Li>
                          Controlled Components vs. Uncontrolled Components
                        </Li>
                      </Ul>
                    </Li>
                    <Li>
                      Authentication
                      <Ul>
                        <Li>JWT</Li>
                        <Li>Authorization, public and private pages</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Styles
                      <Ul>
                        <Li>CSS Vs. JS</Li>
                        <Li>Styled-components</Li>
                        <Li>
                          Component libraries comparison: SemanticUI,
                          MaterialUI, Rebass, and React-Bootstrap
                        </Li>
                      </Ul>
                    </Li>
                  </Ul>
                  <Link onClick={() => toggleSubSection(DAY_TWO_IS_OPEN)}>
                    Hide detail
                  </Link>
                </CurriculumSubSection>
              ) : (
                <Link onClick={() => toggleSubSection(DAY_TWO_IS_OPEN)}>
                  Click here for more detail
                </Link>
              )}
            </CurriculumSection>
            <CurriculumSection>
              <H2>Day 3</H2>
              <H3>Redux, and Testing Principles</H3>
              {this.state[DAY_THREE_IS_OPEN] ? (
                <CurriculumSubSection>
                  <Ul>
                    <Li>Thinking in Redux. What problem is Redux solving?</Li>
                    <Li>
                      Introduction to functional programming
                      <Ul>
                        <Li>Data and behaviour</Li>
                        <Li>Data in, data out</Li>
                        <Li>Mutations</Li>
                        <Li>Pure functions</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Redux Principles
                      <Ul>
                        <Li>Store, Reducers, Actions</Li>
                        <Li>Unique source of truth</Li>
                      </Ul>
                    </Li>
                    <Li>React-Redux: Provider and Connect</Li>

                    <Li>
                      Build your own version of
                      <code>redux</code> and
                      <code>react-redux</code> using TDD
                    </Li>
                    <Li>
                      Connecting Redux to the server
                      <Ul>
                        <Li>Fetching data from the server to Redux</Li>
                      </Ul>
                    </Li>
                    <Li>Configure Redux from scratch in a React app</Li>
                    <Li>
                      Testing Principales
                      <Ul>
                        <Li>Build your own testing framework in JavaScript</Li>
                        <Li>Testing Redux actions and reducers using Jest</Li>
                        <Li>
                          Mocking. White-box testing Vs. Black-box testing
                        </Li>
                      </Ul>
                    </Li>
                  </Ul>
                  <Link onClick={() => toggleSubSection(DAY_THREE_IS_OPEN)}>
                    Hide detail
                  </Link>
                </CurriculumSubSection>
              ) : (
                <Link onClick={() => toggleSubSection(DAY_THREE_IS_OPEN)}>
                  Click here for more detail
                </Link>
              )}
            </CurriculumSection>
          </Col>
          <Col xs={12} md={6} lg={5} lgOffset={1}>
            <CurriculumSection>
              <H2>Day 4</H2>
              <H3>
                Functional Programming, Advanced Redux, GraphQL, and Performance
                Optimizations
              </H3>
              {this.state[DAY_FOUR_IS_OPEN] ? (
                <CurriculumSubSection>
                  <Ul>
                    <Li>
                      Functional programming
                      <Ul>
                        <Li>Composing functions</Li>
                        <Li>Currying, thunks and higher-order functions</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Advanced Redux:
                      <Ul>
                        <Li>Introducing the Redux middleware</Li>
                        <Li>Exercise, build your own Redux middleware</Li>
                        <Li>Thunks. Actions that dispatch actions</Li>
                        <Li>
                          Exercise, implement loading indicators using thunks
                        </Li>
                      </Ul>
                    </Li>
                    <Li>Time travel in Redux using Redux DevTools</Li>
                    <Li>
                      GraphQL
                      <Ul>
                        <Li>
                          Understand the fundamental differences between a REST
                          API and a GraphQL API
                        </Li>
                        <Li>GraphQL Queries & Mutations</Li>
                        <Li>Relay connections</Li>
                      </Ul>
                    </Li>
                    <Li>
                      GraphQL exercise: Integrate Apollo in a React & Redux app
                      <Ul>
                        <Li>Connect an Apollo client to a GraphQL server</Li>
                        <Li>
                          Implement infinite scrolling in a React app using
                          Apollo on the client-side and a Relay connection on
                          the server-side
                        </Li>
                        <Li>
                          Update the state of your React app using mutations and
                          Apollo client
                        </Li>
                      </Ul>
                    </Li>
                    <Li>
                      Performance and Rendering Optimizations (quantified with
                      numbers)
                    </Li>
                  </Ul>
                  <Link onClick={() => toggleSubSection(DAY_FOUR_IS_OPEN)}>
                    Hide detail
                  </Link>
                </CurriculumSubSection>
              ) : (
                <Link onClick={() => toggleSubSection(DAY_FOUR_IS_OPEN)}>
                  Click here for more detail
                </Link>
              )}
            </CurriculumSection>
            <CurriculumSection>
              <H2>Day 5</H2>
              <H3>
                Testing in React, Functional Programming, Advanced React
                Patterns, Server-side Rendering
              </H3>
              {this.state[DAY_FIVE_IS_OPEN] ? (
                <CurriculumSubSection>
                  <Ul>
                    <Li>
                      Testing in React
                      <Ul>
                        <Li>
                          Unit Testing, Integration Testing, and Shapshot
                          Testing
                        </Li>
                        <Li>Tooling: Enzyme & Jest</Li>
                        <Li>
                          Testing Components, Higher-Order Components, Connected
                          Containers
                        </Li>
                        <Li>Unit tests Vs integration tests</Li>
                        <Li>Code Coverage</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Functional programming
                      <Ul>
                        <Li>Composition</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Advanced React patterns: Reuse functionality across
                      components
                      <Ul>
                        <Li>Higher-Order Components (HOCs)</Li>
                        <Li>
                          Declarative composition using the Render Props (AKA
                          function as children)
                        </Li>
                      </Ul>
                    </Li>
                    <Li>
                      Advanced React patterns II: Create more reusable
                      components
                      <Ul>
                        <Li>
                          Compound Components, dynamically flow data between
                          components
                        </Li>
                        <Li>Patterns and use cases using "context"</Li>
                      </Ul>
                    </Li>
                    <Li>
                      Server Side Rendering (SSR) with React
                      <Ul>
                        <Li>Nodejs + React + React Router</Li>
                        <Li>Universal Redux</Li>
                        <Li>GraphQL SSR</Li>
                        <Li>Styled-componets SSR</Li>
                      </Ul>
                    </Li>
                  </Ul>
                  <Link onClick={() => toggleSubSection(DAY_FIVE_IS_OPEN)}>
                    Hide detail
                  </Link>
                </CurriculumSubSection>
              ) : (
                <Link onClick={() => toggleSubSection(DAY_FIVE_IS_OPEN)}>
                  Click here for more detail
                </Link>
              )}
            </CurriculumSection>
            <CurriculumSection>
              <H2>Day 6</H2>
              <H3>Hackathon</H3>
              {this.state[DAY_SIX_IS_OPEN] ? (
                <CurriculumSubSection>
                  <Ul>
                    <Li>
                      Last day real-world app challenge. We'll implement an app
                      in teams from scratch
                      <Ul>
                        <Li>Create teams</Li>
                        <Li>
                          Discussion about architecture, features and tools
                        </Li>
                        <Li>Mini Hackathon! - work in teams to build apps</Li>
                        <Li>
                          Practice extreme programming and get support from the
                          coaches and mentors
                        </Li>
                        <Li>Demo</Li>
                      </Ul>
                    </Li>
                  </Ul>
                  <Link onClick={() => toggleSubSection(DAY_SIX_IS_OPEN)}>
                    Hide detail
                  </Link>
                </CurriculumSubSection>
              ) : (
                <Link onClick={() => toggleSubSection(DAY_SIX_IS_OPEN)}>
                  Click here for more detail
                </Link>
              )}
            </CurriculumSection>
          </Col>
        </Row>
      </div>
    )
  }
}

export default withWidth()(CurriculumBootcamp)
