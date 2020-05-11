export const VIDEO_TYPE_TRAINING = "VIDEO_TYPE_TRAINING";
export const VIDEO_TYPE_TESTIMONIAL = "VIDEO_TYPE_TESTIMONIAL";
export const VIDEO_TYPE_PRODUCT_EXPLAINER = "VIDEO_TYPE_PRODUCT_EXPLAINER";

export default {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Training", value: VIDEO_TYPE_TRAINING },
          { title: "Product explainer", value: VIDEO_TYPE_PRODUCT_EXPLAINER },
          { title: "Testimonial", value: VIDEO_TYPE_TESTIMONIAL },
        ],
      },
    },
    {
      title: "Video file",
      name: "video",
      type: "mux.video",
    },
  ],
};
