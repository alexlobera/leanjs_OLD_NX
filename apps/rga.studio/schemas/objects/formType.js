export default {
  name: 'formType',
  title: 'Form Type',
  type: 'object',
  fields: [
    {
      name: 'inputLabel',
      title: 'Input label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'inputType',
      title: 'Input Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [{ title: 'Checkbox', value: 'checkbox' }],
      },
    },
  ],
  preview: {
    select: {
      title: 'inputLabel',
    },
  },
};
