import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import IntroReactSession from './IntroReactSession'

describe('<IntroReactSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<IntroReactSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
