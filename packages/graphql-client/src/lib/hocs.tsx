import React from 'react';
import { useQuery, useClient } from './Provider';
import { memoize } from './memoize';

const computeProps = (config, props) => {
  const { options = {} } = config;
  return typeof options === 'function' ? options(props) || {} : options;
};
const memoizedComputeProps = memoize(computeProps);

interface Config {
  skip?: (props: { [name: string]: any }) => boolean | boolean;
}

export function graphql(query: string, config: Config = {}) {
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

export const withGraphQLClient = (Component) => (props) => {
  const { client } = useClient();
  return <Component {...props} client={client} />;
};
