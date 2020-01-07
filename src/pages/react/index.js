import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { BLUE } from 'src/config/styles'
import { BOOTCAMP } from 'src/../images/imageNames'
import Layout from 'src/components/layout'
import { LinkButton } from 'src/components/buttons'
import { Link } from 'src/components/navigation'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, H3, P } from 'src/components/text'
import Ul, { Li } from 'src/components/layout/Ul'
import Header from 'src/components/layout/Header'
import { UpcomingTrainingSection, AttendeeQuote } from 'src/components/training'
import { Segment } from 'src/components/elements'
import { Breadcrumb } from 'src/components/navigation'
import { REACT_BOOTCAMP, TECH_REACT } from 'src/config/data'
import { TrainingCardList } from 'src/components/training'
import LearningResources from 'src/components/blog/LearningResources'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { createSocialMetas } from 'src/components/utils'
import Newsletter from 'src/components/elements/Newsletter'
import Card from 'src/components/elements/Card'
import { getPostsFromNodes } from 'src/components/blog/utils'

const trainingList = [
  {
    title: 'React Bootcamp',
    text: ` Rapid learning with a deep-dive into the whole React
    Ecosystem`,
    to: '/react/training/bootcamp/',
  },
  {
    title: 'React Part-Time Course',
    text: `Maximum React training flexibility that fits around your
    job`,
    to: 'react/training/part-time-course',
  },
  {
    title: 'React Corporate Training',
    text: ` We come to you, teach skills and best practice to your
    entire team!`,
    to: '/react/training/corporate',
  },
  {
    title: 'Advanced React Training',
    text: `For React developers who need to supercharge their
    React skills`,
    to: '/react/training/advanced/',
  },
  {
    title: '1-day React Workshops',
    text: `Covering specific aspects in React so you can
    specialise`,
    to: '/react/training/workshops',
  },
]

const metas = {
  title: 'Learn React | React GraphQL Academy',
  description:
    'Interested in learning React? Learn React with us and supercharge your development skillset with the latest curriculum in React. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const ReactPage = ({ data, path }) => {
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
          <Breadcrumb
            path={[
              { to: '/', label: 'Home' },
              {
                to: path,
                label: 'React',
              },
            ]}
          />
          <Header
            titleLines={['Learn React with us...']}
            subtitle="Move into the future of development with the React Ecosystem"
            bgImageName={BOOTCAMP}
            bgColor={BLUE}
            links={[
              {
                text: 'Latest React Blogs',
                to: '#free-react-resources',
              },
              {
                text: 'Our React training',
                to: '#our-react-training',
              },
              {
                text: 'What is React?',
                to: '#what-is-react',
              },
            ]}
            type={REACT_BOOTCAMP}
            tech={TECH_REACT}
          />
          <TopSection>
            <Segment>
              <Row>
                <Link to="#free-react-resources" name="free-react-resources" />
                <Col md={5} mdOffset={1}>
                  <LearningResources posts={posts} type="React" />
                </Col>
                <Link to="#our-react-training" name="our-react-training" />
                <Col md={4} mdOffset={1} mt={[5, 0]}>
                  <H3>Our React training</H3>
                  <TrainingCardList data={trainingList} borderColor={BLUE} />
                  <Card variant="primary" mt={4}>
                    <Newsletter anchorName="" mt={2} buttonVariant="primary" />
                  </Card>
                </Col>
              </Row>
            </Segment>
          </TopSection>

          <Section>
            <Row>
              <Col md={5} mdOffset={1} order={[2, 1]}>
                <AttendeeQuote
                  mt={[5, 0]}
                  quote="I've found it [the course] fantastic, it was really tiring but it was all worth it... it taught me many things I didn't even know I don't know about React"
                  fullname="Polina Stoyanova"
                  job="Software Engineer & UX"
                  company="tray.io"
                  youtubeId="6hmKu1-vW-8"
                  youtubeTime="35"
                />
              </Col>
              <Col md={4} lgOffset={1} order={[1, 2]}>
                <H2>
                  <Link to="#what-is-react" name="what-is-react" />
                  What is React?
                </H2>
                <P>
                  Created by Facebook in 2015, React is a JavaScript library -
                  not a framework - that creates user interfaces. Basically,
                  it's a simpler and better way of developing apps because...
                </P>
                <Ul>
                  <Li>React is declarative</Li>
                  <Li>It's all about Reusable Components</Li>
                  <Li>React is SEO friendly</Li>
                  <Li>It fully embraces JavaScript</Li>
                  <Li>
                    It's growing at a fast pace and the community is fantastic!
                  </Li>
                </Ul>
                <P>
                  <LinkButton to="/react/top-10-reasons-to-learn-react/">
                    Blog: Why You Should Learn React Right Now
                  </LinkButton>
                </P>
              </Col>
            </Row>
          </Section>

          <UpcomingTrainingSection trainings={trainings} />
        </React.Fragment>
      )}
    </Layout>
  )
}

export const query = graphql`
  query reactPage {
    sanityNodes: allSanityPost(
      filter: { category: { eq: "react" } }
      sort: { fields: publishedAt, order: DESC }
      limit: 3
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }

    markdownPosts: allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "/(/react/)/" } }
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

export default ReactPage
