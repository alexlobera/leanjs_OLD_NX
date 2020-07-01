import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import { slugify } from '../components/utils/text';

import Ul from '../components/layout/Ul';
import { H2, H3, H4, H5 } from '../components/text';
import { Video } from '../components/elements';
import {
  Code,
  Blockquote,
  Codesandbox,
  Img,
  Pre,
  Table,
} from '../components/blog/BlockContent';
import Tweet from '../components/blog/Tweet';
import MarketingCard from '../components/curriculum/MarketingCard';
import BlogPost, {
  BlogPostP,
  BlogPostLi,
  BlogPostLink,
  BlogPostSpan,
} from '../components/blog/BlogPost';
import { getPostsFromNodes } from '../components/blog/utils';
import { LIGHT_PINK } from '../config/styles';
import { TECH_GRAPHQL } from '../config/data';

const blogAuthors = {
  'richard-moss': {
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/team%2Frichard.jpg?alt=media',
    fullname: 'Richard Moss',
  },
  'alex-lobera': {
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/team%2Falex.jpg?alt=media',
    fullname: 'Alex Lobera',
  },
  'horacio-herrera': {
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/reactjsacademy-react.appspot.com/o/team%2Fhoracio.jpg?alt=media',
    fullname: 'Horacio Herrera',
  },
  'paul-woodley': {
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/images%2Fabout_us_profilePics%2FPaul_Profile.jpg?alt=media',
    fullname: 'Paul Woodley',
  },
  'lena-tregub': {
    imgSrc:
      'https://firebasestorage.googleapis.com/v0/b/reactgraphqlacademy.appspot.com/o/images%2Fabout_us_profilePics%2Flena.jpg?alt=media',
    fullname: 'Lena Tregub',
  },
};

function renderHeadingWithAnchor({ children, Component }) {
  return (
    <Component>
      {children}
      <a
        name={slugify(
          children.reduce(
            (acc, current) =>
              typeof current === 'string' ? `${acc} ${current}` : acc,
            ''
          )
        )}
      />
    </Component>
  );
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    a: BlogPostLink,
    table: Table,
    p: BlogPostP,
    h2: ({ children }) => renderHeadingWithAnchor({ children, Component: H2 }),
    h3: ({ children }) => renderHeadingWithAnchor({ children, Component: H3 }),
    h4: ({ children }) => renderHeadingWithAnchor({ children, Component: H4 }),
    h5: ({ children }) => renderHeadingWithAnchor({ children, Component: H5 }),
    ul: Ul,
    li: BlogPostLi,
    pre: Pre,
    img: Img,
    code: Code,
    span: BlogPostSpan,
    tweet: Tweet,
    blockquote: (props) => {
      const text = props.children.find(
        (child) => child && child.props && child.props.children
      );

      return <Blockquote children={text && text.props.children} />;
    },
    codesandbox: Codesandbox,
    video: Video,
    marketingcard: MarketingCard,
  },
}).Compiler;

const Page = ({ data, location, ...rest }) => {
  const { htmlAst, timeToRead, excerpt, frontmatter } = data.markdownRemark;
  const { title, date, subtitle, author, imageUrl } = frontmatter;
  const mainImagePublicUrl = imageUrl;
  const authorTwitter = frontmatter.authorTwitter || 'reactgqlacademy';
  const { slug } = data.markdownRemark.fields;
  const postTypePath = slug.replace(/^\/([^/]*).*$/, '$1');
  const postTypeLabel = `${postTypePath
    .charAt(0)
    .toUpperCase()}${postTypePath.slice(1)}`;
  const body = renderAst(htmlAst);
  const relatedPosts = getPostsFromNodes({
    markdownNodes: data.markdownPosts && data.markdownPosts.nodes,
    sanityNodes: data.sanityNodes && data.sanityNodes.nodes,
  });
  const contents = htmlAst.children.reduce(
    (accContents, { tagName, children }) => {
      if (tagName === 'h2') {
        const text = children
          .map(({ value }) => value)
          .join(' ')
          .trim();

        accContents.push({ text, slug: `#${slugify(text)}` });
      }

      return accContents;
    },
    []
  );
  const breadcrumbBgColor =
    postTypeLabel.toLocaleLowerCase() === TECH_GRAPHQL.toLowerCase()
      ? LIGHT_PINK
      : undefined;

  const blogPostProps = {
    body,
    postTypeLabel:
      postTypeLabel.toLocaleLowerCase() === 'graphql'
        ? 'GraphQL'
        : postTypeLabel,
    postTypePath,
    metaDescription: subtitle || excerpt,
    slug: location.pathname,
    authorTwitter,
    authorSlug: author,
    authorFullname: blogAuthors[author].fullname,
    authorImageUrl: blogAuthors[author].imgSrc,
    mainImagePublicUrl,
    title,
    date,
    subtitle,
    timeToRead,
    relatedPosts,
    contents,
    location,
    breadcrumbBgColor,
    ...rest,
  };

  return <BlogPost {...blogPostProps} />;
};

export const query = graphql`
  query BlogPostQuery($slug: String!, $tags: [String] = []) {
    markdownPosts: allMarkdownRemark(
      filter: {
        frontmatter: { contentType: { eq: "blog" }, tags: { in: $tags } }
        fields: { slug: { ne: $slug } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      nodes {
        ...MarkdownPostItemFragment
      }
    }

    sanityNodes: allSanityPost(
      filter: { tags: { elemMatch: { name: { in: $tags } } } }
      sort: { fields: publishedAt, order: DESC }
      limit: 3
    ) {
      nodes {
        ...SanityPostItemFragment
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        subtitle
        author
        imageUrl
        authorTwitter
      }
      fields {
        slug
      }
      excerpt(pruneLength: 250)
      htmlAst
      timeToRead
    }
  }
`;

export default Page;
