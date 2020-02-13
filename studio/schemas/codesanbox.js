import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { Codesandbox } from '../../www/src/components/blog/BlockContent'

export default {
  name: 'codesandbox',
  type: 'object',
  title: 'Codesandbox ID',
  icon: () => <FontAwesomeIcon icon={faCodepen} />,
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Codesandbox ID',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      id: 'id',
    },
    component: ({ value: { id } }) => <Codesandbox id={id} />,
  },
}
