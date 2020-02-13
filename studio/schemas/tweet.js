import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Tweet from '../../www/src/components/blog/Tweet'

export default {
  name: 'tweet',
  type: 'object',
  title: 'Tweet ID',
  icon: () => <FontAwesomeIcon icon={faTwitter} />,
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Tweet ID',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      id: 'id',
    },
    component: ({ value: { id } }) => <Tweet id={id} />,
  },
}
