export default {
  title: 'Rich Bullet Points',
  name: 'richNoBulletPoints',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [],
      marks: {
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
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
    },
  ],
};
