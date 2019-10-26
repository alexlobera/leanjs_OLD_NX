import React from 'react'
// import { MockedProvider } from 'react-apollo/test-utils'
import CacheProvider from '../../src/api/GraphQLProvider'

const Root = ({ children, graphQlMocks }) => (
  <CacheProvider mocks={graphQlMocks}>{children}</CacheProvider>
)

export default Root
