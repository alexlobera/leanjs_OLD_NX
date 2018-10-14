import React from 'react'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H3 } from '../components/text'
import Header from '../components/layout/Header'
import { UpcomingTrainingSection } from '../components/training'
import { Breadcrumb } from '../components/navigation'

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
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
