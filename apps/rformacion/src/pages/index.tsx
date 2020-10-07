import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import Navbar from '../components/navigation/Navbar';

function Index(props) {
  return (
    <>
      <Navbar />
      <Header
        bgFixedImage={props.data.coverImage.childImageSharp.fixed}
        title={'Title in the home page'}
      />
    </>
  );
}

export const query = graphql`
  query {
    coverImage: file(
      absolutePath: { regex: "/welcome/" }
      extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
    ) {
      publicURL
      name
      childImageSharp {
        fixed(width: 1200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Index;
