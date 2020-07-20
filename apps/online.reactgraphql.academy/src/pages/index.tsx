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
import { Image } from '../components/display';

interface PageProps {
  data: any;
  pageContext: any;
}

interface CourseCardProps {
  course: any;
  isAvailable?: boolean;
}
function CourseCard({
  course: {
    slug,
    title,
    overview = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
  },
  isAvailable = true,
}: CourseCardProps) {
  return (
    <Card sx={{ mb: 5 }}>
      <Link to={`/${slug}-course`} className="articles-summary">
        <Image
          src="https://reactgraphql.academy/static/13db5a93e9bf9e56ec7a820511569d97/0f3a1/6681c0c80cbeef496e576694938428589bffd319-1920x1654.jpg"
          sx={{ mb: 0 }}
        />
      </Link>
      <Box sx={{ p: 3, mt: 1 }}>
        <Link to={`/${slug}-course`} as={GatsbyLink} className="course-list">
          <H3>{`${!isAvailable ? 'Comming soon: ' : ''} ${title}`}</H3>
        </Link>
        <P>{overview}</P>
        <P>
          <Link to={`/${slug}-course`} className="course-list">
            {isAvailable ? title : 'Join waiting list'}
          </Link>
        </P>
      </Box>
    </Card>
  );
}
//
function Page({ data }: PageProps) {
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
              data.upmentoring.trainings.edges.map(({ node }: any) => (
                <CourseCard course={node} />
              ))}
            <CourseCard
              isAvailable={false}
              course={{
                title: 'Avanced React Patterns',
                overview:
                  'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
              }}
            />
            <CourseCard
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
