/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const fs = require('fs');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { capitalize } = require('./src/components/utils/text');
const { getPostsFromNodes } = require('./src/components/blog/utils');
const { removeTrailingSlash } = require('./src/components/utils/text');
/////
exports.onPostBuild = () => {
  const dir = path.join(__dirname, '../../dist/reactgraphql.academy');

  if (process.argv[2] === 'build') {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.renameSync(path.join(__dirname, 'public'), path.join(dir, 'public'));
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages/bootcamp-landing-content`,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

function getLastPathFromSlug(slug) {
  const slugNoTrailingSlash = slug.replace(/\/$/g, '');
  const slugArray = slugNoTrailingSlash.split('/');
  return slugArray.pop();
}

function getFirstPathFromSlug(slug) {
  const slugArray = slug.split('/');
  return slugArray[1];
}

function getLocationImage(result, city, isOnline) {
  const imageName = isOnline ? 'remote' : city;

  return result.data.locationImages.nodes.find(
    (image) => image.name.toLowerCase() === imageName.toLowerCase()
  );
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const getPosts = async ({ tagsIn = [], tagsNin = '', limit = 8 }) => {
    // TODO move this getPosts function to src/templates/baseTemplate somehow.
    // It's not clear at this point how to do it because baseTemplate is not really a template and so it's not treated as such by Gatsby.
    // The problem with this code is that we are duplicating the fragments defined in PostCard component
    const queryPosts = `
      query getPosts($limit: Int = ${limit}) {
        sanityNodes: allSanityPost(
          filter: {
            ${
              tagsNin || tagsIn.length
                ? `tags: { elemMatch: { name: { in : ["${tagsIn.join(
                    '","'
                  )}"], nin: "${tagsNin}" }}}`
                : ''
            }
          }
          sort: { fields: publishedAt, order: DESC }
          limit: $limit
        ) {
          nodes {
            title
            excerpt
            category
            mainImage {
              asset {
                localFile(width: 500, height: 333) {
                  publicURL
                }
              }
            }
            slug {
              current
            }
          }
        }
        markdownPosts: allMarkdownRemark(
          filter: {
            frontmatter: {
              contentType: { eq: "blog" }
              ${
                tagsNin || tagsIn.length
                  ? `tags: { in: ["${tagsIn.join('","')}"], nin: "${tagsNin}" }`
                  : ''
              }
            }
          }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: $limit
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              imageUrl
              tags
            }
            excerpt
          }
        }
      }
    `;

    const { data } = await graphql(queryPosts);

    return getPostsFromNodes({
      markdownNodes: data && data.markdownPosts && data.markdownPosts.nodes,
      sanityNodes: data && data.sanityNodes && data.sanityNodes.nodes,
    });
  };

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allSanityPost(sort: { order: ASC, fields: publishedAt }) {
          nodes {
            _rawBody(resolveReferences: { maxDepth: 5 })
            readingTimeInMinutes
            id
            category
            slug {
              current
            }
            tags {
              name
            }
          }
        }

        teamPages: allSanityPerson {
          nodes {
            username {
              current
            }
          }
        }
        site {
          siteMetadata {
            siteUrl
          }
        }

        locationImages: allFile(
          filter: { relativePath: { regex: "/pages/locations/.*.jpg/" } }
        ) {
          nodes {
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }

        upmentoring {
          events(first: 1000, filter: { ownerId: "5aaa9b07f146e5cfafad189e" }) {
            edges {
              node {
                id
                title
                standardPrice
                city
                currency
                description
                address
                venueName
                mapUrl
                utcOffset
                startDate
                endDate
                ticketsLeft
                isOnline
                overview
                sponsors {
                  url
                  imageUrl
                }
                callForPapersUrl
                speakers {
                  fullName
                  bio
                  profilePicUrl
                  jobTitle
                  companyName
                  links {
                    name
                    url
                  }
                }
                agenda {
                  title
                  sessions {
                    title
                    description
                  }
                }
              }
            }
          }
        }

        allSanityVideo {
          nodes {
            type
            title
            defaultStartSecond
            defaultThumbnailSecond
            video {
              asset {
                playbackId
              }
            }
          }
        }

        allSanityTrainingPage {
          nodes {
            path
            trainingVideo {
              video {
                asset {
                  playbackId
                }
              }
            }
          }
        }

        partners: allSanityPartner {
          nodes {
            name
            type
            featured
            locations
            website
            logo {
              asset {
                localFile(width: 300) {
                  childImageSharp {
                    fluid(maxWidth: 600) {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
              }
            }
          }
        }

        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                instanceTemplate
                contentType
                city
                coaches
                subtitle
                author
                tags
                videoTwoTime
                videoTwoId
                videoTwoQuote
                videoTwoFullname
                videoTwoJob
                videoTwoCompany
              }
            }
          }
        }
      }
    `).then(async (result) => {
      const locationPath = /^\/locations\//g;
      const instancePath = /^\/(react|graphql)\/training\/.*(london|berlin|amsterdam|lisbon|barcelona|paris|hong-kong|remote).*/;
      const siteUrl = removeTrailingSlash(
        result.data.site.siteMetadata.siteUrl
      );

      await Promise.all(
        result.data.teamPages.nodes.map(({ username: { current } }) =>
          createPage({
            path: `/team/${current}`,
            component: path.resolve(`./src/templates/team-member.js`),
            context: {
              username: current,
            },
          })
        )
      );

      function findVideoByPlaybackId(playbackId, videoNodes) {
        return videoNodes.find((node) => {
          return (
            node.video &&
            node.video.asset &&
            node.video.asset.playbackId === playbackId
          );
        });
      }

      function findTrainingPageByPath(path, trainingPageNodes) {
        return trainingPageNodes.find(
          (trainingPage) => trainingPage.path === path
        );
      }

      await Promise.all(
        result.data.upmentoring.events.edges.map(({ node }) => {
          const locationImage = getLocationImage(
            result,
            node.city,
            node.isOnline
          );
          return createPage({
            path: `/community/meetups/${node.id}`,
            component: path.resolve(`./src/templates/meetup.js`),
            context: {
              meetup: { ...node, shoppingItemEnum: 'event' },
              locationImage: locationImage && locationImage.childImageSharp,
            },
          });
        })
      );

      await Promise.all(
        result.data.allSanityPost.nodes.map(
          async ({
            id,
            slug: { current: currentSlug },
            category,
            tags = [],
            _rawBody = [],
          }) => {
            const sanityImageAssetIds = _rawBody.reduce(
              (images, { _type, asset = {} }) => {
                if (_type === 'image' && asset._id) {
                  return [...images, asset._id];
                }
                return images;
              },
              []
            );
            const tagsNoDuplicates = [
              ...new Set([...tags.map((t) => t.name), category]),
            ];

            await createPage({
              path: `/${category}/${currentSlug}`,
              component: path.resolve(`./src/templates/blog-post-sanity.js`),
              context: {
                tags: tagsNoDuplicates,
                id,
                slug: currentSlug,
                sanityImageAssetIds,
              },
            });
          }
        )
      );

      await Promise.all(
        result.data.allMarkdownRemark.edges.map(async ({ node }) => {
          const { slug } = node.fields;
          const { contentType } = node.frontmatter;
          if (slug.match(instancePath)) {
            const city = getLastPathFromSlug(slug);
            const capitalizedCity = city
              ? capitalize(city.replace('-', ' '))
              : '';
            const instancesToCreate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const locationImage = getLocationImage(result, city);
            const pathConfig = path.resolve(
              `./src/pages/${slug}../config.json`
            );
            const {
              instanceTemplate,
              tagsIn = [],
              tagsNin = '',
              ...restConfig
            } = require(pathConfig);
            const tagsInNoDuplicates = [
              ...new Set([...tagsIn, restConfig.tech.toLowerCase()]),
            ];
            const posts = await getPosts({
              tagsIn: tagsInNoDuplicates,
              tagsNin,
            });
            const {
              videoTwoTime,
              videoTwoId,
              videoTwoQuote,
              videoTwoFullname,
              videoTwoJob,
              videoTwoCompany,
              instanceTemplate: overrideInstanceTemplate,
            } = node.frontmatter;
            const learnToCodePartners = result.data.partners.nodes.filter(
              (partner) => {
                const locations = partner.locations || [];
                return (
                  locations.find((location) => location === city) &&
                  partner.featured
                );
              }
            );
            let instanceTitle;
            if (Array.isArray(restConfig.title)) {
              const lastInstanceTitleIndex = restConfig.title.length - 1;
              instanceTitle = [...restConfig.title];
              instanceTitle[
                lastInstanceTitleIndex
              ] = `${instanceTitle[lastInstanceTitleIndex]}: ${capitalizedCity} `;
            } else {
              instanceTitle = `${restConfig.title}: ${capitalizedCity}`;
            }

            const trainingPage = findTrainingPageByPath(
              slug,
              result.data.allSanityTrainingPage.nodes
            );
            let videoProduct;

            if (
              trainingPage &&
              trainingPage.trainingVideo &&
              trainingPage.trainingVideo.video &&
              trainingPage.trainingVideo.video.asset
            ) {
              videoProduct = findVideoByPlaybackId(
                trainingPage.trainingVideo.video.asset.playbackId,
                result.data.allSanityVideo.nodes
              );
            }

            await Promise.all(
              instancesToCreate.map(async (nth) => {
                const pagePath = `${slug}${nth > 1 ? `${nth}/` : ''}`;
                await createPage({
                  path: pagePath,
                  component: path.resolve(
                    `./src/templates/instance/${
                      overrideInstanceTemplate || instanceTemplate
                    }.js`
                  ),
                  context: {
                    siteUrl,
                    learnToCodePartners,
                    locationImage:
                      locationImage && locationImage.childImageSharp,
                    videoProduct,
                    videoTwoTime,
                    videoTwoId: videoTwoId ? videoTwoId : 'blg40SCle7I',
                    videoTwoQuote: videoTwoQuote
                      ? videoTwoQuote
                      : "We're moving to React so I've looked at the codebase to identify where we could be using advanced patterns...",
                    videoTwoFullname: videoTwoFullname
                      ? videoTwoFullname
                      : 'Lara Ramey',
                    videoTwoJob: videoTwoJob
                      ? videoTwoJob
                      : 'Software Developer',
                    videoTwoCompany: videoTwoCompany
                      ? videoTwoCompany
                      : 'Meredith Corporation',
                    posts,
                    city: capitalizedCity,
                    instanceTitle,
                    nth,
                    coaches:
                      (node.frontmatter && node.frontmatter.coaches) || [],
                    subtitle:
                      (node.frontmatter && node.frontmatter.subtitle) || '',
                    canonical: `${siteUrl}${slug}`,
                    ...restConfig,
                  },
                });
              })
            );
          } else if (contentType === 'blog') {
            const category = getFirstPathFromSlug(slug);
            const tagsInNoDuplicates = [
              ...new Set([...node.frontmatter.tags, category]),
            ];
            await createPage({
              path: slug,
              component: path.resolve(`./src/templates/blog-post-markdown.js`),
              context: {
                tags: tagsInNoDuplicates,
                slug,
              },
            });
          } else if (node.fields.slug.match(locationPath)) {
            const citySlug = getLastPathFromSlug(slug);
            await createPage({
              path: slug,
              component: path.resolve(`./src/templates/location.js`),
              context: {
                citySlug,
                slug,
                imgMaxWidth: 1000,
                // regex: `.src/pages/locations/${node.frontmatter.city.toLowerCase()}/gallery_images/`,
                regex: `./images/locations/${node.frontmatter.city.toLowerCase()}/`,
              },
            });
          } else {
            await createPage({
              path: slug,
              component: path.resolve(`./src/templates/landing.js`),
              context: {
                slug,
              },
            });
          }
        })
      );

      resolve();
    });
  });
};

// onCreatePage is used to access the variable "imgMaxWidth" in page queries, as per: https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#pass-context-to-pages
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      imgMaxWidth: 1000,
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-regenerator',
    name: '@babel/plugin-transform-runtime',
  });
};

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          use: [`graphql-tag/loader`],
        },
      ],
    },
  });

  const timestamp = Date.now();
  const config = getConfig();
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        output: {
          filename: `[name]-${timestamp}-[chunkhash].js`,
          chunkFilename: `[name]-${timestamp}-[chunkhash].js`,
        },
      });
      break;
  }
  return config;
};
