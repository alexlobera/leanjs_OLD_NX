// import React from 'react';
import { graphql } from 'gatsby';
export { FAQSection } from '@leanjs/ui-gatsby-sanity';

// TODO move this fragment inside @leanjs/ui-gatsby-sanity
export const query = graphql`
  fragment sanityTrainingPageFragment on SanityTrainingPage {
    _id
    _rawOverview(resolveReferences: { maxDepth: 5 })
    metaTitle
    metaDescription
    faqs {
      _key
      extendAnswer
      featured
      faq {
        question
        _rawAnswer(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;
