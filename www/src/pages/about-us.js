/* eslint no-undef: 0 */
import React from 'react'
import { graphql } from 'gatsby'

import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P, H5 } from '../components/text'
import Teamquote from '../components/text/Teamquote'
import { UpcomingTrainingSection } from '../components/training'
import Ul, { Li } from '../components/layout/Ul'
import { RootHeader as Header } from '../components/layout/Header'
import { Segment, Video, Image } from '../components/elements'
import { HideComponentsUsingCss } from '../components/utils'
import Box from '../components/layout/Box'
import LeanJSsprints from '../components/LeanJSsprints'
import { renderJob } from '../templates/team-member'

const renderProfile = ({
  fullname,
  username: { current },
  image,
  jobs,
  blockquote,
}) => {
  const imageSrc =
    image &&
    image.asset &&
    image.asset.localFile &&
    image.asset.localFile.publicURL
  const slug = `/team/${current}/`
  const job = jobs && jobs.map(renderJob())
  return (
    <Col md={4}>
      <Box sx={{ mr: 5, mb: 5, pb: 5 }}>
        <Row>
          <Col md={4}>
            <Link to={slug} className="coach-full-profile">
              <Image
                circle
                src={imageSrc}
                sx={{
                  width: '100%', // TODO DOES THE FOLLOWING WORK INSTEAD?  width: 1
                }}
                alt={`${fullname} ${job}`}
              />
            </Link>
          </Col>
          <Col md={8}>
            <Box>
              <H5 sx={{ mb: 1 }}>{fullname}</H5>
              <P>
                {job}
                <br />
                <Link className="coach-full-profile" to={slug}>
                  Full profile
                </Link>
              </P>
            </Box>
          </Col>
        </Row>
        <Teamquote blockquote={blockquote}>
          <br />
          <Link className="coach-full-profile" to={slug}>
            Full profile
          </Link>
        </Teamquote>
      </Box>
    </Col>
  )
}

