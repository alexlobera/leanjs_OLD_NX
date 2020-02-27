import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import StickyBox from 'react-sticky-box'

import { RunkitProvider } from '../blog/Runkit'
import { formatUTC } from '../utils'
import Grid, { Col, Row } from '../layout/Grid'
import { P, Span, H2, H4, Hr } from '../text'
import Ul, { Li } from '../layout/Ul'
import Header from '../layout/Header'
import { UpcomingTrainingSection } from '../training'
import { Breadcrumb, Link } from '../navigation'
import { WHITE } from '../../config/styles'
import { Image } from '../elements'
import BlogNewsletter from './BlogNewsletter'
import { Segment } from '../elements'
import ShareButtons from './ShareButtons'
import { createMetas } from '../utils'

export const formatPostTitle = title =>
  title ? title.replace(/(<([^>]+)>)/gi, ' ') : ''

const StyledAuthor = styled.div`
  display: flex;
  img {
    margin-right: 18px;
    width: 90px !important;
    height: 90px !important;
    border-radius: 50%;
  }
  a,
  p,
  span {
    color: ${WHITE};
  }
  a {
    display: block;
  }
`

const PostMeta = ({
  authorFullname,
  authorImageUrl,
  authorFixedImg,
  authorSlug,
  date = '',
  timeToRead,
}) => (
  <StyledAuthor>
    <Link to={`/team/${authorSlug}/`} className="blog-article">
      {authorFixedImg ? (
        <Image fixed={authorFixedImg} />
      ) : authorImageUrl ? (
        <Image src={authorImageUrl} />
      ) : null}
    </Link>
    <P>
      <Link to={`/team/${authorSlug}/`} className="blog-article">
        By {authorFullname}
      </Link>
      <Span>
        {formatUTC(date)}
        {timeToRead && (
          <React.Fragment>
            <br />
            Reading time: {timeToRead} mins
          </React.Fragment>
        )}
      </Span>
    </P>
  </StyledAuthor>
)

const GridContent = styled(Grid)`
  padding-top: 72px;
`

const textProps = { lineHeight: 3, fontSize: 3 }
export const BlogPostP = props => <P {...textProps} {...props} />
export const BlogPostLi = props => <Li {...textProps} {...props} />
export const BlogPostLink = props => <Link {...textProps} {...props} />
export const BlogPostSpan = props => <Span {...textProps} {...props} />

const BlogPost = ({
  location,
  body,
  postTypeLabel,
  postTypePath,
  metaDescription,
  slug,
  authorTwitter,
  authorFullname,
  authorImageUrl,
  authorFixedImg,
  authorSlug,
  mainImagePublicUrl,
  metaImageFullPublicUrl,
  title,
  date,
  subtitle,
  timeToRead,
  relatedPosts = [],
  contents,
  trainings,
  breadcrumbBgColor,
}) => (
  <RunkitProvider>
    <Helmet title={title}>
      {createMetas({
        title,
        description: metaDescription,
        imageFullPublicUrl: metaImageFullPublicUrl,
        subtitle,
        ogType: 'article',
        twitterSite: '@reactgqlacademy',
        authorTwitter,
      })}
    </Helmet>
    <Breadcrumb
      path={[
        { to: '/', label: 'Home' },
        {
          to: `/${postTypePath}`,
          label: postTypeLabel,
        },
        { to: slug, label: title },
      ]}
      bgColor={breadcrumbBgColor}
    />
    <Header
      titleLines={title.split('<br />')}
      fullHeight={false}
      paddingBottom={80}
      bgImgUrl={mainImagePublicUrl}
      bgImageOpacity={0.3}
    >
      <PostMeta
        date={date}
        authorFullname={authorFullname}
        authorImageUrl={authorImageUrl}
        authorFixedImg={authorFixedImg}
        authorSlug={authorSlug}
        timeToRead={timeToRead}
      />
    </Header>
    <GridContent as="article">
      <Row>
        <Col md={7}>
          {subtitle ? <H2>{subtitle}</H2> : null}
          {contents && (
            <React.Fragment>
              <BlogPostP>On this page:</BlogPostP>
              <Ul>
                {contents.map(({ slug, text }) => (
                  <BlogPostLi>
                    <Link to={slug}>{text}</Link>
                  </BlogPostLi>
                ))}
              </Ul>
            </React.Fragment>
          )}
          {body}
        </Col>
        <Col md={4} mdOffset={1}>
          {relatedPosts.length ? (
            <Segment small sx={{ mt: 4, border: 'shadow' }}>
              <H4>Related articles</H4>
              {relatedPosts.splice(0, 5).map((post, index) => (
                <React.Fragment key={index}>
                  <Link to={post.path} className="blog-article">
                    {formatPostTitle(post.title)}
                  </Link>
                  <P>{formatUTC(post.date || post.publishedAt)}</P>
                </React.Fragment>
              ))}
            </Segment>
          ) : null}
          <StickyBox offsetTop={120}>
            <Segment small sx={{ mt: 3 }}>
              <BlogNewsletter to="#newsletter-footer" />
            </Segment>
          </StickyBox>
        </Col>
      </Row>
      <Row>
        <Col md={6} sx={{ mt: 4 }}>
          <P>Share this on: </P>
          <ShareButtons path={location.pathname} />
          <Hr />
          <P>
            This website is built using Gatsbyjs. Curious about how this blog is
            implemented? It's open source so you can{' '}
            <Link
              to="https://github.com/reactgraphqlacademy/reactgraphqlacademy"
              className="blog-article"
            >
              check the source code
            </Link>
          </P>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Hr />
          <P>
            Comments? Shoot me a{' '}
            <Link
              to={`http://twitter.com/${authorTwitter}`}
              className="blog-article"
            >
              tweet {`@${authorTwitter}`}
            </Link>{' '}
            !
          </P>
        </Col>
      </Row>
    </GridContent>
    <UpcomingTrainingSection trainings={trainings} />
  </RunkitProvider>
)

export default BlogPost
