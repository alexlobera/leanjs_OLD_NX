import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import TestingInReactSession from './TestingInReactSession'

describe('<TestingInReactSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<TestingInReactSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
