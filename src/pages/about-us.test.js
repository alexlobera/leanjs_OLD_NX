import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import AboutUs from './about-us'

describe('<AboutUs />', () => {
  it('should render component', () => {
    const wrapper = shallow(<AboutUs />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
