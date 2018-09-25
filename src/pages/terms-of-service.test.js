import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import TermsOfService from './terms-of-service'

describe('<TermsOfService />', () => {
  it('should render component', () => {
    const wrapper = shallow(<TermsOfService />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
