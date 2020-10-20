import React from 'react';
import styled from 'styled-components';

import ContactSection from '../components/layout/ContactSection';
import Link from '../components/navigation/Link';
import Header from '../components/layout/Header';
import Section from '../components/layout/Section';
import { Ul, Li } from '../components/layout/Ul';
import ValueBullet from '../components/bullets/ValueBullet';
import SmallIconAndSentences from '../components/bulletedsections/SmallIconAndSentences';
import {
  SPACING_MEDIUM,
  SPACING_STANDARD,
  LINE_HEIGHT_LARGE,
  EXTRADARKGREY,
  WHITE,
  BLACK,
} from '../config/styles';
import LinkButton from '../components/buttons/LinkButton';
import Image from '../components/elements/Image';
import Grid, { Col, Row } from '../components/layout/Grid';
import { H2, H4, H3a, P, SupportingText } from '../components/text';
import Arrow from '../resources/Arrow';
import Box from '../components/layout/Box';
import Trainline from '../components/logos/Trainline';
import NetAPorter from '../components/logos/NetAPorter';
import Nationwide from '../components/logos/Nationwide';
import JohnLewis from '../components/logos/JohnLewis';
import Capgemini from '../components/logos/Capgemini';

const SprintCard = styled.div`
  border: 1px solid #ddd;
  padding: ${SPACING_MEDIUM};
  justify-content: center;
  flex-wrap: wrap;

  h3 {
    margin-top: ${SPACING_STANDARD};
  }
`;
//
const HeaderSupportingText = styled.div`
  font-size: 22px;
  line-height: ${LINE_HEIGHT_LARGE};
  color: white;
  margin-bottom: 20px;
`;

