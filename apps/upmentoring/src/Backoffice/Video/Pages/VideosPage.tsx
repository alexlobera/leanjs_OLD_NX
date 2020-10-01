import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import { paths as backofficePaths } from '../../../Backoffice';
import Link from '../../../App/Components/Navigation/Link';
import Header from '../../../App/Components/Layout/Header';
import { Table, Tbody, Tr, Td } from '../../../App/Components/Table';
import { P } from '../../../App/Components/Text/P';
import Button from '../../../App/Components/Buttons/Button';
import Box from '../../../App/Components/Layout/Box';
import { connectionFetcher } from '../../utils';

const VideosPage = () => {
  const match = useRouteMatch();
  const { loading, error, data, fetchMore } = useQuery(QUERY_VIDEOS, {
    fetchPolicy: 'cache-first',
  });
  const edges = data?.videos?.edges || [];
  const pageInfo = data?.videos?.pageInfo;
  const endCursor = pageInfo?.endCursor;
  const hasNextPage = pageInfo?.hasNextPage;

  return (
    <>
      <Header
        title="Videos"
        actions={
          <Link button={true} to={`${match.url}${backofficePaths.createVideo}`}>
            Create new video
          </Link>
        }
      />
      <Table>
        <Tbody>
          {edges.map(({ node: video }: any) => (
            <Tr key={video.id}>
              <Td>
                <img
                  style={{ maxWidth: '100px' }}
                  src={video.asset?.posterImageUrl}
                  alt="video thumbnail"
                />
              </Td>
              <Td>
                <Link
                  to={`${match.url}/${video.id}${backofficePaths.editVideo}`}
                >
                  {video.published.title}
                </Link>
              </Td>
              <Td>
                {video?.asset?.isPrivate ? 'Private' : <strong>Public</strong>}
              </Td>
              <Td>{video.published.tags && video.published.tags.join()} </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {loading ? (
        <P>...Loading</P>
      ) : error ? (
        <P>There's an error</P>
      ) : (
        hasNextPage && (
          <Box pb={3}>
            <Button
              variant="tertiary"
              onClick={connectionFetcher({
                fetchMore,
                endCursor,
                fieldName: 'videos',
              })}
            >
              Load More
            </Button>
          </Box>
        )
      )}
    </>
  );
};

export const QUERY_VIDEOS = gql`
  query videos($cursor: String, $first: Int = 10) {
    videos(first: $first, after: $cursor) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          published {
            title
            tags
          }
          asset {
            isPrivate
            posterImageUrl(width: 100)
          }
        }
      }
    }
  }
`;

export default VideosPage;
