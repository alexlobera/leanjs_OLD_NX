import React from 'react';
import { graphql } from 'gatsby';

import { Header } from '../components/layout/Header';
import ConvinceSection from '../components/layout/ConvinceSection';
import CourseSection from '../components/course/CourseSection';
import PostSection from '../components/blog/PostSection';
import PartnerSection from '../components/partner/PartnerSection';
import { PageSection } from '../components/layout/Section';
import ContactSection from '../components/layout/ContactSection';
import TestimonialSection from '../components/course/TestimonialSection';
import { getBlockContent } from '../utils';
import { BLUE, YELLOW, GREEN } from '../config/theme';

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      subtitle
      headerImage {
        asset {
          localFile(width: 750) {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
      content {
        ... on SanityPartnerSection {
          title
          partners {
            name
            logo {
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
        }
        ... on SanityTestimonialSection {
          testimonials {
            fullname
            youtubeId
            date
            _rawText
            course {
              title
            }
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
        }
        ... on SanityConvinceSection {
          title
          subtitle
          _rawText
          quote
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

  const { headerImage, content, subtitle, title } = data?.page || {};

  const elementContent = (content || []).map(({ __typename, ...c }) => {
    let el = null;
    console.log('aaaa2222', headerImage?.asset?.localFile?.publicURL);
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
      case 'SanityConvinceSection':
        el = (
          <ConvinceSection
            title={c.title}
            subtitle={c.subtitle}
            testimonialFullname={c.testimonial?.fullname}
            testimonialQuote={c.quote}
            testimonialFluidImage={
              c.testimonial?.image?.asset?.localFile?.childImageSharp?.fluid
            }
            testimonialYoutubeId={c.testimonial?.youtubeId}
            text={getBlockContent(c._rawText)}
          />
        );
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
      case 'SanityPartnerSection':
        el = <PartnerSection partners={c.partners} title={c.title} />;
        break;
      case 'postSection':
        // el = <PostSection key={_key} {...c} />;
        break;
      case 'SanityTestimonialSection':
        el = <TestimonialSection testimonials={c.testimonials} />;
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
      */}
      <Header
        bgFixedImage={headerImage?.asset?.localFile?.childImageSharp?.fixed}
        title={title}
        subtitle={subtitle}
        bgColors={['#031430', BLUE, BLUE, GREEN, YELLOW]}
        bgGradientOpacity={1}
        // callToAction={
        //   <LinkButton variant="primary" to="/cursos">
        //     Ver cursos
        //   </LinkButton>
        // }
      />
      {elementContent}
    </>
  );
};

export default Page;
