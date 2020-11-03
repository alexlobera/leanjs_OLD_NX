import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import ConvinceSection from '../components/layout/ConvinceSection';
import CourseSection from '../components/course/CourseSection';
import PostSection from '../components/blog/PostSection';
import { PageSection } from '../components/layout/Section';
import ContactSection from '../components/layout/ContactSection';
import TestimonialSheet from '../components/course/TestimonialSheet';
import { H2, H3, H4, H5, P, Span } from '../components/display';
import { Ul, Li } from '../components/layout';

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      subTitle
      topImage {
        asset {
          url
        }
      }
      content {
        ... on SanityConvinceSection {
          title
          subtitle
          _rawText
          testimonial {
            fullname
            youtubeId
            course {
              title
            }
            image {
              asset {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
        ... on SanityContactSection {
          title
          text
          buttonText
          buttonVariant
        }
        ... on SanityPageSection {
          title
          subtitle
          backgroundVariant
          _rawText
          imageLeft
          image {
            asset {
              localFile(width: 750) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        ... on SanityCourseSection {
          title
          courses {
            title
            description
            slug {
              current
            }
            image {
              asset {
                localFile(width: 500) {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      metaDescription
      _rawContent
      callToAction {
        title
      }
    }
    # site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
    #   primaryColor {
    #     hex
    #   }
    #   secondaryColor {
    #     hex
    #   }
    #   title
    #   openGraph {
    #     title
    #     description
    #     image {
    #       ...SanityImage
    #     }
    #   }
    # }
  }
`;

function removeCarriageReturn(text) {
  if (text && typeof text === 'string') {
    return text.replace(/[\n\r]+/g, '');
  } else {
    return text;
  }
}

const serializers = {
  marks: {
    // link: ({ mark: { href }, children }) => (
    //   <BlogPostLink to={href} children={children} />
    // ),
    // internalLink: ({ mark = {}, children }) => {
    //   return (
    //     <BlogPostLink to={internalLinkTo({ mark })}>{children}</BlogPostLink>
    //   );
    // },
  },
  list: ({ children }) => <Ul children={children} />,
  listItem: ({ children = {} }) => <Li children={children} />,
  hardBreak: null,
  types: {
    block: ({ children, node }) => {
      const style = node.style || 'normal';
      let formatedChildren;
      switch (style) {
        case 'h2':
          return <H2 children={children} />;
        case 'h3':
          return <H3 children={children} />;
        case 'h4':
          return <H4 children={children} />;
        case 'h5':
          return <H5 children={children} />;
        // case 'blockquote':
        //   return <Blockquote children={children} />;
        default:
          formatedChildren =
            children &&
            children.reduce &&
            children.reduce((acc, curr) => {
              const element = removeCarriageReturn(curr);
              if (element) {
                acc.push(element);
              }

              return acc;
            }, []);

          return formatedChildren && formatedChildren.length ? (
            <P children={formatedChildren} />
          ) : null;
      }
    },

    // youtube: ({ node }) => (
    //   <Video
    //     sx={{ mb: 3, mt: 3 }}
    //     time={node.startSecond}
    //     youtubeId={node.videoId}
    //   />
    // ),
    span: ({ node }) => <Span children={node.children} />,

    //image: (props) => <Img src={bodyImagePublicURLs[props.node.asset.id]} />,
  },
};

function getBlockContent(blocks) {
  return <BlockContent blocks={blocks} serializers={serializers} />;
}

const Page = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <h1>There was an error building the page</h1>;
  }

  // const site = (data || {}).site;

  //   if (!site) {
  //     throw new Error(
  //       'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
  //     );
  //   }

  const page = data?.page;

  const content = (page.content || []).map(({ __typename, ...c }) => {
    let el = null;
    console.log('aaaa', c);
    switch (__typename) {
      case 'SanityContactSection':
        el = (
          <ContactSection
            title={c.title}
            text={c.text}
            buttonText={c.buttonText}
            buttonVariant={c.buttonVariant}
          />
        );
        break;
      case 'convinceSection':
        el = <ConvinceSection />;
        break;
      case 'SanityCourseSection':
        el = <CourseSection courses={c.courses} title={c.title} />;
        break;
      case 'SanityPageSection':
        el = (
          <PageSection
            text={getBlockContent(c._rawText)}
            imageLeft={c.imageLeft}
            title={c.title}
            variant={c.backgroundVariant}
            fluidImage={c.image?.asset?.localFile?.childImageSharp?.fluid}
            subtitle={c.subtitle}
          />
        );
        break;
      case 'partnerSection':
        // TODO
        //   el = <CTAColumns key={_key} {...c} />;
        break;
      case 'postSection':
        // el = <PostSection key={_key} {...c} />;
        break;
      case 'testimonialSection':
        // el = <TestimonialSheet key={_key} {...c} />;
        break;
      default:
        el = null;
    }
    return el;
  });

  //   const gradient = {
  //     from: (site.primaryColor && site.primaryColor.hex) || '#d53369',
  //     to: (site.secondaryColor && site.secondaryColor.hex) || '#daae51',
  //   };

  //   const menuItems = page.navMenu && (page.navMenu.items || []);
  //   const pageTitle = data.route && !data.route.useSiteTitle && page.title;

  return (
    <>
      {/*
      add Helment
      add Header
      */}
      {content}
    </>
  );
};

export default Page;
