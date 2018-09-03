import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'

const Root = ({ children, graphQlMocks }) => (
    <Router>
        <MockedProvider addTypename={false} mocks={graphQlMocks}>
            {children}
        </MockedProvider>
    </Router>
)

export default Root