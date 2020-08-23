export const VIDEO_TYPE_TRAINING = 'VIDEO_TYPE_TRAINING';
export const VIDEO_TYPE_TESTIMONIAL = 'VIDEO_TYPE_TESTIMONIAL';
export const VIDEO_TYPE_PRODUCT_EXPLAINER = 'VIDEO_TYPE_PRODUCT_EXPLAINER';

export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'privateDescription',
      title: 'Private description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publicDescription',
      title: 'Public description',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          // { title: 'Training', value: VIDEO_TYPE_TRAINING },
          { title: 'Product explainer', value: VIDEO_TYPE_PRODUCT_EXPLAINER },
          { title: 'Testimonial', value: VIDEO_TYPE_TESTIMONIAL },
        ],
      },
    },
    // {
    //   name: 'umVideoId',
    //   title: 'UpMentoring video',
    //   type: 'string',
    //   inputComponent: withConditionalField(UpMentoringVideoInput),
    //   options: {
    //     condition: (_, parent) => parent.type === VIDEO_TYPE_TRAINING,
    //   },
    // },
    {
      name: 'defaultThumbnailSecond',
      title: 'Default thumbnail second',
      type: 'number',
      // inputComponent: ConditionalField,
    },
    {
      name: 'defaultStartSecond',
      title: 'Default start second',
      type: 'number',
    },
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'privateDescription',
    },
  },
};
