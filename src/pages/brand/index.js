// import React from 'react'
// import { graphql } from 'gatsby'

// import Layout from '../../components/layout'
// import { H2, H3 } from '../../components/text/H'
// import LinkButton from '../../components/buttons/LinkButton'
// import Link from '../../components/navigation/Link'
// import Image from '../../components/elements/Image'
// import P from '../../components/text/P'
// import { Col, Row } from '../../components/layout/Grid'
// import { RootHeader as Header } from '../../components/layout/Header'
// import { UpcomingTrainingSection } from '../../components/training'
// import { Breadcrumb } from '../../components/navigation'
// import Section from '../../components/layout/Section'

// const Blog = ({ data, path }) => {
//   console.log('data', data)

//   const webAssets = data.webAssets.nodes.reduce(
//     (acc, { childImageSharp: { fluid: image } }) => {
//       acc[image.originalName] = image
//       return acc
//     },
//     {}
//   )
//   console.log('webAssets', webAssets)
//   console.log('downloadImages', downloadImages)

//   return (
//     <Layout>
//       {({ trainings }) => (
//         <React.Fragment>
//           <Breadcrumb
//             path={[{ to: '/', label: 'Home' }, { to: path, label: `Blog` }]}
//           />
//           <Header
//             titleLines={['Brand assets']}
//             fullHeight={false}
//             paddingBottom={170}
//           />
//           <Section>
//             <H2>Logos</H2>
//             <P>
//               <LinkButton>Download - all logos</LinkButton>
//             </P>
//             <H3>Landscape</H3>
//             <Row>
//               <Col md={3} textAlign="center">
//                 <Image fluid={webAssets['RGA_primary_darkBG-example.jpg']} />
//               </Col>
//               <Col md={3}>
//                 <Link href="">
//                   Donwload JPG Dark background
//                 </Link>
//               </Col>
//               {/* <Col md={3}>
//                 <Link
//                   href={images['RGA_primary_transparent_darkBG.png'].publicURL}
//                 >
//                   Donwload PNG Transparent background
//                 </Link>
//               </Col> */}
//               <Col md={3}>
//                 <Link href={downloadImages['RGA_primary_svg_darkBG']}>
//                   Donwload SVG Transparent background
//                 </Link>
//               </Col>
//             </Row>

//             <H3>Landscape</H3>
//             <Row>
//               {/*
//               <Col md={3} textAlign="center">
//                 <Image fluid={images['RGA_primary_darkBG-example.jpg']} />
//               </Col>
//                <Col md={3}>
//                 <Link href={images['']}>Donwload JPG Dark background</Link>
//               </Col>
//               <Col md={3}>
//                 <Link href={images['']}>
//                   Donwload PNG Transparent background
//                 </Link>
//               </Col>
//               <Col md={3}>
//                 <Link href={images['']}>
//                   Donwload SVG Transparent background
//                 </Link>
//               </Col> */}
//             </Row>
//           </Section>
//           <UpcomingTrainingSection trainings={trainings} />
//         </React.Fragment>
//       )}
//     </Layout>
//   )
// }

// export const query = graphql`
//   query brandQuery {
//     webAssets: allFile(
//       filter: {
//         extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
//         relativeDirectory: { regex: "/brand/web_asset/" }
//       }
//     ) {
//       nodes {
//         childImageSharp {
//           fluid(maxWidth: 500) {
//             ...GatsbyImageSharpFluid
//             originalName
//           }
//         }
//       }
//     }

//     downloadImages: allFile(
//       filter: { relativeDirectory: { regex: "/brand/logos/" } }
//     ) {
//       nodes {
//         name
//         publicURL
//       }
//     }
//   }
// `

// export default Blog
