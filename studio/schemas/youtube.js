import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import YouTube from 'react-youtube'

const Preview = ({ value: { id } }) => <YouTube videoId={id} />

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  icon: () => <FontAwesomeIcon icon={faYoutube} />,
  fields: [
    {
      name: 'videoId',
      type: 'string',
      title: 'YouTube video ID',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
  ],
  preview: {
    select: {
      id: 'id',
    },
    component: Preview,
  },
}
