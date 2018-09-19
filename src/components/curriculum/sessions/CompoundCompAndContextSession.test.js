import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import CompoundCompAndContextSession from './CompoundCompAndContextSession'

describe('<CompoundCompAndContextSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<CompoundCompAndContextSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
