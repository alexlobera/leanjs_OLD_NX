import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';

import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import LaunchingCourseForm from '../components/form/LaunchingCourseForm';
import GraphQLBgWithBorder from '../components/layout/Header/GraphQLBgWithBorder';

const metas = {
  title: 'GraphQL Foundation Online Courses | React GraphQL Academy',
  description:
    'Looking for a GraphQL online courses to lean GraphQL? This GraphQL course explains how to get started with GraphQL APIs',
  type: 'website',
};

function CoursePage({ data }) {
  const title = 'GraphQL Foundation';
  const coverImage =
    data.courseThumbnailImages.nodes[0].childImageSharp.fixed.src;

  return (
    <Layout
      breadcrumbPaths={[
        {
          path: '/',
          text: 'Home',
        },
        { text: title },
      ]}
    >
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
      <GraphQLBgWithBorder right={-175}>
        <Header
          title={title}
          subtitle={'Get started building GraphQL APIs'}
          bgImageOpacity={1}
          bgImage={coverImage}
          bgColors={['#DF0098']}
          bgRepeat="repeat"
          bgSize="auto"
          callToAction={
            <LaunchingCourseForm
              courseName={'graphql-foundation'}
              autopilotListId="271daadc-a2a9-4a1b-9a53-b1eba490f5ee"
            />
          }
        />
      </GraphQLBgWithBorder>
    </Layout>
  );
}

export const query = graphql`
  query {
    courseThumbnailImages: allFile(
      filter: {
        absolutePath: { regex: "/courses/cover_graphql-foundation/" }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
    ) {
      nodes {
        publicURL
        name
        childImageSharp {
          fixed(width: 1200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`;

export default CoursePage;
