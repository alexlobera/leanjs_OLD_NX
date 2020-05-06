import React from "react";

export default {
  name: "faqPage",
  type: "object",
  title: "FAQ page",
  fields: [
    {
      name: "faq",
      title: "FAQ",
      type: "reference",
      to: [{ type: "faq" }],
      validation: Rule => Rule.required()
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean"
    },
    {
      name: "extendAnswer",
      title: "Extend answer",
      type: "text",
      validation: Rule => {
        return Rule.custom((value, context) =>
          context.parent && context.parent.featured === true && !value
            ? "Extended text is required if the question is featured"
            : true
        );
      }
    }
  ],
  preview: {
    select: {
      title: "faq.question"
    }
  }
};
