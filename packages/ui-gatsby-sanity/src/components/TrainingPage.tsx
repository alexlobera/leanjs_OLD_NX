import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import {
  Grid,
  Section,
  Link as LeanLink,
  Box,
  H2,
  H3,
  P,
  Container,
  LeanComponent,
} from '@leanjs/ui-core';

import { internalLinkTo } from '../utils/sanitySerializers';

const Link = (props) => <LeanLink as={GatsbyLink} {...props} />;

export function getMetaData({ defaultMetas, metaData }) {
  let metas = defaultMetas ? { ...defaultMetas } : {};
  if (metaData) {
    const { metaTitle, metaDescription } = metaData;
    if (metaTitle) {
      metas.title = metaTitle;
    }
    if (metaDescription) {
      metas.description = metaDescription;
    }
  }

  return metas;
}

const defaultSerializers = {
  marks: {
    link: ({ mark: { href }, children }) => (
      <Link to={href} children={children} />
    ),
    internalLink: ({ mark = {}, children }) => {
      return <Link to={internalLinkTo({ mark })}>{children}</Link>;
    },
  },
};

export const Overview = ({
  _rawOverview,
  sx = {},
  serializers = defaultSerializers,
}) => (
  <Box sx={{ pb: 5, ...sx }}>
    <BlockContent blocks={_rawOverview} serializers={serializers} />
  </Box>
);

const Answer = ({
  faq,
  showToggle = false,
  display = true,
  serializers = defaultSerializers,
}) => {
  const [isDisplayed, setIsDisplayed] = React.useState(display);

  return (
    <React.Fragment>
      <H3>{faq.question}</H3>
      <Box sx={{ mb: 3 }}>
        {isDisplayed && faq._rawAnswer ? (
          <BlockContent blocks={faq._rawAnswer} serializers={serializers} />
        ) : isDisplayed && faq.extendAnswer ? (
          <P>{faq.extendAnswer}</P>
        ) : null}
        {showToggle && (
          <LeanLink onClick={() => setIsDisplayed((state) => !state)}>
            {isDisplayed ? 'Hide answer' : 'Show answer'}
          </LeanLink>
        )}
      </Box>
    </React.Fragment>
  );
};

interface FAQSectionProps {
  pageData: any;
}

export const FAQSection: LeanComponent<FAQSectionProps> = React.memo(
  ({ pageData }) => {
    if (!(pageData && pageData.faqs && pageData.faqs.length)) {
      return null;
    }

    const featuredFaqs = pageData.faqs.filter((faq) => faq.featured);
    const nofeaturedFaqs = pageData.faqs.filter((faq) => !faq.featured);

    return (
      <Section>
        <Container as={Grid} columns={12}>
          <Box sx={{ gridColumn: ['1 / -1', '2 / -2'] }}>
            <H2>
              <a id="faqs" />
              Frequently Asked Questions
            </H2>
            {featuredFaqs.map(({ extendAnswer, faq }) => {
              let extendedFaq;

              if (
                extendAnswer &&
                faq._rawAnswer &&
                faq._rawAnswer.length &&
                faq._rawAnswer[faq._rawAnswer.length - 1].children
              ) {
                extendedFaq = {
                  ...faq,
                  _rawAnswer: faq._rawAnswer.map((rawAnswer) => ({
                    ...rawAnswer,
                    children: [
                      ...rawAnswer.children,
                      {
                        _key: Math.random(),
                        _type: 'span',
                        text: ` ${extendAnswer}`,
                      },
                    ],
                  })),
                };

                return <Answer faq={extendedFaq} />;
              } else if (extendAnswer && !faq._rawAnswer) {
                extendedFaq = {
                  ...faq,
                  extendAnswer,
                };

                return <Answer faq={extendedFaq} />;
              }
            })}
            {nofeaturedFaqs.map(({ faq }) => {
              return <Answer faq={faq} showToggle={true} display={false} />;
            })}
          </Box>
        </Container>
      </Section>
    );
  }
);

// export const query = graphql`
//   fragment sanityTrainingPageFragment on SanityTrainingPage {
//     _id
//     _rawOverview(resolveReferences: { maxDepth: 5 })
//     metaTitle
//     metaDescription
//     faqs {
//       extendAnswer
//       featured
//       faq {
//         question
//         _rawAnswer(resolveReferences: { maxDepth: 5 })
//       }
//     }
//   }
// `;
