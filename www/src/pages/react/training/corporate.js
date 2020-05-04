import React from 'react'
import Helmet from 'react-helmet'

import { BLUE } from 'src/config/styles'
import { CORP_TRAINING } from 'src/../images/imageNames'
import TrustedBySection from 'src/components/training/TrustedBySection'
import { LinkButton } from 'src/components/buttons'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import { UpcomingTrainingSection, AttendeeQuote } from 'src/components/training'
import TrustedByLogoList2 from 'src/components/training/TrustedByLogoList2'
import Header from 'src/components/layout/Header'
import { CallToActionRow } from 'src/components/layout/CallToActionRow'
import { Segment } from 'src/components/elements'
import CurriculumCorporateReact from 'src/components/curriculum/CurriculumCorporateReact'
import { createMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { TECH_REACT } from 'src/config/data'
import { getPostsFromNodes } from 'src/components/blog/utils'
import BlogSection from 'src/components/blog/BlogSection'

const metas = {
  title: 'React Corporte Training | React GraphQL Academy',
  description:
    'Interested in React corporate training? We offer corporate React team training, located in your offices anywhere in the world. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const CorporateReactTraining = ({ path, trainings, data }) => {
  const posts = getPostsFromNodes({
    sanityNodes: data.allSanityPost.nodes,
  }).slice(0, 3)

  return (
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
        {createMetas(metas)}
      </Helmet>
      <Header
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          {
            to: '/react',
            label: 'React',
          },
          {
            to: '/react/training/',
            label: 'Training',
          },
          {
            to: path,
            label: 'Corporate',
          },
        ]}
        tech={TECH_REACT}
        bgColor={BLUE}
        titleLines={['Corporate React team training']}
        subtitle="Private team training, located in your offices anywhere in the world or remotely, based on our proven React curriculum."
        links={[
          { text: 'Training curriculum', to: '#curriculum' },
          { text: 'How tailored', to: '#how-tailored' },
          { text: 'Locations', to: '#location' },
          { text: 'Pricing', to: '#pricing' },
          { text: 'Previous clients', to: '#previous-clients' },
        ]}
        bgImageName={CORP_TRAINING}
      />
      <TopSection>
        <a name="schedule" />
        <Segment>
          <CurriculumCorporateReact />
        </Segment>
      </TopSection>
      <Section>
        <Row>
          <Col md={5} mdOffset={1} order={[2, 1]}>
            <a name="previous-clients" />
            <AttendeeQuote
              quote="It's really hard to find good advanced tech training. In house, you standardise the knowledge [in a team] and start doing things the right way."
              fullname="Eber Herrera"
              job="Technical Director"
              company="Xing"
              youtubeId="TAtsPib9P9w"
              ctaButton="How Training Keeps Xing 
              Tech-Relevant (Blog)"
              ctaUrl="/blog/5-reasons-why-advanced-dev-training-will-keep-your-company-tech-relevant/"
            />
          </Col>
          <Col md={4} lgOffset={1} order={[1, 2]}>
            <H2>We have delivered Corporate training to almost any industry</H2>
            <TrustedByLogoList2 />
          </Col>
        </Row>
      </Section>
      <TrustedBySection type="contact" showContent />
      {/* <Section>
        <a name="custom-training" />
        <LeanJSsprints />
      </Section> */}
      <BlogSection title="From our blog" posts={posts} />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allSanityPost(
      limit: 3
      filter: {
        category: { in: ["react", "blog"] }
        tags: { elemMatch: { name: { in: ["business"] } } }
      }
      sort: { fields: [order, publishedAt], order: [ASC, DESC] }
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }
  }
`

export default CorporateReactTraining
