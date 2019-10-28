import React from 'react'
import MockedProvider from '../../src/api/graphql/MockedProvider'

const Root = ({ children, graphQlMocks }) => (
  <MockedProvider mocks={graphQlMocks}>{children}</MockedProvider>
)

export default Root
