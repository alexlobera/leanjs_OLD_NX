import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import FullCurriculum from './FullCurriculum'

describe('<FullCurriculum />', () => {
  it('should render component', () => {
    const wrapper = shallow(<FullCurriculum />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
