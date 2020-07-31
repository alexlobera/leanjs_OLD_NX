import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import { FAQSection, getMetaData } from 'src/components/training/PageContent';
import { BOOTCAMP } from 'src/../images/imageNames';
import { formatUTC } from 'src/components/utils';
import { LinkButton } from 'src/components/buttons';
import { Link } from 'src/components/navigation';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { H2, P } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import CurriculumReactBootcamp from 'src/components/curriculum/CurriculumReactBootcamp';
import Header from 'src/components/layout/Header';
import {
  TrustedBySection,
  UpcomingTrainingSection,
  selectUpcomingTrainings,
  selectNthTraining,
  AttendeeQuote,
} from 'src/components/training';
import { Segment } from 'src/components/elements';
import {
  FULL_TIME,
  TECH_REACT,
  REACT_BOOTCAMP_ID,
  TRAINING_TYPE_FULL_CURRICULUM,
} from 'src/config/data';
import header from 'src/components/layout/Header.json';
import BlogSection from 'src/components/blog/BlogSection';
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js';
import { createMetas } from 'src/components/utils';

const defaultMetas = {
  title: '1-Week React Bootcamp | React GraphQL Academy',
  description:
    'Interested in a React bootcamp? Take a deep dive into the React ecosystem and become a confident React developer with our React bootcamp.',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
};

const trainingType = TRAINING_TYPE_FULL_CURRICULUM;
const trainingInstanceTypeName = FULL_TIME;
const trainingId = REACT_BOOTCAMP_ID;

const Bootcamps = ({ path, trainings, data }) => {
  const upcomingBootCampTrainings = selectUpcomingTrainings({
    trainingId,
    trainingInstanceTypeName,
    trainings,
  });
  const nextTraining = selectNthTraining({
    trainings: upcomingBootCampTrainings,
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
            label: 'Bootcamp',
          },
        ]}
        tech={TECH_REACT}
        titleLines={['React Bootcamp', ['Immersive Training']]}
        subtitle="Learn React fast in our one-week Bootcamp. The complete curriculum with practice will prepare you for the next projects"
        bgImageName={BOOTCAMP}
        links={header.landingPageLinks.links}
        trainingType={trainingType}
      />
      <TopSection>
        <Segment>
          <CurriculumReactBootcamp
            trainings={upcomingBootCampTrainings}
            pageData={data.sanityTrainingPage}
          />
        </Segment>
      </TopSection>
      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <AttendeeQuote
              quote="Developing at my company for 2 years I hadn't touched React. The Bootcamp works because you're able ask questions - it's better than watching a video."
              fullname="Charlie Wilson"
              job="Software Engineer"
              company="ESG PLC"
              youtubeId="CP422OORbPA"
            />
          </Col>
          <Col md={4} mdOffset={1}>
            <H2>
              <Link to="#target-audience" name="target-audience" />
              Is this React bootcamp right for me?
            </H2>
            <P>
              If you're a big supporter of the learning-by-doing method, this is
              the right place for you.
            </P>
            <P>
              This training is intense and you'll be coding most of the time,
              which will help you achieve the expertise in React and be able to
              take real projects, in only one week.
            </P>
            <P>
              We suggest you read{' '}
              <Link to="/react/how-to-choose-our-react-training-combination-that-suits-you-best/">
                here
              </Link>{' '}
              first to understand if this is the right training for your level!"
            </P>
            {/* <Ul>
              <Li>Extremely rapid, intense learning</Li>
              <Li>
                Ideal for experienced programmers familiar with good practices.
                Not for beginners!
              </Li>
              <Li>Small classes with expert developer coaches</Li>
              <Li>
                Hands-on project-based training - most of the time you'll be
                coding.
              </Li>
              <Li>
                Join a growing network of alumni for advice, knowledge and
                social fun!
              </Li>
            </Ul> */}
            <P>
              {nextTraining && (
                <LinkButton variant="primary" to={nextTraining.toPath}>
                  Next bootcamp:{' '}
                  {formatUTC(
                    nextTraining.startDate,
                    nextTraining.utcOffset,
                    'D MMM'
                  )}
                  , {nextTraining.city}
                </LinkButton>
              )}
            </P>
          </Col>
        </Row>
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />
      <TrustedBySection />
      <BlogSection tags={['react', 'beginner']} />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  );
};

export const query = graphql`
  query reactBootcamp($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
  }
`;

export default Bootcamps;
