import React from 'react';
import { useTheme } from '@leanjs/ui-core';

import { Blockquote, P } from '../text';
import { Video } from '../elements';
import Box from '../layout/Box';
import { LinkButton } from '../buttons';
import Card from '../elements/Card';

const AttendeeQuote = ({
  quote,
  fullname,
  company = '',
  job,
  profilePicUrl = '',
  ctaButton = '',
  ctaUrl = '/#',
  youtubeId,
  youtubeTime = 0,
  sx = {},
  ...rest
}) => {
  const {
    colors: { tech },
  } = useTheme();

  return (
    <Card sx={{ borderColor: tech, ...sx }} variant="info" {...rest}>
      {youtubeId && (
        <Video sx={{ mb: 2 }} time={youtubeTime} youtubeId={youtubeId} />
      )}
      <Box sx={{ px: 1 }}>
        <Blockquote>{quote || 'This is a quote from a trainee.'}</Blockquote>
        <P sx={{ pt: 2 }}>
          <strong>
            {fullname || ''}, {job || ''} {company ? ` - ${company}` : ''}
          </strong>
        </P>
      </Box>
      {ctaButton && (
        <LinkButton sx={{ mt: 2 }} to={ctaUrl}>
          {ctaButton || 'Click here'}
        </LinkButton>
      )}
    </Card>
  );
};

export default AttendeeQuote;