const IndexPage = () => (
  <React.Fragment>
    <Header
      titleLines={['LeanJS']}
      subtitle="Optimize software for change, reduce waste & move faster."
      supportingText={
        <Box sx={{ maxWidth: ['auto', '650px'], mt: 5 }}>
          <HeaderSupportingText>
            Our experts can help you cut business costs & speed up the
            development process by introducing modern Web technology and
            processes incrementally.
          </HeaderSupportingText>

          <LinkButton className="header-button" to="/case_studies">
            Case studies
          </LinkButton>
        </Box>
      }
    />
    <Link to="#sprints" id="sprints" />
    <Section>
      <Grid>
        <Row>
          <Col>
            <H2 style={{ marginBottom: '10px' }}>
              Maximum efficiency, minimum risk
            </H2>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <SupportingText>
              We can help you improve project tech & processes in the Leanest
              way possible. Our cross-functional team knows how problematic
              digital projects can be. We evangelise communication across
              specialities through our expertise and experience.
            </SupportingText>
            <SupportingText>
              We base our work around a real problem you're experiencing. From
              increasing product development speed to tech stack optimization,
              we offer our expertise only if we can make a difference.
            </SupportingText>
            <SupportingText>
              Optimize your team and stack to:
              <Ul sx={{ mt: 2 }}>
                <Li>Build more features in less time</Li>
                <Li>Increase performance and deliver great user experiences</Li>
                <Li>Get new products to market faster and with quality</Li>
              </Ul>
            </SupportingText>
            {/* <H2 style={{ marginTop: '30px' }}> How it works</H2>
            <SupportingText>
              Start incrementally. Stop at any step. Optimize tech and processes
              and increase competitive advantage in 3 low-risk steps:
            </SupportingText> */}
          </Col>
          <Col md={1} />
          <Col md={4}>
            <Image src="https://firebasestorage.googleapis.com/v0/b/leanjscom-web.appspot.com/o/full_stack_sprint_illustrations%2FFullStackSprint.jpg?alt=media" />
          </Col>
        </Row>

        {/* <Row>
          <Col md={4}>
            <SprintCard>
              <H3a>Step 1. Value Proposition</H3a>
              <H4>1/2 Day</H4>
              <Ul>
                <Li>Stakeholders research: Tech Lead/s and/or CTO</Li>
                <Li>Problem statement and priorities</Li>
                <Li>Overview of the software architecture and code</Li>
                <Li>Value proposition and recommendations</Li>
              </Ul>
            </SprintCard>
          </Col>
          <Col md={4}>
            <SprintCard>
              <H3a>Step 2. Proof Of Concept</H3a>
              <H4>1-Week Sprint</H4>
              <Ul>
                <Li>Sprint goal</Li>
                <Li>Architecture and code review</Li>
                <Li>Hands-on workshops and team training on the new tech</Li>
                <Li>Prototyping and coding with your team</Li>
                <Li>Findings, Conclusions, and Recommendations</Li>
              </Ul>
            </SprintCard>
          </Col>
          <Col md={4}>
            <SprintCard>
              <H3a>Step 3. Production-ready Code</H3a>
              <H4>2-Week Sprint</H4>
              <Ul>
                <Li>Sprint goal</Li>
                <Li>Incremental prototype adoption into your codebase</Li>
                <Li>
                  Code improvement and code review pairing our experts with your
                  team
                </Li>
                <Li>On-demand workshops based on any arising issues</Li>
                <Li>Deployment & measurement plan</Li>
                <Li>Validated learning and roll-out plan</Li>
              </Ul>
            </SprintCard>
          </Col>
        </Row>
        <Box sx={{ textAlign: 'center', mt: [0, '-100px'] }}>
          <Arrow />
        </Box> */}
        <Box sx={{ textAlign: 'center' }}>
          <LinkButton className="sprint-contact-1" to="#contact" hasArrows dark>
            Contact us
          </LinkButton>
        </Box>
      </Grid>
    </Section>
    <Link to="#about-us" id="about-us" />
    <Section dark>
      <Grid>
        <Row>
          <Col md={8}>
            <H2>About us</H2>
            {/* <SupportingText>
              Our Sprints are all about working{' '}
              <strong>with you and your team</strong>
            </SupportingText> */}
            <SupportingText>
              We are a team of experts passionate about improving teams and
              digital products. Our work is all about working{' '}
              <strong>with you and your team</strong>.
            </SupportingText>
            {/* <P>
              In 1-week/ 2-week bursts we help your team create positive,
              future-facing solutions that are formulated to be on-time and
              on-budget.
            </P> */}
          </Col>
        </Row>

        <Row>
          <Col>
            <H3a>Our guiding principles</H3a>
          </Col>
          <SmallIconAndSentences
            wrapWithCols={true}
            bulletType={ValueBullet}
            items={[
              {
                image: 'learning',
                sentence:
                  'Be unafraid to learn from everyone and believe in teaching what we know',
              },
              {
                image: 'caring',
                sentence:
                  'Always aim to treat others how we would want to be treated',
              },
              {
                image: 'people',
                sentence:
                  'Ensure what we do is meaningful and always people-centred',
              },
            ]}
          />
        </Row>
      </Grid>
    </Section>
    <Link to="#academy" id="academy" />
    <Section>
      <Grid>
        <Row>
          <Col md={7}>
            <H2>React GraphQL Academy</H2>
            <SupportingText>
              Upskill your team/s in the most effective way for your company
            </SupportingText>
            <P>
              React GraphQL Academy is a LeanJS product. The Academy is offering
              in-person and remote training which can adapt to any company
              regardless of the size or budget. From in-person private team
              training to public bootcamps, your developers work alongside our
              coaches on real-world problems. Part-time or short time
              accelerated formats available.
            </P>

            <LinkButton
              className="visit-academy"
              to="https://reactgraphql.academy/"
              hasArrow
              dark
            >
              Visit the Academy
            </LinkButton>
          </Col>
          <Col md={4} mdOffset={1}>
            <Trainline />
            {/* <NetAPorter sx={{ mt: 2, mb: 2 }} /> */}
            <NetAPorter />
            <JohnLewis width={'80%'} />
            <Nationwide />
            <Capgemini />
          </Col>
        </Row>
      </Grid>
    </Section>

    <ContactSection />
    {/* <Box
      sx={{
        backgroundColor: EXTRADARKGREY,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        py: 0,
        color: WHITE,
        borderTopStyle: 'solid',
        borderTopColor: BLACK,
        borderTopWidth: 1,
        zIndex: 999,
        textAlign: 'center',
      }}
    >
      <Grid>
        <span style={{ paddingTop: '8px', display: 'inline-block' }}>
          Attend our free webinar: JavaScript Architecture For Business
          Optimization
        </span>
        <LinkButton
          style={{ marginLeft: '10px', marginTop: '8px', marginBottom: '8px' }}
          className="header-button"
          to="/javascript-architecture-for-business-optimization-webinar"
        >
          More info
        </LinkButton>
      </Grid>
    </Box> */}
  </React.Fragment>
);

export default IndexPage;
