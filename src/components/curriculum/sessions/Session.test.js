import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Session from './Session'

describe('<Session />', () => {
  it('should render component', () => {
    const wrapper = shallow(<Session />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
