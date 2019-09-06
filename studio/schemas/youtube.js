import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import YouTube from 'react-youtube'

const Preview = ({ value: { id } }) => <YouTube videoId={id} />

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube ID',
  icon: () => <FontAwesomeIcon icon={faYoutube} />,
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'YouTube video ID',
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
