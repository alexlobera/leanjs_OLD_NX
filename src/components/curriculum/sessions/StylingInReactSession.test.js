import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import StylingInReactSession from './StylingInReactSession'

describe('<StylingInReactSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<StylingInReactSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
