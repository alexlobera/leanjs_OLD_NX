import React from 'react'
import LinkButton from '../buttons/LinkButton'
import { P, H3 } from '../text'
import Link from '../navigation/Link'

const Newsletter = ({
  buttonVariant,
  sx = {},
  showCTA = true,
  anchorName = 'newsletter',
}) => (
  <React.Fragment>
    <H3 sx={sx}>Free learning resources</H3>
    <a name={anchorName} />
    <P>
      We share our resources directly from our{' '}
      <Link className="free-learning-resources" to="/react/curriculum">
        React
      </Link>{' '}
      and{' '}
      <Link className="free-learning-resources" to="/graphql/curriculum">
        GraphQL
      </Link>{' '}
      curriculums and we'd love for you to enjoy and learn from them!{' '}
    </P>
    {showCTA && (
      <LinkButton
        variant={buttonVariant}
        className="free-learning-resources-cta"
        to="#newsletter"
      >
        Sign up now
      </LinkButton>
    )}
  </React.Fragment>
)

export default Newsletter
