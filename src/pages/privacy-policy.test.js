import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import PrivacyPolicy from './privacy-policy'

describe('<PrivacyPolicy />', () => {
  it('should render component', () => {
    const wrapper = shallow(<PrivacyPolicy />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
