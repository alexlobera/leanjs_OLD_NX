import { RequestInit } from 'whatwg-fetch';

interface CreateHttpLink {
  headers?: any;
  uri: string;
}
export const createHttpLink = (options: CreateHttpLink) => {
  const { headers = {}, uri } = options || {};

  return {
    fetch: async function ({ query, variables }) {
      let opts: RequestInit = {
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

      const response = await fetch(uri, opts);

      return response.json();
    },
  };
};
