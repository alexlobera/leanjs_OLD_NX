import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Community from './community'

describe('<Community />', () => {
  it('should render component', () => {
    const wrapper = shallow(<Community />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
