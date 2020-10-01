import { gql } from '@apollo/client';

export const ALL_VIDEOS_FRAGMENT = gql`
  fragment allVideos on Query {
    videos {
      edges {
        node {
          id
          published {
            title
            tags
          }
        }
      }
    }
  }
`;
