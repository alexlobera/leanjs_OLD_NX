export default {
  name: 'job',
  type: 'object',
  title: 'Job',
  fields: [
    {
      name: 'title',
      title: 'Job title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'companyName',
      title: 'Company name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'companyLink',
      title: 'Company website',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      companyName: 'companyName',
    },
  },
};
