import React from 'react'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, P } from '../components/text'
import { CurriculumBootcamp } from '../components/curriculum'
import { Card, Video } from '../components/elements'
import Header from '../components/layout/Header'
import { TrustedByLogoList } from '../components/training/TrustedBySection'
import { UpcomingTrainingSection } from '../components/training'
import { Breadcrumb, Link } from '../components/navigation'

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <React.Fragment>
      <Breadcrumb
        path={[{ to: '/', label: 'Home' }, { to: `/blog/`, label: `Blog` }]}
      />
      <Header
        titleLines={['Blog']}
        subtitle="Insights into the world of ReactJS Academy"
        bgImg="about-us"
      />

      <Section>
        {posts.map(post => (
          <React.Fragment>
            <Link to={`${post.node.fields.slug}`}>
              <H2>{post.node.frontmatter.title}</H2>
            </Link>
            <P>{post.node.excerpt}</P>
          </React.Fragment>
        ))}
      </Section>

      <UpcomingTrainingSection />
    </React.Fragment>
  )
}

export const query = graphql`
  query blogQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
