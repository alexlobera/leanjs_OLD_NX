## Description

This plugin extends the Gatsby Sanity GraphQL schema to add a `localFile` field to the `SanityImageAsset` type. The field `localFile` returns a `File` type. This enables downloading remote images to local so you have the flexibility to deploy them to a different CDN or process the images with `gatsby-plugin-sharp` for instance. This plugin is inspired by the [localFile field from Contentful](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-contentful#download-assets-for-static-distribution).

### Demo

This [page](https://reactgraphql.academy/team/will-voelcker/) downloads the profile picture using [localFile](https://github.com/reactgraphqlacademy/reactgraphqlacademy/blob/master/src/templates/team-member.js#L210). The picture is served via Firebase CDN.

### Dependencies

This plugin depends on [gatsby-source-sanity](https://github.com/sanity-io/gatsby-source-sanity)

## How to install

```npm i gatsby-source-sanity-transform-images --save```

```js
// in your gatsby-config.js
module.exports = {
  // ...
  plugins: [
    // ...
    'gatsby-source-sanity-transform-images',
  ],
  // ...
}

```

## When do I use this plugin?

If you want to download assets for static distribution instead of using Sanity's CDN. This plugin downloads the Sanity Assets to the local filesystem.

Useful for reduced data usage in development or projects where you want the assets copied locally with builds for deploying without links to Sanity's CDN.

## Examples of usage

You 

```GraphQL
query Example {
  allSanityImageAsset {
    nodes {
    # Direct URL to Sanity CDN for this asset
      url
      # Query for locally stored file(eg An image) - `File` node
      localFile(width: 500) {
          # Where the asset is copied to for distribution
          publicURL
          # Use `gatsby-image` to create fluid image resource
          childImageSharp {
            # max width is already 500 because of localFile(width: 500) 
            fluid {
              src
          }
        }
      }
    }
  }
}
```

## How to contribute

Thanks for your interest in contributing to this plugin! Pull Requests welcome for any level of improvement, from a small typo to a new section, help us make the project better.

## Pull Requests

To submit a pull request, follow these steps

1. Fork and clone this repo
2. Create a branch for your changes
3. Install dependencies with `yarn`
4. Make changes locally and commit them
5. Push your branch to origin
6. Open a pull request in this repository with a clear title and description and link to any relevant issues
7.  Wait for a maintainer to review your PR
