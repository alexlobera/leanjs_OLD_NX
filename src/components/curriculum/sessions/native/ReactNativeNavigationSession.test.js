import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ReactNativeNavigationSession from './ReactNativeNavigationSession'

describe('<ReactNativeNavigationSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<ReactNativeNavigationSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
