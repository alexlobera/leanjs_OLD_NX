import React from 'react'
import { Blockquote, P } from '../text'
import { Video } from '../elements'
import Box from '../layout/Box'
import { LinkButton } from '../buttons'
import Card from '../elements/Card'
import { selectTypeColor } from '../utils'

const AttendeeQuote = ({
  type,
  quote,
  fullname,
  company,
  job,
  profilePicUrl,
  ctaButton,
  ctaUrl = '/#',
  youtubeId,
  youtubeTime,
  sx = {},
  ...rest
}) => (
  <Card
    sx={{ borderColor: selectTypeColor(type), ...sx }}
    variant="info"
    {...rest}
  >
    {youtubeId && (
      <Video sx={{ mb: 2 }} time={youtubeTime} youtubeId={youtubeId} />
    )}
    <Box sx={{ px: 1 }}>
      <Blockquote>{quote || 'This is a quote from a trainee.'}</Blockquote>
      <P sx={{ pt: 2 }}>
        <strong>
          {fullname || ''}, {job || ''} - {company || 'Freelance'}{' '}
        </strong>
      </P>
    </Box>
    {ctaButton && (
      <LinkButton sx={{ mt: 2 }} to={ctaUrl}>
        {ctaButton || 'Click here'}
      </LinkButton>
    )}
  </Card>
)

export default AttendeeQuote
