import { usernameValidator } from './validators'

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'fullname',
      title: 'Fullname',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'username',
      title: 'Username',
      type: 'slug',
      options: {
        source: 'fullname',
        maxLength: 128,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'richBulletPoints',
      validation: Rule => Rule.required(),
    },
    {
      name: 'jobs',
      title: 'Job/s',
      type: 'array',
      of: [{ type: 'job' }],
    },
    {
      name: 'academyRole',
      title: 'Academy role',
      type: 'string',
      options: {
        list: [
          { title: 'Coach', value: 'coach' },
          { title: 'Other', value: '' },
        ],
      },
    },
    {
      name: 'twitter',
      title: 'Twitter username',
      type: 'string',
      validation: usernameValidator,
    },
    {
      name: 'gitHub',
      title: 'GitHub username',
      type: 'string',
      validation: usernameValidator,
    },
    {
      name: 'medium',
      title: 'Medium username',
      type: 'string',
      validation: usernameValidator,
    },
    {
      name: 'instagram',
      title: 'Instagram username',
      type: 'string',
      validation: usernameValidator,
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn URL',
      type: 'url',
    },
    {
      name: 'blockquote',
      title: 'Blockquote',
      type: 'string',
    },
    {
      name: 'youtubeVideo',
      title: 'YoutTube Video',
      type: 'youtube',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'fullname',
      media: 'image',
    },
  },
}
