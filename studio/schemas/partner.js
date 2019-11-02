export default {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 128,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo (.jpg, .jpeg)',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Learn-to-code school', value: 'learn-to-code' },
          { title: 'Conference', value: 'conference' },
          { title: 'Venue', value: 'venue' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule =>
        Rule.required()
          .min(10)
          .max(140),
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}
