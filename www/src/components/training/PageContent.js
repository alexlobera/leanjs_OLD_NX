import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import Link from 'src/components/navigation/Link'
import Box from 'src/components/layout/Box'

const serializers = {
  marks: {
    link: ({ mark: { href }, children }) => (
      <Link to={href} children={children} />
    ),
  },
}

export const Overview = ({ _rawOverview, sx = {} }) => (
  <Box sx={{ pb: 5, ...sx }}>
    <BlockContent blocks={_rawOverview} serializers={serializers} />
  </Box>
)
export const FAQ = ({ faqs }) => 'hi'

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
        _rawAnswer
      }
    }
  }
`
