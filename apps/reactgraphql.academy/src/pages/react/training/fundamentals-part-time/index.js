import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import { FAQSection, getMetaData } from 'src/components/training/PageContent';
import { Link } from 'src/components/navigation';
import NextTrainingButton from 'src/components/training/NextTrainingButton';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { H2 } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import {
  AttendeeQuote,
  UpcomingTrainingSection,
  TrustedBySection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training';
import { Segment } from 'src/components/elements';
import CurriculumReactFundamentalsPartTime from 'src/components/curriculum/CurriculumReactFundamentalsPartTime';
import Header from 'src/components/layout/Header';
import {
  TRAINING_TYPE_HALF_CURRICULUM,
  PART_TIME,
  TECH_REACT,
  REACT_FUNDAMENTALS_ID,
} from 'src/config/data';
import header from 'src/components/layout/Header.json';
import { createMetas } from 'src/components/utils';
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js';

const defaultMetas = {
  title: 'React Fundamentals Part-Time Training | React GraphQL Academy',
  description:
    'Interested in a React training? Learn the main libraries of the React ecosystem and become a confident React developer with our React part-time training.',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
};

const PartTime = ({ trainings, path, data }) => {
  const upcomingPartTimeTrainings = selectUpcomingTrainings({
    trainingId: REACT_FUNDAMENTALS_ID,
    trainingInstanceTypeName: PART_TIME,
    trainings,
  });

  const nextTraining = selectNthTraining({
    trainings: upcomingPartTimeTrainings,
  });

  const metas = getMetaData({
    defaultMetas,
    metaData: data.sanityTrainingPage,
  });

  return (
    <React.Fragment>
      <Helmet title={metas.title}>{createMetas(metas)}</Helmet>
      <Header
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          { to: '/react', label: 'React' },
          { to: '/react/training/', label: 'Training' },
          {
            to: path,
            label: 'Fundamentals Part-time',
          },
        ]}
        tech={TECH_REACT}
        titleLines={['React Redux Fundamentals', 'Part-time Training']}
        subtitle="Expert coaches work with you to help you master React<br />without having to cut into valuable work"
        trainingType={TRAINING_TYPE_HALF_CURRICULUM}
        links={header.landingPageLinks.links}
      />
      <TopSection>
        <Segment>
          <CurriculumReactFundamentalsPartTime
            trainings={upcomingPartTimeTrainings}
            pageData={data.sanityTrainingPage}
          />
        </Segment>
      </TopSection>
      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              quote="Whatever business you're in, [the training will] enhance your work. It helped my confidence and boosted me to be in line for a promotion!"
              fullname="Lara Ramey"
              job="Software Developer"
              company="Meredith Corporation"
              youtubeId="4NY7HCRPhWA"
            />
          </Col>
          <Col md={4} mdOffset={1}>
            <Link to="#target-audience" name="target-audience" />
            <H2>Is this React part-time training right for me?</H2>
            <Ul>
              <Li>Meaningful, collaborative learning</Li>
              <Li>
                Personal mentoring rather than massive online open courses
              </Li>
              <Li>Don't miss work days or projects</Li>
              <Li>Not for beginners!</Li>
              <Li>Discuss real-world projects to learn best practices</Li>
              <Li>Expert coaches with extensive React experience</Li>
            </Ul>
            <NextTrainingButton
              type="part-time course"
              training={nextTraining}
            />
          </Col>
        </Row>
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />
      <TrustedBySection />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  );
};

export const query = graphql`
  query reactFundamentalsPartTime($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`;

export default PartTime;
