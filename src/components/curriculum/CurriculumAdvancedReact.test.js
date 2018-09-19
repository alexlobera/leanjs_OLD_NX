import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import CurriculumAdvancedReact from './CurriculumAdvancedReact'

describe('<CurriculumAdvancedReact />', () => {
  it('should render component', () => {
    const wrapper = shallow(<CurriculumAdvancedReact />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
