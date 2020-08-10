import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { ThemeProvider } from '@leanjs/ui-core';

import { CORP_TRAINING } from 'src/../images/imageNames';
import { LinkButton } from 'src/components/buttons';
import TrustedBySection from 'src/components/training/TrustedBySection';
import Section, { TopSection } from 'src/components/layout/Section';
import { Col, Row } from 'src/components/layout/Grid';
import { H2 } from 'src/components/text';
import {
  UpcomingTrainingSection,
  AttendeeQuote,
} from 'src/components/training';
import TrustedByLogoList2 from 'src/components/training/TrustedByLogoList2';
import Header from 'src/components/layout/Header';
import { CallToActionRow } from 'src/components/layout/CallToActionRow';
import { Segment } from 'src/components/elements';
import CurriculumCorporateGraphQL from 'src/components/curriculum/CurriculumCorporateGraphQL';
import { createMetas } from 'src/components/utils';
import { BOOTCAMP_COLLAB } from 'src/config/images';
import { TECH_GRAPHQL } from 'src/config/data';
import { LIGHT_PINK, GRAPHQL_PINK } from 'src/config/styles';
import { getPostsFromNodes } from 'src/components/blog/utils';
import BlogSection from 'src/components/blog/BlogSection';
import { FAQSection, getMetaData } from 'src/components/training/PageContent';

const defaultMetas = {
  title: 'GraphQL Corporte Training | React GraphQL Academy',
  description:
    'Interested in GraphQL corporate training? We offer corporate GraphQL team training, located in your offices anywhere in the world. Contact us now!',
  image: BOOTCAMP_COLLAB,
  type: 'website',
};

const CorporateGraphQLTraining = ({ path, trainings, data }) => {
  const posts = getPostsFromNodes({
    sanityNodes: data.allSanityPost.nodes,
  }).slice(0, 3);

  const metas = getMetaData({
    defaultMetas,
    metaData: data.sanityTrainingPage,
  });

  return (
    <ThemeProvider
      theme={{
        colors: {
          tech: GRAPHQL_PINK,
        },
      }}
    >
      <Helmet title={metas.title}>{createMetas(metas)}</Helmet>
      <Header
        tech={TECH_GRAPHQL}
        breadcrumbBgColor={LIGHT_PINK}
        breadcrumbPath={[
          { to: '/', label: 'Home' },
          {
            to: '/graphql',
            label: 'GraphQL',
          },
          {
            to: '/graphql/training/',
            label: 'Training',
          },
          {
            to: path,
            label: 'Corporate',
          },
        ]}
        titleLines={['Corporate GraphQL Team Training']}
        subtitle="Private team training, located in your offices anywhere in the world, based on our proven GraphQL curriculum."
        links={[
          { text: 'Training schedule', to: '#schedule' },
          { text: 'How tailored', to: '#how-tailored' },
          { text: 'Pricing', to: '#pricing' },
          { text: 'Previous clients', to: '#previous-clients' },
          { text: 'Custom training', to: '#custom-training' },
        ]}
        bgImageName={CORP_TRAINING}
      />
      <TopSection>
        <CallToActionRow>
          <Col mdOffset={1} md={4}>
            <LinkButton
              variant="primary"
              to="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/pdfs%2FCorporate%20Team%20Training%20with%20React%20GraphQL%20Academy.pdf?alt=media&"
              children="Team Training - Key Facts (PDF)"
            />
          </Col>
          <Col mdOffset={1} md={6} />
        </CallToActionRow>
        <a name="schedule" />
        <Segment>
          <CurriculumCorporateGraphQL />
        </Segment>
      </TopSection>

      <Section>
        <Row>
          <Col md={5} mdOffset={1} order={[2, 1]}>
            <a name="previous-clients" />
            <AttendeeQuote
              tech={TECH_GRAPHQL}
              quote="It's really hard to find good advanced tech training. In house, you standardise the knowledge [in a team] and start doing things the right way."
              fullname="Eber Herrera"
              job="Technical Director"
              company="Xing"
              youtubeId="TAtsPib9P9w"
              ctaButton="How Training Keeps Xing 
              Tech-Relevant (Blog)"
              ctaUrl="/blog/5-reasons-why-advanced-dev-training-will-keep-your-company-tech-relevant/"
            />
          </Col>
          <Col md={4} lgOffset={1} order={[1, 2]}>
            <H2>Trusted by industry leaders</H2>
            <TrustedByLogoList2 colour={LIGHT_PINK} />
          </Col>
        </Row>
      </Section>
      <FAQSection pageData={data.sanityTrainingPage} />
      <TrustedBySection type="contact" showContent />
      <BlogSection title="From our blog" posts={posts} />
      <UpcomingTrainingSection trainings={trainings} />
    </ThemeProvider>
  );
};

export const query = graphql`
  query {
    allSanityPost(
      limit: 3
      filter: {
        category: { in: ["graphql", "blog"] }
        tags: { elemMatch: { name: { in: ["business"] } } }
      }
      sort: { fields: [publishedAt], order: [DESC] }
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }
  }
`;

export default CorporateGraphQLTraining;
