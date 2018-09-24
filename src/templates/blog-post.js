import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection } from '../components/training'
import { Breadcrumb } from '../components/navigation'

const BlogPost = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
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
        subtitle="Insights into the world of ReactJS Academy"
        bgImg="about-us"
      />

      <Section>
        <Grid>
          <Card border="shadow">
            <Row>
              <Col md={10} mdOffset={1}>
                <H2>{title}</H2>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </Col>
            </Row>
          </Card>
        </Grid>
      </Section>

      <UpcomingTrainingSection />
    </React.Fragment>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
      html
    }
  }
`

export default BlogPost
