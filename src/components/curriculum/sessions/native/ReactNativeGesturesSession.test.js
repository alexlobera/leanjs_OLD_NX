import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ReactNativeGesturesSession from './ReactNativeGesturesSession'

describe('<ReactNativeGesturesSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<ReactNativeGesturesSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
