export default {
  name: 'trainingPage',
  title: 'Training Page',
  type: 'document',
  fields: [
    {
      name: 'path',
      title: 'Path',
      type: 'string',
      placeholder: 'eg. /react/training/bootcamp/',
      validation: (Rule) =>
        Rule.custom((value) =>
          !value
            ? 'Path is required'
            : !value.endsWith('/')
            ? 'The path must end with /'
            : !value.startsWith('/')
            ? 'The path must start with /'
            : true
        ),
    },
    {
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metaDescription',
      title: 'Meta description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subHeader',
      title: 'Sub-header',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rightForMe',
      title: 'Right for me',
      type: 'richBulletPoints',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'testimonialYoutubeId',
      title: 'Testimonial Youtube Id',
      type: 'string',
      //   validation: (Rule) =>
      //     Rule.custom((value) =>
      //       !value
      //         ? 'Video Id is required'
      //         : value.includes('youtube.com') || value.startsWith('http')
      //         ? 'Only the video Id, not the full URL'
      //         : true
      //     ),
      validation: (Rule) =>
        Rule.custom((value) =>
          (value && value.includes('youtube.com')) || value.startsWith('http')
            ? 'Only the video Id, not the full URL'
            : true
        ),
    },
    {
      name: 'testimonialQuote',
      title: 'Testimonial quote',
      type: 'string',
    },
    {
      name: 'testimonialJob',
      title: 'Testimonial job',
      type: 'string',
    },
    {
      name: 'testimonialFullname',
      title: 'Testimonial fullname',
      type: 'string',
    },
    {
      name: 'testimonialCompany',
      title: 'Testimonial company',
      type: 'string',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'richNoBulletPoints',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'faqPage' }],
    },
    {
      name: 'trainingVideo',
      title: 'Video',
      type: 'reference',
      to: { type: 'video' },
    },
  ],
  preview: {
    select: {
      title: 'path',
    },
  },
};
