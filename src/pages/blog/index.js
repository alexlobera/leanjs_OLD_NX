import React from 'react'
import styled from 'styled-components'
import Grid, { Col, Row } from '../../components/layout/Grid'
import { H2, P } from '../../components/text'
import Header from '../../components/layout/Header'
import { UpcomingTrainingSection } from '../../components/training'
import { Breadcrumb, Link } from '../../components/navigation'
import { Card, Image } from '../../components/elements'
import { TopSection } from '../../components/layout/Section'

const CardText = styled.div`
    padding: 18px;
`

const Blog = ({ data }) => {
    const posts = data.allMarkdownRemark.edges
    return (
        <React.Fragment>
            <Breadcrumb
                path={[{ to: '/', label: 'Home' }, { to: `/blog/`, label: `Blog` }]}
            />
            <Header
                titleLines={['Blog']}
                subtitle="Insights into the world of ReactJS Academy"
                bgImg="about-us"
                fullHeight={false}
                paddingBottom={170}
            />

            <TopSection>
                <Grid >
                    {posts.map(post => (
                        <React.Fragment>
                            <Row>
                                <Col lg={4}>
                                    <Card border="shadow" padding={false} bottom={36}>
                                        <Link to={`${post.node.fields.slug}`}>
                                            <Image src={post.node.frontmatter.imageUrl} />
                                        </Link>
                                        <CardText>
                                            <Link to={`${post.node.fields.slug}`}>
                                                <H2>{post.node.frontmatter.title}</H2>
                                            </Link>
                                            <P>{post.node.excerpt}</P>
                                            <P>
                                                <Link to={`${post.node.fields.slug}`}>Read more >></Link>
                                            </P>
                                        </CardText>
                                    </Card>
                                </Col>
                            </Row>
                        </React.Fragment>
                    ))}
                </Grid>
            </TopSection>
            <UpcomingTrainingSection />
        </React.Fragment >
    )
}

export const query = graphql`
  query blogQuery {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/blog/" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title, imageUrl
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
