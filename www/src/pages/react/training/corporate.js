import React, { useState } from 'react'
import Helmet from 'react-helmet'

import { BLUE } from 'src/config/styles'
import { CORP_TRAINING } from 'src/../images/imageNames'
import TrustedBySection from 'src/components/training/TrustedBySection'
import Section, { TopSection } from 'src/components/layout/Section'
import { Col, Row } from 'src/components/layout/Grid'
import { H2, P } from 'src/components/text'
import { UpcomingTrainingSection, AttendeeQuote } from 'src/components/training'
import TrustedByLogoList2 from 'src/components/training/TrustedByLogoList2'
import Header from 'src/components/layout/Header'
import { Segment } from 'src/components/elements'
import CurriculumCorporateReact from 'src/components/curriculum/CurriculumCorporateReact'
import { createMetas } from 'src/components/utils'
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js'
import { TECH_REACT } from 'src/config/data'
import { getPostsFromNodes } from 'src/components/blog/utils'
import BlogSection from 'src/components/blog/BlogSection'
import Image from 'src/components/elements/Image'
import Button from 'src/components/buttons/Button'
import { InputField, Form } from 'src/components/form'
import {
  composeValidators,
  required,
  mustBeEmail,
  onlyPositiveNumbers,
  parseToInt,
} from 'src/components/form/validations'
import Spinner from 'src/components/form/Spinner'
import { requestQuote } from 'src/api/rest'

const metas = {
  title: 'React Corporte Training | React GraphQL Academy',
  description:
    'Interested in React corporate training? We offer corporate private React team training, located in your offices anywhere in the world, or remotely. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
}

const RequestTrialForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleFormSubmit = async data => {
    await requestQuote(data)

    setFormSubmitted(true)
  }

  return (
    <React.Fragment>
      {formSubmitted ? (
        <strong>Thanks for submitting your request</strong>
      ) : (
        <Form
          onSubmit={handleFormSubmit}
          render={({ handleSubmit, valid, formSubmitted, submitting }) => {
            return (
              <form
                onSubmit={handleSubmit}
                style={formSubmitted ? { display: 'none' } : {}}
              >
                <P>
                  Level expertise across your team/s and stay competitive
                  without taking risks. Request now a free 3-hour remote private
                  React training for your team.
                </P>
                <InputField
                  validate={composeValidators(mustBeEmail, required)}
                  label="Your email address"
                  name="email"
                  placeholder="eg. steve@jobs.com"
                />
                <InputField
                  validate={composeValidators(onlyPositiveNumbers, required)}
                  label="How many developers you'd like to train?"
                  name="participants"
                  placeholder="eg. 8"
                  parse={parseToInt}
                />
                <InputField
                  validate={required}
                  label="Location/ timezone"
                  name="location"
                  placeholder="eg. London"
                />
                <P>
                  <Button
                    sx={{ mt: 3 }}
                    variant={'primary'}
                    type="submit"
                    disabled={!valid}
                    className="newsletter-submit-button"
                  >
                    {submitting ? <Spinner /> : 'Submit request'}
                  </Button>{' '}
                </P>
              </form>
            )
          }}
        />
      )}
      <P>
        Our sales team will contact you as soon as possible to discuss further
        details.
      </P>
    </React.Fragment>
  )
}

const CorporateReactTraining = ({ path, trainings, data }) => {
  const posts = getPostsFromNodes({
    sanityNodes: data.allSanityPost.nodes,
  }).slice(0, 3)

  const remoteTrainingImageFluid = data.file.childImageSharp.fluid

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

      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <H2>
              <a name="free-trial" />
              Request a free trial
            </H2>
            <RequestTrialForm />
          </Col>
          <Col mdOffset={1} md={5}>
            <Image
              fluid={remoteTrainingImageFluid}
              sx={{
                mt: [3, 0],
              }}
              alt="React GraphQL Academy remote training"
            />
          </Col>
        </Row>
      </Section>
      <TrustedBySection type="contact" showContent />
      <BlogSection title="From our blog" posts={posts} />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    file(absolutePath: { regex: "/react-remote-training/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

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
