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
      Signup and learn about cutting-edge React and GraphQL plus the latest news
      on our courses...{' '}
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
