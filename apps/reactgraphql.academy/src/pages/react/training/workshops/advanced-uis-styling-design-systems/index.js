import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import { FAQSection, getMetaData } from 'src/components/training/PageContent';
import { BOOTCAMP } from 'src/../images/imageNames';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { H2Ref, H3, P } from 'src/components/text';
import Ul from 'src/components/layout/Ul';
import CurriculumStylingAndAdvUI from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI';
import TargetAudienceList from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI/TargetAudienceList';
import LearningObjectives from 'src/components/curriculum/workshops/CurriculumStylingAndAdvUI/LearningObjectivesList';
import { Segment } from 'src/components/elements';
import Header from 'src/components/layout/Header';
import {
  UpcomingTrainingSection,
  AttendeeQuote,
  getNextTrainingByTrainingId,
} from 'src/components/training';
import { Link } from 'src/components/navigation';
import {
  TECH_REACT,
  TRAINING_TYPE_WORKSHOP,
  REACT_WORKSHOP_DESIGN_SYSTEMS_ID,
} from 'src/config/data';
import { createMetas } from 'src/components/utils';
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js';
import NextTrainingButton from 'src/components/training/NextTrainingButton';
import { breadcrumbWorkshopName } from './config.json';

const trainingId = REACT_WORKSHOP_DESIGN_SYSTEMS_ID;

const defaultMetas = {
  title: `Styling in React and Design Systems Workshop | React GraphQL Academy`,
  description:
    'Interested in Design Systems? React GraphQL Academy offers Design Systems in React workshops, focussing on the design part of the React ecosystem. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
};

const StylingDesignSystemWorkshop = ({ path, trainings, data }) => {
  const nextTraining = getNextTrainingByTrainingId({
    trainings,
    trainingId,
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
          { to: '/react/training/workshops', label: 'Workshops' },
          {
            to: path,
            label: breadcrumbWorkshopName,
          },
        ]}
        tech={TECH_REACT}
        titleLines={['Styling in React and', 'Design Systems Workshop']}
        subtitle="See how React can look gorgeous and encourage design consistency at scale"
        links={[
          { text: 'Workshop Agenda', to: '#curriculum' },
          { text: 'Is this right for me?', to: '#target-audience' },
        ]}
        bgImageName={BOOTCAMP}
        trainingType={TRAINING_TYPE_WORKSHOP}
      />
      <TopSection>
        <Segment>
          <CurriculumStylingAndAdvUI
            trainingId={trainingId}
            trainings={trainings}
            section={{ isOpen: true }}
            learningObjectives={LearningObjectives}
            pageData={data.sanityTrainingPage}
          />
        </Segment>
      </TopSection>

      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              quote="With React, everything is inter-connected which can be difficult to understand. But I see it clearly now [after the training]."
              fullname="Rafa Fraga"
              job="Software Engineer"
              youtubeId="9QpAWAtZy6M"
            />
          </Col>
          <Col md={4} lgOffset={1}>
            <H2Ref>
              <Link to="#target-audience" name="target-audience" />
              Is this one day workshop right for me?
            </H2Ref>
            <Ul>
              <TargetAudienceList />
            </Ul>
            <P>
              If you've said 'yes' to these, this workshop could be for you!
            </P>
            <H3>Not for React beginners!</H3>
            <NextTrainingButton type="workshop" training={nextTraining} />
          </Col>
        </Row>
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  );
};

export const query = graphql`
  query designSystemsWorkshop($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`;

export default StylingDesignSystemWorkshop;
