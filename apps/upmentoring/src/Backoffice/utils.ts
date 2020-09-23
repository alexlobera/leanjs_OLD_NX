// heads up! this only works for input text custom fields
export function formatSubmitCustomFields(customFieldsValues: any) {
  return customFieldsValues
    ? Object.keys(customFieldsValues).map(fieldId => ({
        fieldId,
        values: customFieldsValues[fieldId],
      }))
    : undefined;
}

// heads up! this only works for input text custom fields
export function formatInitialValueCustomFields(customFieldsValues: any) {
  return customFieldsValues
    ? customFieldsValues.reduce((acc: any, { fieldId, values }: any) => {
        acc = {
          ...acc,
          [fieldId]: values,
        };
        return acc;
      }, {})
    : null;
}

export function mergeConnections(
  initialConnection: any,
  fetchMoreConnection: any,
) {
  const allEdges = [
    ...(initialConnection?.edges ? initialConnection.edges : []),
    ...(fetchMoreConnection?.edges ? fetchMoreConnection?.edges : []),
  ];

  const hasNextPage = fetchMoreConnection
    ? fetchMoreConnection?.pageInfo?.hasNextPage
    : initialConnection?.pageInfo?.hasNextPage;

  const endCursor = fetchMoreConnection
    ? fetchMoreConnection?.pageInfo?.endCursor
    : initialConnection?.pageInfo?.endCursor;

  return { allEdges, hasNextPage, endCursor };
}

export const connectionFetcher = ({
  initialFetch,
  fetchMore,
  endCursor,
  fieldName,
}: any) => () => {
  if (fetchMore) {
    fetchMore({
      variables: {
        cursor: endCursor,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) {
          return prev;
        }
        const { [fieldName]: retrieved } = fetchMoreResult;
        return {
          [fieldName]: {
            ...retrieved,
            edges: [
              ...(prev[fieldName]?.edges || []),
              ...(retrieved?.edges || []),
            ],
          },
        };
      },
    });
  } else {
    initialFetch();
  }
};
