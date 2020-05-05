export default {
  name: "trainingPage",
  title: "Training Page",
  type: "document",
  fields: [
    {
      name: "path",
      title: "Path",
      type: "string",
      placeholder: "eg. /react/training/bootcamp/",
      validation: Rule => Rule.required()
    },
    {
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "metaDescription",
      title: "Meta description",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "metaImage",
      title: "Meta image",
      type: "image"
    },
    {
      name: "overview",
      title: "Overview",
      type: "richNoBulletPoints",
      validation: Rule => Rule.required()
    },
    {
      name: "faq",
      title: "FAQs",
      type: "array",
      of: [{ type: "faqPage" }]
    }
  ]
};
