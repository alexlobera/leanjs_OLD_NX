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
      validation: Rule =>
        Rule.custom(value =>
          !value
            ? "Path is required"
            : value.endsWith("/")
            ? true
            : "The path must end with /"
        )
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
      name: "overview",
      title: "Overview",
      type: "richNoBulletPoints",
      validation: Rule => Rule.required()
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "faqPage" }]
    }
  ],
  preview: {
    select: {
      title: "path"
    }
  }
};
