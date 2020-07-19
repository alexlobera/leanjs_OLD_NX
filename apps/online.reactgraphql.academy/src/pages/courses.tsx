// import React, { FunctionComponent } from 'react';
// import { graphql } from 'gatsby';

// import Layout from '../components/layout/Layout';
// import { Container, Grid, Box, BoxProps } from '../components/layout';
// import Header from '../components/layout/Header';
// import Link from '../components/navigation/Link';
// import { H3, P } from '../components/display';
// // import { Image } from '../components/display';

// const Image = ({ sx, ...rest }) => (
//   <Box sx={{ maxWidth: '100%', ...sx }} box="img" {...rest} />
// );

// const Card: FunctionComponent<BoxProps> = ({ sx, ...rest }) => (
//   <Box sx={{ boxShadow: 'box', ...sx }} {...rest} />
// );

// interface PageProps {
//   data: any;
//   pageContext: any;
// }

// function Page({ data }: PageProps) {
//   return (
//     <Layout>
//       <Header />
//       <Container sx={{ mt: '-50px' }}>
//         <Grid columns={3}>
//           {data &&
//             data.upmentoring &&
//             data.upmentoring.trainings &&
//             data.upmentoring.trainings.edges &&
//             data.upmentoring.trainings.edges.map(({ node: course }: any) => (
//               <Card sx={{ mb: 5 }}>
//                 <Link
//                   to={`/online-course-${course.slug}`}
//                   className="articles-summary"
//                 >
//                   <Image
//                     src="https://reactgraphql.academy/static/13db5a93e9bf9e56ec7a820511569d97/0f3a1/6681c0c80cbeef496e576694938428589bffd319-1920x1654.jpg"
//                     sx={{ mb: 0 }}
//                   />
//                 </Link>
//                 <Box sx={{ p: 2 }}>
//                   <Link
//                     to={`/online-course-${course.slug}`}
//                     className="course-list"
//                   >
//                     <H3>{course.title}</H3>
//                   </Link>
//                   <P>Bla bla bal bal</P>
//                   <P>
//                     <Link
//                       to={`/online-course-${course.slug}`}
//                       className="course-list"
//                     >
//                       Read more
//                     </Link>
//                   </P>
//                 </Box>
//               </Card>
//             ))}
//         </Grid>
//       </Container>
//     </Layout>
//   );
// }

// export const query = graphql`
//   {
//     upmentoring {
//       trainings(filter: { onDemand: true }) {
//         edges {
//           node {
//             slug
//             title
//             id
//             units {
//               id
//               published {
//                 videos {
//                   id
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default Page;
