import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import ServerSideRenderingSession from './ServerSideRenderingSession'

describe('<ServerSideRenderingSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<ServerSideRenderingSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
