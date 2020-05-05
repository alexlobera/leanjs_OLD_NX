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
      name: "answer",
      type: "richNoBulletPoints",
      title: "Answer"
    }
  ],
  preview: {
    select: {
      title: "faq.question"
    }
  }
};
