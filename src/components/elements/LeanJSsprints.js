import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Link from '../navigation/Link'
import { LinkButton } from '../buttons'
import { Col, Row } from '../layout/Grid'
import { H2Ref, P } from '../text'
import { Card, Image } from '.'

const LeanJSsprints = () => {
  const data = useStaticQuery(graphql`
    query alexLeanJSImg($imgMaxWidth: Int = 1000) {
      file(absolutePath: { regex: "/alex_leanJS/" }) {
        childImageSharp {
          fluid(maxWidth: $imgMaxWidth) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const alexLeanJSImgSrc = data.file.childImageSharp.fluid.src

  return (
    <Card variant="primary">
      <Row>
        <Col md={4} mdOffset={1}>
          <Image
            src={alexLeanJSImgSrc}
            width="100%"
            alt="LeanJS UX designer Paul Woodley, sorting post-it notes into different columns "
          />
        </Col>
        <Col md={1} />
        <Col md={5}>
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
            workshops bolster learnings from the React GraphQL Academy core
            curriculum to open up advanced Lean techniques skills to your team.
          </P>
          <P>
            <LinkButton to="https://leanjs.com">
              Find out more at LeanJS.com
            </LinkButton>
          </P>
        </Col>
      </Row>
    </Card>
  )
}

export default LeanJSsprints
