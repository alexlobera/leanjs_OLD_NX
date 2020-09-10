import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';

import LaunchingCourseForm from '../components/form/LaunchingCourseForm';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';

const metas = {
  title: 'Advanced React Online Courses | React GraphQL Academy',
  description:
    'Learn pragmatic functional programing and master advanced React patterns with this course',
  type: 'website',
};

function CoursePage({ data }) {
  const title = 'Advanced React';
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
      <Header
        title={title}
        subtitle={
          'Learn pragmatic functional programing and master advanced React patterns'
        }
        height="100vh"
        bgImageOpacity={1}
        bgImage={coverImage}
        bgColors={['#525AAB']}
        callToAction={
          <LaunchingCourseForm
            courseName={'advanced-react'}
            autopilotListId="3d3d9468-e3d2-41b8-9e16-e2f514ce950a"
          />
        }
      />
    </Layout>
  );
}

export const query = graphql`
  query {
    courseThumbnailImages: allFile(
      filter: {
        absolutePath: { regex: "/courses/cover_advanced-react/" }
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
