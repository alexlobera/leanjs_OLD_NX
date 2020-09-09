import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createMetas } from '@leanjs/ui-page';

import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import LaunchingCourseForm from '../components/form/LaunchingCourseForm';

const metas = {
  title: 'Online Courses Coming Soon | React GraphQL Academy',
  description: '',
  type: 'website',
};

function ThanksPage({ data }) {
  const title = 'Coming soon';
  const coverImage = data.coverImage.nodes[0].childImageSharp.fixed.src;

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
        title="Thanks for joining the waiting list"
        subtitle="We'll email you when we launch that online course."
        bgColors={['#DF0098', '#267280', 'rgba(256,256,256, 0.9)']}
        bgImage={coverImage}
      />
    </Layout>
  );
}

export const query = graphql`
  query {
    coverImage: allFile(
      filter: {
        absolutePath: { regex: "/welcome/" }
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

export default ThanksPage;
