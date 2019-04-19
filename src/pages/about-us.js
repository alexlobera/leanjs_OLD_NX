import React from 'react'
import styled from 'styled-components'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section, { TopSection } from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import { H2, H2Ref, H3, P, H4 } from '../components/text'
import {
  UpcomingTrainingSection,
  withUpcomingTrainings,
} from '../components/training'
import Ul, { Li } from '../components/layout/Ul'
import Header from '../components/layout/Header'
import CallToActionNextTrainings from '../components/layout/CallToActionNextTrainings'
import { Card, Video, Image, Newsletter } from '../components/elements'
import { Blockquote } from '../components/text'
import { LeanJS } from '../components/logos'
import {
  RICHARD,
  HORACIO,
  WILL,
  ADAM,
  EVA,
  ROY,
  DAVID,
  FRANCISCO,
  CODEVELOP,
  ABOUT_VALUES,
} from '../config/images'
import { HideComponentsUsingCss } from '../components/utils'
import { WHITE } from '../config/styles'
import trackUserBehaviour, {
  SOCIAL_NETWORK_LINK_CLICK,
} from '../components/utils/trackUserBehaviour'
import { selectFirstTraining, REACT_BOOTCAMP } from '../config/data'
import { SCREEN_SM_MAX } from '../components/utils'
import LeanJSsprints from '../components/elements/LeanJSsprints'

const trainings = [selectFirstTraining(REACT_BOOTCAMP)]

const LeanJSLink = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
`

const CoachTitle = styled(H3)`
  & {
    padding-top: 0;
  }
`

const BecomeACoachWrapper = styled.div`
  @media (max-width: ${SCREEN_SM_MAX}) {
    text-align: center;
    padding-bottom: 18px;
  }
