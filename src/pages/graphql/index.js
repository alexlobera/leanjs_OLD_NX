import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import Header from 'src/components/layout/Header'
import {
  TrustedBySection,
  UpcomingTrainingSection,
} from 'src/components/training'
import { Segment, Image } from 'src/components/elements'
import { GRAPHQL_BOOTCAMP, TECH_GRAPHQL } from 'src/config/data'
import { TrainingCardList } from 'src/components/training'
import LearningResources from 'src/components/blog/LearningResources'
import { GRAPHQL_PINK } from 'src/config/styles'
import { createSocialMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import Newsletter from 'src/components/elements/Newsletter'
import Card from 'src/components/elements/Card'
import { getPostsFromNodes } from 'src/components/blog/utils'

const trainingList = [
  {
    title: 'GraphQL Bootcamp',
    text: `Master GraphQL server-side and client-side`,
    to: '/graphql/training/bootcamp/',
  },
  {
    title: 'GraphQL Part-time Course',
    text: `Maximum GraphQL training flexibility that fits around your`,
    to: '/graphql/training/part-time-course/',
  },
  {
    title: 'GraphQL APIs Training',
    text: `Rapid learning with a deep-dive into GraphQL APIs`,
    to: '/graphql/training/api/',
  },
  {
    title: 'GraphQL Corporate Training',
    text: ` We come to you, teach skills and best practice to your
    entire team!`,
    to: '/graphql/training/corporate',
  },
  {
    title: 'GraphQL Workshops',
    text: `Covering specific aspects in GraphQL so you can
    specialise`,
    to: '/graphql/training/workshops/',
  },
]

const metas = {
  title: 'Learn GraphQL | React GraphQL Academy',
  description:
    'Interested in learning GraphQL? Learn GrapQL with us. Supercharge your development skill set with the latest curriculum in GraphQL. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const GraphQLPage = ({ data, path }) => {
  const posts = getPostsFromNodes({
    markdownNodes: data.markdownPosts && data.markdownPosts.nodes,
    sanityNodes: data.sanityNodes && data.sanityNodes.nodes,
  })

  return (
    <Layout>
      {({ trainings }) => (
        <React.Fragment>
          <Helmet
            title={metas.title}
            meta={[
              {
                name: 'description',
                content: metas.description,
              },
            ]}
          >
            {createSocialMetas(metas)}
          </Helmet>
          <Header
            breadcrumbPath={[
              { to: '/', label: 'Home' },
              { to: path, label: 'GraphQL' },
            ]}
            tech={TECH_GRAPHQL}
            titleLines={['Learn GraphQL with us...']}
            subtitle="Supercharge your development skill set with latest curriculum in GraphQL"
            bgImageName={BOOTCAMP}
            bgColor={GRAPHQL_PINK}
            links={[
              {
                text: 'Latest GraphQL Blogs',
                to: '#free-graphql-resources',
              },
              {
                text: 'Our GraphQL training',
                to: '#our-graphql-training',
              },
              {
                text: 'What is GraphQL?',
                to: '#what-is-graphql',
              },
            ]}
            type={GRAPHQL_BOOTCAMP}
          />
          <TopSection>
            <Segment>
              <Row>
                <Link
                  to="#free-graphql-resources"
                  name="free-graphql-resources"
                />
                <Col md={5} mdOffset={1}>
                  <LearningResources posts={posts} type="GraphQL" />
                </Col>
                <Link to="#our-graphql-training" name="our-graphql-training" />
                <Col md={4} mdOffset={1}>
                  <H3>Our GraphQL training</H3>
                  <TrainingCardList
                    data={trainingList}
                    borderColor={GRAPHQL_PINK}
                    className="course-training-clicks"
                  />
                  <Card variant="primary" borderColor={GRAPHQL_PINK} mt={4}>
                    <Newsletter mt={2} buttonVariant="primary" />
                  </Card>
                </Col>
              </Row>
            </Segment>
          </TopSection>

          <Section>
            <Row>
              <Col md={5} mdOffset={1}>
                <H2>
                  <Link to="#what-is-graphql" name="what-is-graphql" />
                  What is GraphQL?
                </H2>
                <P>
                  GraphQL is a modern syntax for building and querying APIs, but
                  what does that actually mean? And why should you use GraphQL?
                </P>
                <Ul>
                  <Li>
                    At it's core, GraphQL describes how ot ask a server for data
                  </Li>
                  <Li>
                    Your apps decide what data they need and recieve only that
                  </Li>
                  <Li>
                    Therefore, GraphQL is very effecient and helps your system
                    be well organised
                  </Li>
                  <Li>
                    It's growing at a fast pace and the community is fantastic!
                  </Li>
                </Ul>
                <LinkButton
                  className="course-training-what-is-clicks"
                  to="/graphql/what-is-graphql-used-for/"
                >
                  Blog: What is GraphQL and What Is It Used For?
                </LinkButton>
              </Col>
              <Col md={5} mdOffset={1}>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/graphql_university%2Fhomepage_whyGQLU.jpg?alt=media&"
                  alt="Why learn GraphQL"
                />
              </Col>
            </Row>
          </Section>
          <TrustedBySection showContent />
          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query graphqlPage {
    sanityNodes: allSanityPost(
      filter: { category: { eq: "graphql" } }
      sort: { fields: publishedAt, order: DESC }
      limit: 3
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }

    markdownPosts: allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "/(/graphql/)/" } }
        frontmatter: { contentType: { eq: "blog" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      nodes {
        ...MarkdownPostItemFragment
      }
    }
  }
`
export default GraphQLPage
