import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ReactNativeModulesAndOfflineSession from './ReactNativeModulesAndOfflineSession'

describe('<ReactNativeModulesAndOfflineSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<ReactNativeModulesAndOfflineSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
