import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import CurriculumCard from './CurriculumCard'

describe('<CurriculumCard />', () => {
  it('should render component', () => {
    const wrapper = shallow(<CurriculumCard />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
