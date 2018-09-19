import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import IntroReduxSession from './IntroReduxSession'

describe('<IntroReduxSession />', () => {
  it('should render component', () => {
    const wrapper = shallow(<IntroReduxSession />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
