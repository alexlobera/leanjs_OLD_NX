const REACT = 'react'
const GRAPHQL = 'graphql'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order (Number)',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 128,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: { type: 'person' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'React', value: REACT },
          { title: 'GraphQL', value: GRAPHQL },
          { title: 'Blog', value: 'blog' },
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      order: 'order',
      author: 'author.fullname',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author, order } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author} ${order ? ` - order: ${order}` : ''}`,
      })
    },
  },
}
