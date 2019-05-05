import React from 'react'
import styled from 'styled-components'
import Link from '../navigation/Link'
import { LinkButton } from '../buttons'
import Grid, { Col, Row } from '../layout/Grid'
import { H2Ref, P } from '../text'
import Ul, { Li } from '../layout/Ul'
import { Card, Image } from '../elements'
import { LeanJS } from '../logos'
import { CODEVELOP } from '../../config/images'
import { WHITE } from '../../config/styles'

const StyledLeanJSsprints = styled.div``
const LeanJSsprints = () => (
  <StyledLeanJSsprints>
    <Card bg="darkGrey" border="shadow">
      <Row>
        <Col xs={12} md={4} mdOffset={1}>
          <Image
            src={CODEVELOP}
            width="100%"
            alt="LeanJS UX designer Paul Woodley, sorting post-it notes into different columns "
          />
        </Col>
        <Col xs={12} md={1} />
        <Col xs={12} md={5}>
          <H2Ref>
            <Link to="#development" name="development" />
            Need specialised training using your codebase?
          </H2Ref>
          <P>
            Our parent company LeanJS runs flexible week-long Sprints teaching
            React, GraphQL or UX Design to help improve your codebase and
            development workflows.{' '}
          </P>
          <P>
            Working on a product/codebase that you help identify, these 5-day
            workshops bolster learnings from the ReactJS Academy core curriculum
            to open up advanced Lean techniques skills to your team.
          </P>
          <P>
            <LinkButton to="https://leanjs.com">
              Find out more at LeanJS.com
            </LinkButton>
          </P>
        </Col>
      </Row>
    </Card>
  </StyledLeanJSsprints>
)

export default LeanJSsprints
