import React from 'react'
import Tweet from '../../src/components/blog/Tweet'

const Preview = ({ value: { id } }) => <Tweet id={id} />

export default {
  name: 'tweet',
  type: 'object',
  title: 'Tweet ID',
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
    component: Preview,
  },
}
