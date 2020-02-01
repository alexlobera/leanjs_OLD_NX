import React from 'react'
import { graphql } from 'gatsby'

import { H2, H3 } from '../../components/text/H'
import LinkButton from '../../components/buttons/LinkButton'
import { Box } from '@leanjs/academy-ui'
import Link from '../../components/navigation/Link'
import Image from '../../components/elements/Image'
import P from '../../components/text/P'
import { Col, Row } from '../../components/layout/Grid'
import { RootHeader as Header } from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb } from '../../components/navigation'
import Section from '../../components/layout/Section'
import {
  BLUE,
  MEETUP_RED,
  GRAPHQL_PINK,
  DARK_GREY,
  GREY,
  WHITE,
  RED,
  DARK_BLUE,
  PINK,
} from '../../config/styles'

const Blog = ({ data, path, trainings }) => {
  const webAssets = data.webAssets.nodes.reduce(
    (acc, { childImageSharp: { fluid: image } }) => {
      acc[image.originalName] = image
      return acc
    },
    {}
  )
  const colProps = {
    sx: {
      mb: 5,
    },
    md: 3,
  }
  const colorBoxSxProps = {
    width: 1,
    height: '75px',
  }

  return (
    <React.Fragment>
      <Breadcrumb
        path={[
          { to: '/', label: 'Home' },
          { to: path, label: `Blog` },
        ]}
      />
      <Header
        titleLines={['Brand assets']}
        fullHeight={false}
        // TODO migrate the following paddingBottom to sx and refactor Header
        paddingBottom={170}
        links={[
          {
            text: 'Logos',
            to: '#logos',
          },
          {
            text: 'Colours',
            to: '#colours',
          },
          {
            text: 'Typography',
            to: '#typography',
          },
        ]}
      />
      <Section>
        <H2>
          Logos <a name="logos" />
        </H2>
        <P>
          <LinkButton href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2FReactGraphQLAcadmey-logos2019.zip?alt=media">
            Download - all logos
          </LinkButton>
        </P>
        <H3>Landscape</H3>
        <Row>
          <Col {...colProps}>
            <Image fluid={webAssets['RGA_primary_darkBG-example.jpg']} />
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fprimary_wide%2FRGA_primary_transparent_darkBG.jpg?alt=media">
              Download JPG Dark background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fprimary_wide%2FRGA_primary_transparent_darkBG.png?alt=media">
              Download PNG transparent background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fprimary_wide%2FRGA_primary_svg_darkBG.svg?alt=media">
              Download SVG transparent background
            </Link>
          </Col>
        </Row>

        <Row>
          <Col {...colProps}>
            <Image fluid={webAssets['RGA_primary_whiteBackground.jpg']} />
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fprimary_wide%2FRGA_primary_whiteBackground.jpg?alt=media">
              Download JPG white background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fprimary_wide%2FRGA_primary_transparent.png?alt=media">
              Download PNG transparent background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fprimary_wide%2FRGA_primary_svg.svg?alt=media">
              Download SVG Transparent background
            </Link>
          </Col>
        </Row>

        <H3>Square</H3>
        <Row>
          <Col {...colProps}>
            <Image fluid={webAssets['RGA_square_transparent_darkBG.jpg']} />
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fsquare%2FRGA_square_transparent_darkBG.jpg?alt=media">
              Download JPG Dark background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fsquare%2FRGA_square_transparent_darkBG.png?alt=media">
              Download PNG Transparent background
            </Link>
          </Col>
        </Row>
        <Row>
          <Col {...colProps}>
            <Image fluid={webAssets['RGA_square_whiteBackground.jpg']} />
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fsquare%2FRGA_square_whiteBackground.jpg?alt=media">
              Download JPG white background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fsquare%2FRGA_square_transparent.png?alt=media">
              Download PNG transparent background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Fsquare%2FRGA_square_svg.svg?alt=media">
              Download SVG transparent background
            </Link>
          </Col>
        </Row>

        <H3>Icon</H3>
        <Row>
          <Col {...colProps}>
            <Image fluid={webAssets['RGA_icon_transparent_darkBG.jpg']} />
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Ficon%2FRGA_icon_transparent_darkBG.jpg?alt=media">
              Download JPG Dark background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Ficon%2FRGA_icon_transparent_darkBG.png?alt=media">
              Download PNG Transparent background
            </Link>
          </Col>
        </Row>
        <Row>
          <Col {...colProps}>
            <Image fluid={webAssets['RGA_icon_transparent.png']} />
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Ficon%2FRGA_icon_whiteBG.jpg?alt=media">
              Download JPG Dark background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Ficon%2FRGA_icon_transparent.png?alt=media">
              Download PNG Transparent background
            </Link>
          </Col>
          <Col {...colProps}>
            <Link href="https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/branding%2Flogos%2Ficon%2FRGA_icon_svg.svg?alt=media">
              Download SVG Transparent background
            </Link>
          </Col>
        </Row>
      </Section>
      <Section>
        <H2>
          Colours <a name="colours" />
        </H2>
        <H3 sx={{ pt: 0 }}>Event types</H3>
        <Row>
          <Col md={3}>
            <Box sx={{ backgroundColor: BLUE, ...colorBoxSxProps }} />
            <P>React Blue: #6FCFF0</P>
          </Col>
          <Col md={3} mdOffset={1}>
            <Box sx={{ backgroundColor: GRAPHQL_PINK, ...colorBoxSxProps }} />
            <P>GraphQL Pink: #DF0098</P>
          </Col>
          <Col md={3} mdOffset={1}>
            <Box sx={{ backgroundColor: MEETUP_RED, ...colorBoxSxProps }} />
            <P>Meetup Red: #F64060</P>
          </Col>
        </Row>

        <H3>Website UI</H3>
        <Row>
          <Col {...colProps}>
            <Box sx={{ backgroundColor: RED, ...colorBoxSxProps }} />
            <P>CTA primary: #C0392B</P>
          </Col>
          <Col {...colProps} mdOffset={1}>
            <Box sx={{ backgroundColor: DARK_BLUE, ...colorBoxSxProps }} />
            <P>CTA secondary: #002938</P>
          </Col>
          <Col {...colProps} mdOffset={1}>
            <Box sx={{ backgroundColor: PINK, ...colorBoxSxProps }} />
            <P>Error message: #F388A2</P>
          </Col>

          <Col md={3}>
            <Box sx={{ backgroundColor: DARK_GREY, ...colorBoxSxProps }} />
            <P>Text grey: #4A4A4A</P>
          </Col>
          <Col md={3} mdOffset={1}>
            <Box sx={{ backgroundColor: GREY, ...colorBoxSxProps }} />
            <P>Accent grey: #C4C4C4</P>
          </Col>
          <Col md={3} mdOffset={1}>
            <Box
              sx={{
                backgroundColor: WHITE,
                border: '1px solid',
                borderColor: GREY,
                ...colorBoxSxProps,
              }}
            />
            <P>White: #FFFFFF</P>
          </Col>
        </Row>
      </Section>
      <Section>
        <H2>
          Typography <a name="typography" />
        </H2>
        <H3 pt={0}>Barlow</H3>
        <Row>
          <Col {...colProps}>
            <Image fluid={webAssets['typography1.png']} />
          </Col>
          <Col {...colProps} mdOffset={1}>
            <Image fluid={webAssets['typography2.png']} />
          </Col>
          <Col {...colProps} mdOffset={1}>
            <Image fluid={webAssets['typography3.png']} />
          </Col>
        </Row>
        <LinkButton href="https://fonts.google.com/specimen/Barlow">
          Download - Barlow Font Family
        </LinkButton>
      </Section>
      <UpcomingTrainingSection trainings={trainings} />
    </React.Fragment>
  )
}

export const query = graphql`
  query brandQuery {
    webAssets: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        relativeDirectory: { regex: "/brand/web_asset/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }

    downloadImages: allFile(
      filter: { relativeDirectory: { regex: "/brand/logos/" } }
    ) {
      nodes {
        name
        publicURL
      }
    }
  }
`

export default Blog
