import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import { ThemeProvider } from '@leanjs/ui-core';

import { serializers, formatUTC } from '../utils';
import { Header } from '../components/layout/Header';
import { Section } from '../components/layout/Section';

import { H3, P } from '../components/display';

import { Box, Flex, Li, Container, Grid } from '../components/layout';
import Card from '../components/layout/Card';
import Image from '../components/display/Image';
import YouTube from '../components/display/YouTube';

function CourseDetail({ data }) {
  const { post } = data;
  const headerImage = post?.mainImage?.asset?.localFile?.childImageSharp?.fixed;
  const { nodes: bodyImageNodes = [] } = data.bodyImages || {};
  const bodyImagePublicURLs = bodyImageNodes.reduce(
    (acc, { localFile, id }) => {
      const baseUrl = process.env.GATSBY_BASE_URL;
      const publicURL = localFile?.publicURL || '';
      acc[id] =
        publicURL.indexOf('http') === 0 || !baseUrl
          ? publicURL
          : `${baseUrl}${publicURL}`;

      return acc;
    },
    {}
  );

  return (
    <>
      <Header
        bgFixedImage={headerImage}
        title={post.title}
        bgColors={['#265199', '#265199', 'transparent']}
        bgGradientOpacity={1}
        children={
          <ThemeProvider
            theme={{
              colors: {
                text: '#fff',
              },
            }}
          >
            <Flex sx={{ mt: 3 }}>
              <Image
                sx={{ borderRadius: '50%', width: '100px', height: '100px' }}
                fixed={post.author.image.asset.localFile.childImageSharp.fixed}
              />
              <P sx={{ mt: 0, mb: 0, pl: 3, alignSelf: 'center' }}>
                By {post.author.fullname}
                <br />
                {formatUTC(post.publishedAt)}
                {post.timeToRead && (
                  <React.Fragment>
                    <br />
                    Reading time: {post.timeToRead} mins
                  </React.Fragment>
                )}
              </P>
            </Flex>
          </ThemeProvider>
        }
      />

      <Section as="article">
        <Container>
          <Grid columns={12}>
            <Box sx={{ gridColumn: ['1/ -1', '1  / 7'] }}>
              <BlockContent
                blocks={post._rawBody}
                serializers={{
                  ...serializers,
                  types: {
                    ...serializers.types,
                    youtube: ({ node }) => (
                      <YouTube
                        sx={{ my: 6 }}
                        time={node.startSecond}
                        youtubeId={node.videoId}
                      />
                    ),
                    image: (props) => (
                      <Image
                        sx={{ my: 6 }}
                        src={bodyImagePublicURLs[props.node.asset.id]}
                      />
                    ),
                  },
                }}
              />
            </Box>
            <Box sx={{ gridColumn: ['1/ -1', '9  / -1'] }}>
              <Card>
                <H3 sx={{ mt: 0 }}>Artículos relacionados</H3>
                TODO
              </Card>
            </Box>
          </Grid>
        </Container>
      </Section>
    </>
  );
}

export const query = graphql`
  query PostTemplateQuery($id: String!, $sanityImageAssetIds: [String] = []) {
    bodyImages: allSanityImageAsset(
      filter: { id: { in: $sanityImageAssetIds } }
    ) {
      nodes {
        id
        localFile(width: 650) {
          publicURL
        }
      }
    }
    post: sanityPost(id: { eq: $id }) {
      _rawBody(resolveReferences: { maxDepth: 5 })
      title
      subtitle
      excerpt(limit: 250)
      publishedAt
      readingTimeInMinutes
      author {
        fullname
        image {
          asset {
            localFile(width: 400) {
              childImageSharp {
                fixed(width: 108, height: 108) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      mainImage {
        asset {
          id
          fixed(width: 1200) {
            src
          }
          localFile(width: 1200) {
            childImageSharp {
              fixed(width: 1200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

export default CourseDetail;
