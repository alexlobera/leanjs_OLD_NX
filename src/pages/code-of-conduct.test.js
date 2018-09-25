import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import CodeOfConduct from './code-of-conduct'

describe('<CodeOfConduct />', () => {
  it('should render component', () => {
    const wrapper = shallow(<CodeOfConduct />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
