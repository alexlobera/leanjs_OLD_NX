import React from 'react'

import LinkButton from '../buttons/LinkButton'
import { H3, P } from '../text'

export const THANKS_MESSAGE = 'Thanks for submitting!'

const BlogNewsletter = () => {
  return (
    <React.Fragment>
      <H3>Join the newsletter</H3>
      <P>
        Do you like the article? Sign up for our newsletter and don't miss a
        thing!
      </P>
      <LinkButton to="#newsletter-footer">Sign up</LinkButton>
    </React.Fragment>
  )
}

export default React.memo(BlogNewsletter)
