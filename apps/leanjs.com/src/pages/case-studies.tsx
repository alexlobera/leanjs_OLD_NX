import React from 'react';
import styled from 'styled-components';

import ContactSection from '../components/layout/ContactSection';
import Header from '../components/layout/Header';
import Section from '../components/layout/Section';
import Ul, { Li } from '../components/layout/Ul';
import Box from '../components/layout/Box';
import { Card } from '../components/layout/Card';
import SmallIconAndSentence from '../components/bulletedsections/SmallIconAndSentence';
import { DARKGREY, LIGHTGREY } from '../config/styles';
import {
  CASE_STUDY_ABINBEV,
  CASE_STUDY_FINGOPAY,
  CASE_STUDY_BU,
  MUGSHOT_ABINBEV,
  MUGSHOT_BU,
  MUGSHOT_FINGOPAY,
  LOGO_BU,
  LOGO_FINGOPAY,
  LOGO_ABINBEV,
} from '../resources/images';

import LinkButton from '../components/buttons/LinkButton';
import Grid, { Col, Row } from '../components/layout/Grid';
import { H2, P, SupportingText } from '../components/text';
// import Mugshot from '../components/mugshots/Mugshot';
import Image from '../components/elements/Image';
import Circle from '../components/elements/Circle';

const CaseStudyTitle = styled(H2)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const caseStudies = [
  {
    title: 'Boston University',
    anchor: 'boston',
    supportingText: 'Full UX process, UI and React website',
    paragraphs: [
      'Using our process to create a more advanced, content-heavy website meant thinking in high-level, usable systems rather than products.',
      'Harnessing the power of design thinking to create a streamlined information architecture, combined with a cutting-edge React + Gatsby tech stack, we migrated millions of pieces of content and delivered a workable Wordpress-based platform.',
    ],
    bulletpoints: [
      {
        point: 'HOW',
        description: 'Lean UX, ReactJS development and migration',
      },
      {
        point: 'TIME',
        description: '5 month turnaround',
      },
      {
        point: 'RESULT',
        description: '10,000 articles migrated, 50% bounce rate reduction',
      },
    ],
    primaryImage: CASE_STUDY_BU,
    client: {
      name: 'Boston University',
      logo: LOGO_BU,
    },
    alt:
      "A smartphone and a wide-screen computer display showing Boston University's 'AGNI' website design in two different widths",
    quote: {
      author: {
        image: MUGSHOT_BU,
        name: 'Bill Pierce',
        jobTitle: 'Editor, AGNI',
        company: 'Boston University',
      },
      text: `LeanJS understood our mindset with a ability to ‘chameleon’ themselves. A great team to be part of, always transparent - what they created for us was incredible.`,
    },
  },

  {
    title: 'ABinBev',
    anchor: 'abinbev',
    supportingText: 'Interactive festive app',
    paragraphs: [
      'The ABinBev app was a milestone project for LeanJS.',
      'With a strict timeframe and an aim to create a product that increased shopping cart value in the lead-up to Christmas, we designed and developed a highly interactive app that satisfied ABinBev’s marketing aims and delighted users.',
    ],
    bulletpoints: [
      {
        point: 'HOW',
        description: 'Rapid prototyping and developement',
      },
      {
        point: 'TIME',
        description: 'From idea to launch in 6 weeks',
      },
      {
        point: 'RESULT',
        description: '90% increase in shopping card value',
      },
    ],
    primaryImage: CASE_STUDY_ABINBEV,
    client: {
      name: 'ABinBev',
      logo: LOGO_ABINBEV,
    },
    alt:
      'Three smart phones, each showing different screens from the ABinBev app project',
    quote: {
      author: {
        image: MUGSHOT_ABINBEV,
        name: 'Mertens Dries',
        jobTitle: 'Head of Marketing at Saveur Bière',
        company: 'ABinBev',
      },
      text: `We never thought it possible! We only had a couple of months until Christmas but LeanJS sorted us out. They were highly professional yet friendly and very effective.`,
    },
  },
  {
    title: 'FingoPay',
    anchor: 'fingo',
    supportingText: 'Onboarding app for unique finger scanning API',
    paragraphs: [
      'Combining the innovation-led space of bio-metrics with React Native was a real thrill for us and we learnt a lot!',
      'Starting with an 8-hour rapid prototyping exercise on London’s South Bank, we took the user-validated design and developed a bleeding-edge React Native app that worked perfectly for',
    ],
    bulletpoints: [
      {
        point: 'HOW',
        description:
          'Rapid prototyping, React Native with Circle CI and card.io integration',
      },
      {
        point: 'TIME',
        description: '2 week turnaround',
      },
      {
        point: 'RESULT',
        description: 'To be implemented across 100 pubs in the UK',
      },
    ],
    primaryImage: CASE_STUDY_FINGOPAY,
    client: {
      name: 'FingoPay',
      logo: LOGO_FINGOPAY,
    },
    alt:
      'Two tablets, showing two screens from the onboarding project for biometric payment system FingoPay ',
    quote: {
      author: {
        image: MUGSHOT_FINGOPAY,
        name: 'Stuart Nelmes',
        jobTitle: 'Chief Technology Officer',
        company: 'Stahler/FingoPay',
      },
      text: `We’d been working on the platform for a while but onboarding was an issue. LeanJS came in, discovered the issues in real life and provided a workable solution in a fraction of the time we expected. Amazed.`,
    },
  },
];

