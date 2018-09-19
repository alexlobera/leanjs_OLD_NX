import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import GraphQLSession from './GraphQLSession'

describe('<GraphQLSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<GraphQLSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
