import React from 'react';
import { useClient, useQuery } from './Provider';
// import { UPMENTORING_API_URL } from '../../config/apps';
import memoize from './memoize';

const computeProps = (config, props) => {
  const { options = {} } = config;
  return typeof options === 'function' ? options(props) || {} : options;
};
const memoizedComputeProps = memoize(computeProps);

export function graphql(query, config = {}) {
  return (Component) => (props) => {
    if (config.skip && config.skip(props)) {
      return <Component {...props} />;
    }
    // OPTION 1, BUG (Use this for training material example)
    // const { options = {} } = config
    // const { variables } =
    //   typeof options === 'function' ? options(props) || {} : options

    // OPTION 2 VALUES CACHED DURING THE COMPONENT LIFETIME
    // const { variables } = useMemo(() => {
    //   console.log('variables options client')
    //   const { options = {} } = config
    //   return typeof options === 'function' ? options(props) || {} : options
    // }, [config.options, props])

    // OPTION 3 VALUES CACHED DURING ALL THE APP RUNTIME
    const { variables } = memoizedComputeProps(config, props);

    const { data, loading, errors } = useQuery(query, { variables });

    return (
      <Component {...props} loading={loading} errors={errors} data={data} />
    );
  };
}

export const withStatelessClient = (Component) => (props) => {
  const { client } = useClient();
  return <Component {...props} statelessClient={client} />;
};

export const createClient = ({ getToken } = {}) => {
  return {
    query: async function postQuery({ query, variables }) {
      let opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
      };

      const token = getToken && (await getToken());
      if (token) {
        opts.headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(
        process.env.GATSBY_UPMENTORING_API_URL,
        opts
      );

      return response.json();
    },
  };
};
