import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import TestingIntroSession from './TestingIntroSession'

describe('<TestingIntroSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<TestingIntroSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
