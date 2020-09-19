interface CreateHttpLink {
  uri: string;
  fetcher: (uri: string, options: RequestInit) => Promise<Response>;
  headers?: any;
  onError: (params: any) => void;
}
export const createHttpLink = (options: CreateHttpLink) => {
  const { headers = {}, uri, fetcher, onError } = options || {};

  return {
    fetch: async function ({ query, variables }) {
      let opts = {
        method: 'POST',
        credentials: 'include' as RequestCredentials,
        body: JSON.stringify({ query, variables }),
        headers: {
          'Content-Type': 'application/json',
          ...(await Object.keys(headers).reduce(async (acc, key) => {
            const accHeader = await acc;
            if (typeof headers[key] === 'function') {
              accHeader[key] = await headers[key]();
            } else {
              accHeader[key] = headers[key];
            }

            return acc;
          }, Promise.resolve({}))),
        },
      };

      const response = await fetcher(uri, opts);
      if (response.status !== 200 && onError) {
        onError({ networkError: { ...response, statusCode: response.status } });
      }

      return response.json();
    },
  };
};
