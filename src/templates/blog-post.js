import React from 'react'
import styled from 'styled-components'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H3, H2_STYLE, H3_STYLE, H4_STYLE, H5_STYLE, P_STYLE } from '../components/text'
import { ANCHOR_STYLE } from '../components/navigation/'
import Header from '../components/layout/Header'
import { UpcomingTrainingSection } from '../components/training'
import { Breadcrumb } from '../components/navigation'

const Content = styled.div`
  p {
    ${P_STYLE}
  }
  h2 {
    ${H2_STYLE}
  }
  h3 {
    ${H3_STYLE}
  }
  h4 {
    ${H4_STYLE}
  }
  h5 {
    ${H5_STYLE}
  }
  a {
    ${ANCHOR_STYLE}
  }
`

const BlogPost = ({ data }) => {
  const { title, subtitle } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  const { slug } = data.markdownRemark.fields
  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: `/blog`, label: `Blog` },
          { to: `/${slug}`, label: `${title}` },
        ]}
      />
      <Header
        titleLines={[`${title}`]}
        fullHeight={false}
        paddingBottom={80}
      >
        BlogPostedBy
      </Header>

      <Grid>
        <Row>
          <Col md={6} mdOffset={1}>
            {subtitle ? <H3>{subtitle}</H3> : null}
            <Content dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
          <Col md={3} mdOffset={1}>
            right column
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </Col>
        </Row>
      </Grid>

      <UpcomingTrainingSection />
    </React.Fragment >
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
      }
      fields {
        slug
      }
      html
    }
  }
`

export default BlogPost
