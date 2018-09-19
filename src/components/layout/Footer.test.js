import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Footer from './Footer'

describe('<Footer />', () => {
  it('should render component', () => {
    const wrapper = shallow(<Footer />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
