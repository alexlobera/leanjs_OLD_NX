export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'fullname',
      title: 'Fullname',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'slug',
      options: {
        source: 'fullname',
        maxLength: 128,
      },
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'fullname',
      media: 'image',
    },
  },
}
