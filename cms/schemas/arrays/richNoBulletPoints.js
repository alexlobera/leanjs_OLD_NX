export default {
  title: "Rich Bullet Points",
  name: "richNoBulletPoints",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [],
      lists: [
        {
          annotations: [
            {
              title: "URL",
              name: "link",
              type: "object",
              fields: [
                {
                  title: "URL",
                  name: "href",
                  type: "url"
                }
              ]
            }
          ]
        }
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" }
        ]
      }
    }
  ]
};
