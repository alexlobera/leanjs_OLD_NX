import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { H1Ref, H2, H3 } from '../text'
import { CurriculumSection } from './'
import { Col, Row } from '../layout/Grid'
import Ul, { Li } from '../layout/Ul'

export const CurriculumSubSection = styled.div`
  display: none;
`

const CurriculumBootcamp = () => (
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
          <Link to="/">Click here for more detail</Link>
          <CurriculumSubSection>
            <Ul>
              <Li>
                ES6 and ESNEXT
                <Ul>
                  <Li>
                    Understanding language updates - difference between ES6,
                    ES7, and ESNEXT
                  </Li>
                  <Li>Arrow Functions, Class syntax, Template strings</Li>
                  <Li>Destructuring</Li>
                  <Li>Default parameters, Rest operator, Spread operator</Li>
                  <Li>Let and Const vs Var</Li>
                  <Li>Rest + Spread properties</Li>
                  <Li>ES6 iterators and functional programming in JS</Li>
                  <Li>Modules</Li>
                  <Li>Promises</Li>
                </Ul>
              </Li>
            </Ul>
          </CurriculumSubSection>
        </CurriculumSection>
        <CurriculumSection>
          <H2>Day 2</H2>
          <H3>Forms, Authentication, Styling in React</H3>
          <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
        <CurriculumSection>
          <H2>Day 3</H2>
          <H3>Redux, and Testing Principles</H3>
          <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
      </Col>
      <Col xs={12} md={6} lg={5} lgOffset={1}>
        <CurriculumSection>
          <H2>Day 4</H2>
          <H3>
            Functional Programming, Advanced Redux, GraphQL, and Performance
            Optimizations
          </H3>
          <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
        <CurriculumSection>
          <H2>Day 5</H2>
          <H3>
            Testing in React, Functional Programming, Advanced React Patterns,
            Server-side Rendering
          </H3>
          <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
        <CurriculumSection>
          <H2>Day 6</H2>
          <H3>Hackathon</H3>
          <Link to="/">Click here for more detail</Link>
        </CurriculumSection>
      </Col>
    </Row>
  </div>
)

export default CurriculumBootcamp
