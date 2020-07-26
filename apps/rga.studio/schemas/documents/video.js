import UpMentoringVideoInput from '../../components/UpMentoringVideoInput';

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
      name: 'defaultStartSecond',
      title: 'Default start second',
      type: 'number',
    },
    {
      name: 'defaultThumbnailSecond',
      title: 'Default thumbnail second',
      type: 'number',
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
          { title: 'Training', value: VIDEO_TYPE_TRAINING },
          { title: 'Product explainer', value: VIDEO_TYPE_PRODUCT_EXPLAINER },
          { title: 'Testimonial', value: VIDEO_TYPE_TESTIMONIAL },
        ],
      },
    },
    {
      name: 'umVideoId',
      title: 'UpMentoring video id',
      type: 'string',
      inputComponent: UpMentoringVideoInput,
    },
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    },
    {
      name: 'transcript',
      title: 'Transcript',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'privateDescription',
    },
  },
};