const AboutUs = ({ data, trainings }) => {
  const coaches = data.coaches.nodes
  const team = data.team.nodes
  return (
    <React.Fragment>
      <Header
        titleLines={['About us']}
        subtitle="Our coaches are expert, every day developers<br /> who will mentor you throughout your React and GraphQL<br /> journey"
        links={[
          { text: 'Mission & values ', to: '#values' },
          { text: 'Coach profiles ', to: '#coaches' },
          {
            text: 'How we improve   ',
            to: '#continuous-coach-development',
          },
          { text: 'Manifesto', to: '#manifesto' },
          { text: 'Development', to: '#development' },
        ]}
      />
      <TopSection>
        <Segment>
          <Row>
            <Col md={10} mdOffset={1}>
              <H2>
                <Link to="#values" name="values"></Link>
                We are professional developers who love to teach
              </H2>
              <H3 sx={{ pt: 0 }}>Our Mission</H3>
              <P>
                To inspire and support professional developers to grow in their
                career, while leading the way for a mentorship conscious tech
                industry.
              </P>
              <H3>The React GraphQL Academy Values </H3>
            </Col>
            <Col xs={6} md={3} mdOffset={1}>
              <Ul sx={{ mb: 0 }}>
                <Li>Passion</Li>
                <Li>Empathy</Li>
                <Li>Community</Li>
                <Li>Excellence</Li>
                <Li>Continuous learning</Li>
              </Ul>
            </Col>
            <Col xs={6} md={3}>
              <Ul sx={{ mb: 0 }}>
                <Li>Forward thinking</Li>
                <Li>Determination</Li>
                <Li>Feedback</Li>
                <Li>Best-practices</Li>
                <Li>Cutting-edge</Li>
              </Ul>
            </Col>
            <HideComponentsUsingCss xs>
              <Col md={4} mdOffest={1}>
                <Video height="200" youtubeId="Rx2v_6I7PMM" />
              </Col>
            </HideComponentsUsingCss>
          </Row>
        </Segment>
      </TopSection>
      <Section sx={{ mb: 0, pb: 0 }}>
        <H2>Our coach team</H2>
        <Link to="#coaches" name="coaches"></Link>
        <Row>{coaches.filter(({ hidden }) => !hidden).map(renderProfile)}</Row>
        <H2>Our support team</H2>
        <Link to="#coaches" name="coaches"></Link>
        <Row>{team.map(renderProfile)}</Row>
      </Section>
      <Section>
        <Row>
          <Col md={5}>
            <Video youtubeId="Rx2v_6I7PMM" />
          </Col>
          <Col md={6} mdOffset={1}>
            <H2Ref>
              How we continuously improve{' '}
              <Link
                to="#continuous-coach-development"
                name="continuous-coach-development"
              >
                #
              </Link>
            </H2Ref>
            <P>
              React GraphQL Academy is made up of a{' '}
              <strong>group of developers & coaches</strong> that continuously
              strive improve their teaching skills and training material
            </P>
            <Ul>
              <Li>
                We improve the material and training resources collaboratively
                to build the most complete, progressive, and and up-to-date
                curriculum possible.
              </Li>
              <Li>
                We train together to improve our teaching skills in order to
                maximize the learning of the trainees.
              </Li>
              <Li>
                We share our expertice working at various top companies to
                create excellence in training, taking an open approach to new
                tecnologies without being prescriptive.
              </Li>
            </Ul>
            <LinkButton
              target="_self"
              to="mailto:hello@reactgraphql.academy?subject=Become a coach"
              className="how-we-improve-become-a-coach"
            >
              Become a coach
            </LinkButton>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col>
            <H2Ref>
              Our coach manifesto
              <Link to="#manifesto" name="manifesto">
                #
              </Link>
            </H2Ref>
          </Col>
          <Col md={5} mdOffset={1}>
            <H3>Coaches are curious</H3>
            <P>
              We know technology changes constantly, we embrace change and we
              always keep learning. Learning is a never-ending process.
            </P>
            <H3>
              Coaches provide alternatives to help students make informed
              decisions
            </H3>
            <P>
              Coaches explain why we use a given stack and which problem(s) it
              solves, and we should also explain alternative choices. This way,
              trainees can make their own informed decisions about what stack to
              use.
            </P>
            <H3>Coaches guide students</H3>
            <P>
              Everyone learns differently. We shouldn’t tell students what they
              can do or what they can’t do. We make recommendations, and we
              explain the rationale behind our recommendations, then trainees
              choose. We should try to balance the amount of freedom.
            </P>
            <H3>Coaches are professional developers</H3>
            <P>
              Bring your experience to the classroom. We try to explain things
              in the classroom using real-world examples we’ve worked on.
              Expressions like “in my experience” are very helpful.
            </P>
            <H3>Coaches are honest and humble</H3>
            <P>
              Coaches don’t have to know everything. It’s better to say “I don’t
              have any experience on that”, than trying to pretend you know. We
              also learn from students, and students appreciate when coaches say
              things like “thanks for sharing, I didn’t know”.
            </P>
            <H3>Teaching is not simple</H3>
            <P>
              Building real-world software is not a simple problem. Normally
              what a developer should do or not do depends on the case.
              Sometimes students want a simple answer: “what should I do, A or
              B?”. The answer in many cases is “it depends”. Our job is to make
              sure we understand trainees’ problems, and they understand the
              pros & cons of each approach we might recommend depending on the
              case.
            </P>
          </Col>
          <Col md={5} mdOffset={1}>
            <H3>Coaches are proactive and self-managed</H3>
            <P>
              Coaches don’t join to be told what to do. Coaches communicate,
              have initiative, and collaborate for the common good of the group.
            </P>
            <H3>Coaches are generous</H3>
            <P>
              We share and help others. Helping is not a transactional event.
              Being able to help has nothing to do with status, experience or
              knowledge. Being able to help has to do with being willing to
              help. We can learn from anyone, everyone has something to teach.
            </P>
            <H3>We respect each other</H3>
            <P>
              Treat people as you would like them to treat you. If you mentor
              another coach, you expect the other coach to appreciate and get
              the most of your time and effort and to replicate at least the
              same amount of effort. We don’t mentor another coach over and over
              again if we don’t see enough effort and dedication on the other
              end. If someone mentors you, you should also mentor.
            </P>
            <H3>Coaches pursue excellence</H3>
            <P>
              We believe being excellent has nothing to do with not making
              mistakes. Being excellent means working hard to do things right,
              and to learn from our mistakes so we do our best to not make them
              again.
            </P>
            <H3>Our community is open</H3>
            <P>
              We are not an exclusive VIP group, meaning we are inclusive. We
              welcome new coaches and people to our community. The only barrier
              to entry is motivation and attitude, those who work with us as
              coaches will be proactive people that want to help others.
            </P>
          </Col>
        </Row>
      </Section>
      <Section variant="dark">
        <Segment variant="primary" sx={{ border: 'none' }}>
          <LeanJSsprints />
        </Segment>
      </Section>
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}
export const query = graphql`
  query profiles {
    coaches: allSanityPerson(
      sort: { fields: order, order: ASC }
      filter: { academyRole: { eq: "coach" } }
    ) {
      nodes {
        ...Profile
      }
    }

    team: allSanityPerson(
      sort: { fields: order, order: ASC }
      filter: { academyRole: { ne: "coach" } }
    ) {
      nodes {
        ...Profile
      }
    }
  }

  fragment Profile on SanityPerson {
    fullname
    username {
      current
    }
    image {
      asset {
        url
        localFile(width: 500) {
          publicURL
        }
      }
    }
    jobs {
      title
      companyName
      companyLink
    }
    blockquote
    hidden
  }
`

export default AboutUs
