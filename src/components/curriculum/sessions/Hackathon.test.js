import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Hackathon from './Hackathon'

describe('<Hackathon />', () => {
  it('should render component', () => {
    const wrapper = shallow(<Hackathon />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
