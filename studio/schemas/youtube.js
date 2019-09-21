import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Video from '../../src/components/elements/Video'

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
    {
      name: 'startSecond',
      type: 'number',
      title: 'Start second',
    },
  ],
  preview: {
    select: {
      videoId: 'videoId',
      startSecond: 'startSecond',
    },
    component: ({ value: { videoId, startSecond } }) => (
      <Video time={startSecond} youtubeId={videoId} />
    ),
  },
}
