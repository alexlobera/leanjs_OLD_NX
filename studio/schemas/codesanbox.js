import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'

import { Codesandbox } from '../../src/components/blog/BlockContent'

const Preview = ({ value: { id } }) => <Codesandbox id={id} />

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
    component: Preview,
  },
}
