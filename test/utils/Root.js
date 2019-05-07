import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'

const Root = ({ children, graphQlMocks }) => (
  <MockedProvider addTypename={false} mocks={graphQlMocks}>
    {children}
  </MockedProvider>
)

export default Root
