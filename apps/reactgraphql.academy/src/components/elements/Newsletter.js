import React from 'react';
import LinkButton from '../buttons/LinkButton';
import { P, H3 } from '../text';

const Newsletter = ({
  buttonVariant,
  sx = {},
  showCTA = true,
  anchorName = 'newsletter',
}) => (
  <React.Fragment>
    <H3 sx={sx}>
      <a name={anchorName} />
      Free learning resources
    </H3>

    <P>
      Sign up and learn about cutting-edge React and GraphQL plus the latest
      news on our training...{' '}
    </P>
    {showCTA && (
      <LinkButton
        variant={buttonVariant}
        className="free-learning-resources-cta"
        to="#newsletter-footer"
      >
        Sign up now
      </LinkButton>
    )}
  </React.Fragment>
);

export default Newsletter;
