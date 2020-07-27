import UpMentoringVideoInput from '../../components/UpMentoringVideoInput';
import withConditionalField from '../../plugins/withConditionalField';
import ConditionalField from '../../plugins/conditionalField.js';

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
      name: 'transcript',
      title: 'Transcript',
      type: 'videoTranscript',
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
      title: 'UpMentoring video',
      type: 'string',
      inputComponent: withConditionalField(UpMentoringVideoInput),
      options: {
        condition: (_, parent) => parent.type === VIDEO_TYPE_TRAINING,
      },
    },
    {
      name: 'thumbnailImage',
      title: 'Thumbnail image',
      type: 'image',
      inputComponent: ConditionalField,
      options: {
        condition: (_, parent) => parent.type === VIDEO_TYPE_TRAINING,
        hotspot: false,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'defaultThumbnailSecond',
      title: 'Default thumbnail second',
      type: 'number',
      inputComponent: ConditionalField,
      options: {
        condition: (_, parent) => parent.type !== VIDEO_TYPE_TRAINING,
      },
    },
    {
      name: 'defaultStartSecond',
      title: 'Default start second',
      type: 'number',
      inputComponent: ConditionalField,
      options: {
        condition: (_, parent) => parent.type !== VIDEO_TYPE_TRAINING,
      },
    },
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
      inputComponent: ConditionalField,
      options: {
        condition: (_, parent) => parent.type !== VIDEO_TYPE_TRAINING,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'privateDescription',
    },
  },
};
