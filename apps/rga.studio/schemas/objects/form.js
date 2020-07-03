export default {
  name: "form",
  title: "Form",
  type: "object",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string"
    },
    {
      name: "questions",
      title: "Questions",
      type: "array",
      of: [{ type: "formType" }]
    }
  ],
  preview: {
    select: {
      title: "title"
    }
  }
};
