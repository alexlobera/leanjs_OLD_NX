interface Variables {
  [name: string]: any;
}

interface CreateHttpLink {
  uri: string;
  fetcher: <T>(uri: string, options: Variables) => Promise<Response>;
  headers?: any;
}
export const createHttpLink = (options: CreateHttpLink) => {
  const { headers = {}, uri, fetcher } = options || {};

  return {
    fetch: async function ({ query, variables }) {
      let opts = {
        method: 'POST',
        credentials: 'include',
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

      return response.json();
    },
  };
};
