import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';

import LaunchingCourseForm from '../components/form/LaunchingCourseForm';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import ReactBgWithBorder from '../components/layout/Header/ReactBgWithBorder';

const metas = {
  title: 'Advanced React Online Courses | React GraphQL Academy',
  description:
    'Learn pragmatic functional programming and master advanced React patterns with this course',
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
      <ReactBgWithBorder bgColor="#525AAB" right={-50}>
        <Header
          title={title}
          subtitle={
            'Learn pragmatic functional programing and master advanced React patterns'
          }
          bgImageOpacity={1}
          bgImage={coverImage}
          bgColors={['#525AAB']}
          bgRepeat="repeat"
          bgSize="auto"
          callToAction={
            <LaunchingCourseForm
              courseName={'advanced-react'}
              autopilotListId="3d3d9468-e3d2-41b8-9e16-e2f514ce950a"
            />
          }
        />
      </ReactBgWithBorder>
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
