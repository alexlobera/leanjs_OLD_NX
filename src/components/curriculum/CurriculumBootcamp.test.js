import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import CurriculumBootcamp from './CurriculumBootcamp'

describe('<CurriculumBootcamp />', () => {
  it('should render component', () => {
    const wrapper = shallow(<CurriculumBootcamp />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
