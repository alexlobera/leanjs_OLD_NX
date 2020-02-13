import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import CurriculumReactBootcamp from './CurriculumReactBootcamp'

describe('<CurriculumReactBootcamp />', () => {
  it('should render component', () => {
    const wrapper = shallow(<CurriculumReactBootcamp />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
