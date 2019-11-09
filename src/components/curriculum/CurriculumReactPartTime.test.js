import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import CurriculumReactPartTime from './CurriculumReactPartTime'

describe('<CurriculumReactPartTime />', () => {
  it('should render component', () => {
    const wrapper = shallow(<CurriculumReactPartTime />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
