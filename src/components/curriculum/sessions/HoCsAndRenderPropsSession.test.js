import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import HoCsAndRenderPropsSession from './HoCsAndRenderPropsSession'

describe('<HoCsAndRenderPropsSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<HoCsAndRenderPropsSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
