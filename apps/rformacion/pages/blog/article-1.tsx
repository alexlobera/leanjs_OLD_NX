import React from 'react';
import { graphql } from 'gatsby';
import { ThemeProvider } from '@leanjs/ui-core';

import { formatUTC } from '../../utils';
import Image from '../../components/display/Image';
import { Header } from '../../components/layout/Header';
import { P, H4 } from '../../components/display';
import { BLUE, YELLOW, GREEN } from '../../config/theme';
import Link from '../../components/navigation/Link';
import { Flex, Container, Grid, Box } from '../../components/layout';
import Card from '../../components/layout/Card';
import { Section } from '../../components/layout/Section';

function Index(props) {
  const imageDemo = props.data.coverImage.childImageSharp.fixed;
  const authorSlug = '/mario';
  const authorFullname = 'Mario Cuenca';
  const timeToRead = 3;
  const date = new Date();

  return (
    <>
      <Header
        bgImageOpacity={0.35}
        bgFixedImage={imageDemo}
        title={'Titulo del articulo bla bla  bla bla  bla bla  bla bla  blssss'}
        children={
          <ThemeProvider
            theme={{
              colors: {
                text: '#fff',
              },
            }}
          >
            <Flex sx={{ mt: 3 }}>
              <Link to={`/team/${authorSlug}/`} className="blog-article">
                {/* <Image fixed={authorFixedImg} /> */}
                <Image
                  sx={{ borderRadius: '50%', width: '100px', height: '100px' }}
                  src={imageDemo.src}
                />
              </Link>
              <P sx={{ mt: 0, mb: 0, pl: 3, alignSelf: 'center' }}>
                <Link to={`/team/${authorSlug}/`} className="blog-article">
                  By {authorFullname}
                </Link>
                <br />
                {formatUTC(date)}
                {timeToRead && (
                  <React.Fragment>
                    <br />
                    Reading time: {timeToRead} mins
                  </React.Fragment>
                )}
              </P>
            </Flex>
          </ThemeProvider>
        }
        bgColors={['#031430', BLUE, BLUE, GREEN, YELLOW]}
        bgGradientOpacity={1}
      />

      <Section>
        <Container>
          <Grid columns={12}>
            <Box sx={{ gridColumn: ['1/ 1', '1/ 8'] }}>Article body</Box>
            <Box sx={{ gridColumn: ['1/ 1', '9/ -1'] }}>
              <Card>
                <H4 sx={{ mt: 0 }}>Related articles</H4>
                <Link className="blog-article">title of cool article</Link>
                {/* {relatedPosts.splice(0, 5).map((post, index) => (
                  <React.Fragment key={index}>
                    <Link to={post.path} className="blog-article">
                      {formatPostTitle(post.title)}
                    </Link>
                    <P>{formatUTC(post.date || post.publishedAt)}</P>
                  </React.Fragment>
                ))} */}
              </Card>
            </Box>
          </Grid>
        </Container>
      </Section>
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
