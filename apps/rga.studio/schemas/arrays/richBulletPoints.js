export default {
  title: 'Rich Bullet Points',
  name: 'richBulletPoints',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      lists: [
        {
          title: 'Bullet',
          value: 'bullet',
        },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'trainingPage' },
                  { type: 'post' },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
