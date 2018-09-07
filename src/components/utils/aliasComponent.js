import React from 'react'


// This function is to allow a component to be given an alternative name, so that it can
// easily be provided as a selector to Enzyme wrapper.find() to hook in for integration testing.
export const aliasComponent = Component => props => <Component {...props} />

// This function is for when you want to alias the same component multiple times in the same scope
export const getComponentAliaser = Component => () => aliasComponent(Component)
