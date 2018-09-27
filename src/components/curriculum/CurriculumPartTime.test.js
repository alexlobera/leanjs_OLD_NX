import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import CurriculumPartTime from './CurriculumPartTime'

describe('<CurriculumPartTime />', () => {
  it('should render component', () => {
    const wrapper = shallow(<CurriculumPartTime />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
