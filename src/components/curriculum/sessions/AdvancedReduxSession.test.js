import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import AdvancedReduxSession from './AdvancedReduxSession'

describe('<AdvancedReduxSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<AdvancedReduxSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
