module.exports = {
  siteMetadata: {
    title: 'ReactJS Academy',
    description:
      'React, Redux & GraphQL bootcamps and trainings - Take your dev career further by mastering the React ecosystem',
    keywords:
      'React, React Experts, React Instructor, Build React App, Understanding React JS, Javascript Training, Redux, React and Redux, Redux Expert, Learn Redux, Master Redux, Graphql Instructors, Graphql Workshop, React Redux, React Expert, React Trainer, Code Camp, Javascript Bootcamp, Coding Bootcamp, Learn React JS, GraphQL Bootcamp, Graphql Learn, Graphql Company Training, Graphql private training, React Javascript, React Tutorial, Coding Bootcamp, Graphql Expert, Graphql Instructor, Dev Bootcamp, Learn React, React with Bootstrap, Graphql Training, Learn GraphQL, React Bootcamp, React Consultants, React JS Developer, React Training, React class, Learn to Code, Graphql Experts, Graphql onsite training, Graphql trainier, React Graphql, React Training, Advanced React and Redux, Graphql React, Master GraphQL, GraphQL, Redux Training, Graphql Course, Graphql on-site training, How to Graphql',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
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
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3333,
        production: false,
        disable: true,
      },
    },
  ],
}
