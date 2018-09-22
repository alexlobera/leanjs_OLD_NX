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
  return (
    <React.Fragment>
      <Breadcrumb
        path={[{ to: '/', label: 'Home' }, { to: `/blog`, label: `BlogPost` }]}
      />
      <Header
        titleLines={[`${title}`]}
        subtitle="Insights into the world of ReactJS Academy"
        bgImg="about-us"
      />

      <Section>
        <H2>{post.frontmatter.title}</H2>
        ))}
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
      html
    }
  }
`

export default BlogPost
