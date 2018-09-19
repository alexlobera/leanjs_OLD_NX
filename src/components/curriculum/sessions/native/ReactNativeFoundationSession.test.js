import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ReactNativeFoundationSession from './ReactNativeFoundationSession'

describe('<ReactNativeFoundationSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<ReactNativeFoundationSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
