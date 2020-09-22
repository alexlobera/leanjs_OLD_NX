import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { BOOTCAMP } from 'src/../images/imageNames';
import { LinkButton } from 'src/components/buttons';
import { Link } from 'src/components/navigation';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { H2, H3, P } from 'src/components/text';
import Ul, { Li } from 'src/components/layout/Ul';
import Header from 'src/components/layout/Header';
import {
  TrustedBySection,
  UpcomingTrainingSection,
} from 'src/components/training';
import { Segment, Image } from 'src/components/elements';
import { GRAPHQL_BOOTCAMP, TECH_GRAPHQL } from 'src/config/data';
import { TrainingCardList } from 'src/components/training';
import LearningResources from 'src/components/blog/LearningResources';
import { GRAPHQL_PINK, LIGHT_PINK } from 'src/config/styles';
import { createMetas } from 'src/components/utils';
import { WHY_REACTJS_ACADEMY } from 'src/config/images.js';
import FreeLearningResources from 'src/components/elements/FreeLearningResources';
import Card from 'src/components/elements/Card';
import { getPostsFromNodes } from 'src/components/blog/utils';
import { Overview } from '../../components/training/PageContent';

const trainingList = [
  {
    title: 'GraphQL API Training',
    text: `Learn how to build production-ready GraphQL API from industry experts`,
    to: '/graphql/training/api/',
  },
  {
    title: 'GraphQL Corporate Training',
    text: ` We come to you, teach skills and best practice to your
    entire team!`,
    to: '/graphql/training/corporate/',
  },
  {
    title: 'GraphQL Bootcamp',
    text: `Master GraphQL server-side and client-side`,
    to: '/graphql/training/bootcamp/',
  },
  {
    title: 'GraphQL Workshops',
    text: `Covering specific aspects in GraphQL so you can
    specialise`,
    to: '/graphql/training/workshops/',
  },
];

const metas = {
  title: 'Learn GraphQL | React GraphQL Academy',
  description:
    'Interested in learning GraphQL? Learn GrapQL with us. Supercharge your development skill set with the latest curriculum in GraphQL. Contact us now!',
  image: WHY_REACTJS_ACADEMY,
  type: 'website',
};

const GraphQLPage = ({ data, path, trainings }) => {
  const posts = getPostsFromNodes({
    markdownNodes: data.markdownPosts && data.markdownPosts.nodes,
    sanityNodes: data.sanityNodes && data.sanityNodes.nodes,
  });

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
          { to: path, label: 'GraphQL' },
        ]}
        tech={TECH_GRAPHQL}
        breadcrumbBgColor={LIGHT_PINK}
        titleLines={['Learn GraphQL with us...']}
        subtitle="Supercharge your development skill set with latest curriculum in GraphQL"
        bgImageName={BOOTCAMP}
        bgColor={GRAPHQL_PINK}
        links={[
          {
            text: 'Latest GraphQL Blogs',
            to: '#free-graphql-resources',
          },
          {
            text: 'Our GraphQL training',
            to: '#our-graphql-training',
          },
          {
            text: 'What is GraphQL?',
            to: '#what-is-graphql',
          },
        ]}
        type={GRAPHQL_BOOTCAMP}
      />
      <TopSection>
        <Segment>
          <Row>
            <Col md={10} mdOffset={1}>
              <H2>
                <Link
                  to="#free-graphql-resources"
                  name="free-graphql-resources"
                />
                Our GraphQL learning resources
              </H2>
              {data.sanityTrainingPage &&
                data.sanityTrainingPage._rawOverview && (
                  <Overview
                    _rawOverview={data.sanityTrainingPage._rawOverview}
                  />
                )}
            </Col>
            <Col md={5} mdOffset={1}>
              <LearningResources heading={H3} posts={posts} type="GraphQL" />
            </Col>
            <Link to="#our-graphql-training" name="our-graphql-training" />
            <Col md={4} mdOffset={1}>
              <H3>Our GraphQL training</H3>
              <TrainingCardList
                data={trainingList}
                borderColor={GRAPHQL_PINK}
                className="course-training-clicks"
              />
              <Card variant="primary" sx={{ borderColor: GRAPHQL_PINK, mt: 4 }}>
                <FreeLearningResources sx={{ mt: 2 }} buttonVariant="primary" />
              </Card>
            </Col>
          </Row>
        </Segment>
      </TopSection>

      <Section>
        <Row>
          <Col md={5} mdOffset={1}>
            <H2>
              <Link to="#what-is-graphql" name="what-is-graphql" />
              What is GraphQL?
            </H2>
            <P>
              GraphQL is a modern syntax for building and querying APIs, but
              what does that actually mean? And why should you use GraphQL?
            </P>
            <Ul>
              <Li>
                At it's core, GraphQL describes how ot ask a server for data
              </Li>
              <Li>
                Your apps decide what data they need and recieve only that
              </Li>
              <Li>
                Therefore, GraphQL is very effecient and helps your system be
                well organised
              </Li>
              <Li>
                It's growing at a fast pace and the community is fantastic!
              </Li>
            </Ul>
            <LinkButton
              className="course-training-what-is-clicks"
              to="/graphql/what-is-graphql-used-for/"
            >
              Blog: What is GraphQL and What Is It Used For?
            </LinkButton>
          </Col>
          <Col md={5} mdOffset={1}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/graphql_university%2Fhomepage_whyGQLU.jpg?alt=media&"
              alt="Why learn GraphQL"
            />
          </Col>
        </Row>
      </Section>
      <TrustedBySection showContent />
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  );
};

export const query = graphql`
  query graphqlPage($path: String!) {
    sanityTrainingPage(path: { eq: $path }) {
      ...sanityTrainingPageFragment
    }
    sanityNodes: allSanityPost(
      filter: { category: { eq: "graphql" } }
      sort: { fields: publishedAt, order: DESC }
      limit: 3
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }

    markdownPosts: allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "/(/graphql/)/" } }
        frontmatter: { contentType: { eq: "blog" } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      nodes {
        ...MarkdownPostItemFragment
      }
    }
  }
`;
export default GraphQLPage;
