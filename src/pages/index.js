import React from 'react'
import Link from '../components/navigation/Link'
import { LinkButton } from '../components/buttons'
import Section from '../components/layout/Section'
import Grid, { Col, Row } from '../components/layout/Grid'
import Card from '../components/layout/Card'
import P from '../components/layout/P'
import ImagePlaceholder from '../components/wireframes/ImagePlaceholder'
import { Blockquote, H1, H2 } from '../components/text'

const IndexPage = () => (
  <div>
    <Section color="lightGrey">
      <Grid>
        <H1>
          Take your career further by mastering ReactJS
        </H1>
        <H2>The most complete curriculum from experienced practitioners who were the first in Europe to teach React</H2>
        <Row>
          <Col xs={6}>
            <LinkButton to="/bootcamp" children="Bootcamp" />
          </Col>
          <Col xs={6}>
            <LinkButton to="/part-time" children="Part-time" />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <H2>
          What will I get from a ReactJS Academy course?
        </H2>
        <Row>
          <Col xs={5}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={7}>
            <ul>
              <li>Learn how to <strong>build production ready</strong> React applications.</li>
              <li>Discuss <strong>real-world projects</strong> to learn best practices for building scalable React applications.</li>
              <li><strong>One-to-One mentoring</strong> by the ReactJS Academy coaches and mentors</li>
              <li>Expand your developer knowleadge and <strong>stay ahead</strong></li>
            </ul>
          </Col>
        </Row>
        <P align="right">
          <Link to="/">Checkout the curriculum</Link>
        </P>
        <Card width={256}>
          <Blockquote>
            After being a developer for 10 years and with the increasing amount of people coming into tech, I wanted to ensure I stayed ahead of the curve in my skills to take my career further. Simply put, ReactJS Academy gave me that?
          </Blockquote>
          <Row>
            <Col xs={5}>
              <ImagePlaceholder width="100%" />
            </Col>
            <Col xs={5}>
              <P>
                <strong>Joe Bloggs</strong>
              </P>
              <P>
                Front-end Lead
              </P>
              <P>
                Spotify
              </P>
            </Col>
          </Row>
        </Card>
      </Grid>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <H2>
          Is this training right for me? Why ReactJS Academy
        </H2>
        <Row>
          <Col xs={5}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={7}>
            <ul>
              <li>Perfect for <strong>professional developers</strong> who are familiar with good programming practices. This is NOT a learn-to-code bootcamp.</li>
              <li>Great if you are ready for a new challenge - very <strong>intense project-based training</strong>.</li>
              <li>It's not just a course, it's a <strong>full hands-on experience</strong>.</li>
              <li>Learn in a collaborative environment. Pair programming and discussions with <strong>like-minded people</strong> interested in becoming better developers.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <LinkButton to="/bootcamp" children="Bootcamp" />
          </Col>
          <Col xs={6}>
            <LinkButton to="/part-time" children="Part-time" />
          </Col>
        </Row>
      </Grid>
    </Section>
    <Section>
      <Grid>
        <H2>
          Developers from all these companies have trusted us
        </H2>
        <Row>
          <Col xs={6}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={6}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={6}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={6}>
            <ImagePlaceholder width="100%" />
          </Col>
        </Row>
      </Grid>
      <iframe style={{ marginTop: '30px', border: 0 }} width="100%" height="315" src="https://www.youtube.com/embed/yGwmF4AT1Fg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </Section>
    <Section color="lightGrey">
      <Grid>
        <H2>
          What's in for your company - Why is ReactJS Academy great for your team
        </H2>
        <Row>
          <Col xs={5}>
            <ImagePlaceholder width="100%" />
          </Col>
          <Col xs={7}>
            <ul>
              <li><strong>Increase dev capabilities</strong> - ability to work quicker and with more reliable code.</li>
              <li><strong>Minimize the risk</strong> of onboarding new tech in an organization by learning from experienced practicioners.</li>
              <li><strong>Avoid common mitakes</strong>, they could cause delays and loses to your business if made later in real projects. Let developers make mistakes in our safe environment and learn from them.</li>
              <li><strong>Increase employee retention, motivation, and productivity</strong> with the right training. Up skill your team with a top quality world-class training.</li>
              <li>Offer <strong>more services</strong> to internal and external clients</li>
            </ul>
          </Col>
        </Row>
        <P align="right">
          <Link to="/">Checkout the curriculum (should we say "checkout what other companies say -> then video company talking about the training, john lewis video? should we get other videos from companies about business benefits after training?")</Link>
        </P>
        <Card width={256}>
          <Blockquote>
            My devs were on training for a week, but when they came back they were React Masters. We adpoted the ecosystem much quicker than we thought possible and now we work faster and more efficiently.
          </Blockquote>
          <Row>
            <Col xs={5}>
              <ImagePlaceholder width="100%" />
            </Col>
            <Col xs={5}>
              <P>
                <strong>Joe Bloggs</strong>
              </P>
              <P>
                CTO
              </P>
              <P>
                ASOS.com
              </P>
            </Col>
          </Row>
        </Card>
        <Row style={{ marginTop: '30px' }}>
          <Col xs={6}>
            <LinkButton to="/bootcamp" children="Bootcamp" />
          </Col>
          <Col xs={6}>
            <LinkButton to="/part-time" children="Part-time" />
          </Col>
        </Row>
      </Grid>
    </Section>
  </div>
)

export default IndexPage
