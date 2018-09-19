import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import native from './native'

describe('<native />', () => {
  it('should render component', () => {
    const wrapper = shallow(<native />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
