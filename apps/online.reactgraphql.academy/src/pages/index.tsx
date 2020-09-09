import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

import Layout from '../components/layout/Layout';
import { Container, Grid, Box, Card, Section } from '../components/layout';
import Header from '../components/layout/Header';
import ReactHeaderBg from '../components/layout/Header/ReactBg';
import GraphQLHeaderBg from '../components/layout/Header/GraphQLBg';

import Link from '../components/navigation/Link';
import { H3, P } from '../components/display';
import Image from '../components/display/Image';

interface PageProps {
  data: any;
  pageContext: any;
}

interface CourseCardProps {
  course: any;
  isAvailable?: boolean;
  fixedImage: string
}
function CourseCard({
  course: {
    slug,
    title,
    overview = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
  },
  isAvailable = true,
  fixedImage
}: CourseCardProps) {
  return (
    <Card sx={{ mb: 5 }}>
      <Link to={`/${slug}-course`} className="articles-summary">
        <Image
          fixed={fixedImage}
          sx={{ mb: 0 }}
        />
      </Link>
      <Box sx={{ p: 3, mt: 1 }}>
        <Link to={`/${slug}-course`} as={GatsbyLink} className="course-list">
          <H3 sx={{ mt: 0 }}>{`${!isAvailable ? 'Comming soon: ' : ''} ${title}`}</H3>
        </Link>
        <P>{overview}</P>
        <P>
          <Link to={`/${slug}-course`} className="course-list">
            {isAvailable ? 'Learn more' : 'Join waiting list'}
          </Link>
        </P>
      </Box>
    </Card>
  );
}

export const getCourseThumbnails = (images) => {
  return images.nodes.reduce((map, image) => {
    map.set(image.name.split('_')[1], { fixed: image.childImageSharp.fixed })

    return map
  }, new Map())
}

function Page({ data }: PageProps) {
  const thumbnails = getCourseThumbnails(data.courseThumbnailImages)

  return (
    <Layout>
      <ReactHeaderBg>
        <GraphQLHeaderBg>
          <Header
            title="Online React and GraphQL Courses"
            subtitle="Learn React and GraphQL online at your own pace with the React GraphQL Academy teaching method"
            bgColors={['#DF0098', '#267280', 'rgba(256,256,256, 0.9)']}
          />
        </GraphQLHeaderBg>
      </ReactHeaderBg>
      <Section variant="top">
        <Container>
          <Grid columns={{ minWidth: '300px' }}>
            {data &&
              data.upmentoring &&
              data.upmentoring.trainings &&
              data.upmentoring.trainings.edges &&
              data.upmentoring.trainings.edges.map(({ node }: any) => {
                return (
                  <CourseCard fixedImage={thumbnails.get(node.slug).fixed} course={node} />
                )
              })}
            <CourseCard
              isAvailable={false}
              fixedImage={thumbnails.get('graphql-foundation').fixed}
              course={{
                title: 'Avanced React Patterns',
                overview:
                  'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
              }}
            />
            <CourseCard
              fixedImage={thumbnails.get('advanced-react').fixed}
              isAvailable={false}
              course={{
                title: 'Designs Systems in React',
                overview:
                  'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
              }}
            />
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  {
    courseThumbnailImages: allFile(filter: {absolutePath: {regex: "/courses/thumbnail/"}, extension: {regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/"}}) {
      nodes {
        publicURL
        name
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    upmentoring {
      trainings(filter: { onDemand: true }) {
        edges {
          node {
            slug
            title
            id
            units {
              id
              published {
                videos {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Page;
