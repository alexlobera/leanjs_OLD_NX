import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import CurriculumReactNative from './workshops/CurriculumReactNative'

describe('<CurriculumReactNative />', () => {
  it('should render component', () => {
    const wrapper = shallow(<CurriculumReactNative />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
