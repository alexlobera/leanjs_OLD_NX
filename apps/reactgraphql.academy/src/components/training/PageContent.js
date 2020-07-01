import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

import { Col, Row } from '../layout/Grid';
import Link from '../navigation/Link';
import Box from '../layout/Box';
import Section from '../layout/Section';
import { H2, H3 } from '../text';
import { internalLinkTo } from '../utils/sanitySerializers';

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
        {isDisplayed && (
          <BlockContent blocks={faq._rawAnswer} serializers={serializers} />
        )}
        {showToggle && (
          <Link onClick={() => setIsDisplayed((state) => !state)}>
            {isDisplayed ? 'Hide' : 'Show'}
          </Link>
        )}
      </Box>
    </React.Fragment>
  );
};

export const FAQSection = React.memo(({ pageData }) => {
  if (!(pageData && pageData.faqs && pageData.faqs.length)) {
    return null;
  }

  const featuredFaqs = pageData.faqs.filter((faq) => faq.featured);
  const nofeaturedFaqs = pageData.faqs.filter((faq) => !faq.featured);

  return (
    <Section>
      <Row>
        <Col md={10} mdOffset={1}>
          <H2>
            <a name="faqs" />
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
            }

            return <Answer faq={extendedFaq} />;
          })}
          {nofeaturedFaqs.map(({ faq }) => {
            return <Answer faq={faq} showToggle={true} display={false} />;
          })}
        </Col>
      </Row>
    </Section>
  );
});

export const query = graphql`
  fragment sanityTrainingPageFragment on SanityTrainingPage {
    _id
    _rawOverview(resolveReferences: { maxDepth: 5 })
    metaTitle
    metaDescription
    faqs {
      extendAnswer
      featured
      faq {
        question
        _rawAnswer(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;
