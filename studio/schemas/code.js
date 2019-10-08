import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Code } from '../../src/components/blog/BlockContent'

export default {
  name: 'code',
  type: 'object',
  title: 'Code',
  icon: () => <FontAwesomeIcon icon={faCode} />,
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Runkit', value: 'language-runkit' },
          { title: 'JSX', value: 'language-.jsx' },
          { title: 'JSX-inline', value: 'language-.jsx-inline' },
          { title: 'JSON', value: 'json' },
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
        ],
      },
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      code: 'code',
      language: 'language',
    },
    component: ({ value: { code, language } }) => {
      const className = language === 'language-runkit' ? '' : language
      return <Code className={className} children={code} />
    },
  },
}
