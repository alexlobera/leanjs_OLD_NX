import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import { FAQSection, getMetaData } from 'src/components/training/PageContent';
import { BOOTCAMP } from 'src/../images/imageNames';
import { formatUTC } from 'src/components/utils';
import { LinkButton } from 'src/components/buttons';
import Link from 'src/components/navigation/Link';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { H2, P } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import CurriculumAdvancedReact from 'src/components/curriculum/CurriculumAdvancedReact';
import TargetAudienceList from 'src/components/curriculum/CurriculumAdvancedReact/TargetAudienceList';
import Header from 'src/components/layout/Header';
import header from 'src/components/layout/Header.json';
import {
  TrustedBySection,
  AttendeeQuote,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
} from 'src/components/training';
import { Segment } from 'src/components/elements';
import {
  TECH_REACT,
  FULL_TIME,
  ADVANCED_REACT_ID,
  TRAINING_TYPE_HALF_CURRICULUM,
} from 'src/config/data';
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js';
import { createMetas } from 'src/components/utils';

const defaultMetas = {
  title: 'Advanced React Training | React GraphQL Academy',
  description:
    'Interested in advanced React? Learn advanced React patterns and supercharge your dev skillset with the latest in advanced React training. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
};

const trainingType = TRAINING_TYPE_HALF_CURRICULUM;
const trainingInstanceTypeName = FULL_TIME;
const trainingId = ADVANCED_REACT_ID;

const AdvancedTraining = ({ path, trainings, data }) => {
  const upcomingAdvancedTrainings = selectUpcomingTrainings({
    trainingId,
    trainingInstanceTypeName,
    trainings,
  });
  const nextTraining = selectNthTraining({
    trainings: upcomingAdvancedTrainings,
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
            label: 'Advanced',
          },
        ]}
        tech={TECH_REACT}
        titleLines={['Advanced React Intensive Training']}
        subtitle="In-person or remote training with expert coaches will help you master the advanced React patterns."
        bgImageName={BOOTCAMP}
        trainingType={trainingType}
        links={header.landingPageLinks.links}
      />
      <TopSection>
        <Segment>
          <CurriculumAdvancedReact
            trainings={upcomingAdvancedTrainings}
            pageData={data.sanityTrainingPage}
          />
        </Segment>
      </TopSection>
      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              quote="It's nice to have people there who know that stuff, whom you can ask questions. It's definitely important and I feel like it's improved my career."
              fullname="Charlie Wilson"
              job="Software Engineer"
              company="ESG PLC"
              youtubeId="tYhT8F82-z8"
            />
          </Col>
          <Col md={4} mdOffset={1}>
            <H2>Is this advanced React training right for me?</H2>
            <P>
              If you have 1 or 2 years experience working with react and you're
              ready to take a step forward to become a senior React developer,
              here's your place.
            </P>
            <P>
              We'll work on real-world React projects, it's going to be
              exciting! For more info about the requirements, read this{' '}
              <Link to="/react/how-to-choose-our-react-training-combination-that-suits-you-best/">
                article
              </Link>
              .
            </P>
            {/* <Ul>
              <TargetAudienceList />
              <Li>
                Join a growing network of alumni for advice, knowledge and
                social fun!
              </Li>
            </Ul> */}
            {nextTraining ? (
              <P>
                <LinkButton variant="primary" to={nextTraining.toPath}>
                  Next one:{' '}
                  {`${formatUTC(
                    nextTraining.startDate,
                    nextTraining.utcOffset,
                    'D MMM'
                  )}, ${nextTraining.city} >>`}
                </LinkButton>
              </P>
            ) : null}
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
  query advancedReact($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`;

export default AdvancedTraining;
