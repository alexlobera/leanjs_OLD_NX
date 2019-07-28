import React from 'react'
import { Blockquote, P } from '../text'
import { Video } from '../elements'
import Box from '../layout/Box'
import { LinkButton } from '../buttons'
import Card from '../elements/Card'

const AttendeeQuote = ({
  quote,
  fullname,
  company,
  job,
  profilePicUrl,
  ctaButton,
  ctaUrl = '/#',
  youtubeId,
  ...rest
}) => (
  <Card variant="info" {...rest}>
    {youtubeId && <Video youtubeId={youtubeId} />}
    <Box px={1}>
      <Blockquote>{quote || 'This is a quote from a trainee.'}</Blockquote>
      <P pt={2}>
        <strong>
          {fullname || ''}, {job || ''} - {company || 'Freelance'}{' '}
        </strong>
      </P>
    </Box>
    {ctaButton && (
      <LinkButton mt={2} to={ctaUrl}>
        {ctaButton || 'Click here'}
      </LinkButton>
    )}
  </Card>
)

export default AttendeeQuote
