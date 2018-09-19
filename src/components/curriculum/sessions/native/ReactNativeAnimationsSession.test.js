import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ReactNativeAnimationsSession from './ReactNativeAnimationsSession'

describe('<ReactNativeAnimationsSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<ReactNativeAnimationsSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
