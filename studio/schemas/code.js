import React from 'react'
import { Code } from '../../src/components/blog/BlockContent'

const Preview = ({ value: { code, language } }) => {
  const className = language === 'language-runkit' ? '' : language
  return <Code className={className} children={code} />
}

export default {
  name: 'code',
  type: 'object',
  title: 'Code',
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
        ],
      },
      validation: Rule => Rule.required(),
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
    component: Preview,
  },
}
