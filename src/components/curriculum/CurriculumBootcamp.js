import React from 'react'
import Link from '../navigation/Link'
import { H1Ref, H2, H3 } from '../text'
import { CurriculumSection } from './'
import { Col, Row } from '../layout/Grid'

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