`

const SocialLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={() => {
      trackUserBehaviour({
        event: SOCIAL_NETWORK_LINK_CLICK,
        payload: {
          network: children,
          to,
        },
      })
      onClick && onClick(e)
    }}
    target="_blank"
  >
    {children}
  </Link>
)

const AboutUs = ({ trainings }) => (
  <React.Fragment>
    <Header
      titleLines={['About us']}
      subtitle="Our coaches are expert, every day developers<br /> who will mentor you throughout your ReactJS<br /> journey"
      links={[
        { text: 'Coach profiles ', to: '#alex-lobera' },
        {
          text: 'How we improve   ',
          to: '#continuous-coach-development',
        },
        { text: 'Manifesto', to: '#manifesto' },
        { text: 'Development', to: '#development' },
      ]}
      bgImg="about-us"
    />
    <TopSection>
      <Grid>
        <CallToActionNextTrainings left trainings={trainings} />
        <Card border="shadow">
          <Row>
            <Col md={10} mdOffset={1}>
              <H2>Our coaches - professional developers who love to teach</H2>
              <H3 style={{ paddingTop: 0 }}>
                The ReactJS Academy coach values:{' '}
              </H3>
              <Row>
                <Col xs={6} sm={6} md={4}>
                  <Ul>
                    <Li>Passion</Li>
                    <Li>Empathy</Li>
                    <Li>Community</Li>
                    <Li>Excellence</Li>
                    <Li>Continuous learning</Li>
                  </Ul>
                </Col>
                <Col xs={6} sm={6} md={4}>
                  <Ul>
                    <Li>Forward thinking</Li>
                    <Li>Determination</Li>
                    <Li>Feedback</Li>
                    <Li>Best-practices</Li>
                    <Li>Cutting-edge</Li>
                  </Ul>
                </Col>
                <HideComponentsUsingCss xs>
                  <Col xs={12} sm={12} md={4}>
                    <Image
                      src={ABOUT_VALUES}
                      alt="ReactJS Academy coach Richard, in a classroom presenting to a group of students during a bootcamp"
                    />
                  </Col>
                </HideComponentsUsingCss>
              </Row>
            </Col>
            <Col md={10} mdOffset={1}>
              <Newsletter />
            </Col>
          </Row>
        </Card>
      </Grid>
    </TopSection>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={5} smOrder={2}>
            <Video
              youtubeId="QiR8iNq3tCQ"
              description={
                <P>Alex talking about advanced testing at Facebook London HQ</P>
              }
            />
          </Col>
          <Col xs={12} md={4} mdOffset={1} smOrder={1}>
            <H2Ref>
              Alex Lobera{' '}
              <Link name="alex-lobera" to="#alex-lobera">
                #
              </Link>
            </H2Ref>
            <CoachTitle>
              Tech Lead at <Link to="https://leanjs.com">LeanJS</Link>
            </CoachTitle>
            <Ul inline>
              <Li>
                <SocialLink to="https://github.com/alexlbr">GitHub</SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://medium.com/@alex_lobera">
                  Medium
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://twitter.com/alex_Lobera">
                  Twitter
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://uk.linkedin.com/in/alexlobera">
                  LinkedIn
                </SocialLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Full-stack JavaScript Developer passionate about{' '}
                <strong>
                  teaching React since{' '}
                  <Link to="https://www.meetup.com/JavaScript-London/events/230287691/">
                    May, 2016
                  </Link>
                </strong>
                .
              </Li>
              <Li>
                Alex holds a <strong>computer science degree</strong> and he is
                also a <strong>certified teacher</strong> in Spanish language.
              </Li>
              <Li>
                Organizer of the{' '}
                <Link to="https://www.meetup.com/JavaScript-london/">
                  JavaScript London Meetup
                </Link>{' '}
                and other popular meetups in the EU.
              </Li>
            </Ul>
            <Blockquote bg="primary" triangle="left">
              Teaching other developers is very rewarding. I love sharing what
              I've learned in my career to help others grow and give back. I
              think this is what really makes our industry move forward.
            </Blockquote>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={1}>
            <H2Ref>
              Richard Moss
              <Link name="richard-moss" to="#richard-moss">
                #
              </Link>
            </H2Ref>
            <CoachTitle>
              Senior React Engineer at{' '}
              <Link to="https://leanjs.com">LeanJS</Link>
            </CoachTitle>
            <Ul inline>
              <Li>
                <SocialLink to="https://github.com/ric9176">GitHub</SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://medium.com/@richard_13764">
                  Medium
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://www.linkedin.com/in/richard-moss-55881b82/">
                  LinkedIn
                </SocialLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Focused on delivering cutting-edge{' '}
                <strong>React, Redux, </strong> and <strong>GraphQL</strong>{' '}
                projects <strong> for top companies</strong> like Boston
                University.
              </Li>
              <Li>
                Serial entrepreneur passionate about teaching. Founded an online
                school in 2012, and hasn’t stopped.
              </Li>
              <Li>
                Organizer of the{' '}
                <Link to="https://www.meetup.com/JavaScript-Lisbon/">
                  JavaScript Lisbon Meetup{' '}
                </Link>
                and ReactJS Academy bootcamps.
              </Li>
            </Ul>
            <Blockquote bg="primary" triangle="right">
              Collaboratively working with developers to help them understand
              concepts such as the functional programming paradigm helps them
              take their skills to the next level - and I learn a lot too!
            </Blockquote>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <Image
              src={RICHARD}
              width="100%"
              alt="ReactJS Academy coach Richard Moss, looking pretty happy with a beach in the background"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={5} smOrder={2}>
            <Image
              src={HORACIO}
              width="100%"
              alt="ReactJS Academy coach Horacio Herrera, smiling with sunglasses on."
            />
          </Col>
          <Col xs={12} md={4} mdOffset={1} smOrder={1}>
            <H2Ref>
              Horacio Herrera
              <Link name="horacio-herrera" to="#horacio-herrera">
                #
              </Link>
            </H2Ref>
            <CoachTitle>
              Designer and Developer at{' '}
              <Link to="https://leanjs.com">LeanJS</Link>
            </CoachTitle>
            <Ul inline>
              <Li>
                <SocialLink to="https://github.com/horacioh">GitHub</SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://medium.com/@hhg2288">Medium</SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://twitter.com/hhg2288">
                  Twitter
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://www.linkedin.com/in/horacioherrera/">
                  LinkedIn
                </SocialLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Holds a <strong>Digital Design degree</strong>,{' '}
                <strong>self-taught developer</strong>, and{' '}
                <strong>open source contributor</strong>.
              </Li>
              <Li>Working with cross-functional product teams since 2010.</Li>
              <Li>
                Organizer of the{' '}
                <Link to="https://www.meetup.com/JavaScript-Barcelona/">
                  JavaScript Barcelona Meetup
                </Link>
                .
              </Li>
            </Ul>
            <Blockquote bg="primary" triangle="left">
              I love teaching and seeing other developers grow...
            </Blockquote>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={1}>
            <H2Ref>
              Eva Hoffmann
              <Link name="eva-hoffmann" to="#eva-hoffmann">
                #
              </Link>
            </H2Ref>
            <CoachTitle>
              Software Engineer at{' '}
              <Link to="https://engineering.dazn.com/">DAZN</Link>
            </CoachTitle>
            <Ul inline>
              <Li>
                <SocialLink to="github.com/evandyou ">GitHub</SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://www.linkedin.com/in/evamhoffmann/">
                  LinkedIn
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://twitter.com/evandyou">
                  Twitter
                </SocialLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Currently, a <strong>front-end engineer</strong> working with{' '}
                <strong>React/Mobx</strong>.
              </Li>
              <Li>
                Holds a degree in{' '}
                <strong>computer science and social sciences</strong>,
                interested in the social impact of technologies.
              </Li>
              <Li>
                Always curious to learn new things and share it with others.
              </Li>
            </Ul>
            <Blockquote bg="primary" triangle="right">
              Everyone can learn how to program, and I enjoy supporting others
              to learn and expand their skill set. Programming is such an
              important skill set and I am particularly passionate about
              diversity in tech.
            </Blockquote>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <Image
              src={EVA}
              width="100%"
              alt="ReactJS Academy coach Eva Hoffmann, smiling "
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={5} smOrder={2}>
            <Image
              src={WILL}
              width="100%"
              alt="ReactJS Academy coach Will Voelcker, smiling with coach Alex in the background"
            />
          </Col>
          <Col xs={12} md={4} mdOffset={1} smOrder={1}>
            <H2Ref>
              Will Voelcker
              <Link name="will-voelcker" to="#will-voelcker">
                #
              </Link>
            </H2Ref>
            <CoachTitle>
              Senior Full-stack JavaScript Engineer at{' '}
              <Link to="https://leanjs.com">LeanJS</Link>
            </CoachTitle>
            <Ul inline>
              <Li>
                <SocialLink to="https://github.com/wvoelcker">
                  GitHub
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://www.linkedin.com/in/willv/">
                  LinkedIn
                </SocialLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Professional web <strong>developer since 2005</strong>.
              </Li>
              <Li>
                <strong>Qualified teacher</strong>, experienced teaching in a
                variety of settings.
              </Li>
              <Li>
                Experience working for start-ups and international corporations.
              </Li>
            </Ul>
            <Blockquote bg="primary" triangle="left">
              I love working with developers to help them improve their skills,
              stretch their brains, further their understanding, and advance
              their career.
            </Blockquote>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={1}>
            <H2Ref>
              Adam Lancaster
              <Link name="adam-lancaster" to="#adam-lancaster">
                #
              </Link>
            </H2Ref>
            <CoachTitle>
              Software Engineer at <Link to="https://nested.com">Nested</Link>
            </CoachTitle>
            <Ul inline>
              <Li>
                <SocialLink to="https://github.com/Adzz">GitHub</SocialLink>
              </Li>

              <Li>|</Li>
              <Li>
                <SocialLink to="https://www.linkedin.com/in/adam-lancaster-9845a23a/">
                  LinkedIn
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://twitter.com/ItizAdz/">
                  Twitter
                </SocialLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                <strong>Full stack software engineer</strong> currently playing
                with Elixir and React.
              </Li>
              <Li>
                Started working in startups and no one has told him to leave
                yet, which he takes as encouragement.
              </Li>
              <Li>
                Always looking for new ways to procrastinate things to learn.
              </Li>
            </Ul>
            <Blockquote bg="primary" triangle="right">
              Teaching is always rewarding, but it is one of the most
              undervalued skills in our industry. I always enjoy the chance to
              practice it.
            </Blockquote>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <Image
              src={ADAM}
              width="100%"
              alt="ReactJS Academy coach Adam Lancaster, on top of a tall building as a cityscape is in the background fading out to the horizon"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={1}>
            <H2Ref>
              Roy Derks
              <Link name="roy-derks" to="#roy-derks">
                #
              </Link>
            </H2Ref>
            <CoachTitle>
              Senior Frontend Developer at{' '}
              <Link to="https://switchbay.com">City of Amsterdam</Link>, CTO at{' '}
              <Link to="https://data.amsterdam.nl">SwitchBay</Link>
            </CoachTitle>
            <Ul inline>
              <Li>
                <SocialLink to="https://github.com/royderks">GitHub</SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://www.linkedin.com/in/royderks1/">
                  LinkedIn
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://twitter.com/gethackteam/">
                  Twitter
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://medium.com/hackteam/">
                  Medium
                </SocialLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Develops products with <strong>React</strong>,{' '}
                <strong>React Native</strong>, and <strong>GraphQL</strong> for
                startups and non-profits.
              </Li>
              <Li>
                Regularely talks on conferences about JavaScript and related
                technologies such as <strong>ReasonML</strong>. Founded multiple
                startups since the age of 16, hasn't stopped working ever since.
              </Li>
              <Li>
                Always looking at what's on the horizon and curious about new
                technologies.
              </Li>
            </Ul>
            <Blockquote bg="primary" triangle="right">
              When in doubt, start coding.
            </Blockquote>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <Image
              src={ROY}
              width="100%"
              alt="ReactJS Academy coach Roy Derks, speaking at a developer conference with microphone"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={5} smOrder={2}>
            <Image
              src={DAVID}
              width="100%"
              alt="ReactJS Academy coach David Leuliette, jumping on the Brooklyn Bridge"
            />
          </Col>
          <Col xs={12} md={4} mdOffset={1} smOrder={1}>
            <H2Ref>
              David Leuliette
              <Link name="david-leuliette" to="#david-leuliette">
                #
              </Link>
            </H2Ref>
            <CoachTitle>Senior Front-end Engineer</CoachTitle>
            <Ul inline>
              <Li>
                <SocialLink to="https://github.com/flexbox">GitHub</SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://medium.com/@flexbox">Medium</SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://twitter.com/_flexbox">
                  Twitter
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://www.linkedin.com/in/david-leuliette/">
                  LinkedIn
                </SocialLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Focused on building <strong>memorable UX</strong> and{' '}
                <strong>scalable User Interface</strong>.
              </Li>
              <Li>
                Used to <strong>teach collaboration</strong> with GitHub,
                <strong>bootstrapping web products</strong> and Growth Hacking
                at University.
              </Li>
              <Li>
                Organizer of the{' '}
                <Link to="https://www.meetup.com/FranceJS/">ChtiJS Meetup</Link>{' '}
                in France.
              </Li>
            </Ul>
            <Blockquote bg="primary" triangle="left">
              When you work 8 hours a day with a tool, every second matters.
            </Blockquote>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={4} mdOffset={1}>
            <H2Ref>
              Francisco Gomes
              <Link name="francisco-gomes" to="#francisco-gomes">
                #
              </Link>
            </H2Ref>
            <CoachTitle>
              Developer at <Link to="https://leanjs.com">LeanJS</Link>
            </CoachTitle>
            <Ul inline>
              <Li>
                <SocialLink to="https://github.com/franciscomcg">
                  GitHub
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://twitter.com/francisgomes83">
                  Twitter
                </SocialLink>
              </Li>
              <Li>|</Li>
              <Li>
                <SocialLink to="https://www.linkedin.com/in/francisco-gomes-webdev/">
                  LinkedIn
                </SocialLink>
              </Li>
            </Ul>
            <Ul>
              <Li>
                Builds products with <strong>React</strong> and{' '}
                <strong>GraphQL</strong>.
              </Li>
              <Li>
                Currently finishing his degree in{' '}
                <strong>Business and Information Systems</strong>.
              </Li>
              <Li>
                Crazy about <strong>innovation</strong> and{' '}
                <strong>structured solutions</strong>.
              </Li>
            </Ul>
            <Blockquote bg="primary" triangle="right">
              While teaching, the technology itself is not life-changing. It's
              the passion and commitment.
            </Blockquote>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
            <Image
              src={FRANCISCO}
              width="100%"
              alt="ReactJS Academy coach Francisco Gomes, smiling with sunglasses on"
            />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col xs={12} md={5} smOrder={2}>
            <Video youtubeId="Rx2v_6I7PMM" />
          </Col>
          <Col xs={12} md={6} mdOffset={1} smOrder={1}>
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
              ReactJS Academy is made up of a{' '}
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
            <BecomeACoachWrapper>
              <LinkButton
                target="_self"
                to="mailto:hello@reactjs.academy?subject=Become a coach"
              >
                Become a coach
              </LinkButton>
            </BecomeACoachWrapper>
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <Row>
          <Col md={10} mdOffset={1}>
            <H2Ref>
              The ReactJS Academy coach manifesto
              <Link to="#manifesto" name="manifesto">
                #
              </Link>
            </H2Ref>
          </Col>
          <Col xs={12} md={5} mdOffset={1}>
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
          <Col xs={12} md={5} mdOffset={1}>
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
      </Grid>
    </Section>
    <Section xsBgDarkGrey>
      <Grid>
        <LeanJSsprints />
      </Grid>
    </Section>
    <UpcomingTrainingSection trainings={trainings} />
  </React.Fragment>
)

export default withUpcomingTrainings()(AboutUs)
