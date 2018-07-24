module.exports = {
  siteMetadata: {
    title: 'ReactJS Academy',
    description: 'ReactJS, Redux & GraphQL Bootcamps and Trainings',
    keywords:
      'React, React Experts, React Instructor, Build React App, Understanding React JS, Javascript Training, Redux, React and Redux, Redux Expert, Learn Redux, Master Redux, Graphql Instructors, Graphql Workshop, React Redux, React Expert, React Trainer, Code Camp, Javascript Bootcamp, Coding Bootcamp, Learn React JS, GraphQL Bootcamp, Graphql Learn, Graphql Company Training, Graphql private training, React Javascript, React Tutorial, Coding Bootcamp, Graphql Expert, Graphql Instructor, Dev Bootcamp, Learn React, React with Bootstrap, Graphql Training, Learn GraphQL, React Bootcamp, React Consultants, React JS Developer, React Training, React class, Learn to Code, Graphql Experts, Graphql onsite training, Graphql trainier, React Graphql, React Training, Advanced React and Redux, Graphql React, Master GraphQL, GraphQL, Redux Training, Graphql Course, Graphql on-site training, How to Graphql',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MVK4HZS',
        includeInDevelopment: false,
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      },
    },
  ],
}