const CaseStudyExpoBullets = ({ content }) => (
  <Ul variant="unstyled">
    {content.map((item, i) => (
      <Li key={`case-study-expo-${i}`}>
        <SmallIconAndSentence
          flushLeft
          verticalCenter
          icon={
            <Circle size={90 / 18} bg={LIGHTGREY}>
              {item.point}
            </Circle>
          }
          sentence={item.description}
        />
      </Li>
    ))}
  </Ul>
);

const CaseStudyInner = (props) => (
  <Grid>
    <Row>
      <Col sm={6}>
        <a id={props.anchor} />
        <CaseStudyTitle>{props.title}</CaseStudyTitle>
      </Col>
      <Col sm={6} align={{ md: 'right' }}>
        <Image
          src={props.client.logo}
          alt={props.client.name}
          sx={{ alignSelf: 'flex-start' }}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <SupportingText>{props.supportingText}</SupportingText>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        {props.paragraphs.map((paragraphText, i) => (
          <P key={`paragraph-${props.title}-${i}`}>{paragraphText}</P>
        ))}
        <CaseStudyExpoBullets content={props.bulletpoints} />
      </Col>
      <Col md={6}>
        <Image src={props.primaryImage} alt={props.alt} />
        {props.quote && (
          <Card variant="primary">
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ pr: 4, width: '300px' }}>
                <Image src={props.quote.author.image} />
              </Box>
              <Box>
                <P as="blockquote" sx={{ fontStyle: 'italic', m: 0 }}>
                  "{props.quote.text}"
                </P>
                <strong>
                  {props.quote.author.name}
                  <br /> {props.quote.author.jobTitle},{' '}
                  {props.quote.author.company}
                </strong>
              </Box>
            </Box>
          </Card>
        )}
      </Col>
    </Row>

    {props.button ? (
      <Row>
        <Col md={6}>
          <LinkButton external={props.button.external} to={props.button.to}>
            {props.button.text}
          </LinkButton>
        </Col>
      </Row>
    ) : null}
  </Grid>
);

const CaseStudy = (props) => (
  <Section>
    <CaseStudyInner {...props} />
  </Section>
);

const CaseStudies = () => (
  <React.Fragment>
    <Header
      titleLines={['Case Studies']}
      subtitle="See how we help our clients achieve their goals"
      links={caseStudies.map((study) => ({
        text: study.title,
        to: study.anchor,
      }))}
    />

    {caseStudies.map((props, i) => (
      <CaseStudy {...props} key={`case-study-${i}`} />
    ))}

    <ContactSection />
  </React.Fragment>
);

export default CaseStudies;
